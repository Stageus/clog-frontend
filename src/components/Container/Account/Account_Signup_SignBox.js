import React, { forwardRef } from "react"

// Container,Component
import Account_Input from "../../Component/Account/Account_Input"
import Promote_Category_DropBox from "../../Component/Promote/Promote_Category_DropBox"

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
                    <Account_Input flex="0_1_auto_row_center_center" placeholder="이름" />
                    <Flexdiv flex="0_1_auto_column_center_center" position="relative">
                        <Promote_Category_DropBox list={majorlist} width={"460px"} height={"50px"} />
                    </Flexdiv>

                </Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}

export default Account_Signup_SignBox