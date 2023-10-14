import { atom } from "recoil";


export const belongAtom = atom({
    "key": "categoryAtom",
    "default": [{
        "num": 0,
        "belong": "중앙동아리"
    },
    {
        "num": 1,
        "belong": "일반동아리"
    },
    {
        "num": 2,
        "belong": "단과대 소모임"
    },
    {
        "num": 3,
        "belong": "학과 소모임"
    },
    {
        "num": 4,
        "belong": "기타 소모임"
    }]
})

export const bigCategoryAtom = atom({
    "key": "bigCategoryAtom",
    "default": [{
        "num": 0,
        "bigCategory": "공연"
    },
    {
        "num": 1,
        "bigCategory": "어학"
    },
    {
        "num": 2,
        "bigCategory": "연구"
    },
    {
        "num": 3,
        "bigCategory": "사회"
    },
    {
        "num": 4,
        "bigCategory": "종교"
    },
    {
        "num": 5,
        "bigCategory": "전시"
    },
    {
        "num": 6,
        "bigCategory": "무예"
    },
    {
        "num": 7,
        "bigCategory": "구기"
    },
    {
        "num": 8,
        "bigCategory": "레저"
    },
    {
        "num": 9,
        "bigCategory": "봉사"
    }]
})