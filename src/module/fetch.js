const urlatom = "https://3a71-61-255-24-4.ngrok-free.app/"

async function FetchGet(u) {
    const url = urlatom + u
    console.log(url)
    const response = await fetch(url)  //동기로 만들기 await GET은 이걸로 끝
    const result = await response.json()//왠지는 몰겠으나 .json이 비동기함수여서 동기함수로 바꿔주기
    console.log(result)//이렇게 하고 실행하면 console 창에 뜬다

    if (response.status == 200) {
        alert(result.message)
    } else {
        alert("통신실패")
    }
}

async function FetchPost(u, body) {
    const url = urlatom + u
    console.log(url)
    //GET ip주소  변수처리해서 유지보수 좋게 해주는 건 기본이자 센스
    const response = await fetch(url, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(body)
    });
    const result = await response.json()//왠지는 몰겠으나 .json이 비동기함수여서 동기함수로 바꿔주기
    console.log(result)//이렇게 하고 실행하면 console 창에 뜬다

    if (response.status == 200) {
        alert("통신성공")
    } else {
        alert(`ERR: ${result.message}`)
    }
}

async function FetchPut(u, body) {
    const url = urlatom + u
    console.log(url)

    const response = await fetch(url, {
        "method": "PUT",
        "headers": {
            "Content-Type": "application/json"
        },
        "credentials": "include",
        "body": JSON.stringify(body)
    });
    const result = await response.json()//왠지는 몰겠으나 .json이 비동기함수여서 동기함수로 바꿔주기
    console.log(result)//이렇게 하고 실행하면 console 창에 뜬다
    if (response.status == 200) {
        alert("통신성공")
    } else {
        alert(`ERR: ${result.message}`)
    }
}

async function FetchDelete(u) {
    const url = urlatom + u
    console.log(url)
    let response = null
    if (window.confirm('삭제하시겠습니까?')) {
        response = fetch(url, {
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

export { FetchGet, FetchPost, FetchPut, FetchDelete }