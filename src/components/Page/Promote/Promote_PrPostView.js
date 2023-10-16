import React from "react"

// Container,Component
import Promote_Header from "../../Container/Promote/Promote_Header"
import Promote_Category from "../../Container/Promote/Promote_Category"
import Promote_PrPostView_Section from "../../Container/Promote/Promote_PrPostView_Section"

//styled-components
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"




const Promote_PrPostView = () => {
    return (
        <React.Fragment>
            <Promote_Header />
            <Promote_PrPostView_Section />
        </React.Fragment>
    )
}

export default Promote_PrPostView