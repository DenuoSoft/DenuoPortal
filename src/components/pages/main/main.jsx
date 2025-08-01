import {useState, useMemo} from 'react';
import {useGetNewsQuery, useGetEventQuery} from '../../../api/apiSlice';
import PropTypes from 'prop-types';
import css from './main.module.scss';
import {Tabs} from '../../tabs/tabs';
import Admin from '../../admin/admin';
import {parseDate} from '../../../utils/parseDate';
import ContentItems from '../../contentItems/ContentItems';
import ContentLayout from '../../contentLayout/ContentLayout';
import IsAdmin from '../../../utils/isAdmin';
import Pagination from '../../pagination/pagination';
import CutDescription from '../../cutDescription/cutDescription';
import Loader from '../../loader/loader';

export const Main = ({userInfo}) => {
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

	let newsContent = (
		<div className={css.content}>
			<ContentLayout>
				{newsPaginatedContent.length === 0 ? (
					<div className={css.items}>No any news</div>
				) : (
					newsPaginatedContent.map((item) => (
						<ContentItems key={item.id}>
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
						</ContentItems>
					))
				)}
				<Pagination
					currentPage={newsCurrentPage}
					totalPages={newsTotalPages}
					onNext={handleNewsNextClick}
					onPrev={handleNewsPrevClick}
				/>
			</ContentLayout>
		</div>
	);
	let eventContent = (
		<div className={css.content}>
			<ContentLayout>
				{eventPaginatedContent.length === 0 ? (
					<div className={css.items}>No any events</div>
				) : (
					eventPaginatedContent.map((item) => (
						<ContentItems key={item.id}>
							<div className={css.evntbox}>
								<div className={css.date}>
									<h4>Event date:</h4> {item.date}
								</div>
								<div className={css.evnttitle}>
									<h3>{item.name}</h3>
								</div>
								<div className={css.evntdescr}>
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
						</ContentItems>
					))
				)}
				<Pagination
					currentPage={eventCurrentPage}
					totalPages={eventTotalPages}
					onNext={handleEventNextClick}
					onPrev={handleEventPrevClick}
				/>
			</ContentLayout>
		</div>
	);

	let adminContent = <Admin />;
	const isAdmin = IsAdmin({userInfo, groupType: 'main'});

	let tabs = isAdmin
		? [{name: 'News'}, {name: 'Events'}, {name: 'Other'}, {name: 'Admin'}]
		: [{name: 'News'}, {name: 'Events'}, {name: 'Other'}];

	const content = {
		News: newsContent,
		Events: eventContent,
		Other: <div className={css.other}>Docs Content</div>,
		Admin: adminContent,
	};

	return (
		<Loader isLoading={isLoading} isError={isError}>
			<Tabs tabs={tabs} content={content} />
		</Loader>
	);
};

Main.propTypes = {
	userInfo: PropTypes.shape({
		name: PropTypes.string,
		shortname: PropTypes.string,
		email: PropTypes.string,
		id: PropTypes.string,
	}),
};

export default Main;
