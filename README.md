# opencode-desktop-chat-wordmark

Custom wordmark on the new-session screen in OpenCode Desktop.

## Install in OpenCode Desktop

From the global OpenCode configuration directory (normally `~/.config/opencode`), run:

```sh
git clone https://github.com/troyan-dy/opencode-desktop-chat-wordmark.git local-themes/chat-wordmark
```

Add the following entries to the existing `plugins` array in your global `opencode.jsonc`:

```jsonc
{
  "plugins": [
    "./local-themes/chat-wordmark"
  ]
}
```

## Usage

Open a new session to see `zalupAI` in place of the default wordmark. To change the label, edit the CSS `content` in `gui-experimental.cjs`.

This plugin uses the [experimental OpenCode Desktop GUI plugin API](https://opencode.ai/docs/build/plugins/gui).
