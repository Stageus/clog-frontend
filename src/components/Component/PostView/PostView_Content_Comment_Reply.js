import React from "react"

// Container,Component


//styled-components 
import { Flexdiv, P, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg

//router
import { Link, useNavigate } from 'react-router-dom'

const CommentDiv = styled(Flexdiv)`
    border-top: 1px solid #dadada;
`
const Postview_Content_Comment_Reply = (props) => {
    // props ======================================================
    const { elem } = props
    // state ======================================================

    // event ======================================================

    let contentList = elem.content.split("\n")

    return (
        <React.Fragment>
            <CommentDiv flex="0_1_auto_row_center_flex-start" width="810px" margin="10px 0" padding="10px 0">
                <Flexdiv flex="0_1_auto_row_center_center" width="50px">
                    <Img width="40px" radius="50%" src={require("../../../image/user.png")} />
                </Flexdiv>
                <Flexdiv flex="0_1_auto_column_center_flex-start" width="810px">
                    <Flexdiv flex="0_1_auto_row_space-between_center" width="100%" height="20px" margin="0 5px">
                        <Flexdiv flex="0_1_auto" fontSize="14px" margin="0 0 0 5px">익명</Flexdiv>
                        <Flexdiv flex="0_1_auto" fontSize="12px" color="#aaaaaa">{elem.createdAt}</Flexdiv>
                        <Flexdiv flex="0_1_auto" >
                            {elem.manageState &&
                                <Flexdiv><Flexbutton backgroundColor="#ffffff" color="#aaaaaa">수정</Flexbutton>
                                    <Flexbutton backgroundColor="#ffffff" color="#aaaaaa">삭제</Flexbutton></Flexdiv>}
                        </Flexdiv>
                    </Flexdiv>
                    <Flexdiv flex="0_1_30px_column_center_flex-start" width="95%" fontSize="14px" margin="0 10px" >
                        {contentList.map((elem) => <P>{elem}</P>)}
                    </Flexdiv>
                </Flexdiv>
            </CommentDiv>
        </React.Fragment>
    )
}

export default Postview_Content_Comment_Reply