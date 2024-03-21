## 무한 스크롤 구현

#### react-query 설치

```
npm i @tanstack/react-query@5
npm i @tanstack/react-query-devtools@5 -D #devtools
```

### ✔️ ReactQuery Provider 설정

데이터 패칭은 로그인 이후에만 일어남 => 로그인 이후 그룹에만 적용 !!!

`(afterLogin)/_component` 하위에 Provider를 만들어준다.

afterLogin > Layout에서 `main` 부분에 데이터 패칭. => Provider를 감싸서 적용

```jsx
<header>
//..
</header>
<RQProvider>
<main>
//..
</main>
</RQProvider>

```


##### 서버에서 불러온 데이터를 클라이언트가 전달 받는다. (=hydrate 한다)

```
<Hydrate>

Server Side에서 렌더링된 정적 페이지와 번들링된 js 코드를 클라이언트에게 보낸 후, 
js 코드가 HTML DOM 위에서 다시 렌더링 되면서 서로 매칭되는 과정이다.
```