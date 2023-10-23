import React from "react"

// Container,Component
import Promote_SearchResult_Club from "../../Component/Promote/Promote_SearchResult_Club"
//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { searchResultClubAtom } from "../../../recoil/PromoteAtom"

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

const TransitionDiv = styled(Flexdiv)`
    #front{
        transform: translate(-1170px, 0px);
        transition-duration: 1s;
    }
    #back{
        transform: translate(1170px, 0px);
        transition-duration: 1s;
    }
`
const Promote_SearchResult_ClubSection = () => {
    // props ============================================================

    // state ============================================================
    const allData = useRecoilValue(searchResultClubAtom)//모든 데이터(20개 제한))
    const page = React.useRef(0);//현재 page count
    const perPage = 4//한 페지당 불러올 prpost 개수
    const last = allData.length % perPage//마지막 페이지의 데이터 개수
    let pageMax = parseInt(allData.length / perPage)//총 페이지 수
    const [data, setData] = React.useState([])
    // event ============================================================
    const navigate = useNavigate()
    const clickEvent = (e) => {
        let id = e.target.id
        if (id == "goclubprofile") {
            console.log(id)
            navigate("/promote/club-profile")
        }
        else if (id == "clubresultback") {
            console.log(id)
            previousData()
        }
        else if (id == "clubresultfront") {
            console.log(id)
            nextData()
        }
    }

    //데이터 파싱
    const cutData = () => {
        let newDataList = []
        if (page.current < pageMax) {
            for (let index = 0; index < perPage; index++) {
                let count = index + perPage * page.current
                newDataList[index] = allData[count]
            }
        }
        else if (page.current == pageMax) {
            for (let index = 0; index < last; index++) {
                let count = index + perPage * page.current
                newDataList[index] = allData[count]
            }
        }
        return newDataList
    }

    const nextData = () => {
        if (page.current <= pageMax) {
            let newDataList = cutData()
            setData((data) => [...data, ...newDataList])
            page.current = page.current + 1
            //css animation 추가
        }
        else if (page.current > pageMax) {
            console.log("END")
        }
    }
    const previousData = () => {
        if (page.current == 0) {
            console.log("START")
        }
        else if (page.current <= pageMax) {
            page.current = page.current - 1
            //css animation 추가
        }
    }


    React.useEffect(() => {
        nextData()
    }, [])

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
                        <HiddenDiv flex="0_1_auto_row_flex-start_center" width="1170px" height="120px">
                            <TransitionDiv flex="0_1_auto_row_flex-start_center" height="100%" backgroundColor="orange">
                                {data.map((elem) => <Promote_SearchResult_Club elem={elem} />)}
                            </TransitionDiv>
                        </HiddenDiv>}
                    {/* 페이지 넘김 버튼 */}
                    <Flexdiv flex="0_1_auto_row_flex-end_center" width="1160px" height="20px" margin="9px 0">
                        {/* <Flexdiv flex="0_1_auto_row_center_center_" height="20px" backgroundColor="orange">
                            <Flexdiv width="15px" height="15px" backgroundColor="#aaaaaa" radius="50%" margin="0 10px"></Flexdiv>
                            <Flexdiv width="15px" height="15px" backgroundColor="#aaaaaa" radius="50%" margin="0 10px"></Flexdiv>
                            <Flexdiv width="15px" height="15px" backgroundColor="#aaaaaa" radius="50%" margin="0 10px"></Flexdiv>
                            <Flexdiv width="15px" height="15px" backgroundColor="#aaaaaa" radius="50%" margin="0 10px"></Flexdiv>
                            <Flexdiv width="15px" height="15px" backgroundColor="#aaaaaa" radius="50%" margin="0 10px"></Flexdiv>
                        </Flexdiv> */}
                        <Flexbutton id="clubresultback"><Svgleft id="clubresultback" width="15px" height="15px" fill="#aaaaaa" /></Flexbutton>
                        <Flexbutton id="clubresultfront"><Svgright id="clubresultfront" width="15px" height="15px" fill="#aaaaaa" /></Flexbutton>
                    </Flexdiv>
                </Flexdiv>
            </Flexdiv>
        </React.Fragment>
    )

}
export default Promote_SearchResult_ClubSection
