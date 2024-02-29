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

NEXTjs에서는 `img` 가 아닌 `Image` 를 사용 </br>
import 한 이미지 Next에서 자동 최적화

[NEXTjs공식문서: Image](https://nextjs.org/docs/app/building-your-application/optimizing/images)

### redirect

다른 경로로 유저를 `redirect` 시킬 수 있음

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

## 패러렐 라우트(Parallel Route)

**병렬 라우팅을 사용하면 동일한 레이아웃에서 하나 이상의 페이지를 동시에 또는 조건부로 렌더링할 수 있다.** </br>
병렬 라우팅을 사용하면 경로가 독립적으로 스트리밍 될 때, 각 경로에 대해 독립적인 오류 및 로드 상태를 정의할 수 있다.

[NEXTjs공식문서: Modals](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#modals)

기존 모달과는 다르게 패러렐 라우트는 동시에 띄워진 페이지의 주소가 각각 다르다. </br>
(기존 모달은 주소 변경이 일어나지 않음)

### ➲ 패러렐 라우트 사용

패러렐 라우트는 명명된 **슬롯**을 사용하여 생성됨

#### `@folder`

생성된 슬롯은 경로 세그먼트가 아니기 때문에 URL 구조에 영향을 주지 않음 </br>
(children prop은 폴더에 매핑할 필요가 없는 암시적 슬롯이다.) </br>
`app/page.tsx` 와 `app/@children/page.tsx` 는 동일함

### 💡 다른 계층 구조를 갖고 있는 페이지는 병렬로 렌더링 할 수 없다!

ex) `app/page.tsx` 와 `app/(beforeLogin)/@modal/page.tsx` 는 병렬로 렌더링이 되지않는다

병렬로 렌더링 하기 위해서는 슬롯과 다른 슬롯(혹은 페이지)가 "같은 계층 구조"를 가져야 한다.

##### 타입스크립트: 변수, 매개변수, 리턴값에 type을 지정해주는 것

## 서버 컴포넌트 vs 클라이언트 컴포넌트

> `useState`는 클라이언트 컴포넌트에서만 동작. 그러나 서버 컴포넌트에서 사용되고 있다.

##### 🔴 에러 화면

<img width="1679" alt="useStateError" src="https://github.com/kiminn/my-nextjs/assets/134191815/951e912c-ad11-4266-9b43-c2790b50dec8">

기본적으로 `page.tsx`, `layout.tsx`는 Next 서버에서 동작하고 있는 **서버 컴포넌트**이다.

서버 컴포넌트는 컴포넌트 앞에 `async` 키워드를 붙여 비동기 컴포넌트로 만들 수도 있다!

##### 단, useState, useEffect와 같은 Hooks를 사용이 불가함.

### client component로 변경

```tsx
//hooks 사용을 위해 컴포넌트 코드의 최상단에 넣어주기
'use client';
```

### default.tsx

-   Next.js가 현재 URL을 기반으로 슬롯의 활성 상태를 복구할 수 없는 경우, 대체 파일로 렌더링할 파일
-   패러렐 라우트가 필요없을 때, 혹은 그에 해당하는 기본 값 (모달에 대한 기본 값이 아님에 주의)

경로에 따라 @modal을 처리중 기본페이지가 없는 경우</br>
default.tsx 가 없으면 not-found 404페이지가 뜨게 된다.

<img width="312" alt="스크린샷 2024-02-29 오후 3 18 26" src="https://github.com/kiminn/my-nextjs/assets/134191815/a69060be-a057-4a9e-8921-24608d026059">

[NEXT.js공식문서: default.js](https://nextjs.org/docs/app/api-reference/file-conventions/default)

`슬롯`: 슬롯은 부모 컴포넌트에서 자식 컴포넌트로 컨텐츠를 전달하는 메커니즘을 제공.</br>
(이를 통해 부모 컴포넌트에서 자식 컴포넌트에게 전달되는 컨텐츠를 동적으로 삽입할 수 있다)

## 인터셉팅 라우트

서로 주소가 다른데 같이 뜰 수 있게 하는 것

### ⛰️목표

`app/page.tsx`위에 `@modal/i/flow/login/page.tsx`을 띄우기!

> @modal/i/flow/login 구조를 @modal/(.)i/flow/login 으로 변경한다.

```
인터셉팅에 사용되는 ".." 은 주소를 기반으로 작성하게 됨

패러렐 라우트의 슬롯(@)는 주소에 영향을 미치지 않는다.

그러므로 (beforeLogin)/i/flow 주소를 (beforeLogin)/@modal/i/flow가 가리키려면
"(..)i" 가 아닌 "(.)i" 로 생성해주어야 함
```

##### 주소가 http://localhost:3000/i/flow/login 로 뜨면서 목표대로 화면에 그려진다

<img width="1679" alt="mainpage modal" src="https://github.com/kiminn/kimi-space/assets/134191815/ad16d8eb-6aa0-4480-97cf-c3c0893bb1c7">

```tsx
// Link태그에 따라 이동할 때 가로채기가 일어남
// (beforeLogin)/@modal/i/flow/login/page.tsx가 화면에 그려지게 된다.
<Link href="/i/flow/login" className={styles.login}>
    로그인
</Link>
```

Link태그에 따른 이동이 아닐 경우에는 이 부분의 `/i/flow/login/page.tsx` 가 실행되게 됨</br>
ex) 새로고침 했을 시..., 브라우저로 직접 주소를 쳐서 접근했을 경우</br>

<img width="308" alt="가로채기X" src="https://github.com/kiminn/kimi-space/assets/134191815/da445fe2-d24f-4d0e-95ad-8aa6d8de9759">

##### 새로고침한 화면으로 background에 메인페이지가 보이지 않는다.

<img width="1679" alt="login modal" src="https://github.com/kiminn/kimi-space/assets/134191815/d108a187-9569-422d-8174-15fe1705ec59">

```tsx
export default function Layout({ children, modal }: Props) {
    return (
        <div className={styles.container}>
            {children}
            {modal}
        </div>
    );
}

// 주소가 localhost:3000일 때는 children->page.tsx, modal->@modal/default.tsx
// 주소가 localhost:3000/i/flow/login 때는 children->i/flow/login/page.tsx, modal->@modal/i/flow/login/page.tsx가 실행됨
```

아래의 폴더 구조에 따라 가로채기가 일어남

##### parallel route"@" > intercepting route"(.)i"

<img width="312" alt="parallel routing intercepting routing" src="https://github.com/kiminn/kimi-space/assets/134191815/197f07c9-2608-4b95-817c-696f7425a2d5">

☺︎ **클라이언트에서 라우팅 할 때만 인터셉트 라우팅이 적용된다.**

##### 페러렐 라우트와 인터셉트 라우트를 콜라보하면 기존화면에 위에 modal창을 띄울 수 있다.!

### private folder

공통되는 컴포넌트의 부모 폴더에 `_` 를 사용하여 `Private Folder`를 만들어 줄 수 있다.</br>
로그인 모달같은 경우 공통적으로 쓰이기 때문에 정리한다.

<img width="312" alt="private component" src="https://github.com/kiminn/kimi-space/assets/134191815/a7788a35-1a78-4fa4-8e01-1f65114173c8">

```
주소창에 영향이 없는 폴더 3가지

1. (afterLogin), (beforeLogin) 처럼 Group Folder
2. @modal : parallel route
3. private folder(_): 폴더 정리용
```
