import React from "react"

import Club_Header from "../../Container/Club/Club_Header"
import Club_Banner from "../../Container/Club/Club_Banner"
import Club_Content from "../../Container/Club/Club_Content"

const Club_NoticeBoard = () => {
    // props ============================================================

    // state ============================================================

    // event ============================================================


    return(
        <React.Fragment>
            <Club_Banner/>
            <Club_Content page = {"noticeBoard"}/>
            <Club_Header exit = {true}/>
        </React.Fragment>
    )
}

export default Club_NoticeBoard