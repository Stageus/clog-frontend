import React from "react"

// import components
import Club_BoardList from "./Club_BoardList"
import Club_Main_Section from "./Club_Main_Section"
import Club_Members_Section from "./Club_Members_Section"

// import recoil

// import styled
import styled from "styled-components"
import { Flexdiv } from "../../../style/common"
import { StyleSheetContext } from "styled-components"

// import image

const Main = styled.main`
    width : 1080px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

const Club_Content = (props) => {
	// route ============================================================

    // props ============================================================
    const { elem } = props

    // state ============================================================

    // event ============================================================


    return(
        <React.Fragment>
            <Flexdiv flex="0_0_auto_row_center_flex-start" position="relative_70px" cursor="default">
                <Main>
                    <Club_BoardList/>

                    {/* 여기서부터 페이지별 section */}
                    { elem == "main" && <Club_Main_Section/> }
                    { elem == "members" && <Club_Members_Section/> }

                </Main>
            </Flexdiv>

        </React.Fragment>
    )
}

export default Club_Content