import React from "react"

// Container,Component

//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { belongAtom, bigCategoryAtom, categoryResultClubAtom } from "../../../recoil/PromoteAtom"

//styled-components 
import { Flexdiv, Flexinput, P, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg

//router
import { Link, useNavigate } from 'react-router-dom'
import Promote_CategoryResult_Club from "../../Component/Promote/Promote_CategoryResult_Club"

const Promote_CategoryResult_Section = () => {
    // props ============================================================

    // state ============================================================
    const clubInfo = useRecoilValue(categoryResultClubAtom)
    const bigCategory = useRecoilValue(bigCategoryAtom);//카테고리 대분류
    const belong = useRecoilValue(belongAtom)// 동아리 소속 / 중앙동아리,일반동아리 제외(대분류 포함)
    const belongList = []

    // belong에서 중앙동아리, 일반동아리 제외
    for (let index = 0; index < belong.length - 2; index++) {
        belongList[index] = { ...belong[index + 2] }
        belongList[index].num = bigCategory.length + index
    }
    // event ============================================================

    console.log("clubinfo", clubInfo)

    return (
        <React.Fragment>
            <Flexdiv flex="0_1_auto_column_center_center" width="100%" margin="120px 0">
                <Flexdiv flex="0_1_auto_row_center_center" width="1330px" backgroundColor="#2fffff">
                    {/* 제목 ex)공연 동아리 */}
                    <Flexdiv flex="0_1_auto" width="1000px" height="50px" fontSize="36px">{bigCategory[0].content} 동아리</Flexdiv>
                    {/* 드롭다운 박스 */}
                    <Flexbutton>

                    </Flexbutton>
                </Flexdiv>

                <Flexdiv flex="0_1_auto_row_center_center_wrap" width="1330px">
                    <Promote_CategoryResult_Club elem={clubInfo[0]} />
                    {/* {clubInfo.map((elem) => <Promote_CategoryResult_Club elem={elem} />)} */}
                </Flexdiv>
            </Flexdiv>


        </React.Fragment>
    )
}

export default Promote_CategoryResult_Section