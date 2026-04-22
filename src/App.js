import "./App.css"

import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";

import { createContract, getContract, getLawyerContracts, removeContract, updateContract, getContractFile } from "./services/contract";
import { getLawyersList } from "./services/lawyer";
import { getLawyerReports, removeReport, createReport, getReport } from "./services/report";

import Navbar from "./components/Navbar/Navbar";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import DocumentsPage from "./pages/DocumentsPage/DocumentsPage";
import ReportsPage from "./pages/ReportsPage/ReportsPage";
import DocumentFormPage from "./pages/DocumentFormPage/DocumentFormPage";
import DocumentViewPage from "./pages/DocumentViewPage/DocumentViewPage";
import ReportViewPage from "./pages/ReportViewPage/ReportViewPage";

function App() {
  const [docs, setDocs] = useState(null)
  const [lawyers, setLawyers] = useState(null)
  const [reports, setReports] = useState(null)

  const testLawyer = {lawyerId: 5, firstName: "Владимир", lastName: "Пименов", email: "pimenov@gmail.com"}

  const fetchContracts = async() => {
      let contracts = await getLawyerContracts(testLawyer.lawyerId)
      setDocs(contracts)
  }

  const fetchLawyers = async() => {
    let lawyers = await getLawyersList()
    setLawyers(lawyers)
  }

  const fetchReports = async() => {
    let reports = await getLawyerReports(testLawyer.lawyerId)
    setReports(reports)
  }

  useEffect(() => {
    fetchContracts()
    fetchLawyers()
    fetchReports()
  }, [])

  const getDocument = async (id) => {
    const doc = await getContract(id)
    return doc
  }

  const getDocumentFile = async (id) => {
    const docFile = await getContractFile(id)
    return docFile
  }

  const addDocument = async (newContract) => {
    const createdContract = await createContract(newContract)
    fetchContracts()
  }

  const editDocument = async (updatedDoc) => {
    const updatedContract = await updateContract(updatedDoc)
    fetchContracts()

    return updatedContract
  }

  const removeDocument = async (docId) => {
    const removedContractId = await removeContract(docId)
    fetchContracts()
  }

  const getRep = async (reportId) => {
    const report = await getReport(reportId)
    return report
  }

  const createRep = async (contractId) => {
    const report = await createReport(contractId)
    fetchReports()
  }

  const removeRep = async (reportId) => {
    const removedReportId = await removeReport(reportId)
    fetchReports()
  }


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
            element={<DocumentsPage 
              docs={docs} 
              onRemoveDoc={removeDocument}
              onCreateReport={createRep}/>}
          />
          <Route 
            path="/reports" 
            element={<ReportsPage 
              reports={reports}
              onRemoveReport={removeRep}/>}
          />
          <Route 
            path="/docs/create-doc" 
            element={<DocumentFormPage 
              lawyers={lawyers}
              formTitle="Добавить документ"
              onAddDoc={addDocument}/>}
              />
          <Route 
            path="/docs/update-doc/:id" 
            element={<DocumentFormPage 
              formTitle={"Редактировать документ"}
              lawyers={lawyers}
              getDoc={getDocument}
              getDocFile={getDocumentFile}
              onEditDoc={editDocument}/>}
          />
          <Route
            path="docs/:id"
            element={<DocumentViewPage 
              getDoc={getDocument}
              getDocFile={getDocumentFile}/>}
          />
          <Route
            path="reports/:id"
            element={<ReportViewPage 
              getRep={getRep}/>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
