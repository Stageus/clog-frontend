import React from "react"

// Container,Component
import Nav_Header from "../../Component/Nav/Nav_Header"
import Nav_NotificationBox from "../../Container/Nav/Nav_NotificaitionBox"
import Nav_Section_Club from "../../Component/Nav/Nav_Section_Club"
import Nav_ProfileEdit from "./Nav_ProfileEdit"

//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { accountInfoAtom, alarmNumAtom, clubListAtom } from "../../../recoil/NavAtom"

//styled-components 
import { Flexdiv, Flexinput, Img, Span } from "../../../style/common"
import styled from "styled-components"

const AlamdivParent = styled(Flexdiv)`
    position: relative;
`
const Alamdiv = styled(Flexdiv)`
    display: flex;
    position: absolute;
    right:7px;
    top: 8px;
    z-index: 1;
`
const Line = styled(Flexdiv)`
    border-top: 1px solid #dadada;
`
const Nav_Section = () => {
    const account = useRecoilValue(accountInfoAtom)
    const arlamNum = useRecoilValue(alarmNumAtom)
    const clubList = useRecoilValue(clubListAtom)


    return (
        <React.Fragment>
            <Flexdiv backgroundColor="#fffff0" width="240px" height="1024px">
                <Nav_Header />

                <Flexdiv width="240px" height="340px" backgroundColor="#fff0f0">
                    <Flexdiv flex="0_0_auto_row_space-between_center" width="240px" height="56px">
                        <Flexinput type="button" flex="0_0_auto" width="24px" height="24px" margin="16px" url={require("../../../image/moon.svg").default} />
                        <AlamdivParent flex="0_0_auto" width="56px" height="56px">
                            <Flexinput type="button" flex="0_0_auto" width="24px" height="24px" margin="16px" url={require("../../../image/bell.svg").default} />
                            <Alamdiv width="20px" height="20px" backgroundColor="red" fontSize="13px" color="white" radius="50%">{arlamNum}</Alamdiv>
                        </AlamdivParent>
                    </Flexdiv>
                    <Flexdiv flex="0_0_auto_column_flex-end_center" height="224px">
                        <Flexinput type="button" flex="0_0_auto" width="130px" height="124px" margin="0 0 20px 0" radius="50%" value={account.entryYear + account.name} outline="1px solid black" backgroundColor={"#" + account.personalColor} fontSize="24px" color="white" />
                        <Flexdiv flex="0_0_auto" height="40px" fontSize="24px" >{account.name}</Flexdiv>
                        <Flexdiv flex="0_0_auto" height="40px" fontSize="16px" >{account.major} {account.entryYear}학번</Flexdiv>
                    </Flexdiv>
                    <Flexdiv flex="0_0_auto_row_center_center" height="60px">
                        <Flexinput type="button" flex="0_0_auto" value="프로필 설정" width="100px" height="30px" radius="10px" margin="0 5px" padding="0 0 0 18px" backgroundColor="white" border="1px solid #dadada" />
                        <Flexinput type="button" flex="0_0_auto" value="로그아웃" width="100px" height="30px" radius="10px" margin="0 5px" padding="0 0 0 26px" backgroundColor="white" border="1px solid #dadada" />
                    </Flexdiv>
                </Flexdiv>

                <Line width="220px" height="15px" margin="0 0 0 10px"></Line>

                <Flexdiv backgroundColor="#fff0ff">
                    {clubList.map((elem) => <Nav_Section_Club elem={elem} />)}
                </Flexdiv>
            </Flexdiv>

            <Nav_NotificationBox />
            <Nav_ProfileEdit />
        </React.Fragment>
    )
}

export default Nav_Section