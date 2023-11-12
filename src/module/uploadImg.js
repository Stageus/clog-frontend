// 이미지 업로드하고 미리보기 할 때 쓰는 함수와 컴포넌트


import React from "react"

import styled from "styled-components"
import { Img, Flexinput } from "../style/common"

//이미지 찾는 버튼
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
//실제 이미지 입력하는 값. display:none 하려고 이렇게 씀
const UploadInput = styled(Flexinput)`
    display: none;
`

const Img_Upload = () => {
    const [img, setImg] = useState(null)

    const setImgEvent = (e) => {
        const imgFile = e.target.files[0]
        const imageUrl = URL.createObjectURL(imgFile)
        setImg(imageUrl)
    }

    return (
        <React.Fragment>
            <Img src={img ? img : "기본값 이미지"}/>
                {/* 업로드한 이미지가 미리보기되는 구역. width, height, radius 등 CSS는 여기에 추가 */}

            <Label htmlFor="profileUpload">찾아보기</Label>
                {/* 이미지 찾아보는 버튼. 실제 이미지를 찾아오는 기능은 아래 UploadInput이 하는 것*/}

            <UploadInput type="file" id="profileUpload" accept="image/*" onChange={setImgEvent}/>
                {/* 실제 이미지 찾아보는 버튼. display:none으로 해서 보이지는 않고 UI는 위 Label태그로 위임함 */}

        </React.Fragment>
    )
}

export default Img_Upload