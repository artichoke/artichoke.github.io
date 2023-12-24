import { Buffer } from "node:buffer";

import { defineConfig } from "vite";

import minifyHtml from "@minify-html/node";

const minifyHtmlPlugin = () => {
  return {
    name: "minify-html-transform",
    apply: "build",
    transformIndexHtml: {
      order: "post",
      handler(html) {
        const input = Buffer.from(html);

        const output = minifyHtml.minify(input, {
          ensure_spec_compliant_unquoted_attribute_values: true,
          keep_html_and_head_opening_tags: true,
          keep_closing_tags: true,
          minify_js: true,
          minify_css: true,
          remove_bangs: false,
        });

        return output.toString();
      },
    },
  };
};

export default defineConfig({
  plugins: [minifyHtmlPlugin()],
  server: {
    port: 5555,
    hot: true,
  },
});
