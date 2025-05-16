import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import AuthScreen from "./Pages/AuthScreen";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthScreen />} />
       
      </Routes>
    </Router>
  );
}

export default App;