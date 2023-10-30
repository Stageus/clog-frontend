import React from "react"

// import components
import Club_Members_MemberInfo from "./Club_Members_MemberInfo"

// import recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { clubInfoAtom, userClubProfileAtom } from "../../../recoil/ClubAtom"

// import styled
import styled from "styled-components"
import { Flexbutton, Flexdiv, Span } from "../../../style/common"

// import image
import { ReactComponent as Check} from "../../../image/checkbox.svg"
import { ReactComponent as Box} from "../../../image/square.svg"


const Club_EditPosition_Member = (props) => {
    // route ============================================================

    // props ============================================================
    const { elem } = props

    // state ============================================================
    const club = useRecoilState(clubInfoAtom)

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
            <Flexdiv width="1040px" height="100px" customBorder="0_0_1px_0_solid_#C4C4C4" flex="0_0_auto_raw_flex-start_center">
                {/* 동아리원 명함 */}
                <Flexdiv width="270px" height="100px" flex="0_0_auto_raw_center_center">
                    <Flexdiv width="230px" height="60px" padding="9px" radius="10px" border="1px solid #C4C4C4" flex="0_0_auto">
                        <Flexdiv width="50px" height="50px" radius="30px" margin="5px" backgroundColor={"#" + elem.personalColor} color={nameColor} flex="0_0_auto_raw_center_center" font="15px_400_'Noto Sans KR', sans-serif">
                            {elem.name}
                        </Flexdiv>
                        <Flexdiv flex="0_0_auto_column_flex-start_flex-start" margin="0 0 0 10px">
                            <Span font="16px_600_'Noto Sans KR', sans-serif" color="#000000" margin="0 0 5px 0">{elem.name}</Span>
                            <Span font="14px_400_'Noto Sans KR', sans-serif" color="#000000" margin="0 0 5px 0">{elem.major + " " + elem.entryYear + "학번"}</Span>
                            <Span font="13px_400_'Noto Sans KR', sans-serif" color="#C4C4C4">{elem.createdAt} 가입</Span>
                        </Flexdiv>
                    </Flexdiv>
                </Flexdiv>

                {/* 직책 변경 */}
                <Flexdiv width="450px" height="100px" flex="0_0_auto_raw_center_center">
                    { elem.position == "MANAGER" ?
                        <React.Fragment>
                            <Flexdiv width="120px" height="40px" flex="0_0_auto_raw_center_center">
                                <Span font="16px_400_'Noto Sans KR', sans-serif" >운영진</Span>
                                <Flexbutton width="40px" height="40px">
                                    <Check width="16px" height="16px" fill={"#" + club[0].themeColor}/>
                                </Flexbutton>
                            </Flexdiv>
                            <Flexdiv>
                                <Span font="16px_400_'Noto Sans KR', sans-serif" >동아리원</Span>
                                <Flexbutton width="40px" height="40px">
                                    <Box width="16px" height="16px" fill={"#" + club[0].themeColor}/>
                                </Flexbutton>
                            </Flexdiv>
                        </React.Fragment>
                    :
                        <React.Fragment>
                            <Flexdiv width="120px" height="40px" flex="0_0_auto_raw_center_center">
                                <Span font="16px_400_'Noto Sans KR', sans-serif" >운영진</Span>
                                <Flexbutton width="40px" height="40px">
                                    <Box width="16px" height="16px" fill={"#" + club[0].themeColor}/>
                                </Flexbutton>
                            </Flexdiv>
                            <Flexdiv>
                                <Span font="16px_400_'Noto Sans KR', sans-serif" >동아리원</Span>
                                <Flexbutton width="40px" height="40px">
                                    <Check width="16px" height="16px" fill={"#" + club[0].themeColor}/>
                                </Flexbutton>
                            </Flexdiv>
                        </React.Fragment>
                    }
                </Flexdiv>

                {/* 다음 회장으로 임명 */}
                <Flexdiv width="160px" height="100px" flex="0_0_auto_raw_center_center">
                    <Flexbutton width="120px" height="50px" radius="10px" backgroundColor={"#" + club[0].themeColor} color="#FFFFFF" font="16px_600_'Noto Sans KR', sans-serif">회장 임명</Flexbutton>
                </Flexdiv>

                {/* 동아리에서 추방 */}
                <Flexdiv width="160px" height="100px" flex="0_0_auto_raw_center_center">
                    <Flexbutton width="120px" height="50px" radius="10px" backgroundColor="#F0F0F0" color="#000000" font="16px_600_'Noto Sans KR', sans-serif">동아리 추방</Flexbutton>
                </Flexdiv>

            </Flexdiv>
        </React.Fragment>
    )
}

export default Club_EditPosition_Member