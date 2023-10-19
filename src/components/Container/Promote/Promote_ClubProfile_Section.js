import React from "react"

// Container,Component
import Promote_PrPost from "../../Component/Promote/Promote_PrPost"

//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { prPostAtom, clubProfileAtom } from "../../../recoil/PromoteAtom"

//styled-components 
import { Flexdiv, Flexinput, P, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg

//router
import { Link, useNavigate } from 'react-router-dom'

const Promote_ClubProfile_Section = () => {
    // props ============================================================

    // state ============================================================
    const prpost = useRecoilValue(prPostAtom)
    const clubprofile = useRecoilValue(clubProfileAtom)
    // event ============================================================
    const navigate = useNavigate();
    const clickEvent = (e) => {
        let id = e.target.id
        console.log(id)
        if (id == "prpost") {
            navigate("/promote/pr-post-view")
        }
    }

    console.log(clubprofile)

    return (
        <React.Fragment>
            <Flexdiv onClick={clickEvent} flex="0_1_auto_column_center_center" width="100%" height="400px" margin="90px 0">
                {/* 로고, 이름, 신청버튼, 생성일 소속, 카테고리 */}
                <Flexdiv flex="0_1_auto_row_center_center" width="860px" >
                    <Img flex="0_1_auto" width="150px" height="150px" radius="50%" border="3px solid #333333" src={require("../../../image/race.png")} margin="20px" />
                    <Flexdiv flex="2_1_auto_column_flex-end_flex-start" height="140px">
                        <Span flex="0" font="32px">{clubprofile.name}</Span>
                        <Span flex="0" font="14px" color="#dadada">생성일 {clubprofile.createdAt}</Span>
                        {/* 가입신청버튼 */}
                        <Flexbutton flex="0_1_auto_row_center_center" width="90px" height="45px" font="15px" border="1px_0_0_0_#333333" radius="10px" margin="20px 0 5px 0">가입 신청</Flexbutton>
                    </Flexdiv>
                    <Flexdiv flex="0_1_auto_row_center_flex-start" margin="0 34px 0 10px">
                        <Flexdiv flex="0_1_auto_column_center_center" margin="0 5px">
                            <Flexdiv flex="0_1_auto_row_center_center" width="80px" height="30px" font="14px" backgroundColor="#5f5f5f" color="#ffffff" radius="10px" margin="5px 0">소속</Flexdiv>
                            <Flexdiv flex="0_1_auto_row_center_center" width="80px" height="30px" font="14px" backgroundColor="#5f5f5f" color="#ffffff" radius="10px" margin="5px 0">{clubprofile.belong}</Flexdiv>
                        </Flexdiv>
                        <Flexdiv flex="0_1_auto_column_center_center" margin="0 5px">
                            <Flexdiv flex="0_1_auto_row_center_center" width="80px" height="30px" font="14px" backgroundColor="#333333" color="#ffffff" radius="10px" margin="5px 0">카테고리</Flexdiv>
                            <Flexdiv flex="0_1_auto_row_center_center" width="80px" height="30px" font="14px" backgroundColor="#333333" color="#ffffff" radius="10px" margin="5px 0">{clubprofile.bigCategory}</Flexdiv>
                            <Flexdiv flex="0_1_auto_row_center_center" width="80px" height="30px" font="14px" backgroundColor="#333333" color="#ffffff" radius="10px" margin="5px 0">{clubprofile.smallCategory}</Flexdiv>
                        </Flexdiv>
                    </Flexdiv>
                </Flexdiv>
                {/* 동아리 소개글 */}
                <Flexdiv flex="0_1_auto_row_center_center" width="860px" margin="0 0 20px 0">
                    <P flex="0" font="18px_0_0_0_24px" width="800px">{clubprofile.cover}</P>
                </Flexdiv>



                {/* 홍보물 history 무한스크롤 */}
                <Flexdiv position="relative" flex="0_1_auto_column_flex-start_center" width="1000px">
                    <Flexdiv flex="0_1_auto_row_flex-start_center" width="100%" height="60px" font="24px_600" backgroundColor="#f0f0f0" radius="10px 10px 0 0"><Span margin="0 10px">홍보물 History</Span></Flexdiv>
                    <Flexdiv position="absolute_60px" flex="0_1_auto_row_space-around_center_wrap" width="998px" border="1px solid #dadada" padding="10px 0">
                        {prpost.map((elem) => <Promote_PrPost elem={elem} />)}
                    </Flexdiv>
                </Flexdiv>



            </Flexdiv>
        </React.Fragment >
    )
}

export default Promote_ClubProfile_Section
