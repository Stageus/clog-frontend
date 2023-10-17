import React from "react"

// Container,Component
import Promote_PrPost from "../../Component/Promote/Promote_PrPost"
//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { prPostAtom } from "../../../recoil/PromoteAtom"

//styled-components 
import { Flexdiv, Flexinput, P, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg
import { ReactComponent as Svgempty } from "../../../image/box-open.svg"

//router
import { Link, useNavigate } from 'react-router-dom'

const Promote_SearchResult_PrPostSection = () => {
    // props ============================================================
    const prpost = useRecoilValue(prPostAtom)
    // state ============================================================

    // event ============================================================
    const navigate = useNavigate();
    const clickEvent = (e) => {
        let id = e.target.id
        console.log(id)
        if (id == "prpost") {
            navigate("/promote/pr-post-view")
        }
    }
    return (
        <React.Fragment>
            <Flexdiv onClick={clickEvent} flex="0_1_auto_row_center_center" width="100%">
                <Flexdiv flex="0_1_auto_column_flex-start_center" width="1330px">
                    {/* 검색결과(동아리/소모임) */}
                    <Flexdiv flex="0_1_auto_row_flex-start_center" width="1260px" height="90px" fontSize="24px" margin="30px 0 0 0">검색결과(홍보글)</Flexdiv>

                    {/* 검색결과 길이가 0이면~ 아니면~ */}
                    <Flexdiv flex="0_1_auto_row_space-around_center_wrap" fontSize="24px">
                        {(prpost.length == 0) ?
                            <Flexdiv flex="0_1_auto_column_center_center" width="1300px" height="240px" outline="1px solid #c4c4c4">
                                <Svgempty fill="#c4c4c4" width="100px" height="100px" />
                                <Span color="#c4c4c4" margin="5px 0">검색결과가 없습니다</Span>
                            </Flexdiv> :
                            prpost.map((elem) => <Promote_PrPost elem={elem} />)
                        }
                    </Flexdiv>

                </Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}

export default Promote_SearchResult_PrPostSection