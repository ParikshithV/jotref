# jotref

**jotref** is a CLI tool built with **React Ink** for quickly saving, listing, and copying short notes or references from your terminal.

---

## 📦 Installation

Make sure you have **Node.js ≥ 16** installed.

### Install Globally (Recommended)

```bash
npm install -g jotref

Once installed globally, the CLI will be available as:

jotref

Install Locally (Development / Testing)

npm install jotref

Run it using:

npx jotref

Install From GitHub (Latest Source)

git clone https://github.com/ParikshithV/jotref.git
cd jotref
npm install
npm run build
npm link

Then run:

jotref

▶️ Usage

Launch the CLI by running:

jotref

You will be presented with an interactive terminal UI.
🧭 Main Menu

1. Add new
2. List all
3. Edit saved

Press Esc to close the application.
➕ Add a New Reference

    Press 1

    Type your note/reference

    Press Enter to save

The note is stored locally and becomes immediately available in the list.
📋 List & Copy References

    Press 2 to view all saved references

    Type the number corresponding to the reference

    Press Enter to copy it to your clipboard

Once copied, the app exits automatically.
✏️ Edit Saved References

    Press 3 from the main menu

    Select an item to edit
    (behavior depends on AlterListView)

🚪 Exit the Application

Press Esc at any time to exit cleanly.
⌨️ Keyboard Controls
Global
Key	Action
Esc	Exit CLI
Menu
Key	Action
1	Add a new reference
2	List all references
3	Edit saved references
List View
Key	Action
1..n	Select reference
Enter	Copy selected reference
Backspace / Delete	Return to menu
📎 Clipboard Support

jotref automatically copies selected references to your system clipboard using clipboardy.

No additional setup is required.
🛠 Development
Build

npm run build

Compiles TypeScript into the dist/ directory.
Watch Mode (Development)

npm run dev

Runs the TypeScript compiler in watch mode.
Build & Run

npm run buildrun

Builds the project and immediately runs the CLI.
🔗 Binary Mapping

The CLI command is registered via:

"bin": {
  "jotref": "dist/cli.js"
}

This means:

    jotref → executable command

    dist/cli.js → entry point

📄 License

MIT © Parikshith V
