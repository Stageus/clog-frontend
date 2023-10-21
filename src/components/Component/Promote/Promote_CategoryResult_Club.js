import React from "react"

//styled-components 
import { Flexdiv, Flexinput, Flexbutton, P, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg
import { ReactComponent as Svgcheck } from "../../../image/check-circle.svg"
//router
import { Link, useNavigate } from 'react-router-dom'

const Promote_CategoryResult_Club = (props) => {
    // props ======================================================
    const { elem } = props

    // state ======================================================

    // event ======================================================


    return (
        <React.Fragment>
            <Flexdiv flex="0_1_auto_column_flex-start_center" width="390px" height="320px" backgroundColor="#f0f0f0" radius="10px" margin="20px 26px">

                <Flexdiv flex="0_1_auto_row_flex-start-center" width="350px" margin="10px 0 10px 0">
                    {/* 동아리 로고 */}
                    <Img flex="0_1_auto" width="80px" src={elem.profileImg} radius="10px" margin="0 10px 0 0" />
                    {/* 동아리이름, 신청버튼 */}
                    <Flexdiv flex="0_1_auto_column_center_flex-start">
                        <Flexdiv flex="0_1_auto" fontSize="25px" margin="0 0 0 5px">{elem.name}</Flexdiv>
                        <Flexbutton id="goclubprofile" flex="0_1_auto_row_center_center" width="90px" height="45px" backgroundColor="#5f5f5f" radius="10px" color="#ffffff">프로필 이동</Flexbutton>
                    </Flexdiv>


                </Flexdiv>

                {/* 소개글 본문 */}
                <Flexdiv flex="0_1_auto_row_center_flex-start" width="360px" height="205px" backgroundColor="#ffffff" radius="10px" margin="0 0 5px 0">
                    <P flex="0_1_auto" width="360px" height="190px" textAlign="left" textOver="hidden_normal_ellipsis_10" margin="8px 10px">{elem.cover}</P>
                </Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}

export default Promote_CategoryResult_Club