import React from "react"

// import components

// import recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { clubInfoAtom } from "../../../recoil/ClubAtom"

// import styled
import styled from "styled-components"
import { Flexbutton, Flexdiv, Flexinput, Span, Img } from "../../../style/common"

// import image
import { ReactComponent as Category } from "../../../image/settings-sliders.svg"
import { ReactComponent as Cake } from "../../../image/cake-birthday.svg"


const Club_ClubProfileBox = () => {
    // route ============================================================

    // props ============================================================

    // state ============================================================
    const club = useRecoilState(clubInfoAtom)

    // event ============================================================


    return(
        <React.Fragment>
            <Flexdiv width="190px" height="315" margin="0 0 20px 0" padding="3px 5px 0px" borderTop={"2px solid #" + club[0].theme_color} position="relative_70px">
                <Flexdiv flex="0_0_auto_row_flex-start_center">
                    <Span fontFamily="'Nanum Gothic', sans-serif" fontSize="12px" fontBold="400" color="#C4C4C4">{club[0].belong}</Span>
                </Flexdiv>
                <Flexdiv flex="0_0_auto_row_flex-start_center">
                    <Span fontFamily="'Noto Sans KR', sans-serif" fontSize="20px" fontBold="600" color={"#" + club[0].theme_color}>{club[0].name}</Span>
                </Flexdiv>
                <Flexdiv flex="0_0_auto_row_center_center">
                    <Img width="140px" height="140px" radius="70px" src=""/>
                </Flexdiv>
                <Flexdiv width="190px" height="60px" margin="20px 0 20px">
                    <Flexdiv flex="0_0_auto_row_flex-start_center" height="20px">
                        <Flexdiv flex="0_0_auto_row_center_center" width="20px" height="20px">
                            <Category width="10px" height="10px" fill="#C4C4C4"/>
                        </Flexdiv>
                        <Span fontFamily="'Nanum Gothic', sans-serif" fontSize="10px" fontBold="400" color="#C4C4C4">{club[0].big_category} 분과 > {club[0].small_category}</Span>
                    </Flexdiv>
                    <Flexdiv flex="0_0_auto_row_flex-start_center" height="20px">
                        <Flexdiv flex="0_0_auto_row_center_center" width="20px" height="20px">
                            <Cake width="10px" height="10px" fill="#C4C4C4"/>
                        </Flexdiv>
                        <Span fontFamily="'Nanum Gothic', sans-serif" fontSize="10px" fontBold="400" color="#C4C4C4">{club[0].create_at}</Span>
                    </Flexdiv>
                </Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}

export default Club_ClubProfileBox