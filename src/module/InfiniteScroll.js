import React from "react"

//관찰자 생성
const useIntersect = (onIntersect, option) => {
    // props ======================================================

    // state ======================================================
    // 관찰 대상을 지정할 수 있도록 ref값을 useState 훅을 이용해 state로 관리해준다.
    const [ref, setRef] = React.useState(null);
    // const [all, setAll] = React.useState(allData)

    // event ======================================================
    const checkIntersect = React.useCallback(([entry], observer) => {
        if (entry.isIntersecting) {
            onIntersect(entry, observer);//타겟(entry)이 보인다면 콜백함수 실행
        }
    }, []);

    // 관찰자가 언제 관찰하는지, 관찰을 종료하는지에 대해 로직을 구현해준다.
    React.useEffect(() => {
        let observer;
        if (ref) {//관찰대상이 존재한다면 관찰자를 생성해 관찰대상을 지정해준다.
            observer = new IntersectionObserver(checkIntersect, {
                ...option
            });
            observer.observe(ref);
            // console.log(all)
        }
        return () => observer && observer.disconnect();//이미 사용한 관찰자는 모든 요소의 관측을 중단한다(삭제)
    }, [ref, option.root, option.threshold, option.rootMargin, checkIntersect]);
    return [ref, setRef];//타겟을 리턴
}

export default useIntersect;