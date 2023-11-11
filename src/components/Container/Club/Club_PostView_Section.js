import React from "react"

// import components
import Club_Board_Notice from "../../Component/Club/Club_Board_Notice"
import Club_Board_Post from "../../Component/Club/Club_Board_Post"

// import recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { clubInfoAtom, userClubProfileAtom, noticeListAtom, postListAtom } from "../../../recoil/ClubAtom"

// import styled
import styled from "styled-components"
import { Flexdiv } from "../../../style/common"
import { StyleSheetContext } from "styled-components"

// import image

const Section = styled.section`
    width: 798px;
    padding: 30px;
    margin-bottom: 150px;
    border: 1px solid #C4C4C4;
    border-radius: 10px;
`

const H1 = styled.h1`
    margin: ${props => props.margin || "none"};
    padding: ${props => props.padding || "none"};
    font-size: ${props => props.fontSize || "24px"};
    font-family: ${props => props.fontFamily || "'Noto Sans KR', sans-serif"};
    font-weight: ${props => props.fontBold || "800"};
    color: ${props => props.color || "#000000"};
`


const Club_PostView_Section = () => {
	// route ============================================================

    // props ============================================================

    // state ============================================================
    const club = useRecoilState(clubInfoAtom)

    // event ============================================================


    return(
        <React.Fragment>
            
            <Section>
                
            </Section>

        </React.Fragment>
    )
}

export default Club_PostView_Section
