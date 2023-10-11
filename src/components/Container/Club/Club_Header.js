import React from "react"

// import components

// import recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { clubInfoAtom } from "../../../recoil/ClubAtom"

// import styled
import styled from "styled-components"
import { Flexdiv, Img } from "../../../style/common"

// import image
import { ReactComponent as Menu} from "../../../image/menu-burger.svg"
import { ReactComponent as Chat} from "../../../image/messages.svg"

const Header = styled.header`
    width : 100%;
    display : flex;
    justify-content : space-between;
    position : fixed;
`

const HeaderButton = styled(Flexdiv)`
    border: 1px solid #C4C4C4;
    width: 48px;
    height: 48px;
    border-radius: 10px;
    margin: 10px;
    background-color: #FFFFFF;
    justify-content: center;
`


const Club_Header = () => {
    // props ============================================================

    // state ============================================================
    const club = useRecoilState(clubInfoAtom)

    // event ============================================================

    console.log(club[0].theme_color)

    return(
        <React.Fragment>
            <Header>
                <HeaderButton type="button" flex="0_0_auto_row_center_center" >
                    <Menu width="24px" heigh="24px" fill={"#" + club[0].theme_color}/>
                </HeaderButton>

                <HeaderButton type="button" flex="0_0_auto_row_center_center" color={"#" + club.theme_color}>
                    <Chat width="24px" heigh="24px" fill={"#" + club[0].theme_color}/>
                </HeaderButton>
            </Header>
        </React.Fragment>
    )
}

export default Club_Header