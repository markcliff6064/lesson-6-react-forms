import { useState } from "react";

function App() {
  // STEP 1: Create state to remember what the student enters.
  // The empty strings mean that the form starts with blank fields.
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  // This state stores the message shown after the student clicks Register.
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  // STEP 2: This function runs when the form is submitted.
  function handleSubmit(event) {
    // Stop the browser from refreshing the page.
    event.preventDefault();

    // STEP 3: Check that the student has entered both details.
    if (name.trim() === "" || course === "") {
      setMessage("Please enter your name and choose a course.");
      setMessageType("error");
      return; // Stop here when a field is missing.
    }

    // STEP 4: Use the values stored in React state.
    setMessage(`Hello, ${name.trim()}! You registered for ${course}.`);
    setMessageType("success");
  }

  // Clear the old message when a student starts changing the form.
  function clearMessage() {
    setMessage("");
  }

  return (
    <main className="min-h-screen px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
            Lesson 6 practical
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            My First Student Registration Form
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Learn how React captures information, remembers it with state,
            and responds when a form is submitted.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {/* FORM PANEL */}
          <section className="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200/70 sm:p-8">
            <h2 className="text-xl font-bold text-slate-900">
              Student details
            </h2>

            <p className="mb-6 mt-1 text-sm text-slate-500">
              Enter a name and select a course.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="student-name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Student name
                </label>

                <input
                  id="student-name"
                  type="text"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    clearMessage();
                  }}
                  placeholder="For example, Amina"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

                <p className="mt-1 text-xs text-slate-500">
                  React stores this value in the <code>name</code> state.
                </p>
              </div>

              <div>
                <label
                  htmlFor="course"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Select a course
                </label>

                <select
                  id="course"
                  value={course}
                  onChange={(event) => {
                    setCourse(event.target.value);
                    clearMessage();
                  }}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="">Choose a course</option>
                  <option value="Software Engineering">
                    Software Engineering
                  </option>
                  <option value="Data Science">Data Science</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                </select>

                <p className="mt-1 text-xs text-slate-500">
                  React stores this selection in the <code>course</code> state.
                </p>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                Register student
              </button>
            </form>

            {message && (
              <div
                role="status"
                aria-live="polite"
                className={`mt-5 rounded-lg p-4 text-sm font-medium ${
                  messageType === "error"
                    ? "bg-red-50 text-red-700"
                    : "bg-green-50 text-green-700"
                }`}
              >
                {message}
              </div>
            )}
          </section>

          {/* LIVE STATE PANEL: makes React state visible to beginners */}
          <section className="rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
            <div className="mb-5 inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-800">
              Teaching view
            </div>

            <h2 className="text-xl font-bold text-slate-900">
              What React remembers
            </h2>

            <p className="mb-5 mt-2 text-sm leading-6 text-slate-600">
              Type in the form. The values below update as you type. This is
              React state in action.
            </p>

            <div className="space-y-3">
              <div className="rounded-lg bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  name
                </p>
                <p className="mt-1 break-words font-mono text-sm text-slate-900">
                  {name || "An empty string"}
                </p>
              </div>

              <div className="rounded-lg bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  course
                </p>
                <p className="mt-1 break-words font-mono text-sm text-slate-900">
                  {course || "An empty string"}
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-lg border border-blue-200 bg-white/70 p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                The important connection
              </p>
              <p className="text-sm leading-6 text-slate-700">
                <code>onChange</code> detects a change. The setter function
                (such as <code>setName</code>) updates state. React then
                displays the new value.
              </p>
            </div>
          </section>
        </div>

        <footer className="mt-8 text-center text-xs leading-5 text-slate-500">
          Classroom demonstration only — this project does not save
          registrations to a database.
        </footer>
      </div>
    </main>
  );
}

export default App;
