import React from "react"

//styled-components 
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg

//router
import { Link, useNavigate } from 'react-router-dom'

const Promote_Category_Button = (props) => {
    const { elem } = props
    return (
        <React.Fragment>
            <Flexbutton flex="0_1_auto_row_center_center" backgroundColor="#f0f0f0" width="50px" height="30px" radius="10px" margin="0 6px">{elem.bigCategory}</Flexbutton>
        </React.Fragment>
    )
}

export default Promote_Category_Button