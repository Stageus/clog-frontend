import React from "react"

// Container,Component


//styled-components 
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"





const Account_PwInput = (props) => {
    // props ======================================================
    const { id, svg, flex, placeholder } = props
    // state ======================================================

    // event ======================================================

    return (
        <React.Fragment>
            <Flexdiv flex={flex} width="460px" height="48px" border="1px solid #c4c4c4" radius="10px" margin="5px 0">
                <Flexdiv margin="0 14px" flex="0_1_auto_row_center_center">
                    {svg}
                </Flexdiv>
                <Flexinput id={id} type="password" flex="1_1_auto" height="30px" font="16px" placeholder={placeholder} />
            </Flexdiv>
        </React.Fragment>
    )
}

export default Account_PwInput