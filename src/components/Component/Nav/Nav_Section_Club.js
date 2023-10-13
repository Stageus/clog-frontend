import React from "react"

//styled-components
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"

const Nav_Section_Club = (props) => {
    // props ======================================================
    const { elem, clickEvent } = props

    // state ======================================================

    // event ======================================================

    return (
        <React.Fragment>
            {/* 동아리 로고, 이름 */}
            <Flexdiv id="navClub" flex="0_0_50px_row_flex-start_center" margin="5px 15px" onClick={clickEvent}>
                <Flexbutton id="navClub" flex="0_1_30px" type="button" height="30px" url={require("../../../image/tenislogo.jpeg")} margin="10px 10px" radius="10px"></Flexbutton>
                <Flexdiv id="navClub" flex="0_1_150px" height="50px">{elem.club}</Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}


export default Nav_Section_Club