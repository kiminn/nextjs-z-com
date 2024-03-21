import style from './search.module.css';
import BackButton from '@/app/(afterLogin)/_component/BackButton';
import SearchForm from '@/app/(afterLogin)/_component/SearchForm';
import Post from '@/app/(afterLogin)/_component/Post';
import Tab from '../home/_component/Tab';
import SearchResult from './_component/SearchResult';

type Props = {
    // searchparams.f   or searchparams.pf 이런식으로 값을 얻어올 수 있음ㅁ
    searchParams: { q: string; f?: string; pf?: string };
};
export default function Search({ searchParams }: Props) {
    const posts = Array.from({ length: 10 }, (_, idx) => <Post key={idx} />);
    return (
        <main className={style.main}>
            <div className={style.searchTop}>
                <div className={style.searchZone}>
                    <div className={style.buttonZone}>
                        <BackButton />
                    </div> 
                    <div className={style.formZone}>
                        {/* ?뒤에부분이 queryString */}
                        <SearchForm q={searchParams.q} />
                    </div>
                </div>
                <Tab />
            </div>
            <div className={style.list}>
                {/* {posts} */}
                <SearchResult searchParams={searchParams} />
            </div>
        </main>
    );
}
