import { auth } from './auth';
import { NextResponse } from 'next/server';

export async function middleware() {
    //auth(): 로그인 여부를 알 수 있음
    const session = await auth();
    if (!session) {
        //세션이 없다면 이곳으로 redirect 보냄
        return NextResponse.redirect('http://localhost:3000/i/flow/login');
    }
}

// See "Matching Paths" below to learn more
export const config = {
    //matcher에 해당하는 라우트들에서는 페이지가 랜더링 되기 전에 실행됨
    matcher: ['/compose/tweet', '/home', '/explore', '/messages', '/search'],
};

//config에 정의된 matcher 에 해당되는 경로에 진입하면, 렌더링 이전에 middleware() 함수가 호출된다.


