
import ArrowRight from "../Items/ArrowRight";
import ArrowLeft from "../Items/ArrowLeft";
import ShapeSlide from "../Items/ShapeSlide";

import alThumama from "../../assets/stadiums/al-thumama/1.jpg";
const Stadiums = () =>(
    <main>
        <div className="stadiums">
            <div className="card-stadiums">
                <div className="container-pictures">
                    <img src={alThumama} alt="" />
                    <button className="arrow arrow-left">
                        <ArrowLeft />
                    </button>
                    <button className="arrow arrow-right">
                        <ArrowRight />
                    </button>
                    <div className="row-slide">
                        <button className="active">
                            <ShapeSlide />
                        </button>
                        <button>
                            <ShapeSlide />
                        </button>
                        <button>
                            <ShapeSlide />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
)

export default Stadiums