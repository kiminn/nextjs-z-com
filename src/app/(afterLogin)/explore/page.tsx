import SearchForm from '../_component/SearchForm';
import Trend from '../_component/Trend';
import style from './explore.module.css';

export default function Explore() {
    const trends = Array.from({ length: 10 }, (_, idx) => <Trend key={idx} />);
    return (
        <main className={style.main}>
            <div className={style.formZone}>
                <SearchForm />
            </div>
            <div className={style.trend}>
                <h3>나를 위한 트렌드</h3>
                {trends}
            </div>
        </main>
    );
}
