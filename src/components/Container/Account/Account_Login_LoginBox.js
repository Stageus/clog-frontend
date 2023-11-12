import React from "react"

// Container,Component



//styled-components
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg
import { ReactComponent as Svgclog } from "../../../image/Clog_logo.svg"
import { ReactComponent as Svgidcard } from "../../../image/id-card-clip-alt.svg"
import { ReactComponent as Svglock } from "../../../image/lock.svg"

//router
import { useNavigate } from "react-router-dom"

//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { authOrfindPageAtom } from "../../../recoil/AccountAtom"



const Account_Login_LoginBox = () => {
    // props ============================================================

    // state ============================================================
    const [focus, setFocus] = React.useState(-1);
    const [authOrfind, setAuthOrfind] = useRecoilState(authOrfindPageAtom)//true이면 auth, false이면 findPW
    // event ============================================================
    const navigate = useNavigate()
    const clickEvent = (e) => {
        let id = e.target.id
        if (id == "gopromotemain") {
            // navigate("/promote/main")
            loginEvent()
        }
        else if (id == "goauth") {
            setAuthOrfind(true)
            navigate("/account/auth")
        }
        else if (id == "gofindPW") {
            setAuthOrfind(false)
            navigate("/account/auth")
        }
        else if (id == "entryyear" || id == "entryinput") {
            setFocus(0)
            document.getElementById("entryinput").focus();
        }
        else if (id == "password" || id == "pwinput") {
            setFocus(1)
            document.getElementById("pwinput").focus();
        }
        else {
            setFocus(-1)
        }
    }
    const loginEvent = async () => {
        console.log("실행")
        const url = "https://7208-211-207-13-52.ngrok-free.app/auth/login";
        const response = await fetch(url, {
            "method": "POST",
            "credentials": "include",
            "headers": {
                "Content-Type": "application/json",
            },
            "body": JSON.stringify({
                "email": "test123@inha.edu",
                "pw": "1234Asd.."
            })
        });
        console.log(response)
        const result = await response.json()//왠지는 몰겠으나 .json이 비동기함수여서 동기함수로 바꿔주기
        console.log(result)//이렇게 하고 실행하면 console 창에 뜬다
        if (response.status == 200) {
            alert(result.data.userId)
        } else {
            alert("에러")
        }

        const response2 = await fetch("https://7208-211-207-13-52.ngrok-free.app/account")
        const result2 = await response2.json()//왠지는 몰겠으나 .json이 비동기함수여서 동기함수로 바꿔주기
        console.log(result2)//이렇게 하고 실행하면 console 창에 뜬다
        console.log("2", response2)

    }
    return (
        <React.Fragment>
            <Flexdiv onClick={clickEvent} width="100%" flex="0_1_auto_row_center_center">
                <Flexdiv width="460px" margin="50px 0 100px 0">
                    {/* 로고 */}
                    <Flexdiv flex="0_1_auto_row_center_center" margin="50px 0">
                        <Svgclog width="200px" height="200px" />
                    </Flexdiv>
                    {/* 입력 박스 */}
                    <Flexdiv flex="0_1_auto_column_space-evenly_center" width="460px" height="270px" radius="10px" border="1px solid #c4c4c4">
                        {/* 학번,비밀번호 입력 */}
                        <Flexdiv flex="0_1_auto_column_center_center" width="400px" height="100px" radius="10px" >
                            <Flexdiv id="entryyear" flex="0_1_auto_row_center_center" width="400px" height="48px" customBorder={"1px_1px_1px_1px_solid_" + ((focus == 0) ? "#333333" : "#c4c4c4")} radius="10px 10px 0px 0px">
                                <Flexdiv id="entryyear" flex="0_1_auto_row_center_center" margin="0px 5px 0px 8px"><Svgidcard id="entryyear" flex="0_1_auto" width="28px" height="28px" fill={(focus == 0) ? "#333333" : "#c4c4c4"} /></Flexdiv>
                                <Span id="entryyear" flex="0_1_auto_row_flex-start_center" width="60px" height="100%" color="#c4c4c4" margin="0 5px">학번</Span>
                                <Flexinput id="entryinput" flex="1_1_auto" height="30px" margin="1px 2px" />
                            </Flexdiv>
                            <Flexdiv id="password" flex="0_1_auto_row_center_center" width="400px" height="48px" customBorder={"1px_1px_1px_1px_solid_" + ((focus == 1) ? "#333333" : "#c4c4c4")} radius="0px 0px 10px 10px">
                                <Flexdiv id="password" margin="0px 3px 0px 8px" flex="0_1_auto_row_center_center"><Svglock id="password" flex="0_1_auto" width="28px" height="28px" fill={(focus == 1) ? "#333333" : "#c4c4c4"} /></Flexdiv>
                                <Span id="password" flex="0_1_auto_row_center_center" width="60px" height="100%" color="#c4c4c4" margin="0 5px">비밀번호</Span>
                                <Flexinput id="pwinput" flex="1_1_auto" height="30px" margin="1px 2px" />
                            </Flexdiv>
                        </Flexdiv>
                        {/* 로그인 버튼 */}
                        <Flexbutton id="gopromotemain" flex="0_1_auto_row_center_center" width="400px" height="55px" color="#ffffff" backgroundColor="#333333" font="24px_700" radius="10px">로그인</Flexbutton>
                    </Flexdiv>
                    {/* 회원가입, 비밀번호찾기 페이지 이동 */}
                    <Flexdiv flex="0_1_auto_column_center_center" margin="50px 0">
                        <Flexdiv flex="0_1_auto_row_center_center">
                            <Span flex="0_1_auto_row_center_center">클로그가 처음이신가요?</Span>
                            <Flexbutton id="goauth" type="button" font="16px" color="#4B7BE5" margin="0 5px">회원가입하기</Flexbutton>
                        </Flexdiv>
                        <Flexdiv flex="0_1_auto_row_center_center">
                            <Span flex="0_1_auto_row_center_center">로그인에 문제가 있으신가요?</Span>
                            <Flexbutton id="gofindPW" type="button" font="16px" color="#4B7BE5" margin="0 5px">비밀번호 찾기</Flexbutton>
                        </Flexdiv>
                    </Flexdiv>
                </Flexdiv>
            </Flexdiv>
        </React.Fragment >
    )
}

export default Account_Login_LoginBox