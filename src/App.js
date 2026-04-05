import { Route, Routes } from "react-router";
import "./App.css"

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage";
import DocumentsPage from "./pages/DocumentsPage/DocumentsPage";
import ReportsPage from "./pages/ReportsPage/ReportsPage";
import DocumentFormPage from "./pages/DocumentFormPage/DocumentFormPage";

function App() {
  const docs = [  
    {id: 1, title: "Документ 1", authors: ["Автор1", "Автор2"], createdDate:"21.03.2026", hasFile: true},
    {id: 2, title: "Документ 2", authors: ["Автор1", "Автор2"], createdDate:"21.03.2026", hasFile: false},
    {id: 3, title: "Документ 3", authors: ["Автор1", "Автор2", "Автор3"], createdDate:"21.03.2026", hasFile: false},
    {id: 4, title: "Документ 4", authors: ["Автор1"], createdDate:"21.03.2026", hasFile: false},
    {id: 5, title: "Документ 5", authors: ["Автор1"], createdDate:"22.03.2026", hasFile: false},
  ]
  const reports = [
    {id: 1, title: "Отчёт 1", createdDate:"21.03.2026"},
    {id: 2, title: "Отчёт 2", createdDate:"21.03.2026"},
    {id: 3, title: "Отчёт 3", createdDate:"21.03.2026"},
  ]

  return (
    <div className="App">
      <div className="appContainer">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/profile" element={<ProfilePage />}/>
          <Route path="/docs" element={<DocumentsPage docs={docs}/>}/>
          <Route path="/reports" element={<ReportsPage reports={reports}/>}/>
          <Route path="/create-doc" element={<DocumentFormPage formTitle="Добавить документ"/>}/>
          <Route path="/update-doc" element={<DocumentFormPage formTitle={"Редактировать документ"}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
