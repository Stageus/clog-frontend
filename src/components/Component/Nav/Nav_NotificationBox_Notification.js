import React from "react"

//styled-components
import { Flexdiv, Flexinput, Img, Span } from "../../../style/common"




const Nav_NotificationBox_Notification = (props) => {
    const { elem } = props

    return (
        <React.Fragment>
            <Flexdiv flex="0_0_auto_row_flex-start_center" width="460px" height="40px" backgroundColor="#f0f0f0" outline="1px solid white">
                <Flexdiv flex="0_0_auto" width="30px" height="40px" color="red" justifyContent="center">●</Flexdiv>
                <Flexdiv flex="0_0_auto" width="430px" height="40px">{elem.sentence}</Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}


export default Nav_NotificationBox_Notification