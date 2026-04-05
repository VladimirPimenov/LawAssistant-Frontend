import { Route, Routes } from "react-router";
import "./App.css"

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage";
import DocumentsPage from "./pages/DocumentsPage/DocumentsPage";
import ReportsPage from "./pages/ReportsPage/ReportsPage";
import DocumentFormPage from "./pages/DocumentFormPage/DocumentFormPage";
import { useState } from "react";

function App() {
  const [docs, setDocs] = useState([  
    {id: 1, title: "Документ 1", authors: [{id: 1, name:"Автор1"}, {id: 2, name:"Автор2"}], createdDate:"21.03.2026", hasFile: false},
    {id: 2, title: "Документ 2", authors: [{id: 1, name:"Автор1"}, {id: 2, name:"Автор2"}], createdDate:"21.03.2026", hasFile: false},
    {id: 3, title: "Документ 3", authors: [{id: 1, name:"Автор1"}, {id: 2, name:"Автор2"}, {id: 3, name:"Автор3"}], createdDate:"21.03.2026", hasFile: false},
    {id: 4, title: "Документ 4", authors: [{id: 1, name:"Автор1"}], createdDate:"21.03.2026", hasFile: false},
    {id: 5, title: "Документ 5", authors: [{id: 1, name:"Автор1"}], createdDate:"22.03.2026", hasFile: false},
  ])
  const reports = [
    {id: 1, title: "Отчёт 1", createdDate:"21.03.2026"},
    {id: 2, title: "Отчёт 2", createdDate:"21.03.2026"},
    {id: 3, title: "Отчёт 3", createdDate:"21.03.2026"},
  ]

  const getDocument = (id) => {
    return docs.filter(doc => doc.id == id)[0]
  }

  const addDocument = (newDoc) => {
    setDocs([...docs, newDoc])
  }

  const editDocument = (updatedDoc) => {
    setDocs(docs.map(doc => 
      doc.id == updatedDoc.id ? updatedDoc : doc
    ))
  }

  const removeDocument = (docId) => {
    setDocs(docs.filter(doc => doc.id != docId))
    console.log(docId)
  }

  return (
    <div className="App">
      <div className="appContainer">
        <Navbar />
        
        <Routes>
          <Route 
            path="/" 
            element={<HomePage />}
          />
          <Route 
            path="/profile" 
            element={<ProfilePage />}
          />
          <Route 
            path="/docs" 
            element={<DocumentsPage docs={docs} onRemoveDoc={removeDocument}/>}
          />
          <Route 
            path="/reports" 
            element={<ReportsPage reports={reports}/>}
          />
          <Route 
            path="/docs/create-doc" 
            element={<DocumentFormPage 
              onAddDocument={addDocument} 
              formTitle="Добавить документ"/>}
              />
          <Route 
            path="/docs/update-doc/:id" 
            element={<DocumentFormPage 
              getDocument={getDocument}
              onEditDocument={editDocument}
              formTitle={"Редактировать документ"}/>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
