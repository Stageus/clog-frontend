import React from "react"
import { useEffect, useRef, useState } from "react" 

// import components
import Club_EditBoardList_Board from "../../Component/Club/Club_EditBoardList_Board"

// import recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { clubInfoAtom, boardListAtom } from "../../../recoil/ClubAtom"

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



const Club_EditBoardList_Section = () => {
	// route ============================================================

    // props ============================================================

    // state ============================================================
    const club = useRecoilState(clubInfoAtom)
    const boardList = useRecoilState(boardListAtom)

    // event ============================================================
    

    return(
        <React.Fragment>
            <Flexdiv flex="0_0_auto_row_center_flex-start" position="relative_70px" cursor="default">
                <Main>
                    {/* 페이지의 이름 부분 */}
                    <Flexdiv width="1040px" height="40px" padding="10px 20px" customBorder="0_0_1px_0_solid_#C4C4C4" flex="0_0_auto_raw_flex-start_center">
                        <H1>게시판 관리</H1>
                    </Flexdiv>
                    
                    {/* 페이지의 내용 부분 */}
                    <Flexdiv width="1040px" padding="20px" flex="0_0_auto_column_flex-start_center">
                        {/* 새로운 게시판 생성 */}
                        <Flexdiv width="1040px" height="110px" margin="0 0 50px 0" flex="0_0_auto_column_flex-start_flex-start">
                            <Span height="30px" font="20px_600_'Noto Sans KR', sans-serif">새로운 게시판 생성</Span>
                            <Flexdiv width="1040px" height="60px" margin="20px 0 0 0" flex="0_0_auto_raw_space-between_center">
                                <Flexinput width="880px" height="40px" padding="9px" border="1px solid #C4C4C4" radius="10px" font="16px_400_'Nanum Gothic', sans-serif" placeholder="게시판의 이름을 입력하세요."/>
                                <Flexbutton width="120px" height="60px" radius="10px" backgroundColor={"#" + club[0].themeColor} color="#FFFFFF" font="20px_800_'Noto Sans KR', sans-serif">생성하기</Flexbutton>
                            </Flexdiv>
                        </Flexdiv>

                        {/* 기존게시판 관리 */}
                        <Flexdiv width="1040px" flex="0_0_auto_column_flex-start_flex-start">
                            <Span height="30px" font="20px_600_'Noto Sans KR', sans-serif">게시판 관리</Span>
                            <Flexdiv width="1040px" margin="20px 0 0 0" flex="0_0_auto_column_flex-start_center">
                                { boardList[0].map((elem) => <Club_EditBoardList_Board elem={elem}/>) }
                            </Flexdiv>
                        </Flexdiv>

                    </Flexdiv>
                </Main>
            </Flexdiv>

        </React.Fragment>
    )
}

export default Club_EditBoardList_Section