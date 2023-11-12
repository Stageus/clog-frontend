import React from "react"

// import components
import Club_Board_Notice from "../../Component/Club/Club_Board_Notice"
import Club_Board_Post from "../../Component/Club/Club_Board_Post"
import usePagenation from "../../../module/Pagenation"

// import recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { clubInfoAtom, userClubProfileAtom, noticeListAtom, postListAtom } from "../../../recoil/ClubAtom"
import { clubPostListAtom, clubPostPageAtom } from "../../../recoil/NavAtom"

// import styled
import styled from "styled-components"
import { Flexdiv, Flexbutton } from "../../../style/common"
import { StyleSheetContext } from "styled-components"

// import image
//svg
import { ReactComponent as Svgleft } from "../../../image/angle-left.svg"
import { ReactComponent as Svgright } from "../../../image/angle-right.svg"
import { ReactComponent as Svgempty } from "../../../image/box-open.svg"

const Section = styled.section`
    width: 860px;
    margin-bottom: 150px;
`

const H1 = styled.h1`
    margin: ${props => props.margin || "none"};
    padding: ${props => props.padding || "none"};
    font-size: ${props => props.fontSize || "24px"};
    font-family: ${props => props.fontFamily || "'Noto Sans KR', sans-serif"};
    font-weight: ${props => props.fontBold || "800"};
    color: ${props => props.color || "#000000"};
`


const Club_Main_Section = () => {
    // route ============================================================

    // props ============================================================

    // state ============================================================
    const club = useRecoilState(clubInfoAtom)
    const noticeList = useRecoilState(noticeListAtom)

    const [data, setData] = React.useState([])//현재페이지에 뜰 데이터 리스트
    const [page, setPage] = useRecoilState(clubPostPageAtom)
    const allData = useRecoilValue(clubPostListAtom)//모든 데이터
    const perPage = 15//한 페이지당 불러올 prpost 개수
    const onePage = 10 //화면에 나타날 페이지 개수
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
                console.log(count, allData[count])
            }
            console.log(page, "현재페이지에띄울 데이터: ", newDataList)
        }
        else if (page == pageMax) {
            for (let index = 0; index < last; index++) {
                let count = index + perPage * (page - 1)
                newDataList[index] = allData[count]
                console.log(count, allData[count])
            }
            console.log(page, "현재페이지에띄울 데이터 마지막: ", newDataList)
        }
        setData([...newDataList])
    }, [page])

    return (
        <React.Fragment>

            <Section onClick={clickEvent}>
                <Flexdiv height="30px" margin="0 0 20px 0" flex="0_0_auto_raw_flex-start_center">
                    <H1>전체 글 보기</H1>
                </Flexdiv>

                <Flexdiv width="860px" margin="0 0 50px 0" flex="0_0_auto_column_center_center">
                    <Flexdiv width="860px" height="50px" flex="0_0_auto_raw_flex-start_center" customBorder={"1px_0px_1px_0px_solid_#" + club[0].themeColor}>
                        <Flexdiv width="550px" height="50px" flex="0_0_auto_raw_center_center" font="16px_600_'Noto Sans KR', sans-serif">제목</Flexdiv>
                        <Flexdiv width="130px" height="50px" flex="0_0_auto_raw_center_center" font="16px_600_'Noto Sans KR', sans-serif">작성자</Flexdiv>
                        <Flexdiv width="110px" height="50px" flex="0_0_auto_raw_center_center" font="16px_600_'Noto Sans KR', sans-serif">작성일</Flexdiv>
                        <Flexdiv width="70px" height="50px" flex="0_0_auto_raw_center_center" font="16px_600_'Noto Sans KR', sans-serif">댓글</Flexdiv>
                    </Flexdiv>

                    {noticeList[0].map((elem) => <Club_Board_Notice elem={elem} />)}
                    {data.map((elem) => <Club_Board_Post elem={elem} />)}

                </Flexdiv>

                <Flexdiv width="860px" height="140px" radius="0 0 20px 20px" backgroundColor="#F0F0F0" flex="0_0_auto_raw_center_center">
                    {/* 페이지네이션 버튼 */}
                    <Flexdiv flex="0_1_auto_row_flex-end_center" height="20px" margin="9px 0">
                        <Flexbutton id="clubresultback" backgroundColor="#f0f0f0"><Svgleft id="clubresultback" width="15px" height="15px" fill="#333333" /></Flexbutton>
                        <Flexdiv flex="0_1_auto_row_center_center_" height="20px">
                            {pagebtnList.map((elem) => <Flexdiv id={"pagebtn_" + elem} flex="0_1_auto_row_center_center" width="20px" height="20px" backgroundColor={(page == elem) ? "#dadada" : "#f0f0f0"} radius="50%" margin="0 5px">{elem}</Flexdiv>)}
                        </Flexdiv>
                        <Flexbutton id="clubresultfront" backgroundColor="#f0f0f0"><Svgright id="clubresultfront" width="15px" height="15px" fill="#333333" /></Flexbutton>
                    </Flexdiv>
                </Flexdiv>
            </Section>

        </React.Fragment>
    )
}

export default Club_Main_Section