import React from "react"
import Nav_Header from "../../Component/Nav/Nav_Header"
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { accountInfoAtom } from "../../../recoil/NavAtom"
import Nav_Section_Club from "../../Component/Nav/Nav_Section_Club"

import { Flexdiv, Flexinput, Img, Span } from "../../../style/common"

const Nav_Section = () => {
    const account = useRecoilValue(accountInfoAtom)


    return (
        <React.Fragment>
            <Nav_Header />

            <Flexdiv width="240px" height="340px">
                <Flexdiv flex="0_0_auto_row_space-between_center" width="240px" height="56px">
                    <Flexinput type="button" flex="0_0_auto" width="24px" height="24px" margin="16px" url={require("../../../image/moon.svg").default} />
                    <Flexinput type="button" flex="0_0_auto" width="24px" height="24px" margin="16px" url={require("../../../image/bell.svg").default} />
                </Flexdiv>
                <Flexdiv flex="0_0_auto_column_flex-end_center" height="224px">
                    <Flexinput type="button" flex="0_0_auto" width="130px" height="130px" margin="7px 0 7px 0" radius="50%" value={account.entryYear + account.name} />
                    <Span flex="0_0_auto" height="40px" fontSize="24px" >{account.name}</Span>
                    <Span flex="0_0_auto" height="40px" fontSize="16px" >{account.major} {account.entryYear}학번</Span>
                </Flexdiv>
                <Flexdiv flex="0_0_auto_row_center_center" height="60px">
                    <Flexinput type="button" flex="0_0_auto" value="프로필 설정" width="100px" height="30px" radius="10px" margin="0 5px" padding="0 0 0 18px" />
                    <Flexinput type="button" flex="0_0_auto" value="로그아웃" width="100px" height="30px" radius="10px" margin="0 5px" padding="0 0 0 26px" />
                </Flexdiv>
            </Flexdiv>

            <div>여기부터 동아리 목록</div>
            <div><Nav_Section_Club /></div>
        </React.Fragment>
    )
}

export default Nav_Section