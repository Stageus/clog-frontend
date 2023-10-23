import React from "react"

// Container,Component
import useIntersect from "../../../module/InfiniteScroll"
//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { belongAtom, bigCategoryAtom, categoryResultClubAtom, smallCategoryAtom } from "../../../recoil/PromoteAtom"

//styled-components 
import { Flexdiv, Flexinput, P, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg
//router
import { Link, useNavigate } from 'react-router-dom'
import Promote_CategoryResult_Club from "../../Component/Promote/Promote_CategoryResult_Club"
import Promote_Category_DropBox from "../../Component/Promote/Promote_Category_DropBox"




const Promote_CategoryResult_Section = () => {
    // props ============================================================

    // state ============================================================
    const navigate = useNavigate()
    const smallCategory = useRecoilValue(smallCategoryAtom)//카테고리 소분류
    const bigCategory = useRecoilValue(bigCategoryAtom);//카테고리 대분류
    const belong = useRecoilValue(belongAtom)// 동아리 소속 / 중앙동아리,일반동아리 제외(대분류 포함)
    const belongList = []
    const smallList = ["전체"] //임시로 공연 대분류의 소분류만 저장
    // belong에서 중앙동아리, 일반동아리 제외
    for (let index = 0; index < belong.length - 2; index++) {
        belongList[index] = { ...belong[index + 2] }
        belongList[index].num = bigCategory.length + index
    }
    //임시로 공연 대분류의 소분류만 저장
    for (let index = 0; index < 6; index++) {
        smallList[index + 1] = smallCategory[index].name
    }


    //////////// 무한 스크롤 변수///////////////////
    const allData = useRecoilValue(categoryResultClubAtom);//모든 데이터
    const [data, setData] = React.useState([]);//현재 데이터
    const [isLoaded, setIsLoaded] = React.useState(false);//true이면 loading중임
    const page = React.useRef(0);//page count
    const perPage = 6;//한 페지당 불러올 prpost 개수
    let last = allData.length % perPage// 마지막 페이지의 컴포넌트 개수
    let pageMax = parseInt(allData.length / perPage)//총 페이지 수


    // event ============================================================
    const clickEvent = (e) => {
        let id = e.target.id
        if (id == "goclubprofile") {
            console.log(id)
            navigate("/promote/club-profile")
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
            <Flexdiv onClick={clickEvent} flex="0_1_auto_column_center_center" width="100%" margin="120px 0">
                <Flexdiv flex="0_1_auto_column_center_center" width="1330px" margin="40px 0">
                    {/* 제목 ex)공연 동아리 */}
                    <Flexdiv flex="0_1_auto" width="1150px" height="50px" fontSize="36px">{bigCategory[0].content} 동아리</Flexdiv>
                    {/* 드롭다운 박스 */}
                    <Flexdiv flex="0_1_auto_column_center_flex-start" position="relative" width="1150px" margin="20px 10px 40px 0">
                        <Promote_Category_DropBox list={smallList} width={"200px"} height={"36px"} />
                    </Flexdiv>
                </Flexdiv>

                <Flexdiv flex="0_1_auto_row_flex-start_center_wrap" width="1330px">
                    {data.map((elem) => <Promote_CategoryResult_Club elem={elem} />)}
                </Flexdiv>
                {isLoaded && <Flexdiv flex="0_1_auto" ref={setRef} backgroundColor="blue"> Loading!</Flexdiv>}

            </Flexdiv>

        </React.Fragment>
    )
}

export default Promote_CategoryResult_Section