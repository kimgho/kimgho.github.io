import fs from "fs";
import matter from "gray-matter";
import path from "path";

const POSTS_DIR = path.join(process.cwd(), "content/posts");
const VSCODE_DIR = path.join(process.cwd(), ".vscode");
const FRONTMATTER_PATH = path.join(VSCODE_DIR, "frontmatter.json");
const SNIPPETS_PATH = path.join(VSCODE_DIR, "blog.code-snippets");

const files = fs.readdirSync(POSTS_DIR).filter((file) => file.endsWith(".mdx"));
const tags = new Set();

files.forEach((file) => {
  const content = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
  const { data } = matter(content);
  if (data.tag) {
    if (Array.isArray(data.tag)) {
      data.tag.forEach((t) => tags.add(t));
    } else if (typeof data.tag === "string") {
      tags.add(data.tag);
    }
  }
});

const sortedTags = Array.from(tags).sort();
console.log("Found tags:", sortedTags);

if (fs.existsSync(FRONTMATTER_PATH)) {
  const frontmatterConfig = JSON.parse(fs.readFileSync(FRONTMATTER_PATH, "utf-8"));

  try {
    const tagProp = frontmatterConfig.properties.tag;
    if (tagProp && tagProp.items && tagProp.items.anyOf) {
      const enumObj = tagProp.items.anyOf.find((item) => item.enum);
      if (enumObj) {
        enumObj.enum = sortedTags;
        fs.writeFileSync(FRONTMATTER_PATH, JSON.stringify(frontmatterConfig, null, 2));
        console.log("Updated frontmatter.json");
      }
    }
  } catch (e) {
    console.error("Error updating frontmatter.json:", e);
  }
}

if (fs.existsSync(SNIPPETS_PATH)) {
  const snippets = JSON.parse(fs.readFileSync(SNIPPETS_PATH, "utf-8"));
  const tagString = sortedTags.join(",");

  if (snippets["Blog Post Frontmatter"]) {
    snippets["Blog Post Frontmatter"].body = snippets["Blog Post Frontmatter"].body.map((line) => {
      if (line.trim().startsWith("tag:")) {
        const match = line.match(/\$\{(\d+)\|/);
        const index = match ? match[1] : "3";
        return `tag: ["\${${index}|${tagString}|}"]`;
      }
      return line;
    });
  }

  if (snippets["Blog Tag Property"]) {
    snippets["Blog Tag Property"].body = snippets["Blog Tag Property"].body.map((line) => {
      if (line.trim().startsWith("tag:")) {
        const match = line.match(/\$\{(\d+)\|/);
        const index = match ? match[1] : "1";
        return `tag: ["\${${index}|${tagString}|}"]`;
      }
      return line;
    });
  }

  fs.writeFileSync(SNIPPETS_PATH, JSON.stringify(snippets, null, 2));
  console.log("Updated blog.code-snippets");
}
