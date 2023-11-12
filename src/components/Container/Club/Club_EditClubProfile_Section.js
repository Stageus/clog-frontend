import React from "react"
import { useEffect, useRef, useState } from "react" 

// import components

// import recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { clubInfoAtom, boardListAtom } from "../../../recoil/ClubAtom"
import { themaColorAtom } from "../../../recoil/PromoteAtom"

// import styled
import styled from "styled-components"
import { Flexbutton, Flexdiv, Flexinput, Span, Img } from "../../../style/common"
import { css, keyframes } from "styled-components"

// import image
import { ReactComponent as Svgcheck } from "../../../image/check.svg"

const Main = styled.main`
    width : 1080px;
    display: flex;
    flex-direction: column;
`

const H1 = styled.h1`
    margin: ${props => props.margin || "none"};
    padding: ${props => props.padding || "none"};
    font-size: ${props => props.fontSize || "24px"};
    font-family: ${props => props.fontFamily || "'Noto Sans KR', sans-serif"};
    font-weight: ${props => props.fontBold || "800"};
    color: ${props => props.color || "#000000"};
`
//사진 불러오는 버튼
const Label = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px; 
    height: 40px; 
    border-radius: 10px;
    background-color: ${props => props.backgroundColor};
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
    font-family: 'Noto Sans KR', sans-serif;
    cursor: pointer;
`
const UploadInput = styled(Flexinput)`
    display: none;
`
// 동아리 소개글
const TextArea = styled.textarea`
    width: 688px;
    height: 233px;
    border-radius: 10px;
    border: 1px solid #c4c4c4;
    padding: 10px;
    font-size: 16px;
    font-family: 'Nanum Gothic', sans-serif;
`
//img 태그의 테두리선 가리기
const OverDiv = styled(Flexdiv)`
    overflow: hidden;
 `
//테마색상 선택 테두리
const Themadiv = styled(Flexdiv)`

    border: 4px solid #ffffff;
    &:hover{
        border: 4px solid #c4c4c4;
    }
`
//토글
const AniLabelGo = keyframes`
    0% {
        left: 30px;
        background-color: ${props => props.backgroundColor};
    }
    100% {
        left: 0px;
        background-color: #F0F0F0;
    }
`
const AniLabelBack = keyframes`
    0% {
        left: 0px;
        background-color: #F0F0F0;
    }
    100% {
        left: 30px;
        background-color: ${props => props.backgroundColor};
    }
`
const AniDivGo = keyframes`
    0% {
        background-color: #F0F0F0;
    }
    100% {
        background-color: ${props => props.backgroundColor};
    }
`
const AniDivBack = keyframes`
    0% {
        background-color: ${props => props.backgroundColor};
    }
    100% {
        background-color: #F0F0F0;
    }
`
const AniLabel = styled.label`
    display: block;
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: ${props => props.backgroundColor};
    border-radius: 60px;
    left: 30px;
    ${(props) => props.toggle ? css`
    animation-name: ${AniLabelGo};
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    `: css`
    animation-name: ${AniLabelBack};
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    `}
`
const ToggleDiv = styled(Flexdiv)`
background-color: ${props => props.backgroundColor};
    ${(props) => props.toggle ? css`
        animation-name: ${AniDivGo};
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        `: css`
        animation-name: ${AniDivBack};
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        `}
`

const Club_EditClubProfile_Section = () => {
	// route ============================================================

    // props ============================================================
    const themaColor = useRecoilValue(themaColorAtom)
    const colorlist = []

    // state ============================================================
    const club = useRecoilState(clubInfoAtom)
    const [selectedColor, setSelectedColor] = React.useState("#" + club[0].themeColor)
    const [toggle, setToggle] = React.useState(false)//토글 on/off 
    const [profileImg, setProfileImg] = useState(null)
    const [bannerImg, setBannerImg] = useState(null)

    // event ============================================================
    for (let index = 0; index < themaColor.length; index++) {
        colorlist[index] = themaColor[index].code
    }

    const setProfileEvent = (e) => {
        const imgFile = e.target.files[0]
        const imageUrl = URL.createObjectURL(imgFile)
        setProfileImg(imageUrl)
    }
    const setBannerEvent = (e) => {
        const imgFile = e.target.files[0]
        const imageUrl = URL.createObjectURL(imgFile)
        setBannerImg(imageUrl)
    }

    const clickEvent = (e) => {
        let id = e.target.id
        if (id == "toggle") {
            setToggle(!toggle)
        }
    }

    const selectEvent = (e) => {
        let id = e.target.id
        if (id.includes("#")) {
            setSelectedColor(id)
        }
    }

    return(
        <React.Fragment>
            <Flexdiv flex="0_0_auto_row_center_flex-start" position="relative_70px" cursor="default">
                <Main>
                    {/* 페이지의 이름 부분 */}
                    <Flexdiv width="1040px" height="40px" padding="10px 20px" customBorder="0_0_1px_0_solid_#C4C4C4" flex="0_0_auto_raw_flex-start_center">
                        <H1>동아리 정보 수정</H1>
                    </Flexdiv>
                    
                    {/* 페이지의 내용 부분 */}
                    <Flexdiv width="1040px" padding="20px" flex="0_0_auto_column_flex-start_center">
                        {/* 가입신청 온오프 토글 */}
                        <Flexdiv onClick={clickEvent} flex="0_1_auto_row_center_center" width="1040px" height="60px" radius="10px" border="1px solid #c4c4c4" margin="30px 0 50px 0">
                            <ToggleDiv id="toggle" toggle={toggle} flex="0_1_auto_row_flex-start_center" width="60px" height="40px" radius="60px" padding="0 6px" margin="0 10px" backgroundColor={selectedColor}>
                                <AniLabel id="toggle" toggle={toggle} backgroundColor={selectedColor}></AniLabel>
                            </ToggleDiv>

                            <Flexdiv flex="2_1_auto_row_flex-start_center" height="60px" font="16px_400_'Nanum Gothic', sans-serif">
                                {toggle ? "신규 회원 가입신청을 받습니다." : "신규 회원 가입신청을 받지 않습니다."}
                            </Flexdiv>
                        </Flexdiv>

                        {/* 동아리 테마색상 */}
                        <Flexdiv onClick={selectEvent} flew="0_1_auto_column_flex-start_center" width="1040px" height="200px">
                            <Flexdiv flex="0_1_auto_row_flex-start_center" font="20px_600_'Noto Sans KR', sans-serif" height='40px'>색깔 변경</Flexdiv>
                            <Flexdiv flex="0_1_auto_row_space-between_center_wrap" width="1040px" height="100px">
                                {colorlist.map((elem, i) => 
                                    <Themadiv id={"#" + elem} flex="0_1_auto_row_center_center" width="60px" height="60px" radius="50%" backgroundColor={"#" + elem} margin="9px">
                                        {(selectedColor == ("#" + elem)) && <Svgcheck width="30px" height="30px" fill="#f0f0f0" />}
                                    </Themadiv>)
                                }
                            </Flexdiv>
                        </Flexdiv>

                        {/* 동아리 프로필이미지 & 소개글 */}
                        <Flexdiv flex="0_1_auto_row_space-between_center" width="1040px" height="300px" margin="0 0 50px 0">
                            {/* 동아리 프로필 이미지 */}
                            <Flexdiv flex="0_1_auto_column_center_flex-start" width="300px" height="300px">
                                <Flexdiv flex="0_1_auto_row_flex-start_center" font="20px_600_'Noto Sans KR', sans-serif" height='40px'>프로필 이미지 수정</Flexdiv>
                                <OverDiv flex="0_1_auto_row_center_center" width="220px" height="220px" backgroundColor="#f0f0f0" radius="50%">
                                    <Img width="222px" height="222px" radius="50%" src={profileImg ? profileImg : club[0].profileImage}/>
                                </OverDiv>
                                <Flexdiv flex="0_1_auto_row_flex-end_center" width="100%" height="40px">
                                    {/* <Flexbutton flex="0_1_auto_row_center_center" width="90px" height="40px" radius="10px" backgroundColor={"#" + club[0].themeColor} color="#ffffff" font="14px_600_'Noto Sans KR', sans-serif">찾아보기</Flexbutton> */}
                                    <Label htmlFor="profileUpload" backgroundColor={selectedColor}>찾아보기</Label>
                                    <UploadInput type="file" id="profileUpload" accept="image/*" onChange={setProfileEvent}/>
                                </Flexdiv>
                            </Flexdiv>

                            {/* 동아리 소개글 */}
                            <Flexdiv>
                                <Flexdiv flex="0_1_auto_row_flex-start_center" font="20px_600_'Noto Sans KR', sans-serif" height='40px'>동아리 소개글</Flexdiv>
                                <TextArea padding="0px" maxLength="500">{club[0].cover}</TextArea>
                            </Flexdiv>
                        </Flexdiv>

                        {/* 배너 이미지 등록 */}
                        <Flexdiv flex="0_1_auto_column_center_flex-start" width="1040px" height="315px">
                            <Flexdiv flex="0_1_auto_row_flex-start_center" font="20px_600_'Noto Sans KR', sans-serif" height='40px'>배너 이미지 변경</Flexdiv>
                            <Flexdiv height="20px" color="#c4c4c4">권장 규격 1080 X 240</Flexdiv>
                            <OverDiv flex="0_1_auto_row_center_center" width="1040px" height="200px" radius="10px" backgroundColor="#f0f0f0">
                                <Img width="1042px" height="202px" radius="10px" src={bannerImg ? bannerImg : club[0].bannerImage}/>
                            </OverDiv>
                            <Flexdiv flex="0_1_auto_row_flex-end_center" width="100%" height="40px" margin="10px 0">
                                {/* <Flexbutton flex="0_1_auto_row_center_center" width="90px" height="40px" radius="10px" backgroundColor={selectedColor} color="#ffffff" font="14px_600_'Noto Sans KR', sans-serif">찾아보기</Flexbutton> */}
                                <Label htmlFor="bannerUpload" backgroundColor={selectedColor}>찾아보기</Label>
                                <UploadInput type="file" id="bannerUpload" accept="image/*" onChange={setBannerEvent}/>
                            </Flexdiv>
                        </Flexdiv>

                        {/* 저장 버튼 */}
                        <Flexbutton width="400px" height="60px" radius="10px" margin="50px 0 100px 0" backgroundColor={selectedColor} color="#FFFFFF" font="24px_800_'Noto Sans KR', sans-serif">변경사항 저장</Flexbutton>
                    </Flexdiv>
                    
                </Main>
            </Flexdiv>

        </React.Fragment>
    )
}

export default Club_EditClubProfile_Section