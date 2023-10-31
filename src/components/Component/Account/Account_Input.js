import React from "react"

// Container,Component


//styled-components 
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"






const Account_Input = (props) => {
    // props ======================================================
    const { id, svg, flex, placeholder } = props
    let width = "460px"
    // state ======================================================

    // event ======================================================
    if (id == "navprofilename") {
        width = "430px"
    }
    return (
        <React.Fragment>
            <Flexdiv flex={flex} width={width} height="48px" border="1px solid #c4c4c4" radius="10px" margin="5px 0">
                <Flexdiv margin="0 14px" flex="0_1_auto_row_center_center">
                    {svg}
                </Flexdiv>
                <Flexinput id={id} flex="1_1_auto" height="30px" font="16px" placeholder={placeholder} />
            </Flexdiv>
        </React.Fragment>
    )
}

export default Account_Input