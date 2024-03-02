## ActiveLink
주목적: 주소연동

현재 나의 위치가 home인지 탐색하기인지 쪽지인지 프로필인지 알려주는 것

###### 활성화된 메뉴의 icon이 검정색이 됨

![image](https://github.com/kiminn/kimi-space/assets/134191815/9a01134e-f1c8-43fc-a6c4-0247d16878bf)

server client에서는 불가능하다 </br>
=> 클라이언트 컴포넌트로! `"use-client"` 이용


hook이나 EventListener(onClick..)같은게 있으면 처음부터 "클라이언트 컴포넌트"로 빼주기