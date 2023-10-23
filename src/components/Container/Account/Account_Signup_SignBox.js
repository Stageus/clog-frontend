import React, { forwardRef } from "react"

// Container,Component
import Account_Input from "../../Component/Account/Account_Input"
import Promote_Category_DropBox from "../../Component/Promote/Promote_Category_DropBox"
import Account_PwInput from "../../Component/Account/Account_PwInput"
import Account_Button from "../../Component/Account/Account_Button"

//styled-components
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg
import { ReactComponent as Svgclog } from "../../../image/Clog_logo.svg"
import { ReactComponent as Svguser } from "../../../image/user.svg"
import { ReactComponent as Svggraduation } from "../../../image/graduation-cap.svg"
import { ReactComponent as Svgmajor } from "../../../image/book-bookmark.svg"
import { ReactComponent as Svgpassword } from "../../../image/password.svg"

//router
import { useNavigate } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { majorAtom } from "../../../recoil/PromoteAtom"



const Account_Signup_SignBox = () => {
    // props ============================================================

    // state ============================================================
    const major = useRecoilValue(majorAtom)
    const majorlist = ["학과"]
    const entryYear = ["학번", 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    for (let index = 0; index < major.length; index++) {
        majorlist[index + 1] = major[index].major
    }
    // event ============================================================

    return (
        <React.Fragment>
            <Flexdiv width="100%" flex="0_1_auto_row_center_center">
                <Flexdiv flex="0_1_auto_column_center_center" width="460px" margin="0px 0 50px 0">
                    {/* 로고 */}
                    <Flexdiv flex="0_1_auto_row_center_center" margin="50px 0">
                        <Svgclog width="200px" height="200px" />
                    </Flexdiv>
                    {/* 이름 입력 */}
                    <Account_Input flex="0_1_auto_row_flex-start_center" placeholder="이름" />
                    <Flexdiv flex="0_1_auto_column_center_center" width="460px" height="120px">
                        {/* 학번 */}
                        <Flexdiv flex="0_1_auto" width="460px" position="relative_10px">
                            <Promote_Category_DropBox list={entryYear} width={"460px"} height={"50px"} />
                        </Flexdiv>
                        {/* 학과 */}
                        <Flexdiv flex="0_1_auto" width="460px" position="relative_-55px" margin="5px 0">
                            <Promote_Category_DropBox list={majorlist} width={"460px"} height={"50px"} />
                        </Flexdiv>
                    </Flexdiv>
                    <Account_PwInput flex="0_1_auto_row_center_center" placeholder="비밀번호" />
                    <Account_PwInput flex="0_1_auto_row_center_center" placeholder="비밀번호 재확인" />
                    <Account_Button id="gosignup" flex="0_1_auto_row_center_center" height="55px" backgroundColor="#333333" font="24px_700" inner="회원가입" margin="100px 0 0 0" />

                </Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}

export default Account_Signup_SignBox