const fetchPut = async (url, body) => {
    const response = await fetch(url, {
        "method": "PUT",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            // ...word,
            // id : document.getElementById("pw_value").value
        })
    });
    const result = await response.json()//왠지는 몰겠으나 .json이 비동기함수여서 동기함수로 바꿔주기
    console.log(result)//이렇게 하고 실행하면 console 창에 뜬다
    if (result.success) {
        alert("통신성공")
    } else {
        alert(`ERR: ${result.message}`)
    }
}

export default fetchPut