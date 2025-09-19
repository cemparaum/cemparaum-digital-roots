import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import reportWebVitals from './vitals';

createRoot(document.getElementById("root")!).render(<App />);

reportWebVitals(console.log);
