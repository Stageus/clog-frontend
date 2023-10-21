import React from "react"

// Container,Component
import Postview_Content_Comment_Reply from "./PostView_Content_Comment_Reply"

//styled-components 
import { Flexdiv, P, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg
import { ReactComponent as Svgdown } from "../../../image/angle-down.svg"
import { ReactComponent as Svgup } from "../../../image/angle-up.svg"
//router
import { Link, useNavigate } from 'react-router-dom'
import Postview_Content_Comment_Input from "./PostView_Content_Comment_Input"

const CommentDiv = styled(Flexdiv)`
    border-top: 1px solid #dadada;
`

const PostView_Content_Comment = (props) => {
    // props ======================================================
    const { elem, reply } = props

    // state ======================================================
    const [replyInput, setReplyInput] = React.useState(false)//답글 input창 뜨는 여부
    const [replyView, setReplyView] = React.useState(false)// 답글 뜨는여부

    // event ======================================================
    //랜더링 최적화 때문에 컴포넌트에도 이벤트를 주는 상황 => ?
    const clickEvent = (e) => {
        let id = e.target.id
        console.log(id)
        if (id == "replyinput") {
            setReplyInput(!replyInput)
        }
        if (id == "replyview") {
            console.log(elem)
            setReplyView(!replyView)
        }
    }

    let contentList = elem.content.split("\n")

    console.log(contentList)
    return (
        <React.Fragment>
            <CommentDiv onClick={clickEvent} flex="0_1_auto_row_center_flex-start" width="860px" margin="10px 0" padding="10px 0">
                <Flexdiv flex="0_1_auto_row_center_center" width="50px">
                    <Img width="40px" radius="50%" src={require("../../../image/user.png")} />
                </Flexdiv>
                <Flexdiv flex="0_1_auto_column_center_flex-start" width="810px">
                    <Flexdiv flex="0_1_auto_row_space-between_center" width="100%" height="20px">
                        <Flexdiv flex="0_1_auto" fontSize="14px" margin="0 0 0 5px">익명</Flexdiv>
                        <Flexdiv flex="0_1_auto" fontSize="12px" color="#aaaaaa">{elem.createdAt}</Flexdiv>
                        <Flexdiv flex="0_1_auto" >
                            <Flexbutton id="replyinput" backgroundColor="#ffffff" color="#aaaaaa">답글</Flexbutton>
                            {/* manageState = true 일때만 보임 */}
                            {elem.manageState &&
                                <Flexdiv><Flexbutton backgroundColor="#ffffff" color="#aaaaaa">수정</Flexbutton>
                                    <Flexbutton backgroundColor="#ffffff" color="#aaaaaa">삭제</Flexbutton></Flexdiv>}
                        </Flexdiv>
                    </Flexdiv>
                    <Flexdiv flex="0_1_30px_column_center_flex-start" width="95%" fontSize="14px" padding="5px 5px">
                        {contentList.map((elem) => <P margin="0px">{elem}</P>)}
                    </Flexdiv>
                    {/* 답글이 있으면 버튼 보임 */}
                    {(elem.replyCount != 0) &&
                        <Flexdiv id="replyview" flex="0_1_auto_row_center_center" width="80px" hight="20px" fontSize="14px" color="#aaaaaa" radius="10px" outline="1px solid #dadada" margin="0 0 10px 0">
                            <Flexdiv id="replyview" flex="0_1_auto">답글 {elem.replyCount}개</Flexdiv>
                            <Flexdiv id="replyview" flex="0_1_auto">
                                {replyView ? <Svgup id="replyview" fill="#aaaaaa" width="10px" height="10px" />
                                    : <Svgdown id="replyview" fill="#aaaaaa" width="10px" height="10px" />}
                            </Flexdiv>
                        </Flexdiv>}

                    {/* 답글 보는 버튼이 눌리면 답글 보임 */}
                    {replyView && reply.replys.map((elem) => < Postview_Content_Comment_Reply elem={elem} />)}
                    {/* 답글 입력창 */}
                    {replyInput && <Postview_Content_Comment_Input width={"810px"} />}

                </Flexdiv>

            </CommentDiv>
        </React.Fragment>
    )
}

export default PostView_Content_Comment