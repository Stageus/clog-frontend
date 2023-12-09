import React from "react"

// Container,Component
import Postview_Comment_Reply from "../../Component/PostView/PostView_Comment_Reply"
import Postview_Comment_Input from "../../Component/PostView/PostView_Comment_Input"

//styled-components 
import { Flexdiv, P, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg
import { ReactComponent as Svgdown } from "../../../image/angle-down.svg"
import { ReactComponent as Svgup } from "../../../image/angle-up.svg"
//router
import { Link, useNavigate } from 'react-router-dom'

const CommentDiv = styled(Flexdiv)`
    border-top: 1px solid #dadada;
`

const PostView_Comment_Comment = (props) => {
    // props ======================================================
    const { elem, reply, post, club } = props

    // state ======================================================
    const [replyInput, setReplyInput] = React.useState(false)//답글 input창 뜨는 여부
    const [replyView, setReplyView] = React.useState(false)// 답글 뜨는여부

    // event ======================================================
    //랜더링 최적화 때문에 컴포넌트에도 이벤트를 주는 상황 => ?
    const clickEvent = (e) => {
        let id = e.target.id
        if (id == "replyinput") {
            setReplyInput(!replyInput)
        }
        else if (id == "replyview") {
            console.log(elem)
            setReplyView(!replyView)
        }
    }

    let contentList = elem.content.split("\n")

    //프로필이미지 색깔
    const setTextColorByBackgroundColor = (hexColor) => {
        // const c = hexColor.substring(1)      // 색상 앞의 # 제거
        const rgb = parseInt(hexColor, 16)   // rrggbb를 10진수로 변환
        const r = (rgb >> 16) & 0xff  // red 추출
        const g = (rgb >> 8) & 0xff  // green 추출
        const b = (rgb >> 0) & 0xff  // blue 추출
        const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b // per ITU-R BT.709
        // 색상 선택
        return luma < 127.5 ? "#ffffff" : "#000000" // 글자색이
    }
    const imgColor = setTextColorByBackgroundColor(elem.authorPersonalColor)

    let authorNameColor
    if(elem.authorId == post.authorId) {
        authorNameColor = club.themeColor
    }
    else {
        authorNameColor = "000000"
    }

    console.log("댓글색" + authorNameColor)

    return (
        <React.Fragment>
            <CommentDiv onClick={clickEvent} flex="0_1_auto_row_center_flex-start" width="800px" margin="10px 0" padding="10px 0">
                {/* 작성자 프로필 */}
                <Flexdiv flex="0_1_auto_row_flex-start_flex-start" width="50px">
                    <Flexdiv flex="0_0_auto_raw_center_center" width="40px" height="40px" radius="20px" backgroundColor={"#" + elem.authorPersonalColor} color={imgColor} font="12px_400_'Noto Sans KR', sans-serif" margin="0 10px 0 0">{elem.authorName}</Flexdiv>
                </Flexdiv>
                <Flexdiv flex="0_1_auto_column_center_flex-start" width="810px">
                    <Flexdiv flex="0_1_auto_row_space-between_center" width="100%" height="20px">
                        <Flexdiv flex="0_1_auto_row_center_center">
                            <Flexdiv flex="0_1_auto" font="14px_600_'Noto Sans KR', sans-serif" margin="0 10px 0 0" color={"#" + authorNameColor}>{elem.authorName}</Flexdiv>
                            <Flexdiv flex="0_1_auto" fontSize="12px" color="#aaaaaa">{elem.createdAt}</Flexdiv>
                        </Flexdiv>
                        {/* 답글/수정/삭제 */}
                        <Flexdiv flex="0_1_auto" >
                            <Flexbutton flex="0_1_auto_row_center_center" id="replyinput" backgroundColor="#ffffff" color="#aaaaaa">답글</Flexbutton>
                            {/* manageState = true 일때만 보임 */}
                            {elem.manageState &&
                                <Flexdiv flex="0_1_auto_row_center_center">
                                    <Flexbutton flex="0_1_auto_row_center_center" backgroundColor="#ffffff" color="#aaaaaa" margin="0 5px">수정</Flexbutton>
                                    <Flexbutton id={"commentremove" + elem.id} flex="0_1_auto_row_center_center" backgroundColor="#ffffff" color="#aaaaaa">삭제</Flexbutton>
                                </Flexdiv>}
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
                    {replyView && reply.replys.map((elem) => < Postview_Comment_Reply elem={elem} />)}
                    {/* 답글 입력창 */}
                    {replyInput && <Postview_Comment_Input width={"800px"} />}

                </Flexdiv>

            </CommentDiv>
        </React.Fragment>
    )
}

export default PostView_Comment_Comment