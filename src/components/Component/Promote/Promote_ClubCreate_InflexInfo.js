import React from "react"

//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { belongAtom, bigCategoryAtom, smallCategoryAtom } from "../../../recoil/PromoteAtom"

//styled-components 
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg

//router
import { Link, useNavigate } from 'react-router-dom'
import Promote_Category_DropBox from "./Promote_Category_DropBox"

const ZindexDiv = styled(Flexdiv)`
    
`
const Promote_ClubCreate_InflexInfo = () => {
    // props ======================================================
    // state ======================================================
    const belong = useRecoilValue(belongAtom)
    const smallCategory = useRecoilValue(smallCategoryAtom)
    const bigCategory = useRecoilValue(bigCategoryAtom)
    const belongList = []
    const bigList = []
    const [checkClubname, setCheckClubname] = React.useState(false)
    for (let index = 0; index < belong.length; index++) {
        belongList[index] = belong[index].content
    }
    for (let index = 0; index < bigCategory.length; index++) {
        bigList[index] = bigCategory[index].content
    }

    // event ======================================================
    const clickEvent = (e) => {
        let id = e.target.id
        if (id == "checkclubname") {
            console.log(id)
            setCheckClubname(!checkClubname)
        }
    }

    return (
        <React.Fragment>
            <Flexdiv onClick={clickEvent} flex="0_1_auto_row_center_center" width="900px" margin="20px 0 50px 0">
                {/* 동아리이름 */}
                <Flexdiv flex="0_1_auto_column_flex-start_flex-start" width="450px" height="210px" >
                    <Flexdiv flex="0_1_auto_row_center_center" font="20px_600" height='40px'>동아리 이름</Flexdiv>
                    <Flexinput flex="0_1_auto" width="400px" height="50px" radius="10px" border="2px solid #c4c4c4" placeholder="한글 영어 혼용 가능, 최소 1자~최대 10자" padding="0px" />
                    <Flexdiv flex="0_1_auto_row_flex-end_center" width="400px" height="50px" margin="10px 0">
                        <Flexdiv flex="2_1_auto_row_flex-start_center" font="20px" color={checkClubname ? "#4B7BE5" : "#EB5149"} > {checkClubname ? "사용 가능한 이름입니다." : "사용 불가능한 이름입니다."}</Flexdiv>
                        <Flexbutton id="checkclubname" flex="0_1_auto_row_center_center" width="120px" height="50px" radius="10px" font="16px" backgroundColor="#333333" color="#ffffff">중복 체크</Flexbutton>
                    </Flexdiv>
                </Flexdiv>

                {/* 동아리 분류 */}
                <Flexdiv flex="0_1_auto_column_flex-start_flex-end" width="450px" height="210px">
                    <Flexdiv flex="0_1_auto_row_flex-start_center" width="400px" font="20px_600" margin="10px 0">동아리 분류</Flexdiv>
                    <Flexdiv position="relative_58px" width="400px" height="50px" flex="0_1_auto_row_center_center">
                        <Promote_Category_DropBox base={"소속"} list={bigList} width="400px" height={"50px"} />
                    </Flexdiv>
                    <ZindexDiv position="relative_-52px" width="400px" height="50px" flex="0_1_auto_row_center_center">
                        <Promote_Category_DropBox base={"분류"} list={belongList} width="400px" height={"50px"} />
                    </ZindexDiv>
                </Flexdiv>
            </Flexdiv>
        </React.Fragment >
    )
}

export default Promote_ClubCreate_InflexInfo