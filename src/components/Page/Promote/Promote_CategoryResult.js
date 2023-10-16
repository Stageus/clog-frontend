import React from "react"

// Container,Component
import Promote_Header from "../../Container/Promote/Promote_Header"
import Promote_Category from "../../Container/Promote/Promote_Category"
import Promote_CategoryResult_Section from "../../Container/Promote/Promote_CategoryResult_Section"

//styled-components
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"



const Promote_CategoryResult = () => {
    return (
        <React.Fragment>
            <Promote_Category />
            <Promote_Header />
            <Promote_CategoryResult_Section />
        </React.Fragment>
    )
}

export default Promote_CategoryResult