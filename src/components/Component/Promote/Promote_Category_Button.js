import React from "react"

//styled-components 
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg

//router
import { Link, useNavigate } from 'react-router-dom'

const Promote_Category_Button = (props) => {
    // props ======================================================
    const { elem, btncolor } = props

    // state ======================================================

    // event ======================================================


    return (
        <React.Fragment>
            <Flexbutton id={"categoryBtn" + elem.num} flex="0_1_auto_row_center_center" width="fit-content" height="30px" backgroundColor="#f0f0f0" radius="10px" margin="0 6px" padding="0 10px">{elem.content}</Flexbutton>
        </React.Fragment>
    )
}

export default Promote_Category_Button