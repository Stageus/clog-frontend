import React from "react"
// Container,Component
import useIntersect from "../../../module/InfiniteScroll"
import Nav_NotificationBox_Notification from "../../Component/Nav/Nav_NotificationBox_Notification"

//styled-components 
import { Flexdiv, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg
import { ReactComponent as Svgslash } from "../../../image/bell-slash.svg"

//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { alarmAtom, alarmNumAtom, zeroAlarmAtom } from "../../../recoil/NavAtom"


const NotificatiionBoxBody = styled(Flexdiv)`
    position : absolute;
    top: 0px;
    left: 70px;
    
`
const BoxTitle = styled(Flexdiv)`
    border-bottom: 1px solid #dadada;
`

const NotificationBox = styled(Flexdiv)`
    overflow-y: auto;
`

const Nav_NotificationBox = () => {
    // props ======================================================

    // state ======================================================
    const [allData, setAllData] = useRecoilState(alarmAtom);//모든 데이터
    const [data, setData] = React.useState([]);//현재 데이터
    const zeroData = useRecoilValue(zeroAlarmAtom)
    const [uncheckAlarmNum, setUncheckAlarmNum] = useRecoilState(alarmNumAtom);//안읽은 알람 개수
    const [isLoaded, setIsLoaded] = React.useState(false);//true이면 loading중임
    const page = React.useRef(0);//page count
    const perPage = 20;//한 페이지당 불러올 알람 개수

    // event ======================================================
    //클릭이벤트
    const clickEvent = (e) => {
        let id = e.target.id
        if (id == "readAllBtn") {
            readAll()
        }
    }

    //모두 읽음 처리 함수
    const readAll = () => {
        let newList = []
        //allData의 모든 isRead를 true로 변경
        for (let index0 = 0; index0 < allData.length; index0++) {
            let newData = { ...allData[index0] }
            newData.isRead = true
            newList[index0] = newData
        }
        setAllData(newList)
        setUncheckAlarmNum(0)
        //alarmNum을 0 으로 변경(ui 반영이 늦어도 되는 부분이라고 생각해 그냥 하위 컴포넌트에 넣음)
    }


    ///////////////////////////////////무한 스크롤 관련 함수///////////////////
    //넘어온 알람을 20개씩 파싱(임시)
    const cutData = () => {
        let newDataList = []
        for (let index = 0; index < perPage; index++) {
            let count = index + perPage * page.current
            newDataList[index] = allData[count]
        }
        return newDataList
    }

    //callback함수 실행시 ...
    const fetchData = async () => {
        let newDataList = []
        let pageMax = allData.length / perPage
        if (page.current < pageMax) {
            //현재 페이지의, 추가할 데이터를 불러옴
            let newDataList = cutData()
            setData((data) => {
                return [...data, ...newDataList]
            })//데이터에 즉시 추가
            setIsLoaded(true)
            page.current++;//다음 페이지
        }
    };

    //마운트시 fetch
    React.useEffect(() => {
        fetchData();
    }, []);//

    //custom hook 사용
    const [_, setRef] = useIntersect(async (entry, observer) => {
        //데이터 패칭이 완료되기 전에 교차 상태를 여러번 변화시키는 상황이 발생하지 않도록 관찰을 중단했다가 다시 observe한다.
        observer.unobserve(entry.target);
        await fetchData();//데이터 불러오는 함수
        observer.observe(entry.target);
    }, {
        root: document.getElementById('notification'),//부모로 설정할 요소
        threshold: 1,
        rootMargin: '0px',
    });
    ///////////////////////////////////무한 스크롤 관련 함수///////////////////




    return (
        <React.Fragment>
            <NotificatiionBoxBody onClick={clickEvent} flex="0_1_auto_column_center_center" width="480px" height="500px" radius="10px" outline="1px solid #dadada" backgroundColor="#ffffff">
                <BoxTitle flex="0_1_auto_row_space-between_center" width="450px" height="40px">
                    {/* 알림 제목 */}
                    <Span flex="0_1_auto">알림</Span>
                    {/* 모두읽음처리 버튼 */}
                    <Flexbutton id="readAllBtn" type="button" flex="0_1_auto_row_center_center" width="90px" height="24px" radius="10px" backgroundColor="#c4c4c4" color="#ffffff">모두읽음처리</Flexbutton>
                </BoxTitle>

                {/* 알림의 개수가 0개이면 ~, 아니면~ */}
                {(data.length == 0) ?
                    //윗줄에서 data 대신 zeroData를 입력하면 확인가능
                    <NotificationBox id="notification" width="480px" height="460px">
                        <Flexdiv flex="0_0_auto_column_center_center" height="100%">
                            <Flexdiv flex="0_0_auto" width="100px" ><Svgslash fill="#c4c4c4" height="100px" /></Flexdiv>
                            <Span fontSize="16px" color="#c4c4c4" margin="20px 0 10px 0">누적된 알림이 없습니다</Span>
                            <Span fontSize="14px" color="#c4c4c4">알림이 오면 이곳에 표시됩니다.</Span>
                        </Flexdiv>
                    </NotificationBox>
                    :
                    <NotificationBox id="notification" width="480px" height="460px">
                        {data.map(elem => <Nav_NotificationBox_Notification elem={elem} />)}
                        {isLoaded && <Flexdiv ref={setRef} backgroundColor="blue"> Loading!</Flexdiv>}
                    </NotificationBox>}
            </NotificatiionBoxBody>
        </React.Fragment >
    )
}

export default Nav_NotificationBox