const { Plugin, Style } = require("@opencode/plugin/gui");

const flat = '[data-component="new-session-wordmark"] [data-slot="wordmark-flat"]';

exports.default = Plugin.define({
  setup(ctx) {
    ctx.add(Style, `
      ${flat} { container-type: inline-size; }
      ${flat} > svg { visibility: hidden; }
      ${flat}::after {
        content: "zalupAI";
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        font: 750 16cqi/1 ui-monospace, Consolas, monospace;
        letter-spacing: -0.04em;
        color: var(--v2-text-text-muted, currentColor);
        pointer-events: none;
      }
    `);
  },
});
