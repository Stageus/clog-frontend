import React from "react"

// Container,Component
import Promote_PrPost from "../../Component/Promote/Promote_PrPost"

//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { prPostAtom } from "../../../recoil/PromoteAtom"

//styled-components 
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg

//router
import { Link, useNavigate } from 'react-router-dom'



const Promote_Main_Section = () => {
    // props ======================================================

    // state ======================================================
    const prpost = useRecoilValue(prPostAtom)

    // event ======================================================
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
                <Flexdiv flex="0_1_auto_row_space-around_center_wrap" width="1330px" margin="120px 0 0 0">
                    {prpost.map((elem) => <Promote_PrPost elem={elem} />)}
                </Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}

export default Promote_Main_Section
