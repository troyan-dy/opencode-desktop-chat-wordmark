# opencode-desktop-chat-wordmark

## Установка через агента

Скопируйте в чат агента:

```text
Установи https://github.com/troyan-dy/opencode-desktop-chat-wordmark для OpenCode Desktop по инструкции в README. Подключи плагин глобально, сохрани текущие настройки и не дублируй запись, если он уже подключён.
```

Из терминала ту же задачу можно передать агенту OpenCode:

```sh
opencode run "Установи https://github.com/troyan-dy/opencode-desktop-chat-wordmark для OpenCode Desktop по инструкции в README. Подключи плагин глобально, сохрани текущие настройки и не дублируй запись, если он уже подключён."
```

---

Custom wordmark on the new-session screen in OpenCode Desktop.

From your global OpenCode configuration directory (normally `~/.config/opencode`):

```sh
git clone https://github.com/troyan-dy/opencode-desktop-chat-wordmark.git local-themes/chat-wordmark
```

Add `"./local-themes/chat-wordmark"` to the `plugins` array in the global `opencode.jsonc`.
