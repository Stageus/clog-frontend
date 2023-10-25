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
    const setTextColorByBackgroundColor = (hexColor) => {
        // const c = hexColor.substring(1)      // 색상 앞의 # 제거
        const rgb = parseInt(hexColor, 16)   // rrggbb를 10진수로 변환
        const r = (rgb >> 16) & 0xff  // red 추출
        const g = (rgb >> 8) & 0xff  // green 추출
        const b = (rgb >> 0) & 0xff  // blue 추출
        const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b // per ITU-R BT.709
        // 색상 선택
        return luma < 127.5 ? "#ffffff" : "#000000" // 글자색이
    }

    const nameColor = setTextColorByBackgroundColor(elem.personalColor)

    return(
        <React.Fragment>
            <Flexdiv width="230px" height="60px" padding="9px" margin="0 12.5px 10px 12.5px" radius="10px" border="1px solid #C4C4C4" flex="0_0_auto">
                <Flexdiv width="50px" height="50px" radius="30px" margin="5px" backgroundColor={"#" + elem.personalColor} color={nameColor} flex="0_0_auto_raw_center_center" font="15px_400_'Noto Sans KR', sans-serif">
                    {elem.name}
                </Flexdiv>
                <Flexdiv flex="0_0_auto_column_flex-start_flex-start" margin="0 0 0 10px">
                    <Span font="16px_600_'Noto Sans KR', sans-serif" color="#000000" margin="0 0 5px 0">{elem.name}</Span>
                    <Span font="14px_400_'Noto Sans KR', sans-serif" color="#000000" margin="0 0 5px 0">{elem.major + " " + elem.entryYear + "학번"}</Span>
                    <Span font="13px_400_'Noto Sans KR', sans-serif" color="#C4C4C4">{elem.createdAt} 가입</Span>
                </Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}

export default Club_Members_MemberInfo