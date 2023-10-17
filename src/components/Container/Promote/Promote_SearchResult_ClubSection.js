import React from "react"

// Container,Component
import Promote_SearchResult_Club from "../../Component/Promote/Promote_SearchResult_Club"
//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { searchResultClubAtom } from "../../../recoil/PromoteAtom"

//styled-components 
import { Flexdiv, Flexinput, P, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg
import { ReactComponent as Svgleft } from "../../../image/angle-left.svg"
import { ReactComponent as Svgright } from "../../../image/angle-right.svg"
import { ReactComponent as Svgempty } from "../../../image/box-open.svg"
//router
import { Link, useNavigate } from 'react-router-dom'

const HiddenDiv = styled(Flexdiv)`
    overflow-x: scroll;
`
const Promote_SearchResult_ClubSection = () => {
    // props ============================================================

    // state ============================================================
    const searchResultclub = useRecoilValue(searchResultClubAtom)
    // event ============================================================
    const navigate = useNavigate()
    const clickEvent = (e) => {
        let id = e.target.id
        if (id = "goclubprofile") {
            navigate("/promote/club-profile")
        }
    }

    console.log(searchResultclub.length)
    return (
        <React.Fragment>
            <Flexdiv onClick={clickEvent} flex="0_1_auto_row_center_center" width="100%" margin="150px 0 0 0">
                <Flexdiv flex="0_1_auto_column_flex-start_center" width="1200px" height="250px" backgroundColor="#f0f0f0" radius="10px">
                    {/* 검색결과(동아리/소모임) */}
                    <Flexdiv flex="0_1_auto_row_flex-start_center" width="1100px" height="90px" fontSize="24px">검색결과(동아리/소모임)</Flexdiv>
                    {(searchResultclub.length == 0) ?
                        <Flexdiv flex="0_1_auto_column_center_center">
                            <Svgempty fill="#c4c4c4" width="100px" height="100px" />
                            <Span color="#c4c4c4" margin="5px 0">검색결과가 없습니다</Span>
                        </Flexdiv>
                        :
                        <HiddenDiv flex="0_1_auto_row_flex-start_center" width="1170px" height="120px">
                            <Flexdiv flex="0_1_auto_row_flex0start_center" height="100%">
                                {searchResultclub.map((elem) => <Promote_SearchResult_Club elem={elem} />)}
                            </Flexdiv>
                        </HiddenDiv>}
                    {/* 페이지 넘김 버튼 */}
                    <Flexdiv flex="0_1_auto_row_flex-end_center" width="1160px" height="20px" margin="9px 0">
                        <Flexbutton><Svgleft width="15px" height="15px" fill="#aaaaaa" /></Flexbutton>
                        <Flexbutton><Svgright width="15px" height="15px" fill="#aaaaaa" /></Flexbutton>
                    </Flexdiv>
                </Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}

export default Promote_SearchResult_ClubSection
