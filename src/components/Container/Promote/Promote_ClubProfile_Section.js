import React from "react"

// Container,Component
import Promote_PrPost from "../../Component/Promote/Promote_PrPost"
import useIntersect from "../../../module/InfiniteScroll"

//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { prPostAtom, clubProfileAtom } from "../../../recoil/PromoteAtom"

//styled-components 
import { Flexdiv, Flexinput, P, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg
import { ReactComponent as Svgempty } from "../../../image/box-open.svg"

//router
import { Link, useNavigate } from 'react-router-dom'

const Promote_ClubProfile_Section = () => {
    // props ============================================================

    // state ============================================================
    // const prpost = useRecoilValue(prPostAtom)
    const clubprofile = useRecoilValue(clubProfileAtom)
    //무한 스크롤 변수
    const [allData, setAllData] = useRecoilState(prPostAtom);//모든 데이터
    const [data, setData] = React.useState([]);//현재 데이터
    const [isLoaded, setIsLoaded] = React.useState(false);//true이면 loading중임
    const page = React.useRef(0);//page count
    const perPage = 12;//한 페지당 불러올 prpost 개수
    let last = allData.length % perPage// 마지막 페이지의 컴포넌트 개수
    let pageMax = parseInt(allData.length / perPage)//총 페이지 수

    // event ============================================================
    const navigate = useNavigate();
    const clickEvent = (e) => {
        let id = e.target.id
        console.log(id)
        if (id == "prpost") {
            navigate("/promote/pr-post-view")
        }
    }

    ///////////////////////////////////무한 스크롤 관련 함수///////////////////
    //데이터 파싱
    const cutData = () => {
        let newDataList = []
        if (page.current < pageMax) {
            for (let index = 0; index < perPage; index++) {
                let count = index + perPage * page.current
                newDataList[index] = allData[count]
            }
        }
        else if (page.current >= pageMax) {
            for (let index = 0; index < last; index++) {
                let count = index + perPage * page.current
                newDataList[index] = allData[count]
            }
        }
        return newDataList
    }

    //callback함수 실행시 ...
    const fetchData = async () => {
        if (page.current <= pageMax) {
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
        root: null,
        threshold: 1,
        rootMargin: '0px',
    });
    ///////////////////////////////////무한 스크롤 관련 함수///////////////////

    return (
        <React.Fragment>
            <Flexdiv onClick={clickEvent} flex="0_1_auto_column_flex-start_center" width="100%" margin="50px 0">
                <Flexdiv onClick={clickEvent} flex="0_1_auto_column_center_center" width="1000px" height="400px">
                    {/* 로고, 이름, 신청버튼, 생성일 소속, 카테고리 */}
                    <Flexdiv flex="0_1_auto_row_center_center" width="860px" >
                        <Img flex="0_1_auto" width="150px" height="150px" radius="50%" border="3px solid #333333" src={clubprofile.profileImage} margin="20px" />
                        <Flexdiv flex="2_1_auto_column_flex-end_flex-start" height="140px">
                            <Span flex="0" font="32px">{clubprofile.name}</Span>
                            <Span flex="0" font="14px" color="#dadada">생성일 {clubprofile.createdAt}</Span>
                            {/* 가입신청버튼 */}
                            <Flexbutton flex="0_1_auto_row_center_center" width="90px" height="45px" font="15px" border="1px_0_0_0_#333333" radius="10px" margin="20px 0 5px 0">가입 신청</Flexbutton>
                        </Flexdiv>
                        <Flexdiv flex="0_1_auto_row_center_flex-start" margin="0 34px 0 10px">
                            <Flexdiv flex="0_1_auto_column_center_center" margin="0 5px">
                                <Flexdiv flex="0_1_auto_row_center_center" width="80px" height="30px" font="14px" backgroundColor="#5f5f5f" color="#ffffff" radius="10px" margin="5px 0">소속</Flexdiv>
                                <Flexdiv flex="0_1_auto_row_center_center" width="80px" height="30px" font="14px" backgroundColor="#5f5f5f" color="#ffffff" radius="10px" margin="5px 0">{clubprofile.belong}</Flexdiv>
                            </Flexdiv>
                            <Flexdiv flex="0_1_auto_column_center_center" margin="0 5px">
                                <Flexdiv flex="0_1_auto_row_center_center" width="80px" height="30px" font="14px" backgroundColor="#333333" color="#ffffff" radius="10px" margin="5px 0">카테고리</Flexdiv>
                                <Flexdiv flex="0_1_auto_row_center_center" width="80px" height="30px" font="14px" backgroundColor="#333333" color="#ffffff" radius="10px" margin="5px 0">{clubprofile.bigCategory}</Flexdiv>
                                <Flexdiv flex="0_1_auto_row_center_center" width="80px" height="30px" font="14px" backgroundColor="#333333" color="#ffffff" radius="10px" margin="5px 0">{clubprofile.smallCategory}</Flexdiv>
                            </Flexdiv>
                        </Flexdiv>
                    </Flexdiv>
                    {/* 동아리 소개글 */}
                    <Flexdiv flex="0_1_auto_row_center_center" width="860px" margin="0 0 20px 0">
                        <P flex="0" font="18px_0_0_0_24px" width="800px">{clubprofile.cover}</P>
                    </Flexdiv>
                </Flexdiv>
                {/* 홍보물 history 무한스크롤 */}
                <Flexdiv flex="0_1_auto_column_flex-start_center" width="1000px" border="1px solid #dadada" radius="10px">
                    <Flexdiv flex="0_1_auto_row_flex-start_center" width="100%" height="60px" font="24px_600" backgroundColor="#f0f0f0" radius="10px 10px 0 0">
                        <Span margin="0 10px">홍보물 History</Span>
                    </Flexdiv>
                    {(data.length == 0) ?
                        <Flexdiv flex="0_1_auto_column_center_center" width="998px" height="240px" margin="50px 0">
                            <Svgempty fill="#c4c4c4" width="100px" height="100px" />
                            <Span color="#c4c4c4" margin="5px 0">홍보물 기록이 없습니다.</Span>
                        </Flexdiv> :
                        <Flexdiv flex="0_1_auto_row_flex-start_center_wrap" width="998px" padding="10px 0">
                            {data.map((elem) => <Promote_PrPost elem={elem} sidemargin="4px" />)}
                            {isLoaded && <Flexdiv flex="0_1_auto" ref={setRef} backgroundColor="blue"> Loading!</Flexdiv>}
                        </Flexdiv>
                    }
                </Flexdiv>
            </Flexdiv>
        </React.Fragment >
    )
}

export default Promote_ClubProfile_Section
