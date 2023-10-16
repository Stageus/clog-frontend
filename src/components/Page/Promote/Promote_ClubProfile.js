import React from "react"

// Container,Component
import Promote_Header from "../../Container/Promote/Promote_Header"
import Promote_ClubProfile_Section from "../../Container/Promote/Promote_ClubProfile_Section"

//styled-components
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"



const Promote_ClubProfile = () => {
    return (
        <React.Fragment>
            <Promote_Header />
            <Promote_ClubProfile_Section />
        </React.Fragment>
    )
}
export default Promote_ClubProfile