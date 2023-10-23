import React from "react"

// import components

// import recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { clubInfoAtom, userClubProfileAtom } from "../../../recoil/ClubAtom"

// import styled
import { Flexbutton, Flexdiv, Span } from "../../../style/common"

// import image


const Club_Members_MemberInfo = (props) => {
    // route ============================================================

    // props ============================================================
    const { elem } = props

    // state ============================================================

    // event ============================================================


    return(
        <React.Fragment>
            <Flexdiv width="230px" height="60px" padding="9px" margin="0 0 10px 0" radius="10px" border="1px solid #C4C4C4" flex="0_0_auto">
                <Flexdiv width="40px" height="40px" radius="20px" margin="0 10px 0 0" backgroundColor={"#" + elem.personalColor} flex="0_0_auto_raw_center_center" font="12px">
                    {elem.name}
                </Flexdiv>
                <Flexdiv width="180px" flex="0_0_auto_column_flex-start_flex-start">
                    <Span font="14px_600_'Noto Sans KR', sans-serif" color="#000000">{elem.name}</Span>
                    <Span fontSize="13px" fontWeight="400" fontFamily="'Noto Sans KR', sans-serif">{elem.major + " " + elem.entryYear + "학번"}</Span>
                </Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}

export default Club_Members_MemberInfo