import Post from '../_component/Post';
import PostForm from './_component/PostForm';
import Tab from './_component/Tab';
import TabProvider from './_component/TabProvider';
import style from './home.module.css';

export default function Home() {
    const posts = Array.from({ length: 14 }, (_, index) => <Post key={index} />);
    return (
        <main className={style.main}>
            {/* Provider의 내부만 context를 쓸수있다 */}
            <TabProvider>
                {/* 누르는 탭들이 post들 한테도 영향을 미쳐야함   */}
                <Tab />
                {/* form은 웬만하면 client component임 (예외 serverAction) */}
                <PostForm />
                {posts}
            </TabProvider>
        </main>
    );
}
