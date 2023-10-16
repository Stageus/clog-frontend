import React from "react"

// Container,Component
import Promote_Category_Button from "../../Component/Promote/Promote_Category_Button"
//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { belongAtom, bigCategoryAtom } from "../../../recoil/PromoteAtom"

//styled-components 
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg

//router
import { Link, useNavigate } from 'react-router-dom'

const CategoryDiv = styled(Flexdiv)`

`
const Promote_Category = () => {
    // props ======================================================

    // state ======================================================
    const navigate = useNavigate();
    const bigCategory = useRecoilValue(bigCategoryAtom);//카테고리 대분류
    const belong = useRecoilValue(belongAtom)// 동아리 소속 / 중앙동아리,일반동아리 제외(대분류 포함)
    const belongList = []

    // belong에서 중앙동아리, 일반동아리 제외
    for (let index = 0; index < belong.length - 2; index++) {
        belongList[index] = { ...belong[index + 2] }
        belongList[index].num = bigCategory.length + index
    }
    // event ======================================================
    const clickEvent = (e) => {
        let id = e.target.id

        if (id.includes("categoryBtn")) {
            console.log(id)
            navigate("/promote/category-result")
        }
    }


    return (
        <React.Fragment>
            <CategoryDiv onClick={clickEvent} position="fixed_56px_0_0_0px" width="100%" height="56px" backgroundColor="#ffffff">
                <Flexdiv flex="0_1_auto_row_center_center" position="absolute_0_0_0_7%" width="97%" height="56px">
                    {bigCategory.map((elem) => <Promote_Category_Button elem={elem} />)}
                    {belongList.map((elem) => <Promote_Category_Button elem={elem} />)}
                </Flexdiv>
            </CategoryDiv>
        </React.Fragment>
    )
}

export default Promote_Category