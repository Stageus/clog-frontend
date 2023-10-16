import React from "react"

//styled-components 
import { Flexdiv, Flexinput, Flexbutton, P, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg

//router
import { Link, useNavigate } from 'react-router-dom'

const Promote_CategoryResult_Club = (props) => {
    // props ======================================================
    const { elem } = props

    // state ======================================================

    // event ======================================================



    return (
        <React.Fragment>
            <Flexdiv flex="0_1_auto_column_flex-start_center" width="390px" height="320px" backgroundColor="#f0f0f0" radius="10px">

                <Flexdiv flex="0_1_auto_row_flex-start-center" width="350px" margin="15px 0 10px 0">
                    <Img flex="0_1_auto" width="80px" src={require("../../../image/race.png")} radius="10px" margin="0 10px 0 0" />
                    <Flexdiv flex="0_1_auto_column_center_flex-start">
                        <Flexdiv flex="0_1_auto" fontSize="25px">{elem.name}</Flexdiv>
                        <Flexbutton flex="0_1_auto_row_center_center" width="90px" height="45px" backgroundColor="#5f5f5f" radius="10px" color="#ffffff">프로필 이동</Flexbutton>
                    </Flexdiv>
                </Flexdiv>

                <Flexdiv flex="0_1_auto_row_center_flex-start" width="350px" height="200px" backgroundColor="#ffffff" radius="10px" margin="0 0 5px 0">
                    <P flex="0_1_auto" textAlign="left" margin="10px">{elem.cover}</P>
                </Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}

export default Promote_CategoryResult_Club