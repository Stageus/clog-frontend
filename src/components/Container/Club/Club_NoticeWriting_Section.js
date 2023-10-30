import React from "react"
import { useEffect, useRef, useState } from "react" 

// import components

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



const Club_NoticeWriting_Section = () => {
	// route ============================================================

    // props ============================================================

    // state ============================================================
    const club = useRecoilState(clubInfoAtom)
    const [noticeState, setNoticeState] = React.useState(false)

    // event ============================================================
    const clickEvent = (e) => {
        let id = e.target.id
        if (id == "checkin") {
            setNoticeState(true)
        }
        else if (id="checkout") {
            setNoticeState(false)
        }
    }
    

    return(
        <React.Fragment>
            <Flexdiv flex="0_0_auto_row_center_flex-start" position="relative_70px" cursor="default">
                <Main>
                    {/* 페이지의 이름 부분 */}
                    <Flexdiv width="1040px" height="40px" padding="10px 20px" customBorder="0_0_1px_0_solid_#C4C4C4" flex="0_0_auto_raw_flex-start_center">
                        <H1>동아리 공지 쓰기</H1>
                    </Flexdiv>
                    
                    {/* 페이지의 내용 부분 */}
                    <Flexdiv width="1040px" padding="20px" flex="0_0_auto_column_flex-start_center">

                        {/* 주요 공지사항 체크 */}
                        <Flexdiv width="1020px" height="30px" padding="10px" margin="0 0 20px 0" flex="0_0_auto_raw_flex-start_center">
                            { noticeState === false ?
                                <Flexbutton width="30px" height="30px" flex="0_0_auto_raw_center_center" onClick={clickEvent}>
                                    <Box id="checkin" width="24px" height="24px" fill={"#" + club[0].themeColor} cursor="pointer"/>
                                </Flexbutton>
                                :
                                <Flexbutton width="30px" height="30px" flex="0_0_auto_raw_center_center" onClick={clickEvent}>
                                    <Check id="checkout" width="24px" height="24px" fill={"#" + club[0].themeColor} cursor="pointer"/>
                                </Flexbutton>
                            }
                            <Span margin="0 0 0 10px" font="16px_400_'Nanum Gothic', sans-serif">주요 공지사항으로 등록</Span>
                        </Flexdiv>

                        {/* 제목 입력란 */}
                        <Flexinput width="1020px" height="30px" padding="10px" margin="0 0 20px 0" border="1px solid #C4C4C4" radius="10px" font="16px_400_'Nanum Gothic', sans-serif" placeholder="제목을 입력해주세요."/>

                        {/* 본문 입력란 */}
                        <Flexinput2 width="1020px" height="380px" padding="10px" margin="0 0 20px 0" border="1px solid #C4C4C4" radius="10px" font="16px_400_'Nanum Gothic', sans-serif" placeholder="내용을 입력해주세요." />

                        {/* 사진 첨부 */}
                        <Flexdiv width="1040px" height="30px" margin="0 0 10px 0" flex="0_0_auto_raw_space-between_center">
                            <Flexdiv>
                                <Span font="20px_600_'Noto Sans KR', sans-serif" margin="0 10px 0 0">사진 첨부</Span>
                                <Span font="14px_400_'Nanum Gothic', sans-serif" color="#C4C4C4">사진은 최대 30장까지 첨부 가능합니다.</Span>
                            </Flexdiv>
                            <Flexbutton width="70px" height="30px" radius="10px" backgroundColor={"#" + club[0].themeColor} color="#FFFFFF" font="14px_600_'Noto Sans KR', sans-serif">찾아보기</Flexbutton>
                        </Flexdiv>
                        
                        {/* 첨부된 사진 목록 */}
                        <Flexdiv width="1020px" height="20px" padding="10px" margin="0 0 50px 0" border="1px solid #C4C4C4" radius="10px"></Flexdiv>

                        {/* 업로드 버튼 */}
                        <Flexbutton width="400px" height="60px" radius="10px" backgroundColor={"#" + club[0].themeColor} color="#FFFFFF" font="24px_800_'Noto Sans KR', sans-serif">업로드</Flexbutton>
                    </Flexdiv>
                </Main>
            </Flexdiv>

        </React.Fragment>
    )
}

export default Club_NoticeWriting_Section