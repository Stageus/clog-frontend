import React from "react"

//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { belongAtom, bigCategoryAtom, smallCategoryAtom, checkClubNameAtom, collegeAtom, majorAtom, categoryDoneAtom } from "../../../recoil/PromoteAtom"

//styled-components 
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg

//router
import { Link, useNavigate } from 'react-router-dom'
import Promote_Category_DropBox from "./Promote_Category_DropBox"

const OverDiv = styled(Flexdiv)`
    overflow: visible;
`
const Promote_ClubCreate_InflexInfo = () => {
    // props ======================================================
    // state ======================================================
    const [checkClubname, setCheckClubname] = useRecoilState(checkClubNameAtom)
    const college = useRecoilValue(collegeAtom)
    const major = useRecoilValue(majorAtom)
    const belong = useRecoilValue(belongAtom)
    const smallCategory = useRecoilValue(smallCategoryAtom)
    const bigCategory = useRecoilValue(bigCategoryAtom)
    const belongList = []//소속 리스트
    const collegeList = ["분과(선택 안함)"]//학부 리스트
    const majorList = ["분과(선택 안함)"]//전공 리스트
    const templist = ["분과(선택 안함)"]//대분류 리스트 임시
    const [smallList, setSmallList] = React.useState(["소분류(선택 안함)"])//소분류 리스트(대분류마다 다름)
    const [bigList, setBigList] = React.useState(["분과(선택 안함)"])//대분류 리스트
    const [belongSelection, setBelongSelection] = React.useState(-1)//소속 선택결과
    const [selectBig, setSelectBig] = React.useState(false)
    const [selectSmall, setSelectSmall] = React.useState(false)
    const [categoryDone, setCategoryDone] = useRecoilState(categoryDoneAtom)

    /////////////////////////////////////소속 리스트에 세팅////////////
    for (let index = 0; index < belong.length; index++) {
        belongList[index] = belong[index].content
    }
    for (let index = 0; index < bigCategory.length; index++) {
        templist[index + 1] = bigCategory[index].content
    }
    for (let index = 0; index < college.length; index++) {
        collegeList[index + 1] = college[index].college
    }
    for (let index = 0; index < major.length; index++) {
        majorList[index + 1] = major[index].major
    }
    //소분류 대분류별로 잘라 이중배열에 넣기
    let temp = Array.from(Array(templist.length - 1), () => new Array(1))
    let count = 0
    let smallListCount = [6, 1, 6, 1, 1, 4, 1, 1, 1, 3]//대분류 별 소분류 개수
    smallListCount.filter((elem, i) => {
        for (let index = 0; index < elem; index++) {
            temp[i][index] = smallCategory[count + index].name;
        }
        count = count + elem
    })
    /////////////////////////////////////////////////////////////

    // event ======================================================
    const clickEvent = (e) => {
        let id = e.target.id
        //중복 체크
        if (id == "checkclubname") {
            let value = document.getElementById("clubnameinput").value
            if (value.length < 11 && value.length > 0) {
                setCheckClubname(true)
            }
            else {
                setCheckClubname(false)
            }
        }
        //소속 선택시
        else if (id.includes("belong")) {
            let num = id.split("_")[1]
            //중앙,일반 동아리
            if (num == "0" || num == "1") {
                setBelongSelection(num)
                setBigList([...templist])
            }
            //단과대 소모임
            else if (num == "2") {
                console.log("단과대 소모임")
                setBelongSelection(num)
                setBigList([...collegeList])
                setSelectBig(false)
                setSelectSmall(false)
            }
            //학과 소모임
            else if (num == "3") {
                setBelongSelection(num)
                setBigList([...majorList])
                setSelectBig(false)
                setSelectSmall(false)
            }
        }
        //소속 0,1 선택시
        if ((belongSelection == 0 || belongSelection == 1) && id.includes("bigCategory")) {
            let num = id.split("_")[1]
            //기본값 선택하면 소분류 dropbox 숨기기
            if (num == 0) {
                setSelectBig(false)
                if (categoryDone) { setCategoryDone(false) }
            }
            // bigCategory1~10번 선택하면 smallList 업데이트해서 해당하는 소분류 dropbox 띄우기
            else {
                setSmallList(["소분류(선택 안함)", ...temp[num - 1]])
                setSelectBig(true)
                if (categoryDone) { setCategoryDone(false) }
            }
        }
        //소속 2,3,4 선택시
        else if (id.includes("bigCategory")) {
            let num = id.split("_")[1]
            if (num != 0) {
                if (!categoryDone) { setCategoryDone(true) }
            }
            else { if (categoryDone) { setCategoryDone(false) } }
        }
        //소분류 선택시
        if (id.includes("smallCategory")) {
            let num = id.split("_")[1]
            if (num != 0) {
                if (!categoryDone) { setCategoryDone(true) }
            }
            else { if (categoryDone) { setCategoryDone(false) } }
        }
        // 
    }

    //onchange발생시
    const replychecking = () => {
        setCheckClubname(false)
    }


    return (
        <React.Fragment>
            <Flexdiv onClick={clickEvent} onChange={replychecking} flex="0_1_auto_row_center_center" width="900px" margin="20px 0 50px 0">
                {/* 동아리이름 */}
                <Flexdiv flex="0_1_auto_column_flex-start_flex-start" width="450px" height="210px" >
                    <Flexdiv flex="0_1_auto_row_center_center" font="20px_600" height='40px'>동아리 이름</Flexdiv>
                    {/* 동아리 이름 입력 */}
                    <Flexinput id="clubnameinput" flex="0_1_auto" width="400px" height="50px" radius="10px" border="1px solid #c4c4c4" placeholder="한글 영어 혼용 가능, 최소 1자~최대 10자" padding="0px" />
                    {/* 중복체크 */}
                    <Flexdiv flex="0_1_auto_row_flex-end_center" width="400px" height="50px" margin="10px 0">
                        <Flexdiv flex="2_1_auto_row_flex-start_center" font="20px" color={checkClubname ? "#4B7BE5" : "#EB5149"} > {checkClubname ? "사용 가능한 이름입니다." : "사용 불가능한 이름입니다."}</Flexdiv>
                        <Flexbutton id="checkclubname" flex="0_1_auto_row_center_center" width="120px" height="50px" radius="10px" font="16px" backgroundColor="#333333" color="#ffffff">중복 체크</Flexbutton>
                    </Flexdiv>
                </Flexdiv>

                {/* 동아리 분류 */}
                <OverDiv flex="0_1_auto_column_flex-start_flex-end" width="450px" height="210px">
                    <Flexdiv flex="0_1_auto_row_flex-start_center" width="400px" font="20px_600" margin="10px 0">동아리 분류</Flexdiv>
                    {/* z-index가 순서대로 쌓이기 때문에 역으로 넣고, relative로 조정함 */}
                    <Flexdiv position="relative_120px" width="400px" height="50px" flex="0_1_auto_row_center_center">
                        {selectBig && <Promote_Category_DropBox dropboxname={"smallCategory"} list={smallList} width="400px" height={"50px"} />}
                    </Flexdiv>

                    {/* 대분류 선택 */}
                    <Flexdiv position="relative_10px" width="400px" height="50px" flex="0_1_auto_row_center_center">
                        <Promote_Category_DropBox dropboxname={"bigCategory"} list={bigList} width="400px" height={"50px"} />
                    </Flexdiv>


                    {/* 소속 선택 */}
                    <Flexdiv position="relative_-100px" width="400px" height="50px" flex="0_1_auto_row_center_center">
                        <Promote_Category_DropBox dropboxname={"belong"} list={belongList} width="400px" height={"50px"} />
                    </Flexdiv>
                </OverDiv>
            </Flexdiv>
        </React.Fragment >
    )
}

export default Promote_ClubCreate_InflexInfo