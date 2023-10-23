import React from "react"

//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { belongAtom, bigCategoryAtom, smallCategoryAtom, themaColorAtom } from "../../../recoil/PromoteAtom"

//styled-components 
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled, { keyframes, css } from "styled-components"
//svg
import { ReactComponent as Svgcheck } from "../../../image/check.svg"
//router
import { Link, useNavigate } from 'react-router-dom'

// 동아리 소개글
const TextArea = styled.textarea`
    width: 900px;
    height: 248px;
    border-radius: 10px;
    border: 1px solid #c4c4c4;
    padding: 10px;
`
//img 태그의 테두리선 가리기
const OverDiv = styled(Flexdiv)`
    overflow: hidden;
 `


//토글
const Ani = keyframes`
    0% {
        left: 30px;
    }
    100% {
        left: 0px;
    }
`
const AniLabel = styled.label`
    display: block;
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #f0f0f0;
    left: 0px
    border-radius: 60px;
    ${(props) => props.toggle && css`
        left: 30px;
    `}
`
const ToggleDiv = styled(Flexdiv)`
    background-color: #EB5149;
    ${(props) => props.toggle && css`
    background-color: #4B7BE5;
    `}
`
// animation: ${Ani} 3s 0s 1;


//테마색상 선택 테두리
const Themadiv = styled(Flexdiv)`
    &:hover{
        border: 4px solid #c4c4c4;
        margin: 16px;
    }
`




const Promote_ClubCreate_FlexInfo = () => {
    // props ======================================================
    const themaColor = useRecoilValue(themaColorAtom)
    const colorlist = []
    // state ======================================================
    const [selectedColor, setSelectedColor] = React.useState("themacolor11")
    const [toggle, setToggle] = React.useState(true)//토글 on/off 
    // event ======================================================
    for (let index = 0; index < themaColor.length; index++) {
        colorlist[index] = themaColor[index].code
    }

    const clickEvent = (e) => {
        let id = e.target.id
        if (id.includes("themacolor")) {
            setSelectedColor(id)
        }
        if (id == "toggle") {
            console.log(id)
            setToggle(!toggle)
        }
    }

    return (
        <React.Fragment>
            <Flexdiv onClick={clickEvent} flex="0_1_auto_column_center_center" width="900px">
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
                            <Flexbutton flex="0_1_auto_row_center_center" width="90px" height="40px" radius="10px" backgroundColor="#333333" color="#ffffff">찾아보기</Flexbutton>
                        </Flexdiv>
                    </Flexdiv>

                    {/* 동아리 테마색상 */}
                    <Flexdiv flew="0_1_auto_column_flex-start_center" width="600px" height="300px">
                        <Flexdiv flex="0_1_auto_row_flex-start_center" font="20px_600" height='40px'>색깔 선택</Flexdiv>
                        <Flexdiv color="#c4c4c4">생성한 동아리 홈페이지의 테마가 되는 색깔입니다.</Flexdiv>
                        <Flexdiv flex="0_1_auto_row_center_center_wrap" width="600px" height="200px">
                            {colorlist.map((elem, i) => <Themadiv id={"themacolor" + i} flex="0_1_auto_row_center_center" width="60px" height="60px" radius="50%" backgroundColor={"#" + elem} margin="20px">
                                {(selectedColor == ("themacolor" + i)) && <Svgcheck width="30px" height="30px" fill="#f0f0f0" />}
                            </Themadiv>)}
                        </Flexdiv>
                    </Flexdiv>
                </Flexdiv>

                {/* 배너 이미지 등록 */}
                <Flexdiv flex="0_1_auto_column_center_flex-start" width="900px" height="315px">
                    <Flexdiv flex="0_1_auto_row_flex-start_center" font="20px_600" height='40px'>배너 이미지 등록</Flexdiv>
                    <Flexdiv height="20px" color="#c4c4c4">생성한 동아리 홈페이지의 상단 배너에 들어가는 이미지입니다. (권장 규격 1080 X 240 )</Flexdiv>
                    <OverDiv flex="0_1_auto_row_center_center" width="900px" height="200px" radius="10px" backgroundColor="#f0f0f0">
                        <Img width="902px" height="202px" radius="10px" />
                    </OverDiv>
                    <Flexdiv flex="0_1_auto_row_flex-end_center" width="100%" height="40px" margin="10px 0">
                        <Flexbutton flex="0_1_auto_row_center_center" width="90px" height="40px" radius="10px" backgroundColor="#333333" color="#ffffff">찾아보기</Flexbutton>
                    </Flexdiv>
                </Flexdiv>

                {/* 가입신청 온오프 토글 */}
                <Flexdiv flex="0_1_auto_row_center_center" width="900px" height="60px" radius="10px" border="1px solid #c4c4c4" margin="50px 0">
                    <ToggleDiv id="toggle" toggle={toggle} flex="0_1_auto_row_flex-start_center" width="60px" height="40px" radius="60px" padding="0 6px" margin="0 10px">
                        <AniLabel id="toggle" toggle={toggle}></AniLabel>
                    </ToggleDiv>

                    <Flexdiv flex="2_1_auto_row_flex-start_center" height="60px">
                        {toggle ? "동아리를 생성하면서 바로 신규 회원 가입신청을 받습니다." : "동아리를 생성하면서 바로 신규 회원 가입신청을 받지 않습니다."}
                    </Flexdiv>
                </Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}

export default Promote_ClubCreate_FlexInfo