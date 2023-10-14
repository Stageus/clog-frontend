import React from "react"

// import components
import Club_ClubProfileBox from "./Club_ClubProfileBox"
import Club_BoardList from "./Club_BoardList"

// import recoil

// import styled
import styled from "styled-components"
import { Flexdiv } from "../../../style/common"

// import image


const Club_Main_Section = () => {
	// route ============================================================

    // props ============================================================

    // state ============================================================

    // event ============================================================


    return(
        <React.Fragment>
            <Flexdiv flex="0_0_auto_row_center_flex-start" position="relative_70px">
            <Flexdiv flex="0_0_auto_row_space-between_flex-end" width="1080px">
                <Flexdiv flex="0_0_auto_colunm_flex-start_center" margin="0_20px_0_0">
                    <Club_ClubProfileBox/>
                    <Club_BoardList/>
                </Flexdiv>

                <Flexdiv width="860px" height="600px" backgroundColor="#F0F0F0">

                </Flexdiv>
            </Flexdiv>
            </Flexdiv>

        </React.Fragment>
    )
}

export default Club_Main_Section