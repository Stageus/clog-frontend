import React from "react"

// import components
import Club_Members_MemberInfo from "./Club_Members_MemberInfo"

// import recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { clubInfoAtom, userClubProfileAtom } from "../../../recoil/ClubAtom"

// import styled
import styled from "styled-components"
import { Flexbutton, Flexdiv, Span } from "../../../style/common"

// import image
import { ReactComponent as Check} from "../../../image/checkbox.svg"
import { ReactComponent as Box} from "../../../image/square.svg"


const Club_RequestAccept_Request = (props) => {
    // route ============================================================

    // props ============================================================
    const { elem } = props

    // state ============================================================
    const club = useRecoilState(clubInfoAtom)

    // event ============================================================

    return(
        <React.Fragment>
            <Flexdiv width="1040px" height="50px" customBorder="0_0_1px_0_solid_#C4C4C4" flex="0_0_auto_raw_flex-start_center">
                <Flexdiv width="150px" height="50px" flex="0_0_auto_raw_center_center" font="20px_400_'Nanum Gothic', sans-serif">{elem.name}</Flexdiv>
                <Flexdiv width="250px" height="50px" flex="0_0_auto_raw_center_center" font="20px_400_'Nanum Gothic', sans-serif">{elem.major}</Flexdiv>
                <Flexdiv width="100px" height="50px" flex="0_0_auto_raw_center_center" font="20px_400_'Nanum Gothic', sans-serif">{elem.entryYear}</Flexdiv>
                <Flexdiv width="250px" height="50px" flex="0_0_auto_raw_center_center" font="20px_400_'Nanum Gothic', sans-serif">{elem.createdAt}</Flexdiv>
                <Flexdiv width="290px" height="50px" flex="0_0_auto_raw_center_center" font="20px_400_'Nanum Gothic', sans-serif">
                    <Flexbutton width="72px" height="36px" margin="14px 7px" radius="10px" backgroundColor={"#" + club[0].themeColor} color="#FFFFFF" flex="0_0_auto_raw_center_center" font="18px_600_'Noto Sans KR', sans-serif">수락</Flexbutton>
                    <Flexbutton width="72px" height="36px" margin="14px 7px" radius="10px" backgroundColor={"#" + club[0].themeColor} color="#FFFFFF" flex="0_0_auto_raw_center_center" font="18px_600_'Noto Sans KR', sans-serif">거절</Flexbutton>
                </Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}

export default Club_RequestAccept_Request