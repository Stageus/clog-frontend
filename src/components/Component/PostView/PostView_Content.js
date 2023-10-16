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

const PostView_Content = (props) => {
    // props ======================================================
    const { prPostView } = props
    let contentList = prPostView.content.split("\n")//줄바꿈 기준으로 배열로 자르기
    // state ======================================================

    // event ======================================================



    return (
        <React.Fragment>
            <CommentDiv flex="0_1_auto_column_center_center" width="100%">
                <Flexdiv margin="50px 0">
                    {contentList.map((elem) => <P flex="0_1_auto" textAlign="left" width="810px" height="20px" margin="4px 0">{elem}</P>)}
                </Flexdiv>
            </CommentDiv>
        </React.Fragment>
    )
}

export default PostView_Content