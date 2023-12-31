import React from "react"
// import styled from "styled-components"
import { Flexdiv, Flexinput, Img, Span } from "../../../style/common"


const Nav_Header = () => {
    return (
        <React.Fragment>
            <Flexdiv flex="0_0_auto_row_space-between_center" width="240px" heigt="56px">
                <Flexinput flex="0_0_auto" type="button" width="24px" height="24px" margin="16px 16px" url={require("../../../image/menu-burger.svg").default} />
                <Flexdiv flex="0_0_auto_row_flex-start_center" width="184px" height="56px">
                    <Flexinput flex="0_0_auto" type="button" width="36px" height="32px" margin="0px 10px" url={require("../../../image/Clog_logo.svg").default} />
                    <Span flex="0_0_auto" fontSize="24px">CLOG</Span>
                </Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}

export default Nav_Header