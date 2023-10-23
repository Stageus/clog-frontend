import React from "react"

// Container,Component


//styled-components 
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg
import { ReactComponent as Svgidcard } from "../../../image/id-card-clip-alt.svg"
import { ReactComponent as Svglock } from "../../../image/lock.svg"
import { ReactComponent as Svguser } from "../../../image/user.svg"
import { ReactComponent as Svggraduation } from "../../../image/graduation-cap.svg"
import { ReactComponent as Svgmajor } from "../../../image/book-bookmark.svg"
import { ReactComponent as Svgpassword } from "../../../image/password.svg"
import { ReactComponent as Svgclog } from "../../../image/Clog_logo.svg"
import { ReactComponent as Svgcheck } from "../../../image/check-circle.svg"
import { ReactComponent as Svgmessage } from "../../../image/envelope.svg"




const Account_PwInput = (props) => {
    // props ======================================================
    const { flex, placeholder } = props
    // state ======================================================

    // event ======================================================

    return (
        <React.Fragment>
            <Flexdiv flex={flex} width="460px" height="48px" border="1px solid #c4c4c4" radius="10px" margin="5px 0">
                <Flexdiv margin="0 14px" flex="0_1_auto_row_center_center">
                    <Svguser flex="0_1_auto" width="26px" height="26px" fill="#c4c4c4" />
                </Flexdiv>
                <Flexinput type="password" flex="1_1_auto" height="30px" font="16px" placeholder={placeholder} />
            </Flexdiv>
        </React.Fragment>
    )
}

export default Account_PwInput