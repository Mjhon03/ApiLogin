import './Return.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
export const ArrowReturn = ()=>{

    return(
        <>
        <div className="containerA">
            <a className="btnArrow" role="button" data-mdb-ripple-color="dark"><FontAwesomeIcon icon={faLongArrowAltLeft}/></a>
        </div>
        </>
    )
}