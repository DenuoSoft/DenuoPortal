import { useGetNewsQuery } from '../../../api/apiSlice';
import css from './main.module.scss';
import { Tabs } from '../../tabs/tabs';

export const Main = () => {
    const { data: news = [], isLoading, isError } = useGetNewsQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading info</div>;
    }

	let newsContent;
    if (news.length === 0) {
        newsContent = <div className={css.news}>No any news</div>;
    } else {
        newsContent = (
            <div className={css.layout}>
                {news.map(item => (
					<div key={item.id} className={css.news}>
						<h1 className={css.title}>{item.name}</h1>
                        <span>{item.description}</span>
                    </div>
                ))}
            </div>
        );
    }

   

    const tabs = [
        { name: 'News' },
        { name: 'Events' },
        { name: 'Other' },
    ];

    const content = {
        News: newsContent,
        Events: <div className={css.events}> {/* ... */} </div>,
        Other: <div className={css.other}>Docs Content</div>,
    };

    return <Tabs tabs={tabs} content={content} />;
};