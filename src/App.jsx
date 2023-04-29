import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Root } from "./screens/root";
import { ScreenSignIn } from "./screens/sign-in";
import { ScreenSignUp } from "./screens/sign-up";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="signin" element={<ScreenSignIn />} />
          <Route path="signup" element={<ScreenSignUp />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
