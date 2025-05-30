import {useMemo} from 'react';
import {useGetNewsQuery, useGetEventQuery} from '../../../api/apiSlice';
import PropTypes from 'prop-types';
import css from './main.module.scss';
import {Tabs} from '../../tabs/tabs';
import Admin from '../../admin/admin';
import {parseDate} from '../../../utils/parseDate';
import ContentItems from '../../contentItems/ContentItems';
import ContentLayout from '../../contentLayout/ContentLayout';
import IsAdmin from '../../../utils/isAdmin';

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
			if (!dateA && !dateB) return 0;
			if (!dateA) return 1;
			if (!dateB) return -1;
			return dateB - dateA;
		});
		return sorted;
	}, [news]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error loading info</div>;
	}

	let newsContent;
	if (sortedNews.length === 0) {
		newsContent = <div className={css.items}>No any news</div>;
	} else {
		newsContent = (
			<ContentLayout>
				{sortedNews.map((item) => (
					<ContentItems key={item.id}>
						<div className={css.imageBox}>
							<img className={css.image} src={item.image} alt="image" />
						</div>
						<div className={css.text}>
							<span>{item.publishDate}</span>
							<h1 className={css.title}>{item.name}</h1>
							<span>{item.description}</span>
						</div>
					</ContentItems>
				))}
			</ContentLayout>
		);
	}

	let eventContent;
	if (event.length === 0) {
		eventContent = <div className={css.items}>No any events</div>;
	} else {
		eventContent = (
			<ContentLayout>
				{event.map((item) => (
					<ContentItems key={item.id}>
						<div className={css.text}>
							<span>Event date: {item.date}</span>
							<h1 className={css.title}>{item.name}</h1>
							<span>{item.description}</span>
						</div>
					</ContentItems>
				))}
			</ContentLayout>
		);
	}
	let adminContent;
	adminContent = <Admin />;

	const isAdmin = IsAdmin({userInfo, groupType: 'main'});
	let tabs;
	if (isAdmin) {
		tabs = [{name: 'News'}, {name: 'Events'}, {name: 'Other'}, {name: 'Admin'}];
	} else {
		tabs = [{name: 'News'}, {name: 'Events'}, {name: 'Other'}];
	}

	const content = {
		News: newsContent,
		Events: eventContent,
		Other: <div className={css.other}>Docs Content</div>,
		Admin: adminContent,
	};

	return <Tabs tabs={tabs} content={content} />;
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
