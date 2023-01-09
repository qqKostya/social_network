import { createRoot } from "react-dom/client";
import App from "./App";

test("renders without crashing", () => {
  const container = document.createElement("div");
  const root = createRoot(container);
  root.render(<App tab="home" />);
  root.unmount();
});
