import React from "react"

// Container,Component


//styled-components 
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg




const Account_Button = (props) => {
    // props ======================================================
    const { id, flex, height, backgroundColor, font, inner, margin, clickEvent } = props
    // state ======================================================

    // event ======================================================

    return (
        <React.Fragment>
            <Flexbutton onClick={clickEvent} id={id} flex={flex} width="460px" height={height} color="#ffffff" backgroundColor={backgroundColor} font={font} radius="10px" margin={margin}>{inner}</Flexbutton>
        </React.Fragment>
    )
}

export default Account_Button