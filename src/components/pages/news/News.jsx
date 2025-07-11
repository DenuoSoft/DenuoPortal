import {useState, useMemo} from 'react';
import css from './news.module.scss';
import Pagination from '../../pagination/pagination';
import {useGetNewsQuery, useGetEventQuery} from '../../../api/apiSlice';
import CutDescription from '../../cutDescription/cutDescription';
import Loader from '../../loader/loader';
import {parseDate} from '../../../utils/parseDate';

const News = () => {
	const {
		data: news = [],
		isLoading: isNewsLoading,
		isError: isNewsError,
	} = useGetNewsQuery();

	const {
		data: event = [],
		isLoading: isEventsLoading,
		isError: isEventsError,
	} = useGetEventQuery();

	const isLoading = isNewsLoading || isEventsLoading;
	const isError = isNewsError || isEventsError;

	const sortedNews = useMemo(() => {
		const sorted = [...news].sort((a, b) => {
			const dateA = parseDate(a.publishDate);
			const dateB = parseDate(b.publishDate);
			return dateB - dateA;
		});
		return sorted;
	}, [news]);

	const itemsPerPage = 3;
	const [newsCurrentPage, setNewsCurrentPage] = useState(1);
	const [eventCurrentPage, setEventCurrentPage] = useState(1);

	const newsTotalPages = Math.ceil(sortedNews.length / itemsPerPage);
	const eventTotalPages = Math.ceil(event.length / itemsPerPage);

	const newsPaginatedContent = sortedNews.slice(
		(newsCurrentPage - 1) * itemsPerPage,
		newsCurrentPage * itemsPerPage
	);
	const eventPaginatedContent = event.slice(
		(eventCurrentPage - 1) * itemsPerPage,
		eventCurrentPage * itemsPerPage
	);

	const handleNewsNextClick = () => {
		if (newsCurrentPage < newsTotalPages)
			setNewsCurrentPage((prev) => prev + 1);
	};
	const handleNewsPrevClick = () => {
		if (newsCurrentPage > 1) setNewsCurrentPage((prev) => prev - 1);
	};
	const handleEventNextClick = () => {
		if (eventCurrentPage < eventTotalPages)
			setEventCurrentPage((prev) => prev + 1);
	};
	const handleEventPrevClick = () => {
		if (eventCurrentPage > 1) setEventCurrentPage((prev) => prev - 1);
	};

	return (
		<Loader isLoading={isLoading} isError={isError}>
			<div className={css.layout}>
				<div className={css.newsbox}>
					{newsPaginatedContent.length === 0 ? (
						<div className={css.items}>No any news</div>
					) : (
						newsPaginatedContent.map((item) => (
							<div className={css.items} key={item.id}>
								<div className={css.imageBox}>
									<img className={css.image} src={item.image} alt="image" />
								</div>
								<div className={css.infobox}>
									<div className={css.text}>
										<span>{item.publishDate}</span>
										<h2 className={css.title}>{item.name}</h2>
									</div>

									<CutDescription description={item.description} />
								</div>
							</div>
						))
					)}
					<Pagination
						currentPage={newsCurrentPage}
						totalPages={newsTotalPages}
						onNext={handleNewsNextClick}
						onPrev={handleNewsPrevClick}
					/>
				</div>
				<div className={css.eventlayout}>
					{eventPaginatedContent.length === 0 ? (
						<div className={css.items}>No any events</div>
					) : (
						eventPaginatedContent.map((item) => (
							<div key={item.id}>
								<div className={css.eventbox}>
									<div className={css.date}>
										<h4>Event date:</h4> {item.date}
									</div>
									<div className={css.eventtitle}>
										<h2 className={css.title}>{item.name}</h2>
									</div>
									<div className={css.eventdescr}>
										<span>
											<strong>Venue: </strong>
											{item.venue}
										</span>
										<span>
											<strong>Organizer: </strong>
											{item.organizer}
										</span>
										<span>
											<strong>Participants: </strong>
											{item.participants}
										</span>
									</div>
								</div>
							</div>
						))
					)}
					<Pagination
						currentPage={eventCurrentPage}
						totalPages={eventTotalPages}
						onNext={handleEventNextClick}
						onPrev={handleEventPrevClick}
					/>
				</div>
			</div>
		</Loader>
	);
};

export default News;
