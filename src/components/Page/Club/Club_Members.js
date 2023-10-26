import React from "react"

import Club_Header from "../../Container/Club/Club_Header"
import Club_Banner from "../../Container/Club/Club_Banner"
import Club_Members_Section from "../../Container/Club/Club_Members_Section"
import Club_Content from "../../Container/Club/Club_Content"

const Club_Members = () => {
    // props ============================================================

    // state ============================================================

    // event ============================================================


    return(
        <React.Fragment>
            <Club_Banner/>
            <Club_Content elem = {"members"}/>
            <Club_Header elem = {true}/>
        </React.Fragment>
    )
}

export default Club_Members