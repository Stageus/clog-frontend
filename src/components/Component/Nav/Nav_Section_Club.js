import React from "react"

//styled-components
import { Flexdiv, Flexinput, Img, Span } from "../../../style/common"

const Nav_Section_Club = (props) => {
    const { elem } = props
    console.log(elem.profileImage)

    return (
        <React.Fragment>
            <Flexdiv flex="0_0_50px_row_flex-start_center" margin="5px 15px">
                <Flexinput flex="0_1_30px" type="button" height="30px" url={require("../../../image/tenislogo.jpeg")} margin="10px 10px" radius="10px" />
                <Flexdiv flex="0_1_150px" height="50px">{elem.club}</Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}


export default Nav_Section_Club