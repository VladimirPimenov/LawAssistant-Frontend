import { Route, Routes } from "react-router";
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import DocumentsPage from "./pages/DocumentsPage";
import ReportsPage from "./pages/ReportsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/docs" element={<DocumentsPage />}/>
        <Route path="/reports" element={<ReportsPage />}/>
      </Routes>
    </div>
  );
}

export default App;
