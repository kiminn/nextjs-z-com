import Main from '@/app/(beforeLogin)/_component/Main';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Home() {
    //useSession의 서버 버전
    const session = await auth();
    if (session?.user) {
        redirect('/home');
    }
    return <Main />;
}
