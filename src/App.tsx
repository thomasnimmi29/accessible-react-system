import { Button } from "./components/Button";

function App() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Accessible React System</h1>

      <p>
        Reusable React components with accessibility-first defaults.
      </p>

      <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
        <Button>Primary</Button>

        <Button variant="secondary">
          Secondary
        </Button>

        <Button variant="danger">
          Danger
        </Button>

        <Button disabled>
          Disabled
        </Button>
      </div>
    </main>
  );
}

export default App;