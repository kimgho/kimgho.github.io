export const getHeadings = (source: string) => {
  const headingLines = source.split("\n").filter((line) => line.match(/^#{1,3}\s/));
  return headingLines.map((raw) => {
    const text = raw.replace(/^#{1,3}\s/, "");
    let level = 2;
    if (raw.startsWith("###")) level = 3;
    else if (raw.startsWith("##")) level = 2;
    else if (raw.startsWith("#")) level = 1;

    const slug = text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-\u4e00-\u9fa5\u3131-\uD79D]+/g, "")
      .replace(/^-+|-+$/g, "");

    return { text, level, slug };
  });
};
