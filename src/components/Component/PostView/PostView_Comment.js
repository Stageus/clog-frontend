import React from "react"

// Container,Component
import PostView_Content_Comment from "./PostView_Content_Comment"
import Postview_Content_Comment_Input from "./PostView_Content_Comment_Input"
//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState, useResetRecoilState } from "recoil"
import { prPostViewAtom, prPostCommentAtom, prPostReplyAtom } from "../../../recoil/PromoteAtom"

//styled-components 
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg
import { ReactComponent as Svgphoto } from "../../../image/picture.svg"

//router
import { Link, useNavigate } from 'react-router-dom'


const CommentDiv = styled(Flexdiv)`
    border-top: 1px solid #dadada;
`

const PostView_Comment = () => {
    // props ======================================================

    // state ======================================================
    const [prPostcomment, setPrPostcomment] = useRecoilState(prPostCommentAtom)
    const prPostReply = useRecoilValue(prPostReplyAtom)

    // event ======================================================

    const clickEvent = (e) => {
        let id = e.target.id
        if (id == "commentsummit") {
            console.log(id)
            let newprpsotcomment = {
                "count ": 0,
                "comments": []
            }
            let newcommentlist = [...prPostcomment.comments]
            //배열 끝에 현재 입력한 댓글 추가(현재는 컨텐츠만 반영)
            newcommentlist[newcommentlist.length] = {
                "id": 3, // 댓글의 pk
                "content": document.getElementById("commentinput").value, // 학번인데 내용으로 변경
                "manageState": true, // 댓글 수정, 삭제 여부
                "createdAt": "2023.05.15 02:23", // 작성 날짜
                "replyCount": 0, // 대댓글 개수
                "authorId": 3, // 작성자 pk
                "authorMajor": "인공지능공학과", // 작성자 학과
                "authorPosition": "미가입", // 작성자 직책
                "authorEntryYear": "21", // 작성자 학번
                "authorPcolor": "2fffff", // 작성자 퍼스널 컬러
            }
            newprpsotcomment.count = prPostcomment.count + 1
            newprpsotcomment.comments = [...newcommentlist]
            console.log(document.getElementById("commentinput").value)

            setPrPostcomment(newprpsotcomment)
        }
    }

    return (
        <React.Fragment>
            {/* 홍보물 댓글 */}
            <CommentDiv width="860px" padding="10px 0 100px 0">
                {/* 댓글 개수 */}
                <Flexdiv flex="0_1_auto_column_center_flex-start" margin="0 0 0 10px">
                    <Flexdiv flex="0_1_auto" height="60px" fontSize="20px">댓글 {prPostcomment.count}</Flexdiv>
                </Flexdiv>
                {/* 댓글 */}
                {prPostcomment.comments.map((elem) => <PostView_Content_Comment elem={elem} reply={prPostReply} />)}

                {/* 댓글 입력란 */}
                <Postview_Content_Comment_Input width={"860px"} clickEvent={clickEvent} />

            </CommentDiv>
        </React.Fragment>
    )
}

export default PostView_Comment