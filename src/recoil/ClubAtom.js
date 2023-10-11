import { atom } from "recoil";

// 동아리에 대한 기본 정보 / 지금은 색깔만 있음
export const clubInfoAtom = atom({
    "key": "clubInfoAtom",
    "default": {
        "name" : "동아리이름", 
        // "profile_img" : "" ,
        // "banner_img" : "" ,
        "theme_color" : "3EC054"
    }
})
