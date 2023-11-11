import React from "react"

// Container,Component
import PostView_Comment_Comment from "./PostView_Comment_Comment"
import Postview_Comment_Input from "./PostView_Comment_Input"
import useIntersect from "../../../module/InfiniteScroll"
//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState, useResetRecoilState } from "recoil"
import { prPostViewAtom, prPostCommentAtom, prPostReplyAtom } from "../../../recoil/PromoteAtom"

//styled-components 
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg
import { ReactComponent as Svgphoto } from "../../../image/picture.svg"

//router
import { Link, useNavigate } from 'react-router-dom'


const CommentDiv = styled(Flexdiv)`
    border-top: 1px solid #dadada;
`
const OverflowDiv = styled(Flexdiv)`
    overflow-y: auto;
`
const PostView_Comment = () => {
    // props ======================================================

    // state ======================================================
    const [allData, setAllData] = useRecoilState(prPostCommentAtom)//모든 데이터
    const prPostReply = useRecoilValue(prPostReplyAtom)


    const [data, setData] = React.useState([]);//현재 데이터
    const [isLoaded, setIsLoaded] = React.useState(false);//true이면 loading중임
    const page = React.useRef(0);//page count
    const perPage = 10;//한 페지당 불러올 prpost 개수
    let last = allData.comments.length % perPage// 마지막 페이지의 컴포넌트 개수
    let pageMax = parseInt(allData.comments.length / perPage)//총 페이지 수

    // event ======================================================
    const clickEvent = (e) => {
        let id = e.target.id
        console.log(id)
        if (id == "commentsummit") {

            let newprpostcomment = copyobj(allData)
            let newcommentlist = [...allData.comments]
            //배열 끝에 현재 입력한 댓글 추가(현재는 컨텐츠만 변경)
            let newcomment = { ...newprpostcomment.comments[newcommentlist.length - 1] }
            newcomment.content = document.getElementById("commentinput").value
            newcommentlist[newcommentlist.length] = { ...newcomment }
            newprpostcomment.count = allData.count + 1
            newprpostcomment.comments = [...newcommentlist]
            setAllData(newprpostcomment)
        }
        // else if (id.includes("commentremove")) {
        //     console.log(id)

        // }
    }

    //2단 이상 obj 복사
    const copyobj = (obj) => {
        if (typeof obj !== "object" || obj === null) {
            return obj;
        }
        const deepCopyObj = {};
        for (let key in obj) {
            deepCopyObj[key] = copyobj(obj[key]);
        }
        return deepCopyObj;
    }

    ///////////////////////////////////무한 스크롤 관련 함수///////////////////
    //데이터 파싱
    const cutData = () => {
        let newDataList = []
        if (page.current < pageMax) {
            for (let index = 0; index < perPage; index++) {
                let count = index + perPage * page.current
                newDataList[index] = allData.comments[count]
            }
        }
        else if (page.current >= pageMax) {
            for (let index = 0; index < last; index++) {
                let count = index + perPage * page.current
                newDataList[index] = allData.comments[count]
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
    }, []);
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
            {/* 홍보물 댓글 */}
            <CommentDiv onClick={clickEvent} width="860px" padding="10px 0 100px 0">
                {/* 댓글 개수 */}
                <Flexdiv flex="0_1_auto_column_center_flex-start" margin="0 0 0 10px">
                    <Flexdiv flex="0_1_auto" height="60px" fontSize="20px">댓글 {allData.count}</Flexdiv>
                </Flexdiv>
                {/* 댓글 입력란 */}
                <Postview_Comment_Input width={"860px"} />
                <OverflowDiv id="promotemain" flex="0_1_auto_column_flex-start_flex-start" width="1330px">
                    {data.map((elem) => <PostView_Comment_Comment elem={elem} reply={prPostReply} />)}
                </OverflowDiv>
                {isLoaded && <Flexdiv flex="0_1_auto" ref={setRef} backgroundColor="blue"> Loading!</Flexdiv>}
            </CommentDiv>
        </React.Fragment>
    )
}

export default PostView_Comment