import { atom } from "recoil";

// 동아리에 대한 기본 정보
export const clubInfoAtom = atom({
    "key": "clubInfoAtom",
    "default": {
        "name" : "스테이지어스", 
        "belong" : "중앙 동아리",
        "bigCategory" : "학술",
        "smallCategory" : "SW/IT",
        // "profileImage" : "" ,
        // "bannerImage" : "" ,
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