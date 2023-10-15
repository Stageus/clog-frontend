import React from "react"

// import components
import Club_Board from "../../Component/Club/Club_Board"

// import recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { clubInfoAtom, userClubProfileAtom, boardListAtom } from "../../../recoil/ClubAtom"

// import styled
import styled from "styled-components"
import { Flexbutton, Flexdiv, Span } from "../../../style/common"

// import image
import { ReactComponent as Up } from "../../../image/caret-up.svg"
import { ReactComponent as Down } from "../../../image/caret-down.svg"


const Club_BoardList = () => {
    // route ============================================================

    // props ============================================================

    // state ============================================================
    const club = useRecoilState(clubInfoAtom)
    const user = useRecoilState(userClubProfileAtom)
    const boardList = useRecoilState(boardListAtom)
    const [optionState, setOptionState] = React.useState(false)

    let level
    if(user[0].position == "leader"){
        level = 2
    }
    else if(user[0].position == "manager") {
        level = 1
    }
    else {
        level = 0
    }

    // event ============================================================
    const clickEvent = (e) => {
        let id = e.target.id
        if (id == "openOption") {
            setOptionState(!optionState)
        }
    }
    

    return(
        <React.Fragment>
            
            {/* 동아리 관리 (동아리 관리자들한테만 보임) */}
            { level > 0 && 
                <Flexdiv padding="10px" borderTop={"1px solid #" + club[0].themeColor}>
                    { optionState == false &&
                        <Flexdiv onClick={clickEvent} flex="0_0_auto_raw_space-between_center" width="180px" height="30px">
                            <Span fontFamily="'Noto Sans KR', sans-serif" fontSize="14px" fontBold="600" color={"#" + club[0].themeColor}>동아리 관리</Span>
                            <Flexbutton id="openOption" flex="0_0_auto_raw_center_center" width="30px" height="30px" backgroundColor="#FFFFFF">
                                <Down id="openOption" width="16px" height="16px" fill="#C4C4C4"/>
                            </Flexbutton>
                        </Flexdiv>
                    }
                    { optionState == true &&
                        <React.Fragment>
                            <Flexdiv onClick={clickEvent} flex="0_0_auto_raw_space-between_center" width="180px" height="30px">
                                <Span fontFamily="'Noto Sans KR', sans-serif" fontSize="14px" fontBold="600" color={"#" + club[0].themeColor}>동아리 관리</Span>
                                <Flexbutton id="openOption" flex="0_0_auto_raw_center_center" width="30px" height="30px" backgroundColor="#FFFFFF">
                                    <Up id="openOption" width="16px" height="16px" fill="#C4C4C4"/>
                                </Flexbutton>
                            </Flexdiv>

                            <Flexdiv flex="0_0_auto_column_center_flex-start" width="170px" margin="0 0 0 10px">
                                <Flexdiv height="30px" flex="0_0_auto_raw_flex-start_center">
                                    <Span fontFamily="'Noto Sans KR', sans-serif" fontSize="14px" fontBold="400" color="#000000">공지 작성</Span>
                                </Flexdiv>
                                <Flexdiv height="30px" flex="0_0_auto_raw_flex-start_center">
                                    <Span fontFamily="'Noto Sans KR', sans-serif" fontSize="14px" fontBold="400" color="#000000">동아리 정보 수정</Span>
                                </Flexdiv>
                                <Flexdiv height="30px" flex="0_0_auto_raw_flex-start_center">
                                    <Span fontFamily="'Noto Sans KR', sans-serif" fontSize="14px" fontBold="400" color="#000000">게시판 관리</Span>
                                </Flexdiv>
                                <Flexdiv height="30px" flex="0_0_auto_raw_flex-start_center">
                                    <Span fontFamily="'Noto Sans KR', sans-serif" fontSize="14px" fontBold="400" color="#000000">홍보게시물 작성</Span>
                                </Flexdiv>
                                <Flexdiv height="30px" flex="0_0_auto_raw_flex-start_center">
                                    <Span fontFamily="'Noto Sans KR', sans-serif" fontSize="14px" fontBold="400" color="#000000">홍보게시물 관리</Span>
                                </Flexdiv>
                                <Flexdiv height="30px" flex="0_0_auto_raw_flex-start_center">
                                    <Span fontFamily="'Noto Sans KR', sans-serif" fontSize="14px" fontBold="400" color="#000000">신규 가입 신청 받기</Span>
                                </Flexdiv>
                                { level > 1 && 
                                    <Flexdiv height="30px" flex="0_0_auto_raw_flex-start_center">
                                        <Span fontFamily="'Noto Sans KR', sans-serif" fontSize="14px" fontBold="400" color="#000000">동아리원 관리</Span>
                                    </Flexdiv>
                                }
                            </Flexdiv>
                        </React.Fragment>
                    }
                </Flexdiv>
            }

            {/* 공지사항 */}
            <Flexdiv padding="10px" borderTop={"1px solid #" + club[0].themeColor}>
                <Flexdiv flex="0_0_auto_raw_space-between_center" width="180px" height="30px">
                    <Span fontFamily="'Noto Sans KR', sans-serif" fontSize="14px" fontBold="600" color={"#" + club[0].themeColor}>공지사항</Span>
                </Flexdiv>
            </Flexdiv>
            
            {/* 일반 게시판 */}
            <Flexdiv padding="10px" borderTop={"1px solid #" + club[0].themeColor}>
                { boardList[0].map((elem) => <Club_Board elem={elem}/>) }
            </Flexdiv>

            {/* 게시판 하단 마무리 디자인 */}
            <Flexdiv height="200px" borderTop={"2px solid #" + club[0].themeColor}></Flexdiv>

        </React.Fragment>
    )
}

export default Club_BoardList