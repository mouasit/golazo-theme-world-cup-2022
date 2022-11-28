import Card from "../Items/Card";
import SeparatorGroups from "../Items/SeparatorGroups"

const Ranking = () =>(
    <main>
        <div className="ranking">
        <section className="ranking-teams">
            <div className="row-cards">
                <Card />
                <SeparatorGroups />
                <Card />
            </div>
            <div className="row-cards">
                <Card />
                <SeparatorGroups />
                <Card />
            </div>
        </section>
        <section className="ranking-scorers">

        </section>
        </div>
    </main>
)

export default Ranking