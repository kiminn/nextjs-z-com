import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import Post from '../_component/Post';
import PostForm from './_component/PostForm';
import Tab from './_component/Tab';
import TabProvider from './_component/TabProvider';
import style from './home.module.css';
import PostRecommends from './_component/PostRecommends';
import { Suspense } from 'react';
import TabDeciderSuspense from './_component/TabDeciderSuspense';

async function getPostRecommends() {}

export default async function Home() {
    const queryClient = new QueryClient();
    // 해당 쿼리키를 갖고있는 경우 항상 저런 함수를 실행해라!
    await queryClient.prefetchQuery({ queryKey: ['posts', 'recommends'], queryFn: getPostRecommends });
    const dehydratedState = dehydrate(queryClient);
    // 나중에 데이터 필요할 떄 이런 식으로 가져오면 됨!
    // queryClient.getQueryData(['posts', 'recommends'])

    return (
        <main className={style.main}>
            <HydrationBoundary state={dehydratedState}>
                {/* Provider의 내부만 context를 쓸수있다 */}
                <TabProvider>
                    {/* 누르는 탭들이 post들 한테도 영향을 미쳐야함   */}
                    <Tab />
                    {/* form은 웬만하면 client component임 (예외 serverAction) */}
                    <PostForm />
                    <Suspense fallback={<Loading />}>
                        <TabDeciderSuspense />
                    </Suspense>
                </TabProvider>
            </HydrationBoundary>
        </main>
    );
}
