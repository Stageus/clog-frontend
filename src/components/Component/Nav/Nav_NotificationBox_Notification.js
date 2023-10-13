import React from "react"

//styled-components
import { Flexdiv, Flexinput, Img, Span } from "../../../style/common"




const Nav_NotificationBox_Notification = (props) => {
    // props ======================================================
    const { elem } = props

    // state ======================================================

    // event ======================================================
    return (
        <React.Fragment>
            <Flexdiv flex="0_0_auto_row_flex-start_center" width="460px" height="40px" backgroundColor="white" outline="1px solid white">
                {/* isRead가 false이면 빨간색, 아니면 흰색(안보임)*/}
                <Flexdiv flex="0_0_auto" width="30px" height="40px" color={elem.isRead ? "#ffffff" : "#ff0000"} justifyContent="center">●</Flexdiv>
                {/* 알림내용 */}
                <Flexdiv flex="0_0_auto" width="430px" height="40px">{elem.sentence}</Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}


export default Nav_NotificationBox_Notification