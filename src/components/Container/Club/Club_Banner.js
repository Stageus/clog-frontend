import React from "react"

// import components

// import recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { clubInfoAtom } from "../../../recoil/ClubAtom"

// import styled
import styled from "styled-components"
import { Flexdiv, Img } from "../../../style/common"

// import module
import { FetchGet } from "../../../module/fetch"

// import image

const Club_Banner = () => {
    // route ============================================================

    // props ============================================================

    // state ============================================================
        // 동아리에 대한 정보
        // const club = FetchGet("/club/33/profile")       // API
        const club = useRecoilState(clubInfoAtom)    // Atom

    // event ============================================================


    return(
        <React.Fragment>
            <Flexdiv flex="0_0_auto_row_center_flex-start" position="relative_70px">
                <Flexdiv width="1080px" height="240px" margin="0 0 20px 0" backgroundColor="#F0F0F0">
                    <Img width="1080px" height="240px" src={club[0].bannerImage}/>
                </Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}

export default Club_Banner