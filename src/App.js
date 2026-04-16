import "./App.css"

import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import DocumentsPage from "./pages/DocumentsPage/DocumentsPage";
import ReportsPage from "./pages/ReportsPage/ReportsPage";
import DocumentFormPage from "./pages/DocumentFormPage/DocumentFormPage";

import { getContract, getLawyerContracts } from "./services/contract";

function App() {
  const [docs, setDocs] = useState([])
  const [lawyers, setLawyers] = useState([])

  const reports = [
    {id: 1, title: "Отчёт 1", createdDate:"21.03.2026"},
    {id: 2, title: "Отчёт 2", createdDate:"21.03.2026"},
    {id: 3, title: "Отчёт 3", createdDate:"21.03.2026"},
  ]

  const testLawyer = {lawyerId: 5, firstName: "Владимир", lastName: "Пименов", email: "pimenov@gmail.com"}

  useEffect(() => {
    const fetchContracts = async() => {
      let contracts = await getLawyerContracts(testLawyer.lawyerId)
      setDocs(contracts)
    }
    fetchContracts()
  }, [])

  const getDocument = async (id) => {
    const contract = await getContract(id)
    return contract
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
              lawyer={testLawyer}
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
