
import ActiveButton from "../Items/ActiveButton";
import BackgroundButton from "../Items/BackgournButton"

const Matches = () =>(
    <main>
        <section className="matche-program">
            <div className="list-days-week">
                <button className="active-time">
                    <ActiveButton />
                    <span>Today</span>
                </button>
                <button>
                    <BackgroundButton />
                    <span>Tomorrow</span>
                </button>
                <button>
                    <BackgroundButton />
                    <span>This Week</span>
                </button>
            </div>
        </section>
    </main>
)

export default Matches