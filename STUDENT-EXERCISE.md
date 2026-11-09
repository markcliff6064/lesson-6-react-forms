# Student Exercise — Improve the Registration Form

## Objective

Modify the Lesson 6 registration form to collect more information.

## Tasks

1. Add an email input.
2. Add a phone number input.
3. Create React state for both new fields.
4. Connect each input using `value` and `onChange`.
5. Update the validation so the student must enter their name, email, phone number, and course.
6. Display all four details in the success message.
7. Add a new Tailwind class to change the appearance of the form.

## Hints

Create state:

```jsx
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
```

Connect the email input:

```jsx
<input
  type="email"
  value={email}
  onChange={(event) => setEmail(event.target.value)}
/>
```

Connect the phone input in the same way, using `phone` and `setPhone`.

Update the validation condition to check all required fields.

## Questions

1. Why does each input need a state value?
2. What happens when `setEmail` is called?
3. Why should `event.preventDefault()` be used in the submit handler?
4. What is one difference between React state and a normal variable?
5. Name three Tailwind classes used in this project.

## Extension challenge

Add a button that clears the name, course, and message after a successful registration. Use the state setter functions to reset the values.
