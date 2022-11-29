import { useState } from "react";
import Card from "../Items/Card";
import SeparatorGroups from "../Items/SeparatorGroups"

const Ranking = () => {
    const [scorers,setScorers] = useState(false);
    return (
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
        <button className="btn-modal" aria-label="" onClick={() => {
            setScorers(true);
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="60.509" height="60.642" viewBox="0 0 60.509 60.642">
                <g id="Group_4537" data-name="Group 4537" transform="translate(-1.741 -1.679)">
                    <g id="_09-Goal" data-name="09-Goal">
                    <path id="Path_7104" data-name="Path 7104" d="M26.89,44.24a88.413,88.413,0,0,0-8.98,2.12C14.46,57.19,7.92,61.6,7.55,61.84a1,1,0,0,1-1.1-1.68c.08-.05,5.68-3.85,9.05-13.05A97.989,97.989,0,0,0,3.43,51.9.965.965,0,0,1,3,52a1,1,0,0,1-.43-1.9,99.01,99.01,0,0,1,13.7-5.32A44.527,44.527,0,0,0,17.98,33H3a1,1,0,0,1,0-2H17.98a44.606,44.606,0,0,0-1.64-11.5A76.737,76.737,0,0,1,2.53,13.88a1,1,0,0,1,.94-1.76A75.674,75.674,0,0,0,15.6,17.18C12.24,7.77,6.53,3.89,6.45,3.84a1,1,0,1,1,1.1-1.68c.37.25,7.02,4.72,10.44,15.75a79.946,79.946,0,0,0,8.79,1.96,1,1,0,0,1-.16,1.99.86.86,0,0,1-.16-.01c-2.66-.44-5.28-1.02-7.84-1.71A48.38,48.38,0,0,1,19.98,31H23a1,1,0,0,1,0,2H19.98a47.8,47.8,0,0,1-1.42,11.11c2.66-.74,5.32-1.36,7.97-1.83a1,1,0,1,1,.36,1.96ZM44.73,10.69A78.884,78.884,0,0,1,21.51,2.14a1,1,0,1,0-1.02,1.72,65.885,65.885,0,0,0,9.87,4.68,24.782,24.782,0,0,1,3.08,6.38,1.006,1.006,0,0,0,.95.68,1.127,1.127,0,0,0,.32-.05,1,1,0,0,0,.63-1.27,32.32,32.32,0,0,0-1.99-4.66,99.411,99.411,0,0,0,10.96,3.03,19.777,19.777,0,0,1,0,38.7,99.411,99.411,0,0,0-10.96,3.03,32.32,32.32,0,0,0,1.99-4.66,1,1,0,1,0-1.9-.64,24.782,24.782,0,0,1-3.08,6.38,65.885,65.885,0,0,0-9.87,4.68A1,1,0,0,0,21,62a.959.959,0,0,0,.51-.14,78.884,78.884,0,0,1,23.22-8.55,21.783,21.783,0,0,0,0-42.62ZM26,32A16,16,0,1,1,42,48,16,16,0,0,1,26,32Zm25.34-1.98-2.83.92-1.83,5.87,1.7,2.28h5.67a13.862,13.862,0,0,0,1.88-5.73ZM43,25.49l4.88,3.55,2.84-.92,1.75-5.39a14.146,14.146,0,0,0-4.88-3.56L43,22.51ZM38.93,38l-1.7,2.27,1.75,5.39a13.582,13.582,0,0,0,6.04,0l1.75-5.39L45.07,38Zm-7.4-15.27,1.75,5.39,2.84.92L41,25.49V22.51l-4.59-3.34a14.146,14.146,0,0,0-4.88,3.56ZM28.07,33.36a13.862,13.862,0,0,0,1.88,5.73h5.67l1.7-2.28-1.83-5.87-2.83-.92Z" fill="#eeeee4" stroke="#eeeee4" stroke-width="0.5"/>
                    </g>
                </g>
            </svg>
        </button>
        <section className="ranking-scorers">
            hello
        </section>
        <section className="ranking-scorers-modal">
            {
                (scorers)?(
                    <button onClick={() => {
                        setScorers(false);
                    }}>hide</button>
                ):null
            }
        </section>
        </div>
    </main>
    )
}

export default Ranking