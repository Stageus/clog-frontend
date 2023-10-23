import React from "react"

// Container,Component


//styled-components 
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg

//router
import { Link, useNavigate } from 'react-router-dom'

const CommentDiv = styled(Flexdiv)`
    border-top: 1px solid #aaaaaa;
`
const Postview_Comment_Input = (props) => {
    // props ======================================================
    const { width, clickEvent } = props
    // state ======================================================

    // event ======================================================


    return (
        <React.Fragment>
            <CommentDiv onClick={clickEvent} flex="0_1_auto_row_center_center" width={width} height="120px">
                <Flexdiv flex="0_1_auto_row_center_flex-start" width="50px" height="100px"><Img width="40px" radius="50%" src={require("../../../image/user.png")} /></Flexdiv>
                <Flexdiv flex="2_1_auto_column_flex-start-center" height="100px" backgroundColor="#f0f0f0" radius="10px" margin="0 5px 0 0">
                    <Flexdiv flex="0_1_auto" fontSize="14px" margin="5px 0 0 10px">익명</Flexdiv>
                    <Flexinput id="commentinput" flex="0_1_auto" type="text" width="95%" height="50px" fontSize="14px" placeholder="댓글을 입력하세요" backgroundColor="#f0f0f0" margin="0 0 0 10px" />
                    {/* 등록버튼 */}
                    <Flexdiv flex="0_1_auto_row_flex-end_center" width="100%" margin="10px 0">
                        <Flexbutton id="commentsummit" flex="0_1_auto" width="40px" height="20px" color="#aaaaaa" backgroundColor="#f0f0f0" radius="10px" fontSize="14px">등록</Flexbutton>
                    </Flexdiv>
                </Flexdiv>
            </CommentDiv>
        </React.Fragment>
    )
}

export default Postview_Comment_Input