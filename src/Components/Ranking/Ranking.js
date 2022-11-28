import CardRanking from "../Items/CardRanking";
import SeparatorRanking from "../Items/SeparatorRanking";
import SeparatorHeader from "../Items/SeparatorHeader";

const Ranking = () =>(
    <main>
        <div className="ranking">
        <section className="ranking-teams">
            <div className="row-cards">
                <div className="cards">
                    <CardRanking />
                    <div className="info-ranking">
                        <div className="header-ranking">
                            <span className="title-group">
                                Group A
                            </span>
                            <span className="details-ranking">
                                <span>P</span>
                                <span>W</span>
                                <span>D</span>
                                <span>L</span>
                                <span>PTS</span>
                            </span>
                        </div>
                        <span className="separator-header">
                            <SeparatorHeader />
                        </span>
                        <div className="body-ranking">

                        </div>
                    </div>
                </div>
                <div className="separator-ranking">
                    <SeparatorRanking />
                </div>
            </div>
        </section>
        <section className="ranking-scorers">

        </section>
        </div>
    </main>
)

export default Ranking