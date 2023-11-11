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

const Club_Board_Post = (props) => {

    const navigate = useNavigate()
    const postViewRoute = () => navigate("/club/post-view")

    // props 받는 곳
    const { elem } = props

    // state 받는 곳
    const club = useRecoilState(clubInfoAtom)

    // event 선언하는 곳

    let comment = 0
    if (elem.commentCount > 10000) {
        comment =  "9999+"
    }
    else {
        comment =  elem.commentCount
    }

    return (
        <React.Fragment>
            <Flexdiv flex="0_0_auto_raw_space-between_center" width="860px" height="40px" customBorder="0_0_1px_0_solid_#DADADA">
                <Flexdiv textAlign="start" width="530px" padding="0 10px 0 10px" font="14px_600_'Noto Sans KR', sans-serif" textOver="hidden_nowrap_ellipsis" cursor="pointer" onClick={postViewRoute} >{elem.title}</Flexdiv>
                <Flexdiv flex="0_0_auto_raw_flex-start_center" width="110px" padding="0 10px 0 10px" font="14px_400_'Nanum Gothic', sans-serif">{elem.authorName}</Flexdiv>
                <Flexdiv flex="0_0_auto_raw_center_center" width="110px" font="14px_400_'Nanum Gothic', sans-serif">{elem.createdAt}</Flexdiv>
                <Flexdiv flex="0_0_auto_raw_center_center" width="70px" font="14px_600_'Noto Sans KR', sans-serif" color={"#" + club[0].themeColor}>{comment}</Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )

}

export default Club_Board_Post