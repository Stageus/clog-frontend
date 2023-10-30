import React from "react"

// import components

// import recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { clubInfoAtom, userClubProfileAtom } from "../../../recoil/ClubAtom"

// import styled
import styled from "styled-components"
import { Flexbutton, Flexdiv, Flexinput, Span } from "../../../style/common"

// import image

const Club_EditBoardList_Board = (props) => {

    // props 받는 곳
    const { elem } = props

    // state 받는 곳
    const club = useRecoilState(clubInfoAtom)
    const [boardState, setBoardState] = React.useState(false)

    // event 선언하는 곳
    const clickEvent = () => {
        setBoardState(true)
    }

    // console.log(elem)

    return (
        <React.Fragment>
            { boardState == false ?
                <Flexdiv width="1040px" height="50px" padding="0 0 10px 0" margin="10px 0 0 0" customBorder="0_0_1px_0_solid_#C4C4C4" flex="0_0_auto_raw_space-between_center">
                    <Flexdiv width="770px" height="30px" padding="10px" flex="0_0_auto_raw_flex-start_center" font="16px_600_'Noto Sans KR', sans-serif">{elem.name}</Flexdiv>
                    <Flexbutton width="100px" height="50px" radius="10px" backgroundColor="#F0F0F0" color={"#" + club[0].themeColor} font="16px_600_'Noto Sans KR', sans-serif" onClick={clickEvent}>이름 바꾸기</Flexbutton>
                    <Flexbutton width="100px" height="50px" radius="10px" backgroundColor="#F0F0F0" color={"#" + club[0].themeColor} font="16px_600_'Noto Sans KR', sans-serif">게시판 삭제</Flexbutton>
                </Flexdiv>
            :
            <Flexdiv width="1040px" height="50px" padding="0 0 10px 0" margin="10px 0 0 0" customBorder="0_0_1px_0_solid_#C4C4C4" flex="0_0_auto_raw_space-between_center">
                <Flexinput width="770px" height="30px" padding="10px" radius="10px" border="1px solid #C4C4C4" font="16px_600_'Noto Sans KR', sans-serif" defaultValue={elem.name}/>
                <Flexbutton width="100px" height="50px" radius="10px" backgroundColor={"#" + club[0].themeColor} color="#FFFFFF" font="16px_600_'Noto Sans KR', sans-serif">이름 바꾸기</Flexbutton>
                <Flexdiv width="100px" height="50px"></Flexdiv>
            </Flexdiv>
            }
        </React.Fragment>
    )

}

export default Club_EditBoardList_Board