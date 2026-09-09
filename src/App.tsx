import { useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Alert } from "./components/Alert";
import { Dialog } from "./components/Dialog";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Accessible React System</h1>
      <p>Reusable React components with accessibility-first defaults.</p>
      <section style={{ marginTop: "3rem" }}>
        <h2>Buttons</h2>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button>Primary</Button>

          <Button variant="secondary">Secondary</Button>

          <Button variant="danger">Danger</Button>

          <Button disabled>Disabled</Button>
        </div>
      </section>
      <section style={{ marginTop: "3rem" }}>
        <h2>Inputs</h2>

        <div style={{ display: "flex", gap: "1rem" }}>
          <Input
            id="name"
            label="Full name"
            helperText="Enter your first and last name."
          />

          <Input id="email" label="Email address" type="email" required />

          <Input id="username" label="Username" error="Username is required." />
        </div>
      </section>
      <section style={{ marginTop: "3rem" }}>
        <h2>Alerts</h2>

        <div
          style={{
            display: "grid",
            gap: "1rem",
            maxWidth: "36rem",
          }}
        >
          <Alert variant="info">A new application update is available.</Alert>

          <Alert variant="success">Your changes were saved successfully.</Alert>

          <Alert variant="warning">Your session will expire soon.</Alert>

          <Alert variant="error">We could not save your changes.</Alert>
        </div>
      </section>
      <section style={{ marginTop: "3rem" }}>
        <h2>Dialogs</h2>

        <div style={{ display: "flex", gap: "1rem" }}>
          <Button onClick={() => setIsDialogOpen(true)}>Open dialog</Button>
          <Dialog
            open={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            title="Delete project"
          >
            <p>This action cannot be undone.</p>

            <Button variant="danger">Delete project</Button>
          </Dialog>
        </div>
      </section>{" "}
    </main>
  );
}

export default App;
