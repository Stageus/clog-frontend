import React from "react"

// Container,Component
import Promote_Header from "../../Container/Promote/Promote_Header"
import Promote_Category from "../../Container/Promote/Promote_Category"
import Promote_SearchResult_ClubSection from "../../Container/Promote/Promote_SearchResult_ClubSection"
import Promote_SearchResult_PrPostSection from "../../Container/Promote/Promote_SearchResult_PrPostSection"


//styled-components
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"



const Promote_SearchResult = () => {
    return (
        <React.Fragment>
            <Promote_SearchResult_ClubSection />
            <Promote_SearchResult_PrPostSection />
            <Promote_Category />
            <Promote_Header />
        </React.Fragment>
    )
}

export default Promote_SearchResult