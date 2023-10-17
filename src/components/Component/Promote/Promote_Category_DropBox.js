import React from "react"

//styled-components 
import { Flexdiv, Flexinput, Flexbutton, P, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg
import { ReactComponent as Svgdown } from "../../../image/angle-down.svg"

//router
import { Link, useNavigate } from 'react-router-dom'


const HoverDiv = styled(Flexdiv)`
    &:hover{
        background-color: #f0f0f0;
        color: #333333;
    }
`
const Promote_Category_DropBox = (props) => {
    // props ======================================================
    const { smallList, width } = props

    // state ======================================================
    const [dropBoxOpen, setDropBoxOpen] = React.useState(false)
    // event ======================================================
    const clickEvent = (e) => {
        let id = e.target.id
        if (id == "opendropbox") {
            console.log(id)
            setDropBoxOpen(!dropBoxOpen)
        }
    }

    return (
        <React.Fragment>
            <Flexdiv onClick={clickEvent} position="absolute_0_0_0_0">
                {dropBoxOpen ?
                    <Flexdiv flex="0_1_auto_column_center_center" width={width} outline="2px solid #333333" radius="10px">
                        <Flexdiv flex="0_1_auto_row_space-between_center" width={width} height="36px" outline="2px solid #c4c4c4" radius="10px 10px 0 0">
                            <Span flex=" 0_1_auto" fontSize="20px" color="#aaaaaa" margin="0 0 0 10px" >전체</Span>
                            <Flexbutton id="opendropbox" flex="0_1_auto_row_center_center" width="36px" height="36px" backgroundColor="#ffffff" margin="0 10px 0 0">
                                <Svgdown id="opendropbox" fill="#c4c4c4" width="16px" height="16px" />
                            </Flexbutton>
                        </Flexdiv>
                        <Flexdiv width={width} backgroundColor="#ffffff" margin="2px 0 0 0">
                            {smallList.map((elem) =>
                                <HoverDiv flex="0_1_auto_row_space-between_center" width={width} height="36px" color="#aaaaaa" backgroundColor="#ffffff">
                                    <Span flex=" 0_1_auto" fontSize="20px" margin="0 0 0 10px">{elem}</Span>
                                </HoverDiv>)}
                        </Flexdiv>
                    </Flexdiv> :
                    <Flexdiv flex="0_1_auto" position="relative" width={width} >
                        <Flexdiv flex="0_1_auto_row_space-between_center" width={width} height="36px" outline="2px solid #c4c4c4" radius="10px">
                            <Span flex=" 0_1_auto" fontSize="20px" color="#aaaaaa" margin="0 0 0 10px">전체</Span>
                            <Flexbutton id="opendropbox" flex="0_1_auto_row_center_center" width="36px" height="36px" backgroundColor="#ffffff" margin="0 10px 0 0">
                                <Svgdown id="opendropbox" fill="#c4c4c4" width="16px" height="16px" />
                            </Flexbutton>
                        </Flexdiv>
                    </Flexdiv>
                }
            </Flexdiv>
        </React.Fragment >
    )
}

export default Promote_Category_DropBox