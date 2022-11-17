import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationScreen from "./Components/NavigationScreen";
import HomePage from "./Components/Pages/HomePage";
import SearchPage from "./Components/Pages/SearchPage";
import YourLibrary from "./Components/Pages/YourLibrary";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          position: "fixed",
          zIndex: "1",
          width: "100%",
        }}
      >
        <NavigationScreen />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/library" element={<YourLibrary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
