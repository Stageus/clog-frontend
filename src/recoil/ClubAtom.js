import { atom } from "recoil";

// 동아리에 대한 기본 정보 / 지금은 색깔만 있음
export const clubInfoAtom = atom({
    "key": "clubInfoAtom",
    "default": {
        "name" : "스테이지어스", 
        "belong" : "중앙 동아리",
        "big_category" : "학술 동아리",
        "small_category" : "SW/IT",
        // "profile_img" : "" ,
        // "banner_img" : "" ,
        // "create_at" : "",
        "theme_color" : "3EC054"
    }
})
