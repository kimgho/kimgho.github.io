import type { Preview } from "@storybook/nextjs-vite";

import "../app/globals.css";
import { pretendard } from "../app/layout";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
  decorators: [
    (Story) => (
      <div className={`${pretendard.variable} antialiased`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
