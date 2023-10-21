import React from "react"

// Container,Component
import PostView_Comment from "../../Component/PostView/PostView_Comment"
import PostView_Content_Image from "../../Component/PostView/PostView_Content_Image"

//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState, useResetRecoilState } from "recoil"
import { prPostViewAtom } from "../../../recoil/PromoteAtom"

//styled-components 
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg


//router
import { Link, useNavigate } from 'react-router-dom'
import PostView_Content from "../../Component/PostView/PostView_Content"




const Promote_PrPostView_Section = () => {
    // props ======================================================

    // state ======================================================
    const prPostView = useRecoilValue(prPostViewAtom)

    // event ======================================================
    const navigator = useNavigate();
    const clickEvent = (e) => {
        let id = e.target.id
        if (id == "goclubprofile") {
            console.log(id)
            navigator("/promote/club-profile")
        }
    }

    return (
        <React.Fragment>
            <Flexdiv onClick={clickEvent} flex="0_1_auto_row_center_center" width="100%">
                <Flexdiv flex="0_1_auto_column_center_center" width="860px">

                    {/* 홍보물 제목 */}
                    <Flexdiv flex="0_1_auto_row_space-between_center" width="100%" height="60px" margin="90px 0 0 0">
                        <Flexdiv flex="0_1_auto" fontSize="28px">{prPostView.title}</Flexdiv>
                    </Flexdiv>

                    {/* 홍보물 작성한 동아리 로고, 이름 ,수정삭제버튼*/}
                    <Flexdiv flex="0_1_auto_row_flex-start_center" width="100%" height="50px" margin='0 0 10px 0'>
                        <Img id="goclubprofile" flex="0_1_auto" src={prPostView.profileImage} width="40px" height="40px" radius="50%" margin="0 10px" />

                        <Flexdiv flex="2_1_auto_column_flex-start_flex-start" fontSize="14px" color="#aaaaaa">
                            <Flexdiv id="goclubprofile" flex="0_1_auto" fontSize="20px" >{prPostView.clubName}</Flexdiv>
                            <Flexdiv flex="0_1_auto" >{prPostView.createdAt}</Flexdiv>
                        </Flexdiv>
                        <Flexdiv flex="0_1_auto">
                            <Flexbutton backgroundColor="#ffffff" color="#aaaaaa">수정</Flexbutton>
                            <Flexbutton backgroundColor="#ffffff" color="#aaaaaa">삭제</Flexbutton>
                        </Flexdiv>
                    </Flexdiv>


                    {/* 홍보물 내용 */}
                    <PostView_Content prPostView={prPostView} />

                    {/* 홍보물 사진 */}
                    <PostView_Content_Image prPostView={prPostView} />

                    {/* 홍보물 댓글 */}
                    <PostView_Comment />

                </Flexdiv>
            </Flexdiv>
        </React.Fragment >
    )
}

export default Promote_PrPostView_Section