import React from "react"

// Container,Component

//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { accountInfoAtom, alarmNumAtom, clubListAtom } from "../../../recoil/NavAtom"

//styled-components 
import { Flexdiv, Flexinput, Img, Span } from "../../../style/common"
import styled from "styled-components"

const BoxTitle = styled(Flexdiv)`
    border-bottom: 1px solid #dadada;
`

const Nav_ProfileEdit = () => {
    return (
        <React.Fragment>
            <Flexdiv width="480px" height="400px" backgroundColor="yellow">
                <BoxTitle flex="0_0_auto_row_space-between_center" width="100%" height="40px" margin="10px">
                    <Span flex="0_0_auto" margin="0 0 0 20px">프로필 설정</Span>
                </BoxTitle>
                <Flexdiv width="460px" height="360px">
                    <Flexdiv flex="0_0_auto_row_flex-start_center" width="460px" height="50px" radius="10px" outline="1px solid #dadada">
                        <Img flex="0_0_auto" src={require("../../../image/user.svg").default} width="24px" height="24px" margin="13px" />
                        <Flexinput flex="0_0_auto" type="text" placeholder="이름" width="410px" height="50px" color="#dadada" />
                    </Flexdiv>
                    <Flexdiv flex="0_0_auto_row_flex-start_center" width="460px" height="50px" radius="10px" outline="1px solid #dadada">
                        <Img flex="0_0_auto" src={require("../../../image/user.svg").default} width="24px" height="24px" margin="13px" />
                        <Flexinput flex="0_0_auto" type="text" placeholder="학과" width="410px" height="50px" color="#dadada" />
                    </Flexdiv>
                </Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}

export default Nav_ProfileEdit