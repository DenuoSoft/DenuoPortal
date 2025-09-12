import {useMemo, useState} from 'react';
import DOMPurify from 'dompurify';
import css from './news.module.scss';
import {useGetNewsQuery} from '../../../api/apiSlice';
import Loader from '../../loader/loader';
import {Modal} from '../../modal/modal';
import {parseDate} from '../../../utils/parseDate';
import {formatDate} from '../../../utils/formatDate';

const News = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedNews, setSelectedNews] = useState(null);

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
				sanitizedContent: DOMPurify.sanitize(item.content, {
					ALLOWED_TAGS: [
						'h1',
						'h2',
						'h3',
						'p',
						'strong',
						'em',
						'a',
						'ul',
						'ol',
						'li',
					],
					ALLOWED_ATTR: ['href', 'target', 'rel'],
				}),
				sanitizedExcerpt: DOMPurify.sanitize(item.excerpt, {
					ALLOWED_TAGS: [],
					ALLOWED_ATTR: [],
				}),
			}));
	}, [response.results]);

	const openModal = (newsItem) => {
		setSelectedNews(newsItem);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedNews(null);
	};

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
								<div className={css.infobox} onClick={() => openModal(item)}>
									<div className={css.text}>
										<span>{item.formattedDate}</span>
										<h2 className={css.title}>{item.title}</h2>
									</div>
									<div
										className={css.content}
										dangerouslySetInnerHTML={{__html: item.sanitizedExcerpt}}
									/>
								</div>
							</div>
						))
					)}
				</div>
				<Modal isOpen={isModalOpen} onClose={closeModal}>
					{selectedNews && (
						<div
							dangerouslySetInnerHTML={{__html: selectedNews.sanitizedContent}}
						/>
					)}
				</Modal>
			</div>
		</Loader>
	);
};

export default News;
