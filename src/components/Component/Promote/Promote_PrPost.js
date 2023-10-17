import React from "react"


//styled-components 
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg

//router
import { Link, useNavigate } from 'react-router-dom'

const Flexhidden = styled(Flexdiv)`
    overflow: hidden;
`

const Promote_PrPost = (props) => {
    // props ======================================================
    const { elem } = props

    // state ======================================================

    // event ======================================================


    return (
        <React.Fragment>
            <Flexdiv flex="0_1_auto_column_center_center" width="240px" height="390px" margin="10px 0 20px 0">
                <Flexdiv id="prpost" flex="0_1_auto_column_center" width="fit-content" height="fit-content" >
                    <Flexhidden id="prpost" flex="0_1_auto_row_center_center" width="210px" height="297px" backgroundColor="#f2f2f2" radius="10px" margin="0 0 5px 0">
                        <Img id="prpost" flex="0_1_auto" src={require("../../../image/prmain1.jpg")} width="210px" />
                    </Flexhidden>

                    {/* 홍보물 제목 */}
                    <Flexdiv id="prpost" textOver="hidden_normal_ellipsis_2" width="210px" height="40px" backgroundColor="#ffffff" font="14px_0_0_0_20px" textAlign="start">
                        {elem.title}
                    </Flexdiv>
                </Flexdiv>

                <Flexdiv flex="0_1_auto_row_center_center" width="210px" height="50px">
                    {/* 홍보물 작성한 동아리로고 */}
                    <Flexdiv flex="0_1_auto_row_center_center" width="50px" height="50px" margin="0 4px"><Img flex="0_1_auto" src={require("../../../image/global-news.png")} width="50px" radius="50%" /></Flexdiv>
                    {/* 홍보물작성한 동아리 이름, 댓글개수 */}
                    <Flexdiv backgroundColor="#ffffff" width="150px" padding="0 4px">
                        <Flexdiv width="fit-content" fontSize="14px" color="#888888">{elem.clubName}</Flexdiv>
                        <Flexdiv width="fit-content" fontSize="14px" color="#888888">댓글 {elem.commentNum}개</Flexdiv>
                    </Flexdiv>
                </Flexdiv>

            </Flexdiv>
        </React.Fragment>
    )
}

export default Promote_PrPost