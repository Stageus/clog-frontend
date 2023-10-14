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

const Promote_Category = () => {
    const bigCategory = useRecoilValue(bigCategoryAtom);//카테고리 대분류
    const belong = useRecoilValue(belongAtom)// 동아리 소속 / 중앙동아리,일반동아리 제외(대분류 포함)
    const belongList = []
    for (let index = 0; index < belong.length - 2; index++) {
        belongList[index] = belong[index + 2]
    }

    return (
        <React.Fragment>
            <Flexdiv flex="0_1_auto_row_center_center" width="100%" height="56px" backgroundColor="#f2ffff">
                {bigCategory.map((elem) => <Promote_Category_Button elem={elem} />)}
                {belongList.map((elem) => <Flexbutton flex="0_1_auto_row_center_center" backgroundColor="#f0f0f0" width="fit-content" height="30px" radius="10px" padding="0 10px" margin="0 6px">{elem.belong}</Flexbutton>)}
            </Flexdiv>
        </React.Fragment>
    )
}

export default Promote_Category