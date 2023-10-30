import React from "react"
import { useEffect, useRef, useState } from "react" 

// import components
import Club_EditPosition_Member from "../../Component/Club/Club_EditPosition_Member"

// import recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { clubInfoAtom, memberListAtom } from "../../../recoil/ClubAtom"

// import styled
import styled from "styled-components"
import { Flexbutton, Flexdiv, Flexinput, Span } from "../../../style/common"
import { StyleSheetContext } from "styled-components"

// import image
import { ReactComponent as Check} from "../../../image/checkbox.svg"
import { ReactComponent as Box} from "../../../image/square.svg"

const Main = styled.main`
    width : 1080px;
    height : 1000px;
    display: flex;
    flex-direction: column;
`

const Section = styled.section`
    width: 860px;
    margin-bottom: 150px;
`

const H1 = styled.h1`
    margin: ${props => props.margin || "none"};
    padding: ${props => props.padding || "none"};
    font-size: ${props => props.fontSize || "24px"};
    font-family: ${props => props.fontFamily || "'Noto Sans KR', sans-serif"};
    font-weight: ${props => props.fontBold || "800"};
    color: ${props => props.color || "#000000"};
`

const Flexinput2 = styled(Flexinput)`
    vertical-align: bottom;
`



const Club_EditPosition_Section = () => {
	// route ============================================================

    // props ============================================================

    // state ============================================================
    const club = useRecoilState(clubInfoAtom)
    const clubMemberList = useRecoilState(memberListAtom)
    const managerList = clubMemberList[0].filter(member => member.position == "MANAGER")
    const memberList  = clubMemberList[0].filter(member => member.position == "MEMBER")

    // event ============================================================
    

    return(
        <React.Fragment>
            <Flexdiv flex="0_0_auto_row_center_flex-start" position="relative_70px" cursor="default">
                <Main>
                    {/* 페이지의 이름 부분 */}
                    <Flexdiv width="1040px" height="40px" padding="10px 20px" customBorder="0_0_1px_0_solid_#C4C4C4" flex="0_0_auto_raw_flex-start_center">
                        <H1>동아리원 관리</H1>
                    </Flexdiv>
                    
                    {/* 페이지의 내용 부분 */}
                    <Flexdiv width="1040px" padding="20px" flex="0_0_auto_column_flex-start_center">
                        {/* 상단 표 머리 */}
                        <Flexdiv width="1040px" height="50px" customBorder={"2px_0_2px_0_solid_#" + club[0].themeColor} flex="0_0_auto_raw_flex-start_center">
                            <Flexdiv width="270px" height="50px" flex="0_0_auto_raw_center_center" font="16px_600_'Noto Sans KR', sans-serif">동아리원</Flexdiv>
                            <Flexdiv width="450px" height="50px" flex="0_0_auto_raw_center_center" font="16px_600_'Noto Sans KR', sans-serif">직책 변경</Flexdiv>
                            <Flexdiv width="160px" height="50px" flex="0_0_auto_raw_center_center" font="16px_600_'Noto Sans KR', sans-serif">다음 회장으로 임명</Flexdiv>
                            <Flexdiv width="160px" height="50px" flex="0_0_auto_raw_center_center" font="16px_600_'Noto Sans KR', sans-serif">동아리에서 추방</Flexdiv>
                        </Flexdiv>
                        
                        {/* 각 회원 목록 */}
                        { managerList.map((elem) => <Club_EditPosition_Member elem={elem}/>) }
                        { memberList.map((elem) => <Club_EditPosition_Member elem={elem}/>) }
                    </Flexdiv>
                </Main>
            </Flexdiv>

        </React.Fragment>
    )
}

export default Club_EditPosition_Section