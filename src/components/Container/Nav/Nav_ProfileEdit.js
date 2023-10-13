import React from "react"

//styled-components 
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg
import { ReactComponent as Svgbook } from "../../../image/book-bookmark.svg"
import { ReactComponent as Svguser } from "../../../image/user.svg"

//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { accountInfoAtom } from "../../../recoil/NavAtom"
//router
import { useNavigate } from 'react-router-dom'

const BoxTitle = styled(Flexdiv)`
    border-bottom: 1px solid #dadada;
`

const ProfileBox = styled(Flexdiv)`
    position: absolute;
    top: 0px;
    left: 250px;
`


const Nav_ProfileEdit = () => {
    // props ======================================================

    // state ======================================================
    const [account, setAccount] = useRecoilState(accountInfoAtom);//계정정보(이름,퍼컬,전공,입학년도,가입일)

    // event ======================================================
    const navigate = useNavigate();
    const clickEvent = (e) => {
        let id = e.target.id
        console.log(id)
        if (id == "goResetPW") {
            navigate("/account/reset-pw")
        }
        else if (id == "porfileEditSave") {
            let nameinput = document.getElementById("nameinput").value
            let majorinput = document.getElementById("majorinput").value
            setAccount((account) => {
                let newAccount = { ...account }
                newAccount.name = nameinput
                newAccount.major = majorinput
                return newAccount
            })
            alert("저장되었습니다.")
        }
    }


    return (
        <React.Fragment>
            <ProfileBox id="profileBox" onClick={clickEvent} width="460px" height="270px" radius="10px" outline="1px solid #dadada" backgroundColor='#ffffff'>
                {/* 프로필 설정 제목 */}
                <BoxTitle flex="0_0_auto_row_space-between_center" width="100%" height="40px" margin="10px 0">
                    <Span flex="0_0_auto" margin="0 0 0 20px">프로필 설정</Span>
                </BoxTitle>
                <Flexdiv flex="0_0_auto_column_flex-start_center" width="460px" height="210px">
                    {/* 이름 인풋 */}
                    <Flexdiv flex="0_0_auto_row_flex-start_center" width="430px" height="50px" radius="10px" outline="1px solid #dadada" margin="5px 0px">
                        <Flexdiv flex="0_0_auto" width="24px" height="24px" margin="13px"><Svguser fill="#c4c4c4" /></Flexdiv>
                        <Flexinput id="nameinput" flex="0_0_auto" type="text" placeholder={account.name} width="380px" height="50px" />
                    </Flexdiv>
                    {/* 학과 인풋 */}
                    <Flexdiv flex="0_0_auto_row_flex-start_center" width="430px" height="50px" radius="10px" outline="1px solid #dadada" margin="5px 0px">
                        <Flexdiv flex="0_0_auto" width="24px" height="24px" margin="13px"><Svgbook fill="#c4c4c4" /></Flexdiv>
                        <Flexinput id="majorinput" flex="0_0_auto" type="text" placeholder={account.major} width="380px" height="50px" />
                    </Flexdiv>

                    <Flexdiv flex="0_0_auto_row_flex-end_center" width="430px" margin="20px 0 0 0">
                        {/* 비밀번호 재설정 페이지 이동 */}
                        <Flexdiv id="goResetPW" flex="0_0_auto_row_space-evenly_center" width="220px" height="36px" outline="2px solid #333333" radius="10px" margin="0 6px 0 0">
                            <Span id="goResetPW" flex="0_0_auto">비밀번호 재설정 이동</Span>
                            <Img id="goResetPW" flex="0_0_auto" src={require("../../../image/right-arrow.png")} width="30px" />
                        </Flexdiv>
                        {/* 저장버튼 */}
                        <Flexbutton id="porfileEditSave" type="button" width="50px" height="40px" radius="10px" backgroundColor="#333333" color="#ffffff">저장</Flexbutton>
                    </Flexdiv>
                </Flexdiv>
            </ProfileBox>
        </React.Fragment>
    )
}

export default Nav_ProfileEdit