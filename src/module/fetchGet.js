

const fetchGet = async (url) => {
    const response = await fetch(url)  //동기로 만들기 await GET은 이걸로 끝

    const result = await response.json()//왠지는 몰겠으나 .json이 비동기함수여서 동기함수로 바꿔주기
    console.log(result)//이렇게 하고 실행하면 console 창에 뜬다

    if (result.success) {
        alert(result.message)
    } else {
        alert("통신실패")
    }
}


export default fetchGet