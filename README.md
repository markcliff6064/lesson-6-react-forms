# Lesson 6 — React Forms and Tailwind CSS

A small beginner-friendly React project for demonstrating how forms work.

Students can:
- Type a name.
- Select a course.
- See React state update while they type.
- Submit the form.
- See a simple validation message if a field is missing.
- See a success message when both fields are filled.
- Observe Tailwind CSS utility classes in the interface.

> This is a front-end classroom demonstration. It does not send data to a server or save registrations permanently.

## 1. What you need

Install:
- **Node.js** (use Node.js 22.12 or later, or Node.js 20.19 or later).
- **Visual Studio Code** or another code editor.
- A modern web browser, such as Chrome or Firefox.

Check that Node.js and npm are installed:

```bash
node -v
npm -v
```

If either command is not recognised, install Node.js and reopen your terminal.

## 2. Extract and open the ZIP file

1. Download `lesson-6-react-forms.zip`.
2. Extract/unzip it to a folder you can easily find, such as `Documents`.
3. Open Visual Studio Code.
4. Select **File → Open Folder**.
5. Choose the extracted folder named `lesson-6-react-forms`.
6. Open the VS Code terminal using **Terminal → New Terminal**.

Important: open the folder that contains `package.json`, not just the `src` folder.

## 3. Install the project packages

In the VS Code terminal, run:

```bash
npm install
```

This reads `package.json` and downloads React, Vite, Tailwind CSS, and the required plugins into a `node_modules` folder.

You only need to run `npm install` the first time after extracting the project (or whenever its dependencies change).

## 4. Start the application

Run:

```bash
npm run dev
```

Vite will show a local address in the terminal. It is usually:

```text
http://localhost:5173/
```

Hold `Ctrl` and click the address, or copy it into your browser.

Keep the terminal running while teaching. To stop the development server, return to the terminal and press:

```text
Ctrl + C
```

## 5. How to demonstrate it in class

### Step A — Show the form

Point out the name input, course dropdown, and Register button.

Ask students: "What information do you think the form needs to remember?"

### Step B — Demonstrate React state

In `src/App.jsx`, find:

```jsx
const [name, setName] = useState("");
const [course, setCourse] = useState("");
```

Explain:
- `name` and `course` are the current values.
- `setName` and `setCourse` update those values.
- `useState("")` starts each value as an empty string.

Type into the form and point to the **What React remembers** panel. It updates as the student types.

### Step C — Explain controlled inputs

Find the name input:

```jsx
<input
  value={name}
  onChange={(event) => {
    setName(event.target.value);
    clearMessage();
  }}
/>
```

Explain:
- `value={name}` connects the input to React state.
- `onChange` runs when the input changes.
- `event.target.value` reads the text typed by the user.
- `setName(...)` updates React state.

The course dropdown uses the same idea.

### Step D — Explain form submission

Find:

```jsx
<form onSubmit={handleSubmit}>
```

Then find the `handleSubmit` function.

Explain that:
- `onSubmit` calls the function when the form is submitted.
- `event.preventDefault()` prevents the browser's normal form refresh.
- The `if` statement checks whether required information is missing.
- `setMessage(...)` updates the message displayed on the page.

### Step E — Explain Tailwind CSS

Ask students to find this button:

```jsx
className="w-full rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white"
```

Discuss a few classes:
- `w-full`: use the full available width.
- `bg-blue-700`: blue background.
- `px-5`: horizontal padding.
- `py-3`: vertical padding.
- `font-semibold`: semi-bold text.
- `text-white`: white text.
- `rounded-lg`: rounded corners.

Tailwind is already installed and configured. Students do not need to install it separately.

## 6. Project file guide

```text
lesson-6-react-forms/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── LESSON-6-TEACHER-GUIDE.md
├── STUDENT-EXERCISE.md
└── src/
    ├── App.jsx
    ├── index.css
    └── main.jsx
```

| File | What it does |
|---|---|
| `index.html` | The HTML page Vite opens. |
| `package.json` | Lists project packages and commands. |
| `vite.config.js` | Configures Vite, React, and Tailwind. |
| `src/main.jsx` | Starts the React application. |
| `src/App.jsx` | Contains the registration form and lesson demonstration. |
| `src/index.css` | Loads Tailwind CSS and basic page styles. |
| `LESSON-6-TEACHER-GUIDE.md` | Suggested classroom explanation and teaching sequence. |
| `STUDENT-EXERCISE.md` | Follow-up exercise for students. |

## 7. Useful commands

```bash
npm install       # Install packages
npm run dev       # Run the development server
npm run build     # Create a production build
npm run preview   # Preview the production build locally
```

## 8. Common problems

### `npm` is not recognised

Node.js may not be installed, or the terminal may not have refreshed after installation. Install Node.js and restart VS Code.

### Cannot find `package.json`

The terminal is probably in the wrong folder. Use `cd` to enter the extracted `lesson-6-react-forms` folder.

### The browser says the page cannot be reached

Check that `npm run dev` is still running. Use the exact local URL shown in the terminal.

### Tailwind classes are not appearing

Check that:
1. `vite.config.js` includes `tailwindcss()` from `@tailwindcss/vite`.
2. `src/index.css` contains `@import "tailwindcss";`.
3. `src/main.jsx` imports `./index.css`.
4. You started the app with `npm run dev`.

### I changed the code but do not see the change

Save the file. Vite normally refreshes the page automatically. If necessary, refresh the browser.

## 9. Important teaching note

The success message is only a browser-side demonstration. No database, API, email, or permanent registration storage is connected. A later lesson can introduce a backend API and database.
