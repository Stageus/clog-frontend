import React from "react"

// Container,Component
import Account_Input from "../../Component/Account/Account_Input"
import Account_Button from "../../Component/Account/Account_Button"
import Account_LockedInput from "../../Component/Account/Account_LockedInput"
import Account_Auth_Timer from "../../Component/Account/Account_Auth_Timer"
import { FetchPost } from "../../../module/fetch"

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
import { authOrfindPageAtom, resendAuthAtom, authEnteredEmailAtom } from "../../../recoil/AccountAtom"

const UnderlineSpan = styled(Span)`
    text-decoration: underline;
`
const Account_Auth_AuthBox = () => {
    // props ============================================================

    // state ============================================================
    const [authCheck, setAuthCheck] = React.useState("#c4c4c4")//인증약관 체크여부
    const [emailCheck, setEmailCheck] = React.useState(0)//이메일 입력여부, -1 = 입력 x
    const [resendAuth, setResendAuth] = useRecoilState(resendAuthAtom)
    const authOrfind = useRecoilValue(authOrfindPageAtom)//true이면 auth, false이면 findPW
    const [enteredemail, setEnteredemail] = useRecoilState(authEnteredEmailAtom)//입력받은 이메일
    const svgpassword = <Svgpassword flex="0_1_auto" width="26px" height="26px" fill="#c4c4c4" />
    const svgmessage = <Svgmessage flex="0_1_auto" width="26px" height="26px" fill="#c4c4c4" />
    // event ============================================================

    const navigate = useNavigate()
    const clickEvent = (e) => {
        let id = e.target.id
        if (id == "gosignup") {
            checkEnteredCode()
            return;
        }

        if (id == "authcheck") {
            setAuthCheck((authCheck == "#4B7BE5") ? "#c4c4c4" : "#4B7BE5")//체크함
            return;
        }

        if (id == "authsend" && authOrfind == true) {
            setAuthCheck((authCheck == "#4B7BE5") ? "#4B7BE5" : "#EB5149")//체크안함
            checkEmail()
            return;
        }

        if (id === "authsend" && authOrfind == false) {
            checkEmail()
            return;
        }

        if (id === "resendauth") {
            resendCode()
            return;
        }
    }

    //이메일 확인
    const checkEmail = () => {
        let leng = document.getElementById("emailinput").value.length
        if (authCheck == "#4B7BE5" || authOrfind === false) {
            if (leng == 0) {
                setEmailCheck(-1)
            }
            else {
                sendCode()//서버 post 통신
            }
        }
        else { setEmailCheck(0) }
    }

    //인증번호 발송
    const sendCode = async () => {
        console.log("인증번호 발송?")
        let email = document.getElementById("emailinput").value
        let communication = await FetchPost("/auth/send-code", {
            "email": email
        })
        if (communication === 200) {
            setEmailCheck(1)
            setEnteredemail(email)
        }
    }

    //인증번호 재발송
    const resendCode = async () => {
        let communication = await FetchPost("/auth/send-code", {
            "email": enteredemail
        })
    }

    //인증번호 확인
    const checkEnteredCode = async () => {
        let communication = await FetchPost("/auth/signup/verify-email", {
            email: enteredemail,
            code: document.getElementById("authtimer").value
        })
        if (communication === 200) {
            if (authOrfind === true) {
                navigate("/account/signup")
            }
            else {
                navigate("/account/reset-pw")//비밀번호 변경 페이지 이동
            }
        }
    }

    //recoil 초기화 목적
    React.useEffect(() => {
        setResendAuth(false)
        setEnteredemail("")
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
                            : <Account_LockedInput svg={svgmessage} id="emailinput" flex="0_1_auto_row_center_center" placeholder="이메일 입력" />
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
                        {resendAuth && <Account_Button id="resendauth" flex="0_1_auto_row_center_center" height="50px" backgroundColor="#333333" font="16px_600" inner="인증번호 재발송" margin="5px 0" />}

                    </Flexdiv>

                    {/* 이메일 인증 버튼  or 비밀번호 찾기 버튼*/}
                    {(emailCheck == 1) && <Account_Button id="gosignup" flex="0_1_auto_row_center_center" height="55px" backgroundColor="#333333" font="24px_700" inner={authOrfind ? "이메일 인증" : "비밀번호 찾기"} margin="90px 0 0 0" />}
                </Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}

export default Account_Auth_AuthBox 