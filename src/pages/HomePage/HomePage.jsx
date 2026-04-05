import HomePageCard from "../../components/HomePageCard/HomePageCard"
import "./HomePage.css"

import searchIcon from "../../assets/icons/homepage/search-image.png"
import reportIcon from "../../assets/icons/homepage/report-image.png"
import articlesIcon from "../../assets/icons/homepage/articles-image.png"

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Сервис анализа коллективных договоров LawAssistant</h1>
            
            <div className="home-cards-container">
                <HomePageCard title="Двухуровневый анализ" image={searchIcon}>
                    Загруженный коллективный договор проходит две стадии анализа: синтаксическую и  семантическую.<br/>
                    Две ступени позволяют добиться наилучших 
                    результатов сопоставления.
                </HomePageCard>
                <HomePageCard title="Вывод найденных статей" image={articlesIcon}>
                    Сервис в графических виджетах автоматически отобразит для каждого фрагмента договора найденные статьи.
                </HomePageCard>
                <HomePageCard title="Загрузка готовых отчётов" image={reportIcon}>
                    По результатам выполненного сопоставления система сама формирует отчёт.<br/>
                    Готовый отчёт можно загрузить в виде файла документа.
                </HomePageCard>
            </div>
        </div>
    )
}

export default HomePage