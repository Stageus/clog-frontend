const fetchDelete = async (url) => {
    if (window.confirm('삭제하시겠습니까?')) {
        fetch(url, {
            method: "DELETE"
        })
    }
    const result = await response.json()//왠지는 몰겠으나 .json이 비동기함수여서 동기함수로 바꿔주기
    console.log(result)//이렇게 하고 실행하면 console 창에 뜬다
    if (result.success) {
        alert("삭제완료")
        // 리랜더링 액션(setState나 recoil)
    }
}

export default fetchDelete