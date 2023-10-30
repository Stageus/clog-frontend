import React from "react"
import { useEffect, useRef, useState } from "react" 

// import components
import Club_RequestAccept_Request from "../../Component/Club/Club_RequestAccept_Request"

// import recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { clubInfoAtom, requestListAtom } from "../../../recoil/ClubAtom"

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



const Club_RequestAccept_Section = () => {
	// route ============================================================

    // props ============================================================

    // state ============================================================
    const club = useRecoilState(clubInfoAtom)
    const requestList = useRecoilState(requestListAtom)

    // event ============================================================
    

    return(
        <React.Fragment>
            <Flexdiv flex="0_0_auto_row_center_flex-start" position="relative_70px" cursor="default">
                <Main>
                    {/* 페이지의 이름 부분 */}
                    <Flexdiv width="1040px" height="40px" padding="10px 20px" customBorder="0_0_1px_0_solid_#C4C4C4" flex="0_0_auto_raw_flex-start_center">
                        <H1>신규 가입 신청 받기</H1>
                    </Flexdiv>
                    
                    {/* 페이지의 내용 부분 */}
                    <Flexdiv width="1040px" padding="20px" flex="0_0_auto_column_flex-start_center">
                        {/* 표 상단 머리부분 */}
                        <Flexdiv width="1040px" height="50px" customBorder={"2px_0_2px_0_solid_#" + club[0].themeColor} flex="0_0_auto_raw_flex-start_center">
                            <Span width="150px" height="50px" flex="0_0_auto_raw_center_center" font="20px_600_'Noto Sans KR', sans-serif">이름</Span>
                            <Span width="250px" height="50px" flex="0_0_auto_raw_center_center" font="20px_600_'Noto Sans KR', sans-serif">학과</Span>
                            <Span width="100px" height="50px" flex="0_0_auto_raw_center_center" font="20px_600_'Noto Sans KR', sans-serif">학번</Span>
                            <Span width="250px" height="50px" flex="0_0_auto_raw_center_center" font="20px_600_'Noto Sans KR', sans-serif">신청일</Span>
                            <Span width="290px" height="50px" flex="0_0_auto_raw_center_center" font="20px_600_'Noto Sans KR', sans-serif">가입 신청 승인</Span>
                        </Flexdiv>

                        {/* 가입신청목록 */}
                        { requestList[0].map((elem) => <Club_RequestAccept_Request elem={elem}/>) }
                    </Flexdiv>
                </Main>
            </Flexdiv>

        </React.Fragment>
    )
}

export default Club_RequestAccept_Section