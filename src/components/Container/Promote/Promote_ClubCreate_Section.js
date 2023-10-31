import React from "react"

// Container,Component
import Promote_PrPost from "../../Component/Promote/Promote_PrPost"

//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { categoryDoneAtom, checkClubNameAtom } from "../../../recoil/PromoteAtom"

//styled-components 
import { Flexdiv, Flexinput, P, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg

//router
import { Link, useNavigate } from 'react-router-dom'
import Promote_ClubCreate_InflexInfo from "../../Component/Promote/Promote_ClubCreate_InflexInfo"
import Promote_ClubCreate_FlexInfo from "../../Component/Promote/Promote_ClubCreate_FlexInfo"

const Promote_ClubCreate_Section = () => {
    // props ============================================================

    // state ============================================================
    const checkClubname = useRecoilValue(checkClubNameAtom)
    const categoryDone = useRecoilValue(categoryDoneAtom)
    // event ============================================================
    const navigate = useNavigate()
    const clickEvent = (e) => {
        let id = e.target.id
        //동아리 만들기 버튼 클릭
        if (id == "createdone") {
            console.log(id)
            exception()
        }
    }


    //동아리 생성 예외처리
    const exception = () => {
        if (!checkClubname) {
            alert("동아리 이름 중복체크를 확인해주세요.")
        }
        else if (!categoryDone) {
            alert("카테고리를 선택해주세요")
        }
        else {
            alert("동아리 생성이 완료되었습니다.\n가입한 동아리 목록에서 동아리방에 접속해주세요.")
            navigate("/promote/main")
        }
    }

    return (
        <React.Fragment>
            <Flexdiv onClick={clickEvent} flex="0_1_auto_column_center_center" width="100%">
                <Flexdiv flex="0_1_auto_column_center_center" width="940px" margin="100px">
                    <Flexdiv flex="0_1_auto_row_flex-start_center" width="900px" height="100px" font="36px_700" customBorder="0px_0px_1px_0px_solid_#c4c4c4" margin="0 40px" padding="0 40px">동아리 만들기</Flexdiv>
                    <Flexdiv flex="0_1_auto_row_flex-start_center" width="900px" height="50px" color="#EB5149" >동아리 이름과 분류는 이후에 수정이 불가능합니다.</Flexdiv>
                    <Promote_ClubCreate_InflexInfo />
                    <Promote_ClubCreate_FlexInfo />
                    {/* 동아리 만들기 */}
                    <Flexbutton id="createdone" flex="0_1_auto_row_center_center" width="400px" height="60px" radius="10px" font="24Px_800" backgroundColor="#333333" color="#ffffff" margin="50px 0">동아리 만들기</Flexbutton>
                </Flexdiv>
            </Flexdiv>
        </React.Fragment >
    )
}

export default Promote_ClubCreate_Section
