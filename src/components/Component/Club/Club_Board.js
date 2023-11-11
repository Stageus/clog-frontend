import React from "react"
import { useNavigate } from "react-router-dom"

// import components

// import recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { clubInfoAtom, userClubProfileAtom } from "../../../recoil/ClubAtom"

// import styled
import styled from "styled-components"
import { Flexbutton, Flexdiv, Span } from "../../../style/common"

// import image

const Club_Board = (props) => {

    const navigate = useNavigate()
    const postBoardRoute = () => navigate("/club/post-board")

    // props 받는 곳
    const { elem } = props

    // state 받는 곳

    // event 선언하는 곳

    // console.log(elem)

    return (
        <React.Fragment>
            <Flexdiv height="30px" flex="0_0_auto_raw_flex-start_center" font="14px_400_'Noto Sans KR', sans-serif" color="#000000" cursor="pointer" onClick={postBoardRoute}>
                {elem.name}
            </Flexdiv>
        </React.Fragment>
    )

}

export default Club_Board