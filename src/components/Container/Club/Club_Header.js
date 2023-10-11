import React from "react"

// import components

// import recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { clubInfoAtom } from "../../../recoil/ClubAtom"

// import styled
import styled from "styled-components"
import { Flexdiv } from "../../../style/common"

const Header = styled.header`
    display : flex;
    justify-content : space-between;
`

const HeaderButton = styled(Flexdiv)`
    border: 1px solid #C4C4C4;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    margin: 10px;
    background-color: #FFFFFF;
    justify-content: center;
`


const Component_Convention = () => {
    // props ============================================================

    // state ============================================================
    const club = useRecoilState(clubInfoAtom)

    // event ============================================================


    return(
        <React.Fragment>
            <Header>
                <HeaderButton type="button" color={"#" + club.theme_color}>
                    
                </HeaderButton>
            </Header>
        </React.Fragment>
    )
}

export default Component_Convention