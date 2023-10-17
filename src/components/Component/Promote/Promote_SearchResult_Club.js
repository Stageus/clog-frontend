import React from "react"

//styled-components 
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg

//router
import { Link, useNavigate } from 'react-router-dom'

const Promote_SearchResult_Club = (props) => {
    // props ======================================================
    const { elem } = props

    // state ======================================================

    // event ======================================================


    return (
        <React.Fragment>
            <Flexdiv flex="0_1_auto_row_flex-start_center" width="280px" height="100%" radius="10px" backgroundColor="#ffffff" margin="0 6px">
                <Flexdiv flex="0_1_auto_row_center_center" backgroundColor="white" margin="0 20px"><Img flex="0_1_auto" width="80px" height="80px" src={require("../../../image/race.png")} radius="10px" /></Flexdiv>
                <Flexdiv flex="0_1_auto_column_center_flex-start">
                    <Flexdiv flex="0_1_auto" height="30px" fontSize="20px" margin="0 5px">{elem.club}</Flexdiv>
                    <Flexbutton id="goclubprofile" flex="0_1_auto_row_center_center" width="90px" height="45px" radius="10px" backgroundColor="#5f5f5f" color="#ffffff">프로필 이동</Flexbutton>
                </Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}

export default Promote_SearchResult_Club