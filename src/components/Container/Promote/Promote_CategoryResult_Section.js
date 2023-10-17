import React from "react"

// Container,Component

//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { belongAtom, bigCategoryAtom, categoryResultClubAtom, smallCategoryAtom } from "../../../recoil/PromoteAtom"

//styled-components 
import { Flexdiv, Flexinput, P, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg
//router
import { Link, useNavigate } from 'react-router-dom'
import Promote_CategoryResult_Club from "../../Component/Promote/Promote_CategoryResult_Club"
import Promote_Category_DropBox from "../../Component/Promote/Promote_Category_DropBox"




const Promote_CategoryResult_Section = () => {
    // props ============================================================

    // state ============================================================
    const navigate = useNavigate()
    const clubInfo = useRecoilValue(categoryResultClubAtom)
    const smallCategory = useRecoilValue(smallCategoryAtom)//카테고리 소분류
    const bigCategory = useRecoilValue(bigCategoryAtom);//카테고리 대분류
    const belong = useRecoilValue(belongAtom)// 동아리 소속 / 중앙동아리,일반동아리 제외(대분류 포함)
    const belongList = []
    const smallList = ["전체"] //임시로 공연 대분류의 소분류만 저장

    // belong에서 중앙동아리, 일반동아리 제외
    for (let index = 0; index < belong.length - 2; index++) {
        belongList[index] = { ...belong[index + 2] }
        belongList[index].num = bigCategory.length + index
    }
    //임시로 공연 대분류의 소분류만 저장
    for (let index = 0; index < 6; index++) {
        smallList[index + 1] = smallCategory[index].name
    }
    // event ============================================================



    const clickEvent = (e) => {
        let id = e.target.id
        if (id == "goclubprofile") {
            console.log(id)
            navigate("/promote/club-profile")
        }
    }
    return (
        <React.Fragment>
            <Flexdiv onClick={clickEvent} flex="0_1_auto_column_center_center" width="100%" margin="120px 0">
                <Flexdiv flex="0_1_auto_column_center_center" width="1330px" margin="40px 0">
                    {/* 제목 ex)공연 동아리 */}
                    <Flexdiv flex="0_1_auto" width="1150px" height="50px" fontSize="36px">{bigCategory[0].content} 동아리</Flexdiv>
                    {/* 드롭다운 박스 */}
                    <Flexdiv flex="0_1_auto_column_center_flex-start" position="relative" width="1150px" margin="20px 10px 40px 0">
                        <Promote_Category_DropBox smallList={smallList} width={"200px"} />
                    </Flexdiv>
                </Flexdiv>

                <Flexdiv flex="0_1_auto_row_center_center_wrap" width="1330px">
                    {clubInfo.map((elem) => <Promote_CategoryResult_Club elem={elem} />)}
                </Flexdiv>
            </Flexdiv>

        </React.Fragment>
    )
}

export default Promote_CategoryResult_Section