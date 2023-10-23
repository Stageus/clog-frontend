import React from "react"

// Container,Component
import Account_Input from "../../Component/Account/Account_Input"
import Account_Button from "../../Component/Account/Account_Button"
import Account_LockedInput from "../../Component/Account/Account_LockedInput"

//styled-components
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg
import { ReactComponent as Svgclog } from "../../../image/Clog_logo.svg"
import { ReactComponent as Svgcheck } from "../../../image/check-circle.svg"
import { ReactComponent as Svgmessage } from "../../../image/envelope.svg"
import { ReactComponent as Svgpassword } from "../../../image/password.svg"

//router
import { useNavigate } from "react-router-dom"


const UnderlineSpan = styled(Span)`
    text-decoration: underline;
`
const Account_Auth_AuthBox = () => {
    // props ============================================================

    // state ============================================================

    // event ============================================================
    const navigate = useNavigate()
    const clickEvent = (e) => {
        let id = e.target.id
        if (id == "gosignup") {
            navigate("/account/signup")
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
                        {/* 약관동의 */}
                        <Flexdiv flex="0_1_auto_row_center_center" width="460px" height="50px" radius="10px" border="1px solid #c4c4c4" margin="5px 0">
                            <Flexdiv flex="0_1_auto_row_center_center" margin="0 12px"><Svgcheck flex="0_1_auto" width="28px" height="28px" fill="#c4c4c4" /></Flexdiv>
                            <Span flex="0_1_auto" color="#4B7BE5">[필수]</Span><Span flex="1_1_auto">인증 약관 전체동의</Span>
                            <UnderlineSpan flex="0_1_atuo_row_center_center" width="60px" height="50px" font="16px" color="#4B7BE5">보기</UnderlineSpan>
                        </Flexdiv>

                        {/* 이메일 입력 */}
                        <Account_Input flex="0_1_auto_row_center_center" placeholder="이메일 입력" />

                        {/* 인증번호 발송 버튼 */}
                        <Account_Button flex="0_1_auto_row_center_center" height="50px" font="16px_600" backgroundColor={false ? "#333333" : "#c4c4c4"} margin="5px 0" inner="인증번호 발송" />

                        {/* 이메일, 인증번호 확인 문구 */}
                        {false && <Flexdiv flex="0_1_auto_row_flex-start_center" width="460px" font="14px" color="#EB5149" margin="5px 0">인증 약관에 동의해주세요</Flexdiv>}

                        {/* 인증번호 입력 */}
                        {true ? <Flexdiv flex="0_1_auto_row_center_center" width="460px" height="48px" border="1px solid #c4c4c4" radius="10px" margin="5px 0" backgroundColor="#ffffff">
                            <Flexdiv margin="0 14px" flex="0_1_auto_row_center_center"><Svgpassword flex="0_1_auto" width="26px" height="26px" fill="#c4c4c4" /></Flexdiv>
                            <Flexinput flex="1_1_auto" height="30px" font="16px" placeholder="인증번호 입력" />
                            <Span flex="0_1_auto_row_center_center" width="60px" color="#EB5149">3:00</Span>
                        </Flexdiv> :
                            <Account_LockedInput flex="0_1_auto_row_center_center" placeholder="인증번호 입력" />}
                        {/* 인증번호 재발송 */}
                        {true && <Account_Button flex="0_1_auto_row_center_center" height="50px" backgroundColor="#333333" font="16px_600" inner="인증번호 재발송" margin="5px 0" />}

                    </Flexdiv>

                    {/* 이메일 인증 버튼 */}
                    <Account_Button id="gosignup" flex="0_1_auto_row_center_center" height="55px" backgroundColor="#333333" font="24px_700" inner="이메일 인증" margin="90px 0 0 0" />
                </Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}

export default Account_Auth_AuthBox 