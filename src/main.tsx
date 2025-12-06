import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import IndexPage from "./pages/index.page";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IndexPage />
  </StrictMode>
);
