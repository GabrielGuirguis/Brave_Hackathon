# Workspace .cursor Directory

This directory contains configuration files for the Cursor IDE that apply to the entire Brave Hackathon workspace. These files enhance your development experience by customizing the editor behavior, providing code snippets, and defining AI prompts.

## Files and Their Purpose

### settings.json
Contains Cursor IDE settings specific to this workspace. These settings override your global Cursor settings when working in any project within this workspace.

### snippets.json
Defines code snippets that you can quickly insert while coding. Snippets are organized by technology/purpose:
- Frontend (React/Next.js) snippets
- General-purpose snippets

Type the prefix and press Tab to insert the snippet.

### ai_prompts.json
Contains customized prompts for the AI assistant, organized by:
- Frontend-specific prompts
- General-purpose prompts

Use the defined shortcuts to quickly invoke these prompts.

## Per-Project Overrides

You can create additional `.cursor` directories in specific project subdirectories to override these workspace settings. For example:

- `/Brave_Hackathon/.cursor/` - Workspace-level settings (this directory)
- `/Brave_Hackathon/frontend/.cursor/` - Frontend-specific overrides
- `/Brave_Hackathon/backend/.cursor/` - Backend-specific overrides

## How to Customize

You can modify any of these files to suit your workflow:

1. **Add new settings** to `settings.json` to configure editor behavior
2. **Create custom snippets** in `snippets.json` for code patterns you use frequently
3. **Define project-specific AI prompts** in `ai_prompts.json` that are relevant to your codebase

## Additional Files You Can Add

You can also add these files to further customize your Cursor experience:

- `.cursor/tasks.json`: Define custom tasks that can be run from within Cursor
- `.cursor/extensions.json`: Recommend extensions for this project
- `.cursor/launch.json`: Configure debugging settings
- `.cursor/keybindings.json`: Add custom keyboard shortcuts specific to this project

## Tips for Using Cursor IDE

- Press `Ctrl+I` (or `Cmd+I` on Mac) to interact with Cursor AI
- Use `Alt+[` and `Alt+]` to navigate through your code history
- Press `F1` to open the command palette 