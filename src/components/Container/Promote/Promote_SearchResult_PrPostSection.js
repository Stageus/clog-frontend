import React from "react"

// Container,Component
import Promote_PrPost from "../../Component/Promote/Promote_PrPost"
import useIntersect from "../../../module/InfiniteScroll"
//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { prPostAtom } from "../../../recoil/PromoteAtom"

//styled-components 
import { Flexdiv, Flexinput, P, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg
import { ReactComponent as Svgempty } from "../../../image/box-open.svg"

//router
import { Link, useNavigate } from 'react-router-dom'

const Promote_SearchResult_PrPostSection = () => {
    // props ============================================================
    const allData = useRecoilValue(prPostAtom);//모든 데이터
    const [data, setData] = React.useState([]);//현재 데이터
    const [isLoaded, setIsLoaded] = React.useState(false);//true이면 loading중임
    const page = React.useRef(0);//page count
    const perPage = 15;//한 페지당 불러올 prpost 개수
    let last = allData.length % perPage// 마지막 페이지의 컴포넌트 개수
    let pageMax = parseInt(allData.length / perPage)//총 페이지 수

    // state ============================================================

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
            <Flexdiv onClick={clickEvent} flex="0_1_auto_row_center_center" width="100%">
                <Flexdiv flex="0_1_auto_column_flex-start_center" width="1330px">
                    {/* 검색결과(동아리/소모임) */}
                    <Flexdiv flex="0_1_auto_row_flex-start_center" width="1260px" height="90px" fontSize="24px" margin="30px 0 0 0">검색결과(홍보글)</Flexdiv>

                    {/* 검색결과 길이가 0이면~ 아니면~ */}
                    {(data.length == 0) ?
                        <Flexdiv flex="0_1_auto_column_center_center" width="1300px" height="240px" customBorder="2px_0px_0px_0px_solid_#c4c4c4" margin="0 0 100px 0">
                            <Svgempty fill="#c4c4c4" width="100px" height="100px" />
                            <Span color="#c4c4c4" margin="5px 0">검색결과가 없습니다</Span>
                        </Flexdiv>
                        :
                        <Flexdiv>
                            <Flexdiv flex="0_1_auto_row_flex-start_center_wrap" width="1330px" fontSize="24px">
                                {data.map((elem) => <Promote_PrPost elem={elem} sidemargin="13px" />)}
                            </Flexdiv>
                            {isLoaded && <Flexdiv flex="0_1_auto" ref={setRef} backgroundColor="blue"> Loading!</Flexdiv>}
                        </Flexdiv>
                    }
                </Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}

export default Promote_SearchResult_PrPostSection