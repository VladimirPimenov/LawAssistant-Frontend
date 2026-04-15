import { Route, Routes } from "react-router";
import "./App.css"

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import DocumentsPage from "./pages/DocumentsPage/DocumentsPage";
import ReportsPage from "./pages/ReportsPage/ReportsPage";
import DocumentFormPage from "./pages/DocumentFormPage/DocumentFormPage";
import { useState } from "react";

function App() {
  const [docs, setDocs] = useState([  
    {id: 1, title: "Документ 1", authors: [{lawyerId: 1, firstName: "Владимир", lastName: "Пименов", email: "mail@gmail.com"}, {lawyerId: 2, firstName: "Иван", lastName: "Иванов", email: "ivanov@gmail.com"}], createdDate:"21.03.2026", hasFile: false},
    {id: 2, title: "Документ 2", authors: [{lawyerId: 1, firstName: "Владимир", lastName: "Пименов", email: "mail@gmail.com"}, {lawyerId: 2, firstName: "Иван", lastName: "Иванов", email: "ivanov@gmail.com"}], createdDate:"21.03.2026", hasFile: false},
    {id: 3, title: "Документ 3", authors: [{lawyerId: 1, firstName: "Владимир", lastName: "Пименов", email: "mail@gmail.com"}, {lawyerId: 2, firstName: "Иван", lastName: "Иванов", email: "ivanov@gmail.com"}, {lawyerId: 3, firstName: "Пётр", lastName: "Петров", email: "petrov@gmail.com"}], createdDate:"21.03.2026", hasFile: false},
    {id: 4, title: "Документ 4", authors: [{lawyerId: 1, firstName: "Владимир", lastName: "Пименов", email: "mail@gmail.com"}], createdDate:"21.03.2026", hasFile: false},
    {id: 5, title: "Документ 5", authors: [{lawyerId: 1, firstName: "Владимир", lastName: "Пименов", email: "mail@gmail.com"}], createdDate:"22.03.2026", hasFile: false},
  ])
  const reports = [
    {id: 1, title: "Отчёт 1", createdDate:"21.03.2026"},
    {id: 2, title: "Отчёт 2", createdDate:"21.03.2026"},
    {id: 3, title: "Отчёт 3", createdDate:"21.03.2026"},
  ]

  const lawyers = [
    {lawyerId: 1, firstName: "Владимир", lastName: "Пименов", email: "pimenov@gmail.com"},
    {lawyerId: 2, firstName: "Иван", lastName: "Иванов", email: "ivanov@gmail.com"},
    {lawyerId: 3, firstName: "Пётр", lastName: "Петров", email: "petrov@gmail.com"},
    {lawyerId: 4, firstName: "Александр", lastName: "Алексанров", email: "alexandrov@gmail.com"},
    {lawyerId: 5, firstName: "Василий", lastName: "Васильев", email: "vasiliy@gmail.com"},
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
  }

  // const editLawyer = (updatedLawyer) => {
  //   setLawyer(lawyers.map(lawyer => 
  //     lawyer.lawyerId == updatedLawyer.lawyerId ? updatedLawyer : lawyer
  //   ))
  // } 

  return (
    <div className="App">
      <Navbar />
      <div className="appContainer">
        <Routes>
          <Route 
            path="/" 
            element={<HomePage />}
          />
          <Route 
            path="/profile" 
            element={<ProfilePage 
              lawyer={lawyers[0]}
            />}
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
              lawyers={lawyers}
              formTitle="Добавить документ"
              onAddDocument={addDocument}/>}
              />
          <Route 
            path="/docs/update-doc/:id" 
            element={<DocumentFormPage 
              formTitle={"Редактировать документ"}
              lawyers={lawyers}
              getDocument={getDocument}
              onEditDocument={editDocument}/>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
