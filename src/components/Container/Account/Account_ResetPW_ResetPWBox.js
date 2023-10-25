import React from "react"

// Container,Component
import Account_Button from "../../Component/Account/Account_Button"
import Account_PwInput from "../../Component/Account/Account_PwInput"

//styled-components
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg
import { ReactComponent as Svgclog } from "../../../image/Clog_logo.svg"
import { ReactComponent as Svglock } from "../../../image/lock.svg"

//router
import { useNavigate } from "react-router-dom"

const Account_ResetPW_ResetPWBox = () => {
    // props ============================================================

    // state ============================================================
    const svglock = <Svglock flex="0_1_auto" width="25px" height="25px" fill="#c4c4c4" />
    // event ============================================================


    return (
        <React.Fragment>
            <Flexdiv width="100%" flex="0_1_auto_row_center_center">
                <Flexdiv flex="0_1_auto_column_center_center" width="460px" margin="0px 0 50px 0">
                    {/* 로고 */}
                    <Flexdiv flex="0_1_auto_row_center_center" margin="50px 0">
                        <Svgclog width="200px" height="200px" />
                    </Flexdiv>
                    <Flexdiv flex="0_1_auto_column_flex-start_center" height="300px">

                        <Account_PwInput svg={svglock} flex="0_1_auto_row_center_center" placeholder="신규 비밀번호 입력" />
                        <Account_PwInput svg={svglock} flex="0_1_auto_row_center_center" placeholder="신규 비밀번호 재입력" />
                    </Flexdiv>

                    {/* 비밀번호 변경 */}
                    <Account_Button id="gosignup" flex="0_1_auto_row_center_center" height="55px" backgroundColor="#333333" font="24px_700" inner="비밀번호 변경" margin="90px 0 0 0" />
                </Flexdiv>
            </Flexdiv>

        </React.Fragment>
    )
}

export default Account_ResetPW_ResetPWBox