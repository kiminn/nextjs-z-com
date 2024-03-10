## ActiveLink

#### ⛰️목적: 주소연동

현재 나의 위치가 home인지 탐색하기인지 쪽지인지 프로필인지 알려주는 것

###### 활성화된 메뉴의 icon이 검정색이 됨

![image](https://github.com/kiminn/kimi-space/assets/134191815/9a01134e-f1c8-43fc-a6c4-0247d16878bf)

server client에서는 불가능하다 </br>
=> 클라이언트 컴포넌트로! `"use-client"` 이용

hook이나 EventListener(onClick..)같은게 있으면 처음부터 "클라이언트 컴포넌트"로 빼주기
 
##### svg 복사하는 법

console > copy > outerHTML
</br>
<img width="688" alt="svg copy" src="https://github.com/kiminn/kimi-space/assets/134191815/5ef0565e-bfe5-4fee-9eac-3feed84823cd">
</br>

## ContextApi

[npmtrends.com](https://npmtrends.com/date-fns-vs-dayjs-vs-moment)

여러가지 라이브러리 비교해 볼 수 있음 (어떤 것들을 쓰는지) </br>
ex) `date-fns vs dayjs vs moment`

<img width="1678" alt="스크린샷 2024-03-03 오후 4 54 09" src="https://github.com/kiminn/kimi-space/assets/134191815/4c6171e6-1d4c-4f47-a16c-d7a47671b479">


[day.js 링크](https://day.js.org/docs/en/installation/installation)


fromnow라는 API 사용 시 22 days ago와 같이 표현이 쉽게 가능
`dayjs.locale(’ko’)`→ 한글 플러그인

https://day.js.org/docs/en/display/from-now