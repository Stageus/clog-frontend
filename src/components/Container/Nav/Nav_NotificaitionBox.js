import React from "react"
// Container,Component
import useIntersect from "./InfiniteScroll"
import Nav_NotificationBox_Notification from "../../Component/Nav/Nav_NotificationBox_Notification"

//styled-components 
import { Flexdiv, Flexinput, Img, Span } from "../../../style/common"
import styled from "styled-components"
//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { contextAtom } from "../../../recoil/NavAtom"


const NotificatiionBoxBody = styled(Flexdiv)`
    position : relative;
    bottom: 967px;
    left: 250px;
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
    const AllData = useRecoilValue(contextAtom);//모든 데이터
    const [data, setData] = React.useState([]);//현재 데이터
    const [isLoaded, setIsLoaded] = React.useState(false);//true이면 loading중임
    const page = React.useRef(0);//page count

    // event ======================================================
    //callback함수 실행시 ...
    const fetchData = async () => {
        if (page.current < 3) {
            console.log("fectch 안의 page", page.current)
            let newData = AllData[page.current]//현재 페이지의, 추가할 데이터를 불러옴
            setData((data) => {
                return [...data, ...newData]
            })//데이터에 즉시 추가

            setIsLoaded(true)
            page.current++;//다음 페이지
        }
        else { console.log("모든 데이터 출력") }
    };


    //마운트시 fetch
    React.useEffect(() => {
        fetchData();
    }, []);//

    //custom hook 사용
    const [_, setRef] = useIntersect(async (entry, observer) => {
        //데이터 패칭이 완료되기 전에 교차 상태를 여러번 변화시키는 상황이 발생하지 않도록 관찰을 중단했다가 다시 observe한다.
        observer.unobserve(entry.target);
        await fetchData();
        observer.observe(entry.target);
    }, {});




    return (
        <React.Fragment>
            <NotificatiionBoxBody width="480px" height="500px" radius="10px" outline="1px solid #dadada" backgroundColor="#ffffff">
                <BoxTitle flex="0_0_auto_row_space-between_center" width="100%" height="40px">
                    <Span flex="0_0_auto" margin="0 0 0 20px">알림</Span>
                    <Flexinput flex="0_0_auto" type="button" value="모두 지우기" width="82px" height="24px" radius="10px" color="white" margin="0 10px 0 0" padding="0 0 0 10px" />
                </BoxTitle>

                <NotificationBox id="notification" width="480px" height="460px" backgroundColor="#fff2ff">
                    {data.map(elem => <Nav_NotificationBox_Notification elem={elem} />)}
                    {isLoaded && <Flexdiv ref={setRef} backgroundColor="blue"> Loading!</Flexdiv>}
                </NotificationBox>
            </NotificatiionBoxBody>
        </React.Fragment>
    )
}

export default Nav_NotificationBox