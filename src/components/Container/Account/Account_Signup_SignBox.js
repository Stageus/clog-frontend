import React from "react"

// Container,Component
import Account_Input from "../../Component/Account/Account_Input"
import Account_DropDown from "../../Component/Account/Account_DropDown"
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
import { ReactComponent as Svglock } from "../../../image/lock.svg"

//router
import { useNavigate } from "react-router-dom"
import { majorAtom } from "../../../recoil/PromoteAtom"

//recoil
import { useRecoilState, useRecoilValue } from "recoil"




const Account_Signup_SignBox = () => {
    // props ============================================================

    // state ============================================================
    const [entryYeardrop, setEntryYeardrop] = React.useState(false)//학번 선택시 true
    const [majordrop, setMajordrop] = React.useState(false)//학과 선택시 true
    const [exception, setException] = React.useState("")
    const major = useRecoilValue(majorAtom)
    const majorlist = ["학과"]
    const entryYear = ["학번", 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    for (let index = 0; index < major.length; index++) {
        majorlist[index + 1] = major[index].major
    }
    const svguser = <Svguser flex="0_1_auto" width="25px" height="25px" fill="#c4c4c4" />
    const svglock = <Svglock flex="0_1_auto" width="25px" height="25px" fill="#c4c4c4" />
    const svggraduation = <Svggraduation flex="0_1_auto" width="25px" height="25px" fill="#c4c4c4" />
    const svgmajor = <Svgmajor flex="0_1_auto" width="25px" height="25px" fill="#c4c4c4" />
    // event ============================================================
    const navigate = useNavigate()
    const clickEvent = (e) => {
        let id = e.target.id
        if (id == "goprmain") {
            if (checkException()) {
                //fetchPost
                navigate("/promote/main")
            }
        }

        if (id.includes("entryyear")) {
            let num = id.split("_")[1]
            if (num != 0) {
                setEntryYeardrop(true)
            }
            else { setEntryYeardrop(false) }
        }

        if (id.includes("major")) {
            let num = id.split("_")[1]
            if (num != 0) {
                setMajordrop(true)
            }
            else { setMajordrop(false) }
        }
    }

    const checkException = () => {
        let name = document.getElementById("nameinput").value
        let pw = document.getElementById("pwinput").value
        let repw = document.getElementById("repwinput").value

        if (name.length == 0) {
            setException("이름을 입력해 주세요")
            return false
        }
        else if (!majordrop) {
            setException("학과를 선택해 주세요")
            return false
        }
        else if (!entryYeardrop) {
            setException("학번을 선택해 주세요")
            return false
        }
        else if (pw.length == 0) {
            setException("비밀번호를 입력해 주세요")
            return false
        }
        else if (pw != repw) {
            setException("재입력 비밀번호를 확인해 주세요")
            return false
        }
        return true
    }

    // const postAccountInfo = async() => {

    // }

    return (
        <React.Fragment>
            <Flexdiv onClick={clickEvent} width="100%" flex="0_1_auto_row_center_center">
                <Flexdiv flex="0_1_auto_column_center_center" width="460px" margin="0px 0 50px 0">
                    {/* 로고 */}
                    <Flexdiv flex="0_1_auto_row_center_center" margin="50px 0">
                        <Svgclog width="200px" height="200px" />
                    </Flexdiv>
                    {/* 이름 입력 */}
                    <Account_Input id="nameinput" svg={svguser} flex="0_1_auto_row_flex-start_center" placeholder="이름" />
                    <Flexdiv flex="0_1_auto_column_center_center" width="460px" height="120px">
                        {/* 학번 */}
                        <Flexdiv flex="0_1_auto" width="460px" position="relative_10px">
                            <Account_DropDown svg={svggraduation} dropboxname="entryyear" list={entryYear} width={"460px"} height={"50px"} />
                        </Flexdiv>
                        {/* 학과 */}
                        <Flexdiv flex="0_1_auto" width="460px" position="relative_-55px" margin="5px 0">
                            <Account_DropDown svg={svgmajor} dropboxname="major" list={majorlist} width={"460px"} height={"50px"} />
                        </Flexdiv>
                    </Flexdiv>
                    {/* 비밀번호 입력,재입력 */}
                    <Account_PwInput id="pwinput" svg={svglock} flex="0_1_auto_row_center_center" placeholder="비밀번호" />
                    <Account_PwInput id="repwinput" svg={svglock} flex="0_1_auto_row_center_center" placeholder="비밀번호 재확인" />

                    {/* 예외처리 문구 */}
                    {(exception.length != 0) && <Span flex="0_1_auto" width="450px" height="20px" margin="1px" color="#EB5149">{exception}</Span>}
                    {/* 회원가입 버튼 */}
                    <Account_Button id="goprmain" flex="0_1_auto_row_center_center" height="55px" backgroundColor="#333333" font="24px_700" inner="회원가입" margin="100px 0 0 0" />

                </Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}

export default Account_Signup_SignBox