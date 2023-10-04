import React from "react"

// Container,Component
import Nav_NotificationBox_Notification from "../../Component/Nav/Nav_NotificationBox_Notification"
//styled-components 
import { Flexdiv, Flexinput, Img, Span } from "../../../style/common"
import styled from "styled-components"
//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { alarmListAtom } from "../../../recoil/NavAtom"

const BoxTitle = styled(Flexdiv)`
    border-bottom: 1px solid #dadada;
`
const Nav_NotificationBox = () => {
    const alarmList = useRecoilValue(alarmListAtom)


    return (
        <React.Fragment>
            <Flexdiv width="480px" height="500px" radius="10px" backgroundColor="#f2ffff" outline="1px solid #dadada">
                <BoxTitle flex="0_0_auto_row_space-between_center" width="100%" height="40px">
                    <Span flex="0_0_auto" margin="0 0 0 20px">알림</Span>
                    <Flexinput flex="0_0_auto" type="button" value="Delete All" width="82px" height="24px" radius="10px" margin="0 20px 0 0" />
                </BoxTitle>


                <Flexdiv>
                    {alarmList.map((elem) => <Nav_NotificationBox_Notification elem={elem} />)}
                </Flexdiv>


            </Flexdiv>
        </React.Fragment>
    )
}

export default Nav_NotificationBox