// import https from 'https'
const urlatom = "http://13.125.24.196:8000"

const FetchGet = async (path) => {
    const url = urlatom + path
    console.log(url)
    //GET ip주소  변수처리해서 유지보수 좋게 해주는 건 기본이자 센스
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': "application/json",
            'ngrok-skip-browser-warning': '69420',
        }
    });
    const result = await response.json()//.json이 비동기함수여서 동기함수로 바꿔주기
    console.log("받아온 데이터 :", result)
    if (result.success) {
        alert("통신성공")
    } else {
        alert(`ERR: ${result.message}`)
    }
    return result

}


const FetchPost = async (path, body) => {
    // const https =
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzAyNTY5NDY4LCJleHAiOjE3MDMxNzQyNjgsImlzcyI6Imh5b3Nlb2sifQ.4D5wxtqjNffknftDIg-g6wM5SD3n7kc2UwXr9xTtw4Y"
    const url = urlatom + path
    console.log(url)
    //GET ip주소  변수처리해서 유지보수 좋게 해주는 건 기본이자 센스
    const response = await fetch(url, {
        method: "POST",
        // agent: https.Agent({
        //     rejectUnauthorized: false
        // }),
        mode: "cors",
        headers: {
            'Content-Type': "application/json",
            'Authorization': token,
        },
        credentials: "include",
        body: JSON.stringify(body)
    });
    const result = await response.json()//.json이 비동기함수여서 동기함수로 바꿔주기
    if (response.status == 200) {
        alert("통신성공")
    } else {
        alert(`ERR: ${result.message}`)
    }
    return response.status
}

const FetchPostNot = async (path) => {
    const url = urlatom + path
    console.log(url)
    //GET ip주소  변수처리해서 유지보수 좋게 해주는 건 기본이자 센스
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
            'ngrok-skip-browser-warning': '69420'
        },
        "credentials": "include"
    });
    const result = await response.json()//.json이 비동기함수여서 동기함수로 바꿔주기
    if (response.status == 200) {
        alert("통신성공")
    } else {
        alert(`ERR: ${result.message}`)
    }
    return response.status
}

const FetchPut = async (path, body) => {
    const url = urlatom + path
    console.log(url)

    const response = await fetch(url, {
        "method": "PUT",
        "headers": {
            "Content-Type": "application/json"
        },
        "credentials": "include",
        "body": JSON.stringify(body)
    });
    const result = await response.json()
    if (response.status == 200) {
        alert("통신성공")
    } else {
        alert(`ERR: ${result.message}`)
    }
    return response.status
}

const FetchDelete = async (path) => {
    const url = urlatom + path
    console.log(url)
    let response = null
    if (window.confirm('삭제하시겠습니까?')) {
        response = fetch(url, {
            method: "DELETE"
        })
    }
    const result = await response.json()
    if (result.success) {
        alert("삭제완료")
    }
    return result.success
}

export { FetchGet, FetchPost, FetchPut, FetchDelete, FetchPostNot }