import React from "react"

// Container,Component
import Promote_Header from "../../Container/Promote/Promote_Header"
import Promote_Category from "../../Container/Promote/Promote_Category"
import Promote_Main_Section from "../../Container/Promote/Promote_Main_Section"

//styled-components
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"


const Promote_Main = () => {
    return (
        <React.Fragment>
            <Promote_Main_Section />
            <Promote_Category />
            <Promote_Header />
        </React.Fragment>
    )
}
export default Promote_Main