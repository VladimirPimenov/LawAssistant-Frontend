import { Route, Routes } from "react-router";
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import DocumentsPage from "./pages/DocumentsPage/DocumentsPage";
import ReportsPage from "./pages/ReportsPage/ReportsPage";

function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/profile" element={<ProfilePage />}/>
          <Route path="/docs" element={<DocumentsPage docs={docs}/>}/>
          <Route path="/reports" element={<ReportsPage reports={reports}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
