export const krTime = () => {
    // 1. 현재 시간(Locale)
    const curr = new Date();
    // console.log(curr.getTime())
    // console.log(new Date().getTimezoneOffset())
    // 2. UTC 시간 계산
    const utc = curr.getTime() - (curr.getTimezoneOffset() * 60 * 1000);
    
    // 3. UTC to KST (UTC + 9시간)
    // const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    // console.log(utc);
    // console.log(curr);

    // console.log(KR_TIME_DIFF);
    // console.log(new Date(KR_TIME_DIFF))

    // console.log(utc + KR_TIME_DIFF);
    // console.log(new Date(utc))

    return new Date(utc);
}


