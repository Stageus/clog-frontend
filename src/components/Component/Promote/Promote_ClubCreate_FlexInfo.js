import React from "react"

//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { belongAtom, bigCategoryAtom, smallCategoryAtom, themaColorAtom } from "../../../recoil/PromoteAtom"

//styled-components 
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg

//router
import { Link, useNavigate } from 'react-router-dom'

const TextArea = styled.textarea`
    width: 900px;
    height: 248px;
    border-radius: 10px;
    border: 1px solid #c4c4c4;
    padding: 0px;
    &::placeholder{
        padding: 10px;
    }
`

const OverDiv = styled(Flexdiv)`
    overflow: hidden;
`

const Promote_ClubCreate_FlexInfo = (props) => {
    // props ======================================================
    const { elem } = props
    const themaColor = useRecoilValue(themaColorAtom)
    const colorlist = []
    // state ======================================================

    // event ======================================================
    for (let index = 0; index < themaColor.length; index++) {
        colorlist[index] = themaColor[index].code
    }

    return (
        <React.Fragment>
            <Flexdiv width="900px">
                {/* 동아리 소개글 */}
                <Flexdiv width="100%" margin="0 0 50px 0">
                    <Flexdiv flex="0_1_auto_row_flex-start_center" font="20px_600" height='40px'>동아리 소개글</Flexdiv>
                    <TextArea placeholder="500자 이내로 작성해주세요." padding="0px"></TextArea>
                </Flexdiv>


                <Flexdiv flex="0_1_auto_row_center_center" width="900px" height="300px" margin="0 0 50px 0">
                    {/* 동아리 프로필 이미지 */}
                    <Flexdiv flex="0_1_auto_column_center_flex-start" width="300px" height="300px">
                        <Flexdiv flex="0_1_auto_row_flex-start_center" font="20px_600" height='40px'>프로필 이미지 등록</Flexdiv>
                        <OverDiv flex="0_1_auto_row_center_center" width="220px" height="220px" backgroundColor="#f0f0f0" radius="50%">
                            <Img width="222px" height="222px" radius="50%" />
                        </OverDiv>
                        <Flexdiv flex="0_1_auto_row_flex-end_center" width="100%" height="40px">
                            <Flexbutton flex="0_1_auto_row_center_center" width="90px" height="40px" radius="10px" font="16px" backgroundColor="#333333" color="#ffffff">찾아보기</Flexbutton>
                        </Flexdiv>
                    </Flexdiv>

                    {/* 동아리 테마색상 */}
                    <Flexdiv flew="0_1_auto_column_flex-start_center" width="600px" height="300px">
                        <Flexdiv flex="0_1_auto_row_flex-start_center" font="20px_600" height='40px'>색깔 선택</Flexdiv>
                        <Flexdiv color="#c4c4c4">생성한 동아리 홈페이지의 테마가 되는 색깔입니다.</Flexdiv>
                        <Flexdiv flex="0_1_auto_row_center_center_wrap" width="600px" height="200px">
                            {colorlist.map((elem) => <Flexdiv width="60px" height="60px" radius="50%" backgroundColor={"#" + elem} margin="20px"></Flexdiv>)}
                        </Flexdiv>
                    </Flexdiv>
                </Flexdiv>

                {/* 배너 이미지 등록 */}
                <Flexdiv width="900px" height="315px">
                    <Flexdiv flex="0_1_auto_row_flex-start_center" font="20px_600" height='40px'>배너 이미지 등록</Flexdiv>
                    <Flexdiv height="20px" color="#c4c4c4">생성한 동아리 홈페이지의 상단 배너에 들어가는 이미지입니다. (권장 규격 1080 X 240 )</Flexdiv>
                    <OverDiv flex="0_1_auto_row_center_center" width="900px" height="200px" radius="10px" backgroundColor="#f0f0f0">
                        <Img width="902px" height="202px" radius="10px" />
                    </OverDiv>
                    <Flexdiv flex="0_1_auto_row_flex-end_center" width="100%" height="40px">
                        <Flexbutton flex="0_1_auto_row_center_center" width="90px" height="40px" radius="10px" font="16px" backgroundColor="#333333" color="#ffffff">찾아보기</Flexbutton>
                    </Flexdiv>
                </Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}

export default Promote_ClubCreate_FlexInfo