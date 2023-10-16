import React from "react"

// Container,Component
import Promote_Comment from "./Promote_Comment"

//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState, useResetRecoilState } from "recoil"
import { prPostViewAtom } from "../../../recoil/PromoteAtom"

//styled-components 
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg
import { ReactComponent as Svgphoto } from "../../../image/picture.svg"

//router
import { Link, useNavigate } from 'react-router-dom'
import PostView_Content from "../../Component/PostView/PostView_Content"



const HiddenImg = styled(Flexdiv)`
    overflow: hidden;
`


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
                        <Img id="goclubprofile" flex="0_1_auto" src={require("../../../image/race.png")} width="40px" height="40px" radius="50%" margin="0 10px" />

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
                    <Flexdiv flex="0_1_auto_row_center_center" width="860px" height="300px" backgroundColor="#ffffff" margin="20px 0 10px 0">
                        <HiddenImg flex="0_1_auto_row_center_center" width="210px" height="297px" backgroundColor="#f2f2f2" ><Img width="210px" src={require("../../../image/prpostview1.jpg")} /></HiddenImg>
                        <HiddenImg flex="0_1_auto_row_center_center" width="210px" height="297px" backgroundColor="#f2f2f2"><Img width="210px" src={require("../../../image/prpostview2.jpg")} /></HiddenImg>
                        <HiddenImg flex="0_1_auto_row_center_center" width="210px" height="297px" backgroundColor="#f2f2f2"><Img width="210px" src={require("../../../image/prpostview3.jpg")} /></HiddenImg>
                        <HiddenImg flex="0_1_auto_row_center_center" width="210px" height="297px" backgroundColor="#f2f2f2"><Img width="210px" src={require("../../../image/prpostview4.jpg")} /></HiddenImg>
                        <HiddenImg flex="0_1_auto_row_center_center" width="210px" height="297px" backgroundColor="#f2f2f2"><Img width="210px" src={require("../../../image/prpostview1.jpg")} /></HiddenImg>
                    </Flexdiv>
                    <Flexdiv flex="0_1_auto_row_flex-start_center" width="860px" height="20px" margin="0 0 100px 0">
                        <Flexdiv flex="0_1_auto_row_center_center"><Svgphoto width="16px" height="16px" fill="#aaaaaa" /></Flexdiv>
                        <Span flex="0_1_auto" color="#aaaaaa" fontSize="12px" margin="0 0 0 5px">{prPostView.promotionImages.length}</Span>
                    </Flexdiv>

                    {/* 홍보물 댓글 */}
                    <Promote_Comment />

                </Flexdiv>
            </Flexdiv>
        </React.Fragment >
    )
}

export default Promote_PrPostView_Section