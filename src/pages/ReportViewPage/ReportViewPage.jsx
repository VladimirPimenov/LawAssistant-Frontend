import "./ReportViewPage.css"

import { Link, useParams } from "react-router"
import { useState, useEffect } from "react"

import { getReport } from "../../services/report"

import ContainerHeader from "../../components/ItemsContainer/ContainerHeader/ContainerHeader"
import LinkButton from "../../components/LinkButton/LinkButton"
import ReportViewer from "../../components/ReportViewer/ReportViewer"

const ReportViewPage = () => {
    const {id} = useParams()

    const [report, setReport] = useState(null)

    useEffect(() => {
            const getRep = async () => {
                if(id != null) {
                    const foundReport = await getReport(id)
                    setReport(foundReport)
                }
            }
            getRep()
        }, [id])

    return (
        <div className="report-view-page">
            <div className="page-header">
                <LinkButton ref="/reports" title="Вернуться"></LinkButton>
                <div className="report-title">Отчёт</div>
            </div>
            <ReportViewer report={report} />
        </div>
    )
}

export default ReportViewPage