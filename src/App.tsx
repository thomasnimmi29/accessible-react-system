import { Button } from "./components/Button";
import { Input } from "./components/Input";

function App() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Accessible React System</h1>

      <p>Reusable React components with accessibility-first defaults.</p>
      <section style={{ marginTop: "3rem" }}>
        <h2>Buttons</h2>
        <div style={{ display: "flex", gap: "1rem"}}>
          <Button>Primary</Button>

          <Button variant="secondary">Secondary</Button>

          <Button variant="danger">Danger</Button>

          <Button disabled>Disabled</Button>
        </div>
      </section>
      <section style={{ marginTop: "3rem" }}>
        <h2>Inputs</h2>

        <div style={{ display: "flex", gap: "1rem"}}>
          <Input
            id="name"
            label="Full name"
            helperText="Enter your first and last name."
          />

          <Input id="email" label="Email address" type="email" required />

          <Input id="username" label="Username" error="Username is required." />
        </div>
      </section>
    </main>
  );
}

export default App;
