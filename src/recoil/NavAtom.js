import { atom } from "recoil";

//nav에 뜨는 나의 계정정보, AroundAtom에서 관리 필요 => ?
export const accountInfoAtom = atom({
    "key": "accountInfoAtom",
    "default": {
        "name": "이현아",
        "personalColor": "239858",
        "major": "인공지능공학과",
        "entryYear": "21",
        "createdAt": "20230512"
    }
})

//알람 개수
export const alarmNumAtom = atom({
    "key": "alarmNumAtom",
    "default": 30
})

//알림 내용
export const alarmAtom = atom({
    "key": "alarmAtom",
    "default": [
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[홈] 내가 쓴 글에 댓글이 달렸습니다.",
            "key": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[홈] 내가 쓴 댓글에 답글이 달렸습니다.",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[테니스부] 새로운 동아리에 가입되었습니다",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[MRA] 운영진으로 임명되었습니다.",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[테니스부] 회장으로 임명되었습니다.",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": '[테니스부] "유동선"님이 댓글을 달았습니다.',
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[테니스부] 일반 동아리원이 되었습니다.",
            "key": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": '[테니스부] "유동선"님이 댓글을 달았습니다.',
            "key": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[테니스부] 일반 동아리원이 되었습니다.",
            "key": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[홈] 내가 쓴 글에 댓글이 달렸습니다.",
            "key": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[홈] 내가 쓴 댓글에 답글이 달렸습니다.",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[테니스부] 새로운 동아리에 가입되었습니다",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[테니스부] 새로운 동아리에 가입되었습니다",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[테니스부] 새로운 동아리에 가입되었습니다",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[MRA] 일반 동아리원이 되었습니다",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[테니스부] 새로운 동아리에 가입되었습니다",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[테니스부] 새로운 동아리에 가입되었습니다",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[MRA] 운영진으로 임명되었습니다.",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[테니스부] 회장으로 임명되었습니다.",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[MRA] END.",
            "key": 0
        },//
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[2] 내가 쓴 글에 댓글이 달렸습니다.",
            "key": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[2] 내가 쓴 댓글에 답글이 달렸습니다.",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[2] 새로운 동아리에 가입되었습니다",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[2] 운영진으로 임명되었습니다.",
            "key": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[2] 회장으로 임명되었습니다.",
            "key": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[2] 새로운 동아리에 가입되었습니다",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[2] 운영진으로 임명되었습니다.",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": '[2] "유동선"님이 댓글을 달았습니다.',
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[2] 일반 동아리원이 되었습니다.",
            "key": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[2] 내가 쓴 글에 댓글이 달렸습니다.",
            "key": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[2] 내가 쓴 댓글에 답글이 달렸습니다.",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[2] 새로운 동아리에 가입되었습니다",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[2] 운영진으로 임명되었습니다.",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[2] 운영진으로 임명되었습니다.",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[2] 운영진으로 임명되었습니다.",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[2] 운영진으로 임명되었습니다.",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[2] 일반 동아리원이 되었습니다.",
            "key": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[2] 내가 쓴 글에 댓글이 달렸습니다.",
            "key": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[2] 내가 쓴 댓글에 답글이 달렸습니다.",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[2] END.",
            "key": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[3] 내가 쓴 글에 댓글이 달렸습니다.",
            "key": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[3] 내가 쓴 댓글에 답글이 달렸습니다.",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[3] 새로운 동아리에 가입되었습니다",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[3] 운영진으로 임명되었습니다.",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[3] 회장으로 임명되었습니다.",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": '[3] "유동선"님이 댓글을 달았습니다.',
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[3] 일반 동아리원이 되었습니다.",
            "key": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[3] 내가 쓴 글에 댓글이 달렸습니다.",
            "key": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[3] 내가 쓴 댓글에 답글이 달렸습니다.",
            "key": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[3] 내가 쓴 글에 댓글이 달렸습니다.",
            "key": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[3] 내가 쓴 댓글에 답글이 달렸습니다.",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[3] 새로운 동아리에 가입되었습니다",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[3] 운영진으로 임명되었습니다.",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[3] 운영진으로 임명되었습니다.",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[3] 회장으로 임명되었습니다.",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": '[3] "유동선"님이 댓글을 달았습니다.',
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[3] 일반 동아리원이 되었습니다.",
            "key": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[3] 내가 쓴 글에 댓글이 달렸습니다.",
            "key": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[3] 내가 쓴 댓글에 답글이 달렸습니다.",
            "key": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[3] END",
            "key": 0
        }
    ]
})

//가입한 동아리 목록
export const zeroClubListAtom = atom({
    "key": "zeroClubListAtom",
    default: []
})
export const clubListAtom = atom({
    "key": "clubListAtom",
    "default": [
        {
            "id": "1",
            "club": "MRA",
            "profileImage": require("../image/mra.png")
        },
        {
            "id": "2",
            "club": "테니스부",
            "profileImage": require("../image/tenislogo.jpeg")
        },
        {
            "id": "3",
            "club": "동아리3",
            "profileImage": require("../image/tenislogo.jpeg")
        },
        {
            "id": "4",
            "club": "동아리4",
            "profileImage": require("../image/tenislogo.jpeg")
        },
        {
            "id": "5",
            "club": "동아리5",
            "profileImage": require("../image/tenislogo.jpeg")
        },
        {
            "id": "6",
            "club": "동아리6",
            "profileImage": require("../image/tenislogo.jpeg")
        },
        {
            "id": "7",
            "club": "동아리7",
            "profileImage": require("../image/tenislogo.jpeg")
        },
        {
            "id": "8",
            "club": "동아리8",
            "profileImage": require("../image/tenislogo.jpeg")
        },
        {
            "id": "9",
            "club": "동아리9",
            "profileImage": require("../image/tenislogo.jpeg")
        },
        {
            "id": "10",
            "club": "동아리10",
            "profileImage": require("../image/tenislogo.jpeg")
        }
    ]
})


//nav 열고닫기
export const navOpenAtom = atom({
    "key": "navOpenAtom",
    "default": false
})


