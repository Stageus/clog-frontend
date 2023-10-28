import React from "react"



const usePagenation = (allData, perPage, onePage) => {
    // // props ============================================================
    // // state ============================================================
    let temppage = null
    let pageMax = Math.ceil(allData.length / perPage)//총 페이지 수
    const [pagebtnList, setPagebtnList] = React.useState([])//현재 뜰 페이지네이션 리스트
    const [lastNumber, setLastNumber] = React.useState(onePage)//페이지네이션 마지막 페이지
    const [firstNumber, setFirstNumber] = React.useState(1)//페이지네이션 첫번째 페이지
    // // event ============================================================

    const previous = () => {
        if (firstNumber > 1) {
            temppage = firstNumber - 1
            setLastNumber(Math.ceil(temppage / onePage) * onePage)
            setFirstNumber(Math.ceil(temppage / onePage) * onePage - (onePage - 1))
        }
        else { temppage = null }
        return temppage
    }
    const next = () => {
        if (lastNumber < pageMax) {
            temppage = lastNumber + 1
            console.log(temppage)
            setLastNumber(Math.ceil(temppage / onePage) * onePage)//10
            setFirstNumber(Math.ceil(temppage / onePage) * onePage - (onePage - 1))//6 
        }
        else { temppage = null }
        return temppage
    }
    const pagenation = () => {
        //마지막페이지네이션
        if (lastNumber > pageMax) {
            console.log("pageMax", pageMax)
            setLastNumber(pageMax)
        }
        //첫번째 페이지네이션 기본값 0
        if (lastNumber < onePage) {
            setFirstNumber(1)
        }
        else {
            setFirstNumber(lastNumber - (onePage - 1))//화면에 보여질 첫번째 페이지 설정
        }
        let temppagebtnList = []
        for (let i = firstNumber; i <= lastNumber; i++) {
            temppagebtnList.push(i)
        }
        setPagebtnList([...temppagebtnList])
        console.log(temppagebtnList)
    }

    React.useEffect(() => {
        pagenation()
    }, [lastNumber])

    return [previous, next, pagebtnList]
}

export default usePagenation;