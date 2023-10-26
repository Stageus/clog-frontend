import React from "react"

// import components

// import recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { clubInfoAtom, boardListAtom } from "../../../recoil/ClubAtom"

// import styled
import styled from "styled-components"
import { Flexbutton, Flexdiv, Flexinput, Span } from "../../../style/common"
import { StyleSheetContext } from "styled-components"

// import image
import { ReactComponent as Down} from "../../../image/angle-down.svg"
import { ReactComponent as Up} from "../../../image/angle-up.svg"

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



const Club_PostWriting_Section = () => {
	// route ============================================================

    // props ============================================================

    // state ============================================================
    const club = useRecoilState(clubInfoAtom)
    const boardList = useRecoilState(boardListAtom)
    const [boardState, setBoardState] = React.useState(false)
    let board = "게시판을 선택해 주세요."

    // event ============================================================
    const clickEvent = (e) => {
        let id = e.target.id
        if (id == "boardOption") {
            setBoardState(!boardState)
        }
        console.log(boardState)
        console.log("현재 board는 " + board)
    }

    const selectEvent = (e) => {
        let id = e.target.id
        if (id == "boardName") {
            setBoardState(false)
            board = e.target.innerText
            console.log(board + "로 바뀜")
        }
    }
    

    return(
        <React.Fragment>
            <Flexdiv flex="0_0_auto_row_center_flex-start" position="relative_70px" cursor="default">
                <Main>
                    {/* 페이지의 이름 부분 */}
                    <Flexdiv width="1040px" height="40px" padding="10px 20px" customBorder="0_0_1px_0_solid_#C4C4C4" flex="0_0_auto_raw_flex-start_center">
                        <H1>동아리 글쓰기</H1>
                    </Flexdiv>
                    
                    {/* 페이지의 내용 부분 */}
                    <Flexdiv width="1040px" padding="20px" flex="0_0_auto_column_flex-start_center">

                        {/* 게시판 선택 드롭다운 부분 */}
                        { boardState == true &&
                            <Flexdiv width="1040px" border="2px solid #000000" radius="10px" position="absolute" backgroundColor="#FFFFFF">
                                <Flexdiv width="1040px" height="50px" radius="10px 10px 0 0" customBorder="0_0_1px_0_solid_#C4C4C4" flex="0_0_auto_raw_space-between_center" onClick={clickEvent}>
                                    <Span margin="10px" font="16px_400_'Nanum Gothic', sans-serif" color="#757575">{board}</Span>
                                    <Flexbutton id="boardOption" width="50px" height="50px" flex="0_0_auto_raw_center_center" radius="10px">
                                        <Up id="boardOption" width="24px" height="24px" fill="#C4C4C4" cursor="pointer"/>
                                    </Flexbutton>
                                </Flexdiv>
                                
                                <Flexdiv padding="10px">
                                    { boardList[0].map((elem) => 
                                        <Flexdiv onClick={selectEvent} flex="0_0_auto_raw_space-between_center" height="40px">
                                            <Span id="boardName" font="16px_400_'Nanum Gothic', sans-serif" cursor="pointer">{elem.name}</Span>
                                        </Flexdiv>
                                    ) }
                                </Flexdiv>
                            </Flexdiv>
                        }

                        <Flexdiv width="1040px" height="50px" margin="0 0 20px 0" border="1px solid #C4C4C4" radius="10px" flex="0_0_auto_raw_space-between_center" onClick={clickEvent}>
                            { board === "게시판을 선택해 주세요." ?
                                <Span margin="10px" font="16px_400_'Nanum Gothic', sans-serif" color="#757575">{board}</Span>
                                :
                                <Span margin="10px" font="16px_400_'Nanum Gothic', sans-serif" color="#000000">{board}</Span>
                            }
                            <Flexbutton id="boardOption" width="50px" height="50px" flex="0_0_auto_raw_center_center" radius="10px">
                                <Down id="boardOption" width="24px" height="24px" fill="#C4C4C4" cursor="pointer"/>
                            </Flexbutton>
                        </Flexdiv>

                        {/* 제목 입력란 */}
                        <Flexinput width="1020px" height="30px" padding="10px" margin="0 0 20px 0" border="1px solid #C4C4C4" radius="10px" font="16px_400_'Nanum Gothic', sans-serif" placeholder="제목을 입력해주세요."/>
                        <Flexinput2 width="1020px" height="380px" padding="10px" margin="0 0 20px 0" border="1px solid #C4C4C4" radius="10px" font="16px_400_'Nanum Gothic', sans-serif" placeholder="제목을 입력해주세요." />
                    </Flexdiv>
                </Main>
            </Flexdiv>

        </React.Fragment>
    )
}

export default Club_PostWriting_Section