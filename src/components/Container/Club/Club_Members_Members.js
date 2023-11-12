import React from "react"

// import components
import Club_Members_MemberInfo from "../../Component/Club/Club_Members_MemberInfo"
import usePagenation from "../../../module/Pagenation"

// import recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { clubInfoAtom, memberListAtom } from "../../../recoil/ClubAtom"
import { clubMemberListAtom, managerPageAtom } from "../../../recoil/NavAtom"

// import styled
import styled from "styled-components"
import { Flexbutton, Flexdiv, Span } from "../../../style/common"
import { StyleSheetContext } from "styled-components"

//svg
import { ReactComponent as Svgleft } from "../../../image/angle-left.svg"
import { ReactComponent as Svgright } from "../../../image/angle-right.svg"

const H2 = styled.h2`
    margin: 0px;
    padding: 0px;
    font-size: 20px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 800;
    color: ${props => props.color};
`


const Club_Members_Members = (props) => {
    // route ============================================================
    const { allDataList, membersname, perPage, page, setPage } = props
    // props ============================================================

    // state ============================================================
    const club = useRecoilState(clubInfoAtom)
    // const clubMemberList = useRecoilState(clubMemberListAtom)
    // const managerList = clubMemberList[0].filter(member => member.position == "MANAGER")

    const [data, setData] = React.useState([])//현재페이지에 뜰 데이터 리스트
    const allData = allDataList//모든 데이터
    const onePage = 5 //화면에 나타날 페이지 개수
    let pageMax = Math.ceil(allData.length / perPage)//총 페이지 수
    const last = allData.length - (perPage * (pageMax - 1))//마지막 페이지의 데이터 개수

    // event ============================================================
    //페이지네이션
    const [previous, next, pagebtnList] = usePagenation(allData, perPage, onePage, page);
    //클릭이벤트
    const clickEvent = (e) => {
        let id = e.target.id
        if (id == "clubresultback") {
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
            {/* 운영진 block */}
            <Flexdiv onClick={clickEvent} width="800px" height="230px" padding="10px 0 0 0" customBorder="1px_0_0_0_solid_#C4C4C4" flex="0_0_auto_column_flex-start_center">
                <Flexdiv width="800px" height="30px" margin="0 0 10px 0" flex="0_0_auto_row_space-between_center">
                    <H2 color={"#" + club[0].themeColor}>{membersname}</H2>
                    {/* 페이지네이션 버튼 */}
                    <Flexdiv flex="0_1_auto_row_flex-end_center" height="20px" margin="9px 0">
                        <Flexbutton id="clubresultback" backgroundColor="#f0f0f0"><Svgleft id="clubresultback" width="15px" height="15px" fill="#333333" /></Flexbutton>
                        <Flexdiv flex="0_1_auto_row_center_center_" height="20px">
                            {pagebtnList.map((elem) => <Flexdiv id={"pagebtn_" + elem} flex="0_1_auto_row_center_center" width="20px" height="20px" backgroundColor={(page == elem) ? "#dadada" : "#f0f0f0"} radius="50%" margin="0 5px">{elem}</Flexdiv>)}
                        </Flexdiv>
                        <Flexbutton id="clubresultfront" backgroundColor="#f0f0f0"><Svgright id="clubresultfront" width="15px" height="15px" fill="#333333" /></Flexbutton>
                    </Flexdiv>
                </Flexdiv>
                <Flexdiv width="825px" height="180px" margin="0 0 10px 0" flex="0_0_auto_row_flex-start_flex-start_wrap">
                    {data.map((elem) => <Club_Members_MemberInfo elem={elem} />)}
                </Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )
}

export default Club_Members_Members