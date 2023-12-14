import React from "react"

// Container,Component
import Account_Button from "../../Component/Account/Account_Button"
import Account_PwInput from "../../Component/Account/Account_PwInput"
import { FetchPost, FetchGet, FetchPut } from "../../../module/fetch"

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
    const navigate = useNavigate();
    const clickEvent = (e) => {
        let id = e.target.id
        if (id === "changepw") {
            comparePW()
        }
    }

    const comparePW = async () => {
        let enteredpw = document.getElementById("newpw").value
        let reenteredpw = document.getElementById("checknewpw").value

        if (enteredpw === reenteredpw) {
            let communication = await FetchPut("/account/pw", {
                userId: 0,
                newPw: reenteredpw
            })
            if (communication === 200) {
                alert("비밀번호가 성공적으로 변경되었습니다.")
                navigate("/account/login")
            }
        }
    }

    return (
        <React.Fragment>
            <Flexdiv onClick={clickEvent} width="100%" flex="0_1_auto_row_center_center">
                <Flexdiv flex="0_1_auto_column_center_center" width="460px" margin="0px 0 50px 0">
                    {/* 로고 */}
                    <Flexdiv flex="0_1_auto_row_center_center" margin="50px 0">
                        <Svgclog width="200px" height="200px" />
                    </Flexdiv>
                    <Flexdiv flex="0_1_auto_column_flex-start_center" height="300px">
                        <Account_PwInput id="newpw" svg={svglock} flex="0_1_auto_row_center_center" placeholder="신규 비밀번호 입력" />
                        <Account_PwInput id="checknewpw" svg={svglock} flex="0_1_auto_row_center_center" placeholder="신규 비밀번호 재입력" />
                        <Flexdiv flex="0_1_auto_row_flex-start_center_flex-start" width="455px" height="20px" font="14px">대소문자, 특수문자 포함 및 8글자 이상 입력해주세요.</Flexdiv>
                    </Flexdiv>

                    {/* 비밀번호 변경 */}
                    <Account_Button id="changepw" flex="0_1_auto_row_center_center" height="55px" backgroundColor="#333333" font="24px_700" inner="비밀번호 변경" margin="90px 0 0 0" />
                </Flexdiv>
            </Flexdiv>

        </React.Fragment>
    )
}

export default Account_ResetPW_ResetPWBox