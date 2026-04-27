import "./ReportViewPage.css"

import { Link, useParams } from "react-router"
import { useState, useEffect } from "react"

import ContainerHeader from "../../components/ItemsContainer/ContainerHeader/ContainerHeader"
import LinkButton from "../../components/LinkButton/LinkButton"
import ReportViewer from "../../components/ReportViewer/ReportViewer"

const ReportViewPage = ({getRep}) => {
    const {id} = useParams()

    const [report, setReport] = useState(null)

    useEffect(() => {
            const getReport = async () => {
                if(id != null) {
                    const foundReport = await getRep(id)
                    console.log(foundReport)
                    setReport(foundReport)
                }
            }
            getReport()
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