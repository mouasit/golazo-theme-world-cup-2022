import StreamMatchMobile from "../Items/StreamMatchMobile";
import StreamMatchDesktop from "../Items/StreamDesktop";
const Stream = (props) =>{
    return(
        <main>
        <StreamMatchMobile lang={props.lang} />
        <StreamMatchDesktop lang={props.lang} />
    </main>
    )
}

export default Stream