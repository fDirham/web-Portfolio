import { render } from "preact";
import { LocationProvider, Router, Route, lazy } from "preact-iso";

import Home from "./pages/Home/index.jsx";
import "./style.css";
import { NotFound } from "./pages/_404.js";

export function App() {
  return (
    <LocationProvider>
      <main>
        <Router>
          <Route path="/" component={Home} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
