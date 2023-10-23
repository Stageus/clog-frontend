import React from "react"

// import components

// import recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { clubInfoAtom, userClubProfileAtom } from "../../../recoil/ClubAtom"

// import styled
import styled from "styled-components"
import { Flexbutton, Flexdiv, Span } from "../../../style/common"

// import image

const Club_Board = (props) => {

    // props 받는 곳
    const { elem } = props

    // state 받는 곳

    // event 선언하는 곳

    // console.log(elem)

    return (
        <React.Fragment>
            <Flexdiv flex="0_0_auto_raw_space-between_center" width="180px" height="30px">
                <Span fontFamily="'Noto Sans KR', sans-serif" fontSize="14px" fontBold="400" color="#000000" cursor="pointer">{elem.name}</Span>
            </Flexdiv>
        </React.Fragment>
    )

}

export default Club_Board