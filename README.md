# NEXT.js

```
npx create-next-app@latest
```

1. TypeScript
2. ESLint
3. Tailwind CSS -> NO
4. `src/` directory -> ../../ -> @ "절대 경로"
5. use App Router
6. import alias(@/\*) -> `../../app/layout` ⇒ `@/app/layout` 으로 변경이 가능

```
next dev
//or
npm run dev
```

## 📁folder

`public`: 누구나 접근할 수 있는 이미지들을 넣는 곳 </br>
`app`: `app`은 원래 `src`밖깥에 두는 것이 원칙 </br>
`src`: 타입스크립트나 자바스크립트 타입의 코드들이 들어가게 됨

### `app`을 `src`안쪽에 위치

-   라우팅, 주소를 담당하는 폴더들을 src안쪽 app폴더에 위치시키기
-   주소와 관련 없는 파일들을 관리할 경우 src바깥에 둘 것

### next.config.js

-   next 설정 기본파일

### Layout

로그인, 로그아웃 시 주의하기

---

### 주소 라우팅에 따른 폴더 설정

ex) baseURL/i/flow/signup </br>
ex) baseURL/compose/tweet ...

<img width="314" alt="folderStructure" src="https://github.com/kiminn/nextjs-z-com/assets/134191815/9fc0a174-a39e-4910-82ee-b564cd88aba2">

#### 다양한 users의 닉네임, 게시글 id 같은 것들은 계속 바뀌기 때문에

#### 동적으로 바뀌도록 폴더 구조를 세팅해야 함

##### `Dynamic Routing` : 중괄호[] 폴더로 동적 라우팅 구현이 가능! ([username], [id] 등)

ex) baseURL/elonmusk/stauts/id => elonmusk 의 페이지만 접근이 가능함 지금은

### not-found.tsx

미리 만들어 놓은 pages가 아닌 경우 `not-found`에서 처리하게 된다

[NEXTjs공식문서: not-found](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)

### layout

##### home만의 layout을 따로 두고 싶을경우 home 폴더안에 layout.tsx생성

RootLayout -> HomeLayout -> HomePage

<img width="1679" alt="layout" src="https://github.com/kiminn/my-nextjs/assets/134191815/8027492c-605c-44c5-bef3-1d057bb1e02f">

###### 계층적으로 잘 적용이되는 모습

### () '소괄호'의 역할

-   app의 하위폴더는 원래 URL경로로 매핑이 됨
-   () 폴더 만의 Layout을 따로 만들 수 있음
-   하위 폴더명을 괄호로 묶어 생성 시 URL 경로 구조에 영향을 주지 않고 그룹화하여 경로를 구성 가능

ex) `app/(afterLogin)/home` 의 경우 브라우저 URL에는 `/home`으로 보이게 된다

### Layout.tsx VS Template.tsx

template -> 페이지를 클릭하고 넘나 들 때, 매 번 새롭게 마운트시켜야 할 때 </br>
layout -> 고정된 부분(랜더링이 일어나지 않음),

```
📚 Template.tsx
사용자가 템플릿을 공유하는 경로 사이를 탐색할 때 구성 요소의 새 인스턴스가 마운트되고
DOM 요소가 다시 생성되며 상태가 유지되지 않고 다시 동기화됨

useEffect (ex. 페이지 보기 로깅) 및 useState (ex. 페이지별 피드백 양식)에 의존하는 기능의 경우 템플릿이 더 적합!

🚨 템플릿과 레이아웃은 같이 사용되지 않는다.
```

보통, 그룹화의 기준은 Layout

### `Link` vs `a` tag

`a`: 페이지가 새로고침 되면서 넘어가게됨 </br>
(리액트 & 넥스트 : 페이지가 새로고침되는 행동을 하면 안된다.)

### `Image`

NEXTjs에서는 <img> 가 아닌 <Image> 를 사용 </br>
import 한 이미지 Next에서 자동 최적화

[NEXTjs공식문서: Image](https://nextjs.org/docs/app/building-your-application/optimizing/images)

### redirect

다른 경로로 유저를 redirect 시킬 수 있음

```tsx
// Navigate to the new path page
redirect('/new_path');
```

[NEXTjs공식문서: redirect](https://nextjs.org/docs/app/building-your-application/routing/redirecting)

```
기본적으로 `use server` 를 사용한 서버 액션에서는 type은 `push`가 기본 값
**브라우저 기록 스택에 리다이렉트 되는 URL이 추가**되고,
그 외의 경우, `replace` 타입이 기본 값이므로 **브라우저 기록 스택의 현재 URL을 대체**한다.
```

---

## CSSmodule

dvw, dvh 쓰는 이유?

-   100vh로 설정했을 때, 모바일에서 주소 표시줄 영역에 의해 화면이 잘리거나 주소 표시줄이 없어지는 경우가 발생
-   dvh는 뷰포트 높이를 동적으로 가져와 이 문제를 해결할 수 있음

```css
width: 100dvw;
height: 100dvh;
```
