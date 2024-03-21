import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextResponse } from 'next/server';

export const {
    handlers: { GET, POST },
    //로그인햇는지 안했는지
    auth,
    //로그인 하는용
    signIn,
} = NextAuth({
  // 페이지등록 (직접만든)
    pages: {
        //로그인창
        signIn: '/i/flow/login',
        //회원가입창
        newUser: '/i/flow/signup',
    },
    providers: [
      // https://authjs.dev/getting-started/providers/credentials-tutorial 관련 auth.js공식문서
      // next-auth를 설정하려면 사용자가 설정한 자격 증명을 수신하고, 인증 서비스를 호출하는 authorize() 메서드를 정의하면 된다.
        CredentialsProvider({
            async authorize(credentials) {
                const authResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}}/api/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: credentials.username,
                        password: credentials.password,
                    }),
                });

                //로그인 실패 시
                if (!authResponse.ok) {
                    return null;
                }
                // 여기서 받아오는 것이 session data 가 될것임
                //로그인 성공시 user정보
                const user = await authResponse.json();
                console.log('user', user);
                //리턴될 user의정보
                return {
                    email: user.id,
                    name: user.nickname,
                    image: user.image,
                    ...user,
                };
            },
        }),
    ],
});
