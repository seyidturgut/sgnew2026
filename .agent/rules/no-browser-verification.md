---
description: Rule to prevent the assistant from using browser verification tools unless explicitly requested.
---

# No Browser Verification Rule

To optimize workflow and respect user preferences, the assistant MUST follow these rules regarding browser tools:

1. **Explicit Request Only**: The assistant should NOT use `browser_subagent`, `read_browser_page`, or any other browser-based verification tool unless the user explicitly requests a visual check or browser-based action.
2. **Trust Code and FS**: The assistant should rely on code analysis, local file content, and terminal output for verification.
3. **Avoid Redundant Checks**: Do not perform visual "checks" to confirm styling or layout unless there is a specific UI bug reported by the user that requires visual debugging.
4. **Efficiency**: Prioritize direct code edits and immediate feedback over long-running browser subagent tasks.
