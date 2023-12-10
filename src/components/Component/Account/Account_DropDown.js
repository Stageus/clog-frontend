import React from "react"

// Container,Component,module
import useIntersect from "../../../module/InfiniteScroll"

//styled-components 
import { Flexdiv, Flexinput, Flexbutton, P, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg
import { ReactComponent as Svgdown } from "../../../image/angle-down.svg"
//router
import { Link, useNavigate } from 'react-router-dom'

//recoil
import { useRecoilSnapshot, useRecoilState } from "recoil"
import { entryYeardropAtom, pickedEntryYearAtom, pickedMajorAtom } from "../../../recoil/AccountAtom"



///////////////적용 방법 ////////////////////////////////////////////////
//////1. 이 컴포넌트를 position="relative"인 Flexdiv로 감사줄 것"
//////2. 감싼 Flexdiv에는 justify-content와 align-item을 center로 적용할 것//
///////////////////////////////////////////////////////////////////////
//props - dropboxname : 드롭박스 구분을 위한 이름값, opendropbox 누르면 뜨는 선택값의 id로 구분
////////- list[0] : 기본으로 떠있는 선택값
////////- list : opendropbox 누르면 뜨는 선택값 리스트
////////- width,height : 드롭박스의 넓이와 높이
///////////////////////////////////////////////////////////////////////


const HoverDiv = styled(Flexdiv)`
    &:hover{
        background-color: #f0f0f0;
        color: #333333;
    }
`
const DropdownBox = styled(Flexdiv)`
    overflow-y: auto;
`
const Account_DropDown = (props) => {
    // props ======================================================
    const { sortation, svg, dropboxname, list, width, height } = props

    // state ======================================================
    const [dropBoxOpen, setDropBoxOpen] = React.useState(false)//드롭박스 오픈 여부
    const [pickedmajor, setPickedmajor] = useRecoilState(pickedMajorAtom)//선택된 학과 저장
    const [pickedentryyear, setPickedentryyear] = useRecoilState(pickedEntryYearAtom)//선택된 학번 저장

    const allData = list;//모든 데이터
    const [data, setData] = React.useState([]);//현재 데이터
    const [isLoaded, setIsLoaded] = React.useState(false);//true이면 loading중임
    const page = React.useRef(0);//page count
    const perPage = 10;//한 페이지당 불러올 알람 개수
    let last = allData.length % perPage// 마지막 페이지의 컴포넌트 개수
    let pageMax = parseInt(allData.length / perPage)//총 페이지 수


    // event ======================================================
    const clickEvent = (e) => {
        let id = e.target.id
        if (id == "opendropbox") {
            setDropBoxOpen(!dropBoxOpen)
        }
        else if (id.includes(dropboxname)) {
            let num = id.split("_")[1]
            if (sortation == "major") {
                setPickedmajor(list[num])
            }
            else if (sortation == "entryyear") {
                setPickedentryyear(list[num])
            }
            setDropBoxOpen(false)
        }
    }


    ///////////////////////////////////무한 스크롤 관련 함수///////////////////
    //넘어온 알람을 20개씩 파싱(임시)
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
        let newDataList = []
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
        root: document.getElementById('profiledropdown'),//부모로 설정할 요소
        threshold: 1,
        rootMargin: '0px',
    });
    ///////////////////////////////////무한 스크롤 관련 함수///////////////////



    return (
        <React.Fragment>
            <Flexdiv onClick={clickEvent} position="absolute_0_0_0_0">
                {dropBoxOpen ?
                    <Flexdiv flex="0_1_auto_column_center_center" width={width} outline="1px solid #333333" backgroundColor="#ffffff" radius="10px">
                        <Flexdiv flex="0_1_auto_row_space-between_center" width={width} height={height} outline="1px solid #c4c4c4" radius="10px 10px 0 0">
                            <Flexdiv flex="0_1_auto_row_center_center" width="50px" height="50px">{svg}</Flexdiv>
                            <Span flex=" 1_1_auto" color="#aaaaaa" margin="0 0 0 10px" >{list[0]}</Span>
                            <Flexbutton id="opendropbox" flex="0_1_auto_row_center_center" width="36px" height="36px" backgroundColor="#ffffff" margin="0 10px 0 0" padding="0px">
                                <Svgdown id="opendropbox" fill="#c4c4c4" width="16px" height="16px" />
                            </Flexbutton>
                        </Flexdiv>
                        {/* 부모 */}
                        <DropdownBox id="profiledropdown" width={width} height="200px" backgroundColor="#ffffff" margin="2px 0 0 0">
                            {data.map((elem, i) =>
                                <HoverDiv id={dropboxname + "_" + i} flex="0_1_auto_row_space-between_center" width={width} height={height} color="#aaaaaa" backgroundColor="#ffffff">
                                    <Span id={dropboxname + "_" + i} flex=" 0_1_auto" margin="0 0 0 10px">{elem}</Span>
                                </HoverDiv>)}
                            {isLoaded && <Flexdiv ref={setRef} backgroundColor="blue"> Loading!</Flexdiv>}

                        </DropdownBox>
                    </Flexdiv> :
                    <Flexdiv flex="0_1_auto" width={width} backgroundColor="#ffffff" >
                        <Flexdiv flex="0_1_auto_row_space-between_center" width={width} height={height} outline="1px solid #c4c4c4" radius="10px">
                            <Flexdiv flex="0_1_auto_row_center_center" width="50px" height="50px">{svg}</Flexdiv>
                            <Span flex=" 1_1_auto" color="#aaaaaa" margin="0 0 0 10px">{(sortation === "major") ? pickedmajor : pickedentryyear}</Span>
                            <Flexbutton id="opendropbox" flex="0_1_auto_row_center_center" width="36px" height="36px" backgroundColor="#ffffff" margin="0 10px 0 0" padding="0px">
                                <Svgdown id="opendropbox" fill="#c4c4c4" width="16px" height="16px" />
                            </Flexbutton>
                        </Flexdiv>
                    </Flexdiv>
                }
            </Flexdiv>
        </React.Fragment >
    )
}

export default Account_DropDown