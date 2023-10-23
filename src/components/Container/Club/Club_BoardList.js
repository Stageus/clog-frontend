import React from "react"

// import components
import Club_Board from "../../Component/Club/Club_Board"

// import recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { clubInfoAtom, userClubProfileAtom, boardListAtom } from "../../../recoil/ClubAtom"

// import styled
import styled from "styled-components"
import { Flexbutton, Flexdiv, Span, Img } from "../../../style/common"

// import image
import { ReactComponent as Category } from "../../../image/settings-sliders.svg"
import { ReactComponent as Cake } from "../../../image/cake-birthday.svg"
import { ReactComponent as Users } from "../../../image/users.svg"
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
    if(user[0].position == "PRESIDENT"){
        level = 0
    }
    else if(user[0].position == "MANAGER") {
        level = 1
    }
    else {
        level = 2
    }

    // event ============================================================
    const clickEvent = (e) => {
        let id = e.target.id
        if (id == "openOption") {
            setOptionState(!optionState)
        }
    }
    

    return(
        <nav>
            {/* 동아리 프로필 */}
            <Flexdiv width="190px" height="315px" margin="0 0 20px 0" padding="3px 5px 0px" borderTop={"2px solid #" + club[0].themeColor} cursur="default">
                <Flexdiv flex="0_0_auto_row_flex-start_center" font="12px_400_'Nanum Gothic', sans-serif" color="#C4C4C4">
                    {club[0].belong}
                </Flexdiv>
                <Flexdiv flex="0_0_auto_row_flex-start_center" font="20px_600_'Noto Sans KR', sans-serif" color={"#" + club[0].themeColor}>
                    {club[0].name}
                </Flexdiv>
                <Flexdiv flex="0_0_auto_row_center_center">
                    <Img width="140px" height="140px" radius="70px" />
                </Flexdiv>

                <Flexdiv width="190px" height="60px" margin="20px 0 20px">
                    <Flexdiv flex="0_0_auto_row_flex-start_center" height="20px">
                        <Flexdiv flex="0_0_auto_row_center_center" width="20px" height="20px">
                            <Category width="10px" height="10px" fill="#000000"/>
                        </Flexdiv>
                        <Span fontFamily="'Nanum Gothic', sans-serif" fontSize="10px" fontBold="400" color="#000000">{club[0].bigCategory} 분과 {'>'} {club[0].smallCategory}</Span>
                    </Flexdiv>
                    <Flexdiv flex="0_0_auto_row_flex-start_center" height="20px">
                        <Flexdiv flex="0_0_auto_row_center_center" width="20px" height="20px">
                            <Cake width="10px" height="10px" fill="#000000"/>
                        </Flexdiv>
                        <Span fontFamily="'Nanum Gothic', sans-serif" fontSize="10px" fontBold="400" color="#000000">{club[0].createAt}</Span>
                    </Flexdiv>
                    <Flexdiv flex="0_0_auto_row_flex-start_center" height="20px">
                        <Flexdiv flex="0_0_auto_row_center_center" width="20px" height="20px">
                            <Users width="10px" height="10px" fill="#000000"/>
                        </Flexdiv>
                        <Span fontFamily="'Nanum Gothic', sans-serif" fontSize="10px" fontBold="400" color="#000000" cursor="pointer">{club[0].memberCount} 명</Span>
                    </Flexdiv>
                </Flexdiv>

                <Flexbutton flex="0_0_auto_row_center_center" width="190px" height="40px" radius="10px" backgroundColor={"#" + club[0].themeColor} color="#FFFFFF" font="16px_600_'Noto Sans KR', sans-serif">
                    동아리 글쓰기
                </Flexbutton>

            </Flexdiv>

            
            {/* 동아리 관리 (동아리 관리자들한테만 보임) */}
            { level < 2 && 
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
                                { level < 1 && 
                                    <React.Fragment>
                                        <Flexdiv height="30px" flex="0_0_auto_raw_flex-start_center" font="14px_400_'Noto Sans KR', sans-serif" color="#000000" cursor="pointer">
                                            동아리 정보 수정
                                        </Flexdiv>
                                        <Flexdiv height="30px" flex="0_0_auto_raw_flex-start_center" font="14px_400_'Noto Sans KR', sans-serif" color="#000000" cursor="pointer">
                                            동아리원 관리
                                        </Flexdiv>
                                    </React.Fragment>
                                }

                                <Flexdiv height="30px" flex="0_0_auto_raw_flex-start_center" font="14px_400_'Noto Sans KR', sans-serif" color="#000000" cursor="pointer">
                                    공지 작성
                                </Flexdiv>
                                <Flexdiv height="30px" flex="0_0_auto_raw_flex-start_center" font="14px_400_'Noto Sans KR', sans-serif" color="#000000" cursor="pointer">
                                    게시판 관리
                                </Flexdiv>
                                <Flexdiv height="30px" flex="0_0_auto_raw_flex-start_center" font="14px_400_'Noto Sans KR', sans-serif" color="#000000" cursor="pointer">
                                    홍보게시물 작성
                                </Flexdiv>
                                <Flexdiv height="30px" flex="0_0_auto_raw_flex-start_center" font="14px_400_'Noto Sans KR', sans-serif" color="#000000" cursor="pointer">
                                    홍보게시물 관리
                                </Flexdiv>
                                <Flexdiv height="30px" flex="0_0_auto_raw_flex-start_center" font="14px_400_'Noto Sans KR', sans-serif" color="#000000" cursor="pointer">
                                    신규 가입 신청 받기
                                </Flexdiv>
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
            <Flexdiv height="200px" width="200px" borderTop={"2px solid #" + club[0].themeColor}></Flexdiv>

        </nav>
    )
}

export default Club_BoardList