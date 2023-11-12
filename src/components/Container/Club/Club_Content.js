import React from "react"

// import components
import Club_BoardList from "./Club_BoardList"
import Club_Main_Section from "./Club_Main_Section"
import Club_Members_Section from "./Club_Members_Section"
import Club_PostBoard_Section from "./Club_PostBoard_Section"
import Club_NoticeBoard_Section from "./Club_NoticeBoard_Section"
import Club_PrPostBoard_Section from "./Club_PrPostBoard_Section"
import Club_PostView_Section from "./Club_PostView_Section"
import Club_SearchResult_Section from "./Club_SearchResult_Section"

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
    const { page } = props

    // state ============================================================

    // event ============================================================


    return(
        <React.Fragment>
            <Flexdiv flex="0_0_auto_row_center_flex-start" position="relative_70px" cursor="default">
                <Main>
                    <Club_BoardList/>

                    {/* 여기서부터 페이지별 section */}
                    { page == "main" && <Club_Main_Section/> }
                    { page == "members" && <Club_Members_Section/> }
                    { page == "postBoard" && <Club_PostBoard_Section/> }
                    { page == "noticeBoard" && <Club_NoticeBoard_Section/> }
                    { page == "prPostBoard" && <Club_PrPostBoard_Section/> }
                    { page == "postView" && <Club_PostView_Section/> }
                    { page == "searchResult" && <Club_SearchResult_Section/> }

                </Main>
            </Flexdiv>

        </React.Fragment>
    )
}

export default Club_Content