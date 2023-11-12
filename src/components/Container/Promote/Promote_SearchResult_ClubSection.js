import React from "react";

// Container,Component
import Promote_SearchResult_Club from "../../Component/Promote/Promote_SearchResult_Club"
import usePagenation from "../../../module/Pagenation";
//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState, readOnlySelector } from "recoil"
import { pageAtom, searchResultClubAtom } from "../../../recoil/PromoteAtom"

//styled-components 
import { Flexdiv, Flexinput, P, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg
import { ReactComponent as Svgleft } from "../../../image/angle-left.svg"
import { ReactComponent as Svgright } from "../../../image/angle-right.svg"
import { ReactComponent as Svgempty } from "../../../image/box-open.svg"
//router
import { Link, useNavigate } from 'react-router-dom'

const HiddenDiv = styled(Flexdiv)`
    overflow-x: scroll;
`

const Promote_SearchResult_ClubSection = () => {
    // props ============================================================
    // state ============================================================
    const [data, setData] = React.useState([])//현재페이지에 뜰 데이터 리스트
    const [page, setPage] = useRecoilState(pageAtom)
    const allData = useRecoilValue(searchResultClubAtom)//모든 데이터
    const perPage = 4//한 페이지당 불러올 prpost 개수
    const onePage = 5 //화면에 나타날 페이지 개수
    let pageMax = Math.ceil(allData.length / perPage)//총 페이지 수
    const last = allData.length - (perPage * (pageMax - 1))//마지막 페이지의 데이터 개수

    // event ============================================================
    const navigate = useNavigate()
    //페이지네이션
    const [previous, next, pagebtnList] = usePagenation(allData, perPage, onePage);
    //클릭이벤트
    const clickEvent = (e) => {
        let id = e.target.id
        if (id == "goclubprofile") {
            console.log(id)
            navigate("/promote/club-profile")
        }
        else if (id == "clubresultback") {
            setPage(previous())
        }
        else if (id == "clubresultfront") {
            setPage(next())
        }
        //페이지버튼 클릭시 해당 페이지로 이동
        else if (id.includes("pagebtn")) {
            let num = id.split("_")[1]
            setPage(parseInt(num))
        }
    }

    // //데이터 파싱
    React.useEffect(() => {
        let newDataList = []
        if (page < pageMax) {
            for (let index = 0; index < perPage; index++) {
                let count = index + perPage * (page - 1)
                newDataList[index] = allData[count]
            }
            console.log(page, "현재페이지에띄울 데이터: ", newDataList)
        }
        else if (page == pageMax) {
            for (let index = 0; index < last; index++) {
                let count = index + perPage * (page - 1)
                newDataList[index] = allData[count]
            }
            console.log(page, "현재페이지에띄울 데이터 마지막: ", newDataList)
        }
        setData([...newDataList])
    }, [page])

    return (
        <React.Fragment>
            <Flexdiv onClick={clickEvent} flex="0_1_auto_row_center_center" width="100%" margin="150px 0 0 0">
                <Flexdiv flex="0_1_auto_column_flex-start_center" width="1200px" height="250px" backgroundColor="#f0f0f0" radius="10px">
                    {/* 검색결과(동아리/소모임) */}
                    <Flexdiv flex="0_1_auto_row_flex-start_center" width="1100px" height="90px" fontSize="24px">검색결과(동아리/소모임)</Flexdiv>
                    {(allData.length == 0) ?
                        <Flexdiv flex="0_1_auto_column_center_center">
                            <Svgempty fill="#c4c4c4" width="100px" height="100px" />
                            <Span color="#c4c4c4" margin="5px 0">검색결과가 없습니다</Span>
                        </Flexdiv>
                        :
                        <>
                            <HiddenDiv flex="0_1_auto_row_flex-start_center" width="1170px" height="120px">
                                <Flexdiv flex="0_1_auto_row_flex-start_center" height="100%">
                                    {data.map((elem) => <Promote_SearchResult_Club elem={elem} />)}
                                </Flexdiv>
                            </HiddenDiv>

                            {/* 페이지네이션 버튼 */}
                            <Flexdiv flex="0_1_auto_row_flex-end_center" height="20px" margin="9px 0">
                                <Flexbutton id="clubresultback" backgroundColor="#f0f0f0"><Svgleft id="clubresultback" width="15px" height="15px" fill="#333333" /></Flexbutton>
                                <Flexdiv flex="0_1_auto_row_center_center_" height="20px">
                                    {pagebtnList.map((elem) => <Flexdiv id={"pagebtn_" + elem} flex="0_1_auto_row_center_center" width="20px" height="20px" backgroundColor={(page == elem) ? "#dadada" : "#f0f0f0"} radius="50%" margin="0 5px">{elem}</Flexdiv>)}
                                </Flexdiv>
                                <Flexbutton id="clubresultfront" backgroundColor="#f0f0f0"><Svgright id="clubresultfront" width="15px" height="15px" fill="#333333" /></Flexbutton>
                            </Flexdiv>
                        </>}
                </Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )

}
export default Promote_SearchResult_ClubSection
