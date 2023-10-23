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


const Account_Login_LoginBox = () => {
    // props ============================================================

    // state ============================================================

    // event ============================================================
    const navigate = useNavigate()
    const clickEvent = (e) => {
        let id = e.target.id
        if (id == "gopromotemain") {
            navigate("/promote/main")
        }
        else if (id == "goauth") {
            navigate("/account/auth")
        }
        else if (id == "gofindPW") {
            navigate("/account/find-pw")
        }
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
                        <Flexdiv flex="0_1_auto_column_center_center" width="400px" height="100px" radius="10px" border="1px solid #c4c4c4">
                            <Flexdiv flex="0_1_auto_row_center_center" width="400px" height="48px" customBorder="0px_0px_1px_0px_solid_#c4c4c4">
                                <Flexdiv margin="6px" flex="0_1_auto_row_center_center"><Svgidcard flex="0_1_auto" width="28px" height="28px" fill="#c4c4c4" /></Flexdiv>
                                <Span flex="0_1_auto_row_flex-start_center" width="60px" height="100%" color="#c4c4c4" margin="0 5px">학번</Span>
                                <Flexinput flex="1_1_auto" height="30px" margin="1px 2px" />
                            </Flexdiv>
                            <Flexdiv flex="0_1_auto_row_center_center" width="400px" height="48px">
                                <Flexdiv margin="5px" flex="0_1_auto_row_center_center"><Svglock flex="0_1_auto" width="30px" height="30px" fill="#c4c4c4" /></Flexdiv>
                                <Span flex="0_1_auto_row_center_center" width="60px" height="100%" color="#c4c4c4" margin="0 5px">비밀번호</Span>
                                <Flexinput flex="1_1_auto" height="30px" margin="1px 2px" />
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