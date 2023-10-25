import React from "react"

//styled-components 
import { Flexdiv, Flexinput, Flexbutton, P, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg
import { ReactComponent as Svgdown } from "../../../image/angle-down.svg"
//router
import { Link, useNavigate } from 'react-router-dom'



///////////////적용 방법 ////////////////////////////////////////////////
//////1. 이 컴포넌트를 position="relative"인 Flexdiv로 감사줄 것"
//////2. 감싼 Flexdiv에는 justify-content와 align-item을 center로 적용할 것//
///////////////////////////////////////////////////////////////////////
//props - dropboxname : 드롭박스 구분을 위한 이름값, opendropbox 누르면 뜨는 선택값의 id로 구분
////////- list[0] : 기본으로 떠있는 선택값
////////- list : opendropbox 누르면 뜨는 선택값 리스트
////////- width,height : 드롭박스의 넓이와 높이
///////////////////////////////////////////////////////////////////////


const HoverDiv = styled(Flexdiv)`
    &:hover{
        background-color: #f0f0f0;
        color: #333333;
    }
`
const Account_DropDown = (props) => {
    // props ======================================================
    const { svg, dropboxname, list, width, height } = props

    // state ======================================================
    const [dropBoxOpen, setDropBoxOpen] = React.useState(false)
    const [clickDropDown, setClickDropDown] = React.useState(list[0])

    // event ======================================================
    const clickEvent = (e) => {
        let id = e.target.id
        if (id == "opendropbox") {
            setDropBoxOpen(!dropBoxOpen)
        }
        else if (id.includes(dropboxname)) {
            let num = id.split("_")[1]
            setClickDropDown(list[num])
            setDropBoxOpen(false)
        }
    }


    return (
        <React.Fragment>
            <Flexdiv onClick={clickEvent} position="absolute_0_0_0_0">
                {dropBoxOpen ?
                    <Flexdiv flex="0_1_auto_column_center_center" width={width} outline="1px solid #333333" backgroundColor="#ffffff" radius="10px">
                        <Flexdiv flex="0_1_auto_row_space-between_center" width={width} height={height} outline="1px solid #c4c4c4" radius="10px 10px 0 0">
                            <Flexdiv flex="0_1_auto_row_center_center" width="50px" height="50px">{svg}</Flexdiv>
                            <Span flex=" 1_1_auto" color="#aaaaaa" margin="0 0 0 10px" >{list[0]}</Span>
                            <Flexbutton id="opendropbox" flex="0_1_auto_row_center_center" width="36px" height="36px" backgroundColor="#ffffff" margin="0 10px 0 0" padding="0px">
                                <Svgdown id="opendropbox" fill="#c4c4c4" width="16px" height="16px" />
                            </Flexbutton>
                        </Flexdiv>
                        <Flexdiv width={width} backgroundColor="#ffffff" margin="2px 0 0 0">
                            {list.map((elem, i) =>
                                <HoverDiv id={dropboxname + "_" + i} flex="0_1_auto_row_space-between_center" width={width} height={height} color="#aaaaaa" backgroundColor="#ffffff">
                                    <Span id={dropboxname + "_" + i} flex=" 0_1_auto" margin="0 0 0 10px">{elem}</Span>
                                </HoverDiv>)}
                        </Flexdiv>
                    </Flexdiv> :
                    <Flexdiv flex="0_1_auto" width={width} backgroundColor="#ffffff" >
                        <Flexdiv flex="0_1_auto_row_space-between_center" width={width} height={height} outline="1px solid #c4c4c4" radius="10px">
                            <Flexdiv flex="0_1_auto_row_center_center" width="50px" height="50px">{svg}</Flexdiv>
                            <Span flex=" 1_1_auto" color="#aaaaaa" margin="0 0 0 10px">{clickDropDown}</Span>
                            <Flexbutton id="opendropbox" flex="0_1_auto_row_center_center" width="36px" height="36px" backgroundColor="#ffffff" margin="0 10px 0 0" padding="0px">
                                <Svgdown id="opendropbox" fill="#c4c4c4" width="16px" height="16px" />
                            </Flexbutton>
                        </Flexdiv>
                    </Flexdiv>
                }
            </Flexdiv>
        </React.Fragment >
    )
}

export default Account_DropDown