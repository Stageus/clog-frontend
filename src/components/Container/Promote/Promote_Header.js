import React from "react"

// Container,Component
import Nav_Header from "../../Component/Nav/Nav_Header"
//recoil

import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { navOpenAtom } from "../../../recoil/NavAtom"

//styled-components 
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg
import { ReactComponent as Svgsearch } from "../../../image/search.svg"
import { ReactComponent as Svgplus } from "../../../image/square-plus.svg"
//router
import { Link, useNavigate } from 'react-router-dom'


const PromoteHeaderdiv = styled(Flexdiv)`
    
`
const SearchLeft = styled(Flexdiv)`
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
`

const SearchRight = styled(Flexbutton)`
    border-top-right-radius : 30px;
    border-bottom-right-radius: 30px;
`
const Promote_Header = () => {
    // props ======================================================
    const navigate = useNavigate()
    // state ======================================================
    const [navOpen, setNavOpen] = useRecoilState(navOpenAtom);

    // event ======================================================
    const clickEvent = (e) => {
        let id = e.target.id
        console.log(id)
        if (id == "navbutton") {
            setNavOpen(!navOpen)
            console.log(navOpen)
        }
        //클로그 로고 클릭시 promote/main페이지로 이동
        else if (id == "navClogLogo") {
            navigate("/promote/main")
            setNavOpen(false)
        }
        else if (id == "gosearch") {
            navigate("/promote/search-result")
        }
        else if (id == "goclubcreate") {
            navigate("/promote/club-create")
        }
    }

    return (
        <React.Fragment>
            <PromoteHeaderdiv onClick={clickEvent} flex="0_1_auto_row_space-between_center" position="fixed_0px_0_0_0px" width="100%" height="56px" backgroundColor="#ffffff">
                {/* 왼쪽 헤더 */}
                <Nav_Header navOpen={navOpen} />

                {/* 헤더 중앙 */}
                <Flexdiv flex="0_0_auto_row_center_center" width="770px">
                    <SearchLeft flex="0_0" width="700px" height="38px" backgroundColor="#ffffff" outline="1px solid #dadada">
                        <Flexinput width="650px" />
                    </SearchLeft>
                    <SearchRight id="gosearch" type="button" flex="0_0_auto_row_center_center" width="68px" height="38px" backgroundColor="#f0f0f0" outline="1px solid #dadada">
                        <Svgsearch id="gosearch" height="24px" />
                    </SearchRight>
                </Flexdiv>

                {/* 오른쪽 헤더 */}
                <Flexbutton id="goclubcreate" flex="0_1_56px_row_center_center" width="56px" backgroundColor="#ffffff"><Svgplus id="goclubcreate" height="24px" /></Flexbutton>
            </PromoteHeaderdiv>

        </React.Fragment>
    )
}

export default Promote_Header