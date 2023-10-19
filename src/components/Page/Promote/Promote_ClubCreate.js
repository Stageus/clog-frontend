import React from "react"

// Container,Component
import Promote_Header from "../../Container/Promote/Promote_Header"
import Promote_Category from "../../Container/Promote/Promote_Category"
import Promote_ClubCreate_Section from "../../Container/Promote/Promote_ClubCreate_Section"
//styled-components
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"




const Promote_ClubCreate = () => {
    return (
        <React.Fragment>
            <Promote_ClubCreate_Section />
            <Promote_Category />
            <Promote_Header />

        </React.Fragment>
    )
}

export default Promote_ClubCreate 