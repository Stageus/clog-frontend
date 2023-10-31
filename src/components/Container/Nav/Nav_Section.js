import React from "react"

// Container,Component
import Nav_Header from "../../Component/Nav/Nav_Header"
import Nav_NotificationBox from "../../Container/Nav/Nav_NotificaitionBox"
import Nav_Section_Club from "../../Component/Nav/Nav_Section_Club"
import Nav_ProfileEdit from "./Nav_ProfileEdit"

//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { accountInfoAtom, alarmNumAtom, clubListAtom, zeroClubListAtom, navOpenAtom, alarmAtom } from "../../../recoil/NavAtom"

//styled-components 
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg
import { ReactComponent as Svgempty } from ".././../../image/box-open.svg"

//router
import { Link, useNavigate } from 'react-router-dom'
import { click } from "@testing-library/user-event/dist/click"


const OpacityDiv = styled(Flexdiv)`
    opacity: 0.7;
`

const Alamdiv = styled(Flexdiv)`
    display: flex;
    z-index: 1;
`

const Line = styled(Flexdiv)`
    border-top: 1px solid #dadada;
`
const ClubListBox = styled(Flexdiv)`
    overflow-y: auto;
`

const Nav_Section = () => {
    // props ======================================================

    // state ======================================================
    const [alarm, setAlarm] = useRecoilState(alarmAtom);//모든 데이터
    const account = useRecoilValue(accountInfoAtom);//계정정보(이름,퍼컬,전공,입학년도,가입일)
    const [uncheckAlarmNum, setUncheckAlarmNum] = useRecoilState(alarmNumAtom);//안읽은 알람 개수
    const clubList = useRecoilValue(clubListAtom);//가입한 동아리정보(동아리넘버,이름,프로필로고)
    const [profileBtn, setProfileBtn] = React.useState(false);//프로필 설정 열고닫기
    const [alarmBtn, setAlarmBtn] = React.useState(false);//알람창 열고닫기
    const setNavOpen = useSetRecoilState(navOpenAtom);//nav 여닫기
    // event ======================================================
    const navigate = useNavigate();

    //버튼, 디브 클릭이벤트
    const clickEvent = (e) => {
        let id = e.target.id
        console.log("id : ", id)
        //프로필 설정 열고닫기
        if (id == "profileBtn") {
            setAlarmBtn(false)
            setProfileBtn(!profileBtn)
        }
        // 알림창 열고닫기
        else if (id == "alarmBtn") {
            setProfileBtn(false)
            setAlarmBtn(!alarmBtn)
        }
        //클로그 로고 클릭시 promote/main페이지로 이동
        else if (id == "navClogLogo") {
            navigate("/promote/main")
            setNavOpen(false)
        }
        //클럽의 메인페이지로 이동
        else if (id == "navClub") {
            navigate("/club/main")
        }
        //로그인 페이지로 이동
        else if (id == "logoutBtn") {
            navigate("/account/login")
        }
        else if (id == "navEmptySpot") {
            setNavOpen(false)
        }
    }
    const settingUncheckAlarmNum = () => {
        let count = 0
        for (let index0 = 0; index0 < alarm.length; index0++) {
            let newData = { ...alarm[index0] }
            if (newData.isRead == false) {
                count = count + 1
            }
        }
        setUncheckAlarmNum(count)
    }
    React.useEffect(() => {
        settingUncheckAlarmNum()
    }, [alarm])


    return (
        <React.Fragment>
            {/* 네브 외의 부분은 투명하게 */}
            <OpacityDiv onClick={clickEvent} id="navEmptySpot" flex="0_1_auto" position="fixed_0px_0_0_240px" width="100vw" height="100%" backgroundColor="#f0f0f0">
                {/* {profileBtn && <Nav_ProfileEdit />} */}
            </OpacityDiv>
            <Flexdiv onClick={clickEvent} flex="0_1_auto_column_flex-start_center" position="fixed_0px_0_0_0px" width="240px" height="100vh" backgroundColor="#ffffff">
                {/* 네브 여닫이 버튼,클로그 로고 */}
                <Nav_Header />

                {/* 알림버튼,개인프로필,프로필설정과 로그인페이지 이동버튼 */}
                <Flexdiv width="240px" height="340px">
                    {/* 알림버튼 */}
                    <Flexdiv flex="0_0_auto_row_flex-end_center" width="240px" height="56px">
                        <Flexdiv flex="0_0_auto" position="relative" width="56px" height="56px">
                            <Flexbutton id="alarmBtn" type="button" flex="0_0_auto" width="24px" height="24px" margin="16px" url={require("../../../image/bell.svg").default}></Flexbutton>
                            <Alamdiv id="alarmBtn" flex="0_1_auto_row_center_center" position="absolute_8px_0_0_5px" width="20px" height="20px" backgroundColor="#ff0000" fontSize="13px" color="#ffffff" radius="50%">{uncheckAlarmNum}</Alamdiv>
                            {/* 알림창 박스 */}
                            {alarmBtn && <Nav_NotificationBox />}
                        </Flexdiv>
                    </Flexdiv>
                    {/* 개인프로필(퍼컬반영된 프로필,이름,학과,학번2자리) */}
                    <Flexdiv flex="0_0_auto_column_flex-end_center" height="224px">
                        <Flexbutton type="button" flex="0_0_auto_row_center_center" width="130px" height="124px" margin="0 0 20px 0" radius="50%" outline="1px solid black" backgroundColor={"#" + account.personalColor} fontSize="24px" colorBytBack={account.personalColor}>{account.entryYear + account.name}</Flexbutton>
                        <Flexdiv flex="0_0_auto" height="40px" fontSize="24px" >{account.name}</Flexdiv>
                        <Flexdiv flex="0_0_auto" height="40px" fontSize="16px" >{account.major} {account.entryYear}학번</Flexdiv>
                    </Flexdiv>
                    {/* 프로필설정,로그아웃 버튼 */}
                    <Flexdiv flex="0_0_auto_row_space-evenly_center" positon="relative" height="60px">
                        <Flexbutton id="profileBtn" type="button" flex="0_0_auto_row_center_center" width="100px" height="30px" radius="10px" backgroundColor="white" border="1px solid #dadada">프로필 설정</Flexbutton>
                        <Flexbutton id="logoutBtn" type="button" flex="0_0_auto_row_center_center" width="100px" height="30px" radius="10px" backgroundColor="white" border="1px solid #dadada">로그아웃</Flexbutton>
                        {/* 프로필 설정 박스 */}
                        {profileBtn && <Nav_ProfileEdit />}
                    </Flexdiv>
                </Flexdiv>

                {/* 구분선 */}
                <Line width="220px" height="15px" margin="0 0 0 10px"></Line>

                {/* 가입한 동아리 목록 */}
                <ClubListBox width="240px" height="fit-content">
                    {/* 가입한 동아리가 0이면 ~, 아니면 ~ */}
                    {(clubList.length == 0) ?
                        <Flexdiv flex="0_1_auto_column_flex-start_center" width="240px">
                            <Flexdiv flex="0_1_auto" width="60px" margin="20px 0"><Svgempty fill="#c4c4c4" height="60px" /></Flexdiv>
                            <Span flex="0_1_auto" fontSize="16px" color="#c4c4c4" margin="5px 0">가입된 동아리가 없습니다</Span>
                            <Span flex="0_1_auto" fontSize="12px" color="#c4c4c4" >클로그에서 새로운 동아리를 찾아보세요</Span>
                        </Flexdiv> :
                        clubList.map((elem) => <Nav_Section_Club elem={elem} />)}
                </ClubListBox>
            </Flexdiv>
        </React.Fragment>
    )



};


export default Nav_Section









