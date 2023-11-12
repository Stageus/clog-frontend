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
            "id": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[홈] 내가 쓴 댓글에 답글이 달렸습니다.",
            "id": 1
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[테니스부] 새로운 동아리에 가입되었습니다",
            "id": 2
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[MRA] 운영진으로 임명되었습니다.",
            "id": 3
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[테니스부] 회장으로 임명되었습니다.",
            "id": 4
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": '[테니스부] "유동선"님이 댓글을 달았습니다.',
            "id": 5
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[테니스부] 일반 동아리원이 되었습니다.",
            "id": 6
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": '[테니스부] "유동선"님이 댓글을 달았습니다.',
            "id": 7
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[테니스부] 일반 동아리원이 되었습니다.",
            "id": 8
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[홈] 내가 쓴 글에 댓글이 달렸습니다.",
            "id": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[홈] 내가 쓴 댓글에 답글이 달렸습니다.",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[테니스부] 새로운 동아리에 가입되었습니다",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[테니스부] 새로운 동아리에 가입되었습니다",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[테니스부] 새로운 동아리에 가입되었습니다",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[MRA] 일반 동아리원이 되었습니다",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[테니스부] 새로운 동아리에 가입되었습니다",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[테니스부] 새로운 동아리에 가입되었습니다",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[MRA] 운영진으로 임명되었습니다.",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[테니스부] 회장으로 임명되었습니다.",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[MRA] END.",
            "id": 0
        },//
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[2] 내가 쓴 글에 댓글이 달렸습니다.",
            "id": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[2] 내가 쓴 댓글에 답글이 달렸습니다.",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[2] 새로운 동아리에 가입되었습니다",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[2] 운영진으로 임명되었습니다.",
            "id": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[2] 회장으로 임명되었습니다.",
            "id": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[2] 새로운 동아리에 가입되었습니다",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[2] 운영진으로 임명되었습니다.",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": '[2] "유동선"님이 댓글을 달았습니다.',
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[2] 일반 동아리원이 되었습니다.",
            "id": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[2] 내가 쓴 글에 댓글이 달렸습니다.",
            "id": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[2] 내가 쓴 댓글에 답글이 달렸습니다.",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[2] 새로운 동아리에 가입되었습니다",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[2] 운영진으로 임명되었습니다.",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[2] 운영진으로 임명되었습니다.",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[2] 운영진으로 임명되었습니다.",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[2] 운영진으로 임명되었습니다.",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[2] 일반 동아리원이 되었습니다.",
            "id": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[2] 내가 쓴 글에 댓글이 달렸습니다.",
            "id": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[2] 내가 쓴 댓글에 답글이 달렸습니다.",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[2] END.",
            "id": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[3] 내가 쓴 글에 댓글이 달렸습니다.",
            "id": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[3] 내가 쓴 댓글에 답글이 달렸습니다.",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[3] 새로운 동아리에 가입되었습니다",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[3] 운영진으로 임명되었습니다.",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[3] 회장으로 임명되었습니다.",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": '[3] "유동선"님이 댓글을 달았습니다.',
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[3] 일반 동아리원이 되었습니다.",
            "id": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[3] 내가 쓴 글에 댓글이 달렸습니다.",
            "id": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[3] 내가 쓴 댓글에 답글이 달렸습니다.",
            "id": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[3] 내가 쓴 글에 댓글이 달렸습니다.",
            "id": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[3] 내가 쓴 댓글에 답글이 달렸습니다.",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[3] 새로운 동아리에 가입되었습니다",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[3] 운영진으로 임명되었습니다.",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[3] 운영진으로 임명되었습니다.",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[3] 회장으로 임명되었습니다.",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": '[3] "유동선"님이 댓글을 달았습니다.',
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[3] 일반 동아리원이 되었습니다.",
            "id": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[3] 내가 쓴 글에 댓글이 달렸습니다.",
            "id": 0
        },
        {
            "isRead": true,
            "type": "clubkey",
            "sentence": "[3] 내가 쓴 댓글에 답글이 달렸습니다.",
            "id": 0
        },
        {
            "isRead": false,
            "type": "clubkey",
            "sentence": "[3] END",
            "id": 0
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







// /////////////////
// 동아리의 게시글 목록
export const clubPostListAtom = atom({
    "key": "clubPostListAtom",
    "default": [
        {
            "id": 0,
            "title": "일반게시판 예시",
            "authorName": "김영제",
            "createdAt": "2023.10.18.",
            "commentCount": 3,
        },
        {
            "id": 1,
            "title": "일반게시판 예시",
            "authorName": "김영제",
            "createdAt": "2023.10.18.",
            "commentCount": 777,
        },
        {
            "id": 2,
            "title": "일반게시판 예시",
            "authorName": "김영제",
            "createdAt": "2023.10.18.",
            "commentCount": 999,
        },
        {
            "id": 3,
            "title": "일반게시판 예시 일반게시판 예시 일반게시판 예시 일반게시판 예시 일반게시판 예시 일반게시판 예시 일반게시판 예시 일반게시판 예시 ",
            "authorName": "김영제",
            "createdAt": "2023.10.18.",
            "commentCount": 25,
        },
        {
            "id": 4,
            "title": "기말고사 화이팅",
            "authorName": "김영제",
            "createdAt": "2023.10.18.",
            "commentCount": 3,
        },
        {
            "id": 5,
            "title": "기말고사 화이팅",
            "authorName": "김영제",
            "createdAt": "2023.10.18.",
            "commentCount": 3,
        },
        {
            "id": 6,
            "title": "기말고사 화이팅",
            "authorName": "김영제",
            "createdAt": "2023.10.18.",
            "commentCount": 3,
        },
        {
            "id": 7,
            "title": "기말고사 화이팅",
            "authorName": "김영제",
            "createdAt": "2023.10.18.",
            "commentCount": 3,
        },
        {
            "id": 8,
            "title": "일반게시판 예시",
            "authorName": "김영제",
            "createdAt": "2023.10.18.",
            "commentCount": 777,
        },
        {
            "id": 9,
            "title": "일반게시판 예시",
            "authorName": "김영제",
            "createdAt": "2023.10.18.",
            "commentCount": 999,
        },
        {
            "id": 10,
            "title": "일반게시판 예시",
            "authorName": "김영제",
            "createdAt": "2023.10.18.",
            "commentCount": 25,
        },
        {
            "id": 11,
            "title": "기말고사 화이팅",
            "authorName": "김영제",
            "createdAt": "2023.10.18.",
            "commentCount": 3,
        },
        {
            "id": 12,
            "title": "기말고사 화이팅",
            "authorName": "김영제",
            "createdAt": "2023.10.18.",
            "commentCount": 3,
        },
        {
            "id": 13,
            "title": "기말고사 화이팅",
            "authorName": "김영제",
            "createdAt": "2023.10.18.",
            "commentCount": 3,
        },
        {
            "id": 14,
            "title": "기말고사 화이팅",
            "authorName": "김영제",
            "createdAt": "2023.10.18.",
            "commentCount": 3,
        },
        {
            "id": 15,
            "title": "기말고사 화이팅",
            "authorName": "김영제",
            "createdAt": "2023.10.18.",
            "commentCount": 3,
        },
    ]
})

export const clubPostPageAtom = atom({
    "key": "clubPostPageAtom",
    "default": 1
})

export const prPostBoardPageAtom = atom({
    "key": "prPostBoardPageAtom",
    "default": 1
})

export const clubMemberListAtom = atom({
    "key": "clubMemberListAtom",
    "default": [
        {
            "id": 0,
            "userId": 0,
            "position": "MEMBER",
            "major": "컴퓨터공학과",
            "entryYear": 19,
            "name": "김영제",
            "personalColor": "FF8800",
            "createdAt": "2020.10.19."
        },
        {
            "id": 1,
            "userId": 1,
            "position": "MANAGER",
            "major": "컴퓨터공학과",
            "entryYear": 20,
            "name": "김영제",
            "personalColor": "0088FF",
            "createdAt": "2020.12.14."
        },
        {
            "id": 2,
            "userId": 2,
            "position": "MEMBER",
            "major": "컴퓨터공학과",
            "entryYear": 20,
            "name": "김영제",
            "personalColor": "FF0088",
            "createdAt": "2020.12.14."
        },
        {
            "id": 3,
            "userId": 3,
            "position": "MEMBER",
            "major": "컴퓨터공학과",
            "entryYear": 20,
            "name": "김영제",
            "personalColor": "00FF88",
            "createdAt": "2020.12.14."
        },
        {
            "id": 4,
            "userId": 4,
            "position": "MANAGER",
            "major": "컴퓨터공학과",
            "entryYear": 20,
            "name": "김영제",
            "personalColor": "88FF00",
            "createdAt": "2020.12.14."
        },
        {
            "id": 5,
            "userId": 5,
            "position": "MEMBER",
            "major": "컴퓨터공학과",
            "entryYear": 20,
            "name": "김영제",
            "personalColor": "8800ff",
            "createdAt": "2020.12.14."
        },
        {
            "id": 6,
            "userId": 6,
            "position": "MEMBER",
            "major": "컴퓨터공학과",
            "entryYear": 21,
            "name": "김영제",
            "personalColor": "88ffff",
            "createdAt": "2022.04.18."
        },
        {
            "id": 0,
            "userId": 0,
            "position": "PRESIDENT",
            "major": "컴퓨터공학과",
            "entryYear": 19,
            "name": "김영제",
            "personalColor": "FF8800",
            "createdAt": "2020.10.19."
        },
        {
            "id": 1,
            "userId": 1,
            "position": "MANAGER",
            "major": "컴퓨터공학과",
            "entryYear": 20,
            "name": "김영제",
            "personalColor": "0088FF",
            "createdAt": "2020.12.14."
        },
        {
            "id": 2,
            "userId": 2,
            "position": "MEMBER",
            "major": "컴퓨터공학과",
            "entryYear": 20,
            "name": "김영제",
            "personalColor": "FF0088",
            "createdAt": "2020.12.14."
        },
        {
            "id": 3,
            "userId": 3,
            "position": "MEMBER",
            "major": "컴퓨터공학과",
            "entryYear": 20,
            "name": "김영제",
            "personalColor": "00FF88",
            "createdAt": "2020.12.14."
        },
        {
            "id": 4,
            "userId": 4,
            "position": "MANAGER",
            "major": "컴퓨터공학과",
            "entryYear": 20,
            "name": "김영제",
            "personalColor": "88FF00",
            "createdAt": "2020.12.14."
        },
        {
            "id": 5,
            "userId": 5,
            "position": "MEMBER",
            "major": "컴퓨터공학과",
            "entryYear": 20,
            "name": "김영제",
            "personalColor": "8800ff",
            "createdAt": "2020.12.14."
        },
        {
            "id": 6,
            "userId": 6,
            "position": "MEMBER",
            "major": "컴퓨터공학과",
            "entryYear": 21,
            "name": "김영제",
            "personalColor": "88ffff",
            "createdAt": "2022.04.18."
        },
        {
            "id": 0,
            "userId": 0,
            "position": "MEMBER",
            "major": "컴퓨터공학과",
            "entryYear": 19,
            "name": "김영제",
            "personalColor": "FF8800",
            "createdAt": "2020.10.19."
        },
        {
            "id": 1,
            "userId": 1,
            "position": "MANAGER",
            "major": "컴퓨터공학과",
            "entryYear": 20,
            "name": "김영제",
            "personalColor": "0088FF",
            "createdAt": "2020.12.14."
        },
        {
            "id": 2,
            "userId": 2,
            "position": "MEMBER",
            "major": "컴퓨터공학과",
            "entryYear": 20,
            "name": "김영제",
            "personalColor": "FF0088",
            "createdAt": "2020.12.14."
        },
        {
            "id": 3,
            "userId": 3,
            "position": "MEMBER",
            "major": "컴퓨터공학과",
            "entryYear": 20,
            "name": "김영제",
            "personalColor": "00FF88",
            "createdAt": "2020.12.14."
        },
        {
            "id": 4,
            "userId": 4,
            "position": "MANAGER",
            "major": "컴퓨터공학과",
            "entryYear": 20,
            "name": "김영제",
            "personalColor": "88FF00",
            "createdAt": "2020.12.14."
        },
        {
            "id": 5,
            "userId": 5,
            "position": "MEMBER",
            "major": "컴퓨터공학과",
            "entryYear": 20,
            "name": "김영제",
            "personalColor": "8800ff",
            "createdAt": "2020.12.14."
        },
        {
            "id": 6,
            "userId": 6,
            "position": "MEMBER",
            "major": "컴퓨터공학과",
            "entryYear": 21,
            "name": "김영제",
            "personalColor": "88ffff",
            "createdAt": "2022.04.18."
        },
        {
            "id": 0,
            "userId": 0,
            "position": "MEMBER",
            "major": "컴퓨터공학과",
            "entryYear": 19,
            "name": "김영제",
            "personalColor": "FF8800",
            "createdAt": "2020.10.19."
        },
        {
            "id": 1,
            "userId": 1,
            "position": "MANAGER",
            "major": "컴퓨터공학과",
            "entryYear": 20,
            "name": "김영제",
            "personalColor": "0088FF",
            "createdAt": "2020.12.14."
        },
        {
            "id": 2,
            "userId": 2,
            "position": "MEMBER",
            "major": "컴퓨터공학과",
            "entryYear": 20,
            "name": "김영제",
            "personalColor": "FF0088",
            "createdAt": "2020.12.14."
        },
        {
            "id": 3,
            "userId": 3,
            "position": "MEMBER",
            "major": "컴퓨터공학과",
            "entryYear": 20,
            "name": "김영제",
            "personalColor": "00FF88",
            "createdAt": "2020.12.14."
        },
        {
            "id": 4,
            "userId": 4,
            "position": "MANAGER",
            "major": "컴퓨터공학과",
            "entryYear": 20,
            "name": "end김영제",
            "personalColor": "88FF00",
            "createdAt": "2020.12.14."
        },
        {
            "id": 5,
            "userId": 5,
            "position": "MEMBER",
            "major": "컴퓨터공학과",
            "entryYear": 20,
            "name": "김영제",
            "personalColor": "8800ff",
            "createdAt": "2020.12.14."
        },
        {
            "id": 6,
            "userId": 6,
            "position": "MEMBER",
            "major": "컴퓨터공학과",
            "entryYear": 21,
            "name": "김영제",
            "personalColor": "88ffff",
            "createdAt": "2022.04.18."
        },
    ]
})

export const managerPageAtom = atom({
    "key": "managerPageAtom",
    "default": 1
})

export const memberPageAtom = atom({
    "key": "memberPageAtom",
    "default": 1
})

export const searchresultpageAtom = atom({
    "key": "searchresultpageAtom",
    "default": 1
})