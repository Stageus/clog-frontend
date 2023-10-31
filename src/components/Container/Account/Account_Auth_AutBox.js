import React from "react"

// Container,Component
import Account_Input from "../../Component/Account/Account_Input"
import Account_Button from "../../Component/Account/Account_Button"
import Account_LockedInput from "../../Component/Account/Account_LockedInput"
import Account_Auth_Timer from "../../Component/Account/\bAccount_Auth_Timer"

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

//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { authOrfindPageAtom, resendAuthAtom } from "../../../recoil/AccountAtom"

const UnderlineSpan = styled(Span)`
    text-decoration: underline;
`
const Account_Auth_AuthBox = () => {
    // props ============================================================

    // state ============================================================
    const [authCheck, setAuthCheck] = React.useState("#c4c4c4")//인증약관 체크여부
    const [emailCheck, setEmailCheck] = React.useState(0)//이메일 입력여부
    const [emailValue, setEmailValue] = React.useState("이메일 입력")
    // const [afterRequireTime, setAfterRequireTime] = React.useState("")//인증번호 요청 후 3초
    const [resendAuth, setResendAuth] = useRecoilState(resendAuthAtom)
    const [authOrfind, setAuthOrfind] = useRecoilState(authOrfindPageAtom)//true이면 auth, false이면 findPW

    const svgpassword = <Svgpassword flex="0_1_auto" width="26px" height="26px" fill="#c4c4c4" />
    const svgmessage = <Svgmessage flex="0_1_auto" width="26px" height="26px" fill="#c4c4c4" />
    // event ============================================================
    const navigate = useNavigate()
    const clickEvent = (e) => {
        let id = e.target.id
        if (id == "gosignup") {
            //인증번호 일치여부 함수
            navigate("/account/signup")
        }
        else if (id == "authcheck") {
            setAuthCheck((authCheck == "#4B7BE5") ? "#c4c4c4" : "#4B7BE5")//체크함
        }
        else if (id == "authsend") {
            setAuthCheck((authCheck == "#4B7BE5") ? "#4B7BE5" : "#EB5149")//체크안함
            checkEmail()
        }
    }

    const checkEmail = () => {
        let value = document.getElementById("emailinput").value
        if (authCheck == "#4B7BE5") {
            if (value.length == 0) {
                setEmailCheck(-1)
            }
            else {
                setEmailCheck(1)//약관,이메일 인증 완료
                setEmailValue(value)
            }
        }
        else { setEmailCheck(0) }
    }

    React.useEffect(() => {
        setResendAuth(false)
    }, [])
    return (
        <React.Fragment>
            <Flexdiv onClick={clickEvent} width="100%" flex="0_1_auto_row_center_center">
                <Flexdiv flex="0_1_auto_column_center_center" width="460px" margin="0px 0 50px 0">
                    {/* 로고 */}
                    <Flexdiv flex="0_1_auto_row_center_center" margin="50px 0">
                        <Svgclog width="200px" height="200px" />
                    </Flexdiv>
                    <Flexdiv flex="0_1_auto_column_flex-start_center" height="340px">
                        {/* 약관동의 */}
                        {authOrfind && <Flexdiv flex="0_1_auto_row_center_center" width="460px" height="50px" radius="10px" border={(authCheck == "#EB5149") ? "1px solid #EB5149" : "1px solid #c4c4c4"} backgroundColor={(emailCheck != 1) ? "#ffffff" : "#c4c4c4"} margin="5px 0">
                            <Flexdiv id={(emailCheck != 1) ? "authcheck" : ""} flex="0_1_auto_row_center_center" margin="0 12px"><Svgcheck id={(emailCheck != 1) ? "authcheck" : ""} flex="0_1_auto" width="28px" height="28px" fill={authCheck} /></Flexdiv>
                            <Span flex="0_1_auto" color="#4B7BE5">[필수]</Span><Span flex="1_1_auto">인증 약관 전체동의</Span>
                            <UnderlineSpan flex="0_1_atuo_row_center_center" width="60px" height="50px" font="16px" color="#4B7BE5">보기</UnderlineSpan>
                        </Flexdiv>}

                        {/* 이메일 입력 */}
                        {(emailCheck != 1) ? <Account_Input id="emailinput" svg={svgmessage} flex="0_1_auto_row_center_center" placeholder="이메일 입력" />
                            : <Account_LockedInput svg={svgmessage} id="emailinput" flex="0_1_auto_row_center_center" placeholder={emailValue} />
                        }
                        {/* 인증번호 발송 버튼 */}
                        <Account_Button id={(emailCheck != 1) ? "authsend" : ""} flex="0_1_auto_row_center_center" height="50px" font="16px_600" backgroundColor={(emailCheck != 1) ? "#333333" : "#c4c4c4"} margin="5px 0" inner="인증번호 발송" />

                        {/* 이메일, 인증번호 확인 문구 */}
                        {(emailCheck == -1) && <Flexdiv flex="0_1_auto_row_flex-start_center" width="460px" font="14px" color="#EB5149" margin="5px 0">이메일을 입력해주세요</Flexdiv>}
                        {(authCheck == "#EB5149") && <Flexdiv flex="0_1_auto_row_flex-start_center" width="460px" font="14px" color="#EB5149" margin="5px 0">인증 약관에 동의해주세요</Flexdiv>}

                        {/* 인증번호 입력 */}
                        {(emailCheck == 1) ? <Account_Auth_Timer id="authtimer" svg={svgpassword} flex="0_1_auto_row_center_center" placeholder="인증번호 입력" />
                            : <Account_LockedInput svg={svgpassword} flex="0_1_auto_row_center_center" placeholder="인증번호 입력" />}
                        {/* 인증번호 재발송 */}
                        {resendAuth && <Account_Button flex="0_1_auto_row_center_center" height="50px" backgroundColor="#333333" font="16px_600" inner="인증번호 재발송" margin="5px 0" />}

                    </Flexdiv>

                    {/* 이메일 인증 버튼  or 비밀번호 찾기 버튼*/}
                    <Account_Button id="gosignup" flex="0_1_auto_row_center_center" height="55px" backgroundColor="#333333" font="24px_700" inner={authOrfind ? "이메일 인증" : "비밀번호 찾기"} margin="90px 0 0 0" />
                </Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}

export default Account_Auth_AuthBox 