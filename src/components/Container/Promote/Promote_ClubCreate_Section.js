import React from "react"

// Container,Component
import Promote_PrPost from "../../Component/Promote/Promote_PrPost"

//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { prPostAtom } from "../../../recoil/PromoteAtom"

//styled-components 
import { Flexdiv, Flexinput, P, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg

//router
import { Link, useNavigate } from 'react-router-dom'
import Promote_ClubCreate_InflexInfo from "../../Component/Promote/Promote_ClubCreate_InflexInfo"
import Promote_ClubCreate_FlexInfo from "../../Component/Promote/Promote_ClubCreate_FlexInfo"

const Promote_ClubCreate_Section = () => {
    // props ============================================================

    // state ============================================================

    // event ============================================================




    return (
        <React.Fragment>
            <Flexdiv flex="0_1_auto_column_center_center" width="100%">
                <Flexdiv flex="0_1_auto_column_center_center" width="940px" margin="120px">
                    <Flexdiv flex="0_1_auto_row_flex-start_center" width="900px" height="100px" font="36px_700" border="0_0_1px_0_#c4c4c4" margin="0 40px" padding="0 40px">동아리 만들기</Flexdiv>
                    <Promote_ClubCreate_InflexInfo />
                    <Promote_ClubCreate_FlexInfo />
                </Flexdiv>
            </Flexdiv>
        </React.Fragment >
    )
}

export default Promote_ClubCreate_Section
