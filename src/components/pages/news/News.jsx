import {useMemo} from 'react';
import css from './news.module.scss';
import {useGetNewsQuery} from '../../../api/apiSlice';
import Loader from '../../loader/loader';
import {parseDate} from '../../../utils/parseDate';
import {formatDate} from '../../../utils/formatDate';

const News = () => {
	const {
		data: response = {},
		isLoading: isNewsLoading,
		isError: isNewsError,
	} = useGetNewsQuery();

	const isLoading = isNewsLoading;
	const isError = isNewsError;

	const sortedNews = useMemo(() => {
		const results = response.results || [];
		return [...results]
			.sort((a, b) => parseDate(b.date) - parseDate(a.date))
			.map((item) => ({
				...item,
				formattedDate: formatDate(item.date),
			}));
	}, [response.results]);

	return (
		<Loader isLoading={isLoading} isError={isError}>
			<div className={css.layout}>
				<div className={css.newsbox}>
					{sortedNews.length === 0 ? (
						<div className={css.items}>No any news</div>
					) : (
						sortedNews.map((item) => (
							<div className={css.items} key={item.id}>
								<div className={css.imageBox}>
									<img className={css.image} src={item.image} alt="news" />
								</div>
								<div className={css.infobox}>
									<div className={css.text}>
										<span>{item.formattedDate}</span>
										<h2 className={css.title}>{item.title}</h2>
									</div>
									<div>{item.excerpt}</div>
								</div>
							</div>
						))
					)}
				</div>
			</div>
		</Loader>
	);
};

export default News;
