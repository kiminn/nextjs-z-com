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



## classnames

[cn 공식문서](https://www.npmjs.com/package/classnames)

[cn 라이브러리 블로그](https://velog.io/@dooreplay/classNamesCSS-Modules)



### cx(classnames라는 라이브러리)
1. 하나의 div가 클래스를 여러 개 가질 수 있는데, 그걸 조건부로 가질 수 있게함
2. cx라는 함수 안에 들어있는 전부를 다 기본적으로 랜더링 해주지만, 앞의 주어진 조건에 따른 배열 혹은 콤마로 나열 후 적용(방법이 많음)


### /compose/tweet 만들기

- 어떤 페이지에서든 게시하기를 누르면 뒤 배경은 유지한 채로 모달이 떠야 하기 때문에 인터셉팅 라우트를 사용


🔴 Error

<img width="1218" alt="스크린샷 2024-03-16 오후 5 02 33" src="https://github.com/kiminn/kimi-space/assets/134191815/7a8ff8fd-5e43-4ebd-bd23-8858c1d8431f">

경로가 두 개가 존재해서 그럴 수 있음

<img width="323" alt="스크린샷 2024-03-16 오후 5 04 55" src="https://github.com/kiminn/kimi-space/assets/134191815/e8c64662-8227-4c85-a2e7-91b8f1f95120">




### usePathname과 /explore 페이지
    useClient
        - hook은 웬만하면 다 use client에 해당
        - if pathname이 slash explorer이면 return null 해주면 explorer 화면에서는 안뜸!
    검색창
        - 하나를 빼기 위해서 레이아웃 컴포넌트 전체를 use client로 변경? 너무 불편 ⇒ 컴포넌트 일부만 분리!




### useSearchParams와 프로필, /search 페이지
    공통인 애들과 아닌 애들
        - 완전한 공통인 애들은 절대 경로로 아예 밖으로 전용 파일로 변경하는 것도 방법



### 이벤트 캡처링과 /status/[id] 페이지
    1. 포스트 아티클
    2. any ⇒ 아무거나 다 된다는 것(자주 사용하지 말기)
    3. 서버 컴포넌트랑 클라이언트 컴포넌트 같이 쓰는 방법
        - 필요한 일부 컴포넌트를 따로 빼내서 children이나 props으로 넣기