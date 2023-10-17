import { atom } from "recoil";

// 동아리에 대한 기본 정보
export const clubInfoAtom = atom({
    "key": "clubInfoAtom",
    "default": {
        "name" : "스테이지어스", 
        "belong" : "중앙 동아리",
        "bigCategory" : "학술",
        "smallCategory" : "SW/IT",
        "profileImage" : "" ,
        "bannerImage" : "" ,
        "cover" : "",
        "themeColor" : "3EC054",
        "memberCount" : 100,
        "createAt" : "2023.10.10"
    }
})

// 동아리에 대한 내 프로필
export const userClubProfileAtom = atom({
    "key": "userClubProfileAtom",
    "default": {
        "name" : "김영제", 
        "position" : "leader"
    }
})

// 동아리의 게시판 목록
export const boardListAtom = atom({
    "key": "boardListAtom",
    "default": [
        {
            "id" : 0,
            "name" : "바른 게시판"
        },
        {
            "id" : 1,
            "name" : "즐거운 게시판"
        },
        {
            "id" : 2,
            "name" : "슬기로운 게시판"
        },
        {
            "id" : 3,
            "name" : "신입생 게시판"
        },
        {
            "id" : 4,
            "name" : "졸업생 게시판"
        },
    ]
})

export const noticeListAtom = atom({
    "key": "noticeListAtom",
    "default": [
        {
            "id" : 0,
            "title" : "공지사항 예시 입니다",
            "authorName" : "김영제",
            "createdAt" : "2023.10.18.",
            "commentCount" : 3,
        },
        {
            "id" : 1,
            "title" : "동아리 규정 + 활정 기준",
            "authorName" : "김영제",
            "createdAt" : "2023.10.18.",
            "commentCount" : 777,
        },
        {
            "id" : 2,
            "title" : "필독! 꼭 읽어주세요",
            "authorName" : "김영제",
            "createdAt" : "2023.10.18.",
            "commentCount" : 9999999,
        },
        {
            "id" : 3,
            "title" : "2024년 축제 관련 공지사항",
            "authorName" : "김영제",
            "createdAt" : "2023.10.18.",
            "commentCount" : 25,
        },
        {
            "id" : 4,
            "title" : "기말고사 화이팅",
            "authorName" : "김영제",
            "createdAt" : "2023.10.18.",
            "commentCount" : 3,
        },
    ]
})

export const postListAtom = atom({
    "key": "postListAtom",
    "default": [
        {
            "id" : 0,
            "title" : "일반게시판 예시",
            "authorName" : "김영제",
            "createdAt" : "2023.10.18.",
            "commentCount" : 3,
        },
        {
            "id" : 1,
            "title" : "일반게시판 예시",
            "authorName" : "김영제",
            "createdAt" : "2023.10.18.",
            "commentCount" : 777,
        },
        {
            "id" : 2,
            "title" : "일반게시판 예시",
            "authorName" : "김영제",
            "createdAt" : "2023.10.18.",
            "commentCount" : 999,
        },
        {
            "id" : 3,
            "title" : "일반게시판 예시 일반게시판 예시 일반게시판 예시 일반게시판 예시 일반게시판 예시 일반게시판 예시 일반게시판 예시 일반게시판 예시 ",
            "authorName" : "김영제",
            "createdAt" : "2023.10.18.",
            "commentCount" : 25,
        },
        {
            "id" : 4,
            "title" : "기말고사 화이팅",
            "authorName" : "김영제",
            "createdAt" : "2023.10.18.",
            "commentCount" : 3,
        },
        {
            "id" : 5,
            "title" : "기말고사 화이팅",
            "authorName" : "김영제",
            "createdAt" : "2023.10.18.",
            "commentCount" : 3,
        },
        {
            "id" : 6,
            "title" : "기말고사 화이팅",
            "authorName" : "김영제",
            "createdAt" : "2023.10.18.",
            "commentCount" : 3,
        },
        {
            "id" : 7,
            "title" : "기말고사 화이팅",
            "authorName" : "김영제",
            "createdAt" : "2023.10.18.",
            "commentCount" : 3,
        },
        {
            "id" : 8,
            "title" : "일반게시판 예시",
            "authorName" : "김영제",
            "createdAt" : "2023.10.18.",
            "commentCount" : 777,
        },
        {
            "id" : 9,
            "title" : "일반게시판 예시",
            "authorName" : "김영제",
            "createdAt" : "2023.10.18.",
            "commentCount" : 999,
        },
        {
            "id" : 10,
            "title" : "일반게시판 예시",
            "authorName" : "김영제",
            "createdAt" : "2023.10.18.",
            "commentCount" : 25,
        },
        {
            "id" : 11,
            "title" : "기말고사 화이팅",
            "authorName" : "김영제",
            "createdAt" : "2023.10.18.",
            "commentCount" : 3,
        },
        {
            "id" : 12,
            "title" : "기말고사 화이팅",
            "authorName" : "김영제",
            "createdAt" : "2023.10.18.",
            "commentCount" : 3,
        },
        {
            "id" : 13,
            "title" : "기말고사 화이팅",
            "authorName" : "김영제",
            "createdAt" : "2023.10.18.",
            "commentCount" : 3,
        },
        {
            "id" : 14,
            "title" : "기말고사 화이팅",
            "authorName" : "김영제",
            "createdAt" : "2023.10.18.",
            "commentCount" : 3,
        },
    ]
})