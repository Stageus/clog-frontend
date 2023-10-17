import React from "react"

// Container,Component

//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { belongAtom, bigCategoryAtom } from "../../../recoil/PromoteAtom"

//styled-components 
import { Flexdiv, Flexinput, P, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg

//router
import { Link, useNavigate } from 'react-router-dom'

const Promote_ClubProfile_Section = () => {
    return (
        <React.Fragment>
            <Flexdiv flex="0_1_auto_column_center_center" width="100%">
                <Flexdiv width="1000px" height="400px" backgroundColor="orange" margin="90px 0">
                    하
                </Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}

export default Promote_ClubProfile_Section
