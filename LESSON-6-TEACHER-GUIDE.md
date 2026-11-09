# Lesson 6 — Teacher Guide

## Lesson objective

By the end of the demonstration, students should be able to explain and use:
1. `useState`
2. Controlled form inputs (`value` and `onChange`)
3. `event.target.value`
4. Form submission with `onSubmit`
5. `event.preventDefault()`
6. Basic validation with `if`
7. Tailwind CSS utility classes

## Suggested 60-minute walkthrough

| Time | Demonstration | Teaching point |
|---|---|---|
| 0–5 min | Open the running project | Identify the form elements. |
| 5–15 min | Type in the name field | Explain state and `useState`. |
| 15–25 min | Inspect the input code | Explain `value`, `onChange`, and `event.target.value`. |
| 25–35 min | Submit an empty form | Explain validation and `if`. |
| 35–45 min | Submit a completed form | Explain `onSubmit` and `preventDefault`. |
| 45–55 min | Inspect the Tailwind classes | Explain utility-first styling. |
| 55–60 min | Ask review questions | Check understanding. |

## Explain the concepts using simple language

### 1. State

State is information a React component remembers. In this project, React remembers the name and course selected by the student.

```jsx
const [name, setName] = useState("");
```

A simple way to explain it:

- `name` is the current value.
- `setName` changes the value.
- `useState("")` creates the value and starts it as empty.

### 2. Controlled input

```jsx
<input
  value={name}
  onChange={(event) => setName(event.target.value)}
/>
```

Explain this as a two-way connection:
- React supplies the input's displayed value through `value`.
- When a user types, `onChange` reads the new value and updates state.

### 3. Form submission

```jsx
<form onSubmit={handleSubmit}>
```

This tells React which function to run when the form is submitted.

```jsx
event.preventDefault();
```

This stops the browser from doing its usual form submission behaviour, which would normally reload or navigate the page.

### 4. Validation

```jsx
if (name.trim() === "" || course === "") {
  setMessage("Please enter your name and choose a course.");
  return;
}
```

Explain:
- `if` checks a condition.
- `||` means OR.
- `trim()` removes spaces from the beginning and end of text.
- `return` stops the function from continuing.

### 5. Tailwind CSS

Tailwind classes style the page directly in JSX.

| Class | Meaning |
|---|---|
| `bg-blue-700` | Blue background |
| `text-white` | White text |
| `p-4` | Padding on all sides |
| `px-4` | Horizontal padding |
| `py-3` | Vertical padding |
| `rounded-lg` | Rounded corners |
| `shadow-lg` | Large shadow |
| `w-full` | Full available width |
| `md:grid-cols-2` | Two grid columns on medium screens and wider |

## Suggested questions to ask

1. What does `useState` help React do?
2. What does `setName` do?
3. What is the purpose of `value={name}`?
4. When does `onChange` run?
5. What information does `event.target.value` give us?
6. Why do we use `event.preventDefault()`?
7. What does `return` do inside the validation condition?
8. Which Tailwind class gives the button its blue background?

## Demonstration tip

Ask one student to enter a name while the class watches the **What React remembers** panel. Then ask another student to submit the empty form. Finally, complete the form and submit it. These three actions demonstrate state, validation, and submission without needing to explain all the code first.

## Limitation to point out

This is a front-end demonstration. It does not save student registrations. Real storage requires a backend or a suitable form service.
