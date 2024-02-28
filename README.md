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

- 라우팅, 주소를 담당하는 폴더들을 src안쪽 app폴더에 위치시키기
- 주소와 관련 없는 파일들을 관리할 경우 src바깥에 둘 것

### next.config.js
- next 설정 기본파일

### Layout

로그인, 로그아웃 시 주의하기


---

### 주소 라우팅에 따른 폴더 설정
ex) twitter.com/i/flow/signup </br>
ex) twitter.com/compose/tweet ...

<img width="314" alt="folderStructure" src="https://github.com/kiminn/nextjs-z-com/assets/134191815/9fc0a174-a39e-4910-82ee-b564cd88aba2">


### 다양한 users의 닉네임, 게시글 id 같은 것들은 계속 바뀌기 때문에 동적으로 바뀌도록 폴더 구조를 세팅해야 함
##### `Dynamic Routing` : 중괄호[] 폴더로 동적 라우팅 구현이 가능! ([username], [id] 등)

ex) twitter.com/elonmusk/stauts/id => elonmusk 의 페이지만 접근이 가능함 지금은

### not-found.tsx

미리 만들어 놓은 pages가 아닌 경우 `not-found`에서 처리하게 된다

### layout

##### home만의 layout을 따로 두고 싶을경우 home 폴더안에 layout.tsx생성

RootLayout -> HomeLayout -> HomePage

