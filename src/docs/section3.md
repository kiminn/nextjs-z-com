## MSW (Mock Service Worker)
JavaScript를 위한 API 모킹 서비스 라이브러리 </br>
백엔드가 아직 준비되지 않을 때, 모킹 라이브러리인 msw로 미리 화면을 구성해볼 수 있다. </br>
만약, 백엔드가 준비되더라도 에러를 발생시켜야 하는 환경, 로그인이 되었을 때의 화면 등을 테스트 해보고 싶을 때 유용하게 사용할 수 있다.

</br>

#### ✔️ MSW 설치
```
npm install msw --save-dev
```

</br>

#### ✔️ 로컬의 public 폴더 아래에 세팅(초기화)
/public/mockServiceWorker.js 파일이 생성되며, --save 옵션을 사용하면 package.json에 등록되고 </br>
msw를 업데이트 할 때마다 자동으로 해당 항목을 업데이트 한다.

```
npx msw init public/ --save
```

</br>

#### ✔️ mockServiceWorker.js

실제 서버로 보내지는 요청이 있다면 mockServiceWorker가 가로채서 mockServiceWorker에서 응답을 준다.

-> 옛날에 없었을 때는, 개발 환경용 주소와 실제 환경용 주소를 따로 넣어 주었어야함!

🔵 백엔드 개발자에게 부탁하지않고도 에러상황들을 목 서비스 워커를 통해 만들어낼 수 있다는 장점이 있음

📂 mocks </br>
L 📄 browser.ts  </br>
L 📄 handlers.ts  </br>
L 📄 http.ts  </br>

#### http-middleware: msw로 mock server를 만들기 위해 필요한 라이브러리
```
npm i -D @mswjs/http-middleware express cors @types/express @types/cors
```

[msw 공식문서 Migration](https://mswjs.io/docs/migrations/1.x-to-2.x)

[Set-Cookie : MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)

## HTTP VS HTTPS

HTTP는 인터넷에서 정보를 주고받는데 사용되는 프로토콜(규약) 중 하나

쉬운말로, 이것은 마치 편지를 보낼 때 사용하는 우편물과 같다 

하지만 HTTP는 안전한 방법으로 정보를 전송하지 않음!

-----------

반면에 HTTPS는 HTTP의 안전한 버전

여기서 'S'는 'Secure(안전한)'를 뜻함. 

HTTPS를 사용하면 정보가 인터넷을 통해 전송될 때 암호화되어 있음

이는 마치 특별한 암호로 편지를 봉인하여 안전하게 보내는 것과 같다

간단히 말하면, HTTP는 편지를 보내는 것이지만, HTTPS는 안전하게 봉인된 편지를 보내는 것과 같다. 

그래서 HTTPS를 사용하면 개인 정보나 중요한 정보를 안전하게 보낼 수 있다!!


## MSW 서버 실행
package.json에 서버 실행 명령 스크립트를 등록한다.
watch 옵션으로 인해 서버 코드가 수정되면 서버가 자동으로 재시작되기 때문에 유용하게 사용할 수 있다.

💡
서버 코드는 수정되면 재시작 되어야 수정이 반영된다

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  //이 부분 추가 
  "mock": "npx tsx watch ./src/mocks/http.ts"
},

```

터미널 하나 더 띄워서 명령어를 입력해용

​```
npm run mock
```