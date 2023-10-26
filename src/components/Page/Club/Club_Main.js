import React from "react"

import Club_Header from "../../Container/Club/Club_Header"
import Club_Banner from "../../Container/Club/Club_Banner"
import Club_Content from "../../Container/Club/Club_Content"
import Club_Main_Section from "../../Container/Club/Club_Main_Section"

const Club_Main = () => {
    // props ============================================================

    // state ============================================================

    // event ============================================================


    return(
        <React.Fragment>
            <Club_Banner/>
            <Club_Content elem = {"main"}/>
            <Club_Header elem = {true}/>
        </React.Fragment>
    )
}

export default Club_Main