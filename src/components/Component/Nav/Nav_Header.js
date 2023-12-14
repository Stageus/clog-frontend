import React from "react"
// import styled from "styled-components"
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"

//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { navOpenAtom } from "../../../recoil/NavAtom"

import Nav_Section from "../../Container/Nav/Nav_Section"

const Nav_Header = () => {
    // props ======================================================
    // const { navOpen } = props

    // state ======================================================
    const navOpen = useRecoilValue(navOpenAtom);
    // event ======================================================

    return (
        <React.Fragment>
            <Flexdiv flex="0_0_auto_row_space-between_center" width="240px" heigt="56px">
                {/* 네브 여닫기 버튼 */}
                <Flexbutton id="navbutton" flex="0_0_auto" type="button" width="24px" height="24px" margin="16px 16px" url={require("../../../image/menu-burger.svg").default} ></Flexbutton>
                {/* 클로그 로고 */}
                <Flexdiv id="navClogLogo" flex="0_0_auto_row_flex-start_center" width="184px" height="56px">
                    <Flexbutton id="navClogLogo" flex="0_0_auto" type="button" width="36px" height="32px" margin="0px 10px" url={require("../../../image/Clog_logo.svg").default} ></Flexbutton>
                    <Span id="navClogLogo" flex="0_0_auto" fontSize="24px">CLOG</Span>
                </Flexdiv>
            </Flexdiv>
            {navOpen && <Nav_Section />}
        </React.Fragment>
    )
}

export default Nav_Header