import { render } from "preact";
import { LocationProvider, Router, Route, lazy } from "preact-iso";

import Home from "./pages/Home/index.jsx";
import "./style.css";
import { PageWrapper } from "./components/PageWrapper/index.js";
const About = lazy(() => import("./pages/About/index.js"));

export function App() {
  return (
    <LocationProvider>
      <main>
        <PageWrapper>
          <Router>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route default component={Home} />
          </Router>
        </PageWrapper>
      </main>
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
