import React from "react"

// Container,Component
import Nav_Header from "../../Component/Nav/Nav_Header"
import Nav_NotificationBox from "../../Container/Nav/Nav_NotificaitionBox"
import Nav_Section_Club from "../../Component/Nav/Nav_Section_Club"
import Nav_ProfileEdit from "./Nav_ProfileEdit"

//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { accountInfoAtom, alarmNumAtom, clubListAtom, contextAtom } from "../../../recoil/NavAtom"

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
    // props ======================================================

    // state ======================================================
    const account = useRecoilValue(accountInfoAtom)
    const arlamNum = useRecoilValue(alarmNumAtom)
    const clubList = useRecoilValue(clubListAtom)
    const [profileBtn, setProfileBtn] = React.useState(false)
    const [alarmBtn, setAlarmBtn] = React.useState(false)


    // event ======================================================
    const clickEvent = (e) => {
        let id = e.target.id
        if (id == "profileBtn") {
            setAlarmBtn(false)
            setProfileBtn(!profileBtn)
        }
        else if (id == "alarmBtn") {
            setProfileBtn(false)
            setAlarmBtn(!alarmBtn)
        }
    }
    return (
        <React.Fragment>
            <Flexdiv width="100%" height="100%" backgroundColor="#f2f2f2">
                <Flexdiv width="240px" height="100%" backgroundColor="#ffffff">
                    <Nav_Header />

                    <Flexdiv width="240px" height="340px">
                        <Flexdiv flex="0_0_auto_row_space-between_center" width="240px" height="56px">
                            <Flexinput type="button" flex="0_0_auto" width="24px" height="24px" margin="16px" url={require("../../../image/moon.svg").default} />
                            <AlamdivParent flex="0_0_auto" width="56px" height="56px">
                                <Flexinput id="alarmBtn" onClick={clickEvent} type="button" flex="0_0_auto" width="24px" height="24px" margin="16px" url={require("../../../image/bell.svg").default} />
                                <Alamdiv width="20px" height="20px" backgroundColor="red" fontSize="13px" color="white" radius="50%">{arlamNum}</Alamdiv>
                            </AlamdivParent>
                        </Flexdiv>
                        <Flexdiv flex="0_0_auto_column_flex-end_center" height="224px">
                            <Flexinput type="button" flex="0_0_auto" width="130px" height="124px" margin="0 0 20px 0" radius="50%" value={account.entryYear + account.name} outline="1px solid black" backgroundColor={"#" + account.personalColor} fontSize="24px" color="white" />
                            <Flexdiv flex="0_0_auto" height="40px" fontSize="24px" >{account.name}</Flexdiv>
                            <Flexdiv flex="0_0_auto" height="40px" fontSize="16px" >{account.major} {account.entryYear}학번</Flexdiv>
                        </Flexdiv>
                        <Flexdiv flex="0_0_auto_row_center_center" height="60px">
                            <Flexinput id="profileBtn" onClick={clickEvent} type="button" flex="0_0_auto" value="프로필 설정" width="100px" height="30px" radius="10px" margin="0 5px" padding="0 0 0 18px" backgroundColor="white" border="1px solid #dadada" />
                            <Flexinput type="button" flex="0_0_auto" value="로그아웃" width="100px" height="30px" radius="10px" margin="0 5px" padding="0 0 0 26px" backgroundColor="white" border="1px solid #dadada" />
                        </Flexdiv>
                    </Flexdiv>
                    <Line width="220px" height="15px" margin="0 0 0 10px"></Line>

                    <Flexdiv>
                        <Flexdiv></Flexdiv>
                        {clubList.map((elem) => <Nav_Section_Club elem={elem} />)}
                    </Flexdiv>
                </Flexdiv>
                {profileBtn && <Nav_ProfileEdit />}

                {alarmBtn && <Nav_NotificationBox />}
            </Flexdiv>
        </React.Fragment>
    )



};


export default Nav_Section









