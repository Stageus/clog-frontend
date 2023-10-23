import React from "react"

// import components
import Club_ClubProfileBox from "./Club_ClubProfileBox"
import Club_BoardList from "./Club_BoardList"
import Club_Board_Notice from "../../Component/Club/Club_Board_Notice"
import Club_Board_Post from "../../Component/Club/Club_Board_Post"

// import recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { clubInfoAtom, userClubProfileAtom, noticeListAtom, postListAtom } from "../../../recoil/ClubAtom"

// import styled
import styled from "styled-components"
import { Flexdiv } from "../../../style/common"
import { StyleSheetContext } from "styled-components"

// import image

const Main = styled.main`
    width : 1080px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
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


const Club_Main_Section = () => {
	// route ============================================================

    // props ============================================================

    // state ============================================================
    const club = useRecoilState(clubInfoAtom)
    const noticeList = useRecoilState(noticeListAtom)
    const postList = useRecoilState(postListAtom)

    // event ============================================================


    return(
        <React.Fragment>
            <Flexdiv flex="0_0_auto_row_center_flex-start" position="relative_70px" cursor="default">
                <Main>
                    <Club_BoardList/>

                    {/* 여기서부터 main section */}
                    <Section>
                        <Flexdiv height="30px" margin="0 0 20px 0" flex="0_0_auto_raw_flex-start_center">
                            <H1>전체 글 보기</H1>
                        </Flexdiv>

                        <Flexdiv width="860px" margin="0 0 50px 0" flex="0_0_auto_column_center_center">
                            <Flexdiv width="860px" height="50px" flex="0_0_auto_raw_flex-start_center" customBorder={"1px_0px_1px_0px_solid_#" + club[0].themeColor}>
                                <Flexdiv width="550px" height="50px" flex="0_0_auto_raw_center_center" font="16px_600_'Noto Sans KR', sans-serif">제목</Flexdiv>
                                <Flexdiv width="130px" height="50px" flex="0_0_auto_raw_center_center" font="16px_600_'Noto Sans KR', sans-serif">작성자</Flexdiv>
                                <Flexdiv width="110px" height="50px" flex="0_0_auto_raw_center_center" font="16px_600_'Noto Sans KR', sans-serif">작성일</Flexdiv>
                                <Flexdiv width="70px" height="50px" flex="0_0_auto_raw_center_center" font="16px_600_'Noto Sans KR', sans-serif">댓글</Flexdiv>
                            </Flexdiv>

                            { noticeList[0].map((elem) => <Club_Board_Notice elem={elem}/>) }
                            { postList[0].map((elem) => <Club_Board_Post elem={elem}/>) }

                        </Flexdiv>

                        <Flexdiv width="860px" height="140px" radius="0 0 20px 20px" backgroundColor="#F0F0F0" flex="0_0_auto_raw_center_center">
                            <Flexdiv ></Flexdiv>
                        </Flexdiv>
                    </Section>
                </Main>
            </Flexdiv>

        </React.Fragment>
    )
}

export default Club_Main_Section