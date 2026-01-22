# jotref

**jotref** is a terminal-based CLI for quickly saving, listing, editing, and copying short notes or references.

## Installation & Usage (npm / Yarn)

### Global Install (Recommended)

## npm
`npm install -g jotref`

## yarn
`yarn global add jotref`

Run the CLI:

`jotref`

---

### Local Install

## npm
`npm install jotref`

## yarn
`yarn add jotref`

Run the CLI:

## npm
`npx jotref`

## yarn
`yarn jotref`

---

## Main Menu

1. Add new
2. List all
3. Edit saved

Press `Esc` at any time to exit.

---

## Add a Reference

1. Press `1`
2. Type your note or reference
3. Press `Enter` to save

The reference is stored locally and available immediately.

---

## List & Copy References

1. Press `2` to view saved references
2. Type the number of a reference
3. Press `Enter`

The selected reference is copied to your clipboard and the app exits.

---

## Edit Saved References

1. Press `3` from the main menu
2. Select a reference to edit
   (editing behavior depends on `AlterListView`)

---

## Keyboard Controls

### Global
- `Esc` — Exit the application

### Menu
- `1` — Add new reference
- `2` — List all references
- `3` — Edit saved references

### List View
- `1..n` — Select reference
- `Enter` — Copy selected reference
- `Backspace` / `Delete` — Return to menu

---

## Clipboard

Selected references are automatically copied to your system clipboard.
