import React from "react"

// Container,Component
import Promote_Header from "../../Container/Promote/Promote_Header"
import Promote_Category from "../../Container/Promote/Promote_Category"

//styled-components
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"

const Promote_Main = () => {

    return (
        <React.Fragment>
            {/* <Flexdiv flex="0_0_auto_column_flex-start_flex-start" backgroundColor="#f2ffff"> */}
            <Promote_Header />
            <Promote_Category />
            {/* </Flexdiv> */}
        </React.Fragment>
    )
}
export default Promote_Main