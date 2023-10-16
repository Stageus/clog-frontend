import React from "react"

// import components
import Club_ClubProfileBox from "./Club_ClubProfileBox"
import Club_BoardList from "./Club_BoardList"

// import recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { clubInfoAtom, userClubProfileAtom } from "../../../recoil/ClubAtom"

// import styled
import styled from "styled-components"
import { Flexdiv } from "../../../style/common"

// import image

const Main = styled.main`
    width : 1080px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const Section = styled.section`
    width: 860px;
`

const H1 = styled.h1`
    margin: ${props => props.margin || "none"};
    padding: ${props => props.padding || "none"};
    font-size: ${props => props.fontSize || "24px"};
    font-family: ${props => props.fontFamily || "'Noto Sans KR', sans-serif"};
    font-weight: ${props => props.fontBold || "800"};
    color: ${props => props.color || "#000000"};
`


const Club_Main_Section = () => {
	// route ============================================================

    // props ============================================================

    // state ============================================================
    const club = useRecoilState(clubInfoAtom)

    // event ============================================================


    return(
        <React.Fragment>
            <Flexdiv flex="0_0_auto_row_center_flex-start" position="relative_70px" cursor="default">
                <Main>
                    <Nav>
                        <Club_ClubProfileBox/>
                        <Club_BoardList/>
                    </Nav>

                    {/* 여기서부터 main section */}
                    <Section>
                        <Flexdiv height="30px" margin="0 0 20px 0" flex="0_0_auto_raw_flex-start_center">
                            <H1>전체 글 보기</H1>
                        </Flexdiv>

                        <Flexdiv width="860px" margin="0 0 50px 0" flex="0_0_auto_column_center_center">
                            <Flexdiv width="860px" height="50px" flex="0_0_auto_raw_flex-start_center" borderTop={"1px solid #" + club[0].themeColor}>
                                <Flexdiv width="550px" height="50px" flex="0_0_auto_raw_center_center">제목</Flexdiv>
                                <Flexdiv width="130px" height="50px" flex="0_0_auto_raw_center_center">작성자</Flexdiv>
                                <Flexdiv width="110px" height="50px" flex="0_0_auto_raw_center_center">작성일</Flexdiv>
                                <Flexdiv width="70px" height="50px" flex="0_0_auto_raw_center_center">댓글</Flexdiv>
                            </Flexdiv>
                        </Flexdiv>
                    </Section>
                </Main>
            </Flexdiv>

        </React.Fragment>
    )
}

export default Club_Main_Section