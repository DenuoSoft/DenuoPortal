import {useGetNewsQuery, useGetEventQuery} from '../../../api/apiSlice';
import css from './main.module.scss';
import {Tabs} from '../../tabs/tabs';

export const Main = () => {
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
	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error loading info</div>;
	}

	let newsContent;
	if (news.length === 0) {
		newsContent = <div className={css.items}>No any news</div>;
	} else {
		newsContent = (
			<div className={css.layout}>
				{news.map((item) => (
					<div key={item.id} className={css.items}>
						<div className={css.imageBox}>
							<img className={css.image} src={item.image} alt="image" />
						</div>
						<div className={css.text}>
							<span>{item.publishDate}</span>
							<h1 className={css.title}>{item.name}</h1>
							<span>{item.description}</span>
						</div>
					</div>
				))}
			</div>
		);
	}

	let eventContent;
	if (event.length === 0) {
		eventContent = <div className={css.items}>No any events</div>;
	} else {
		eventContent = (
			<div className={css.layout}>
				{event.map((item) => (
					<div key={item.id} className={css.items}>
						<div className={css.text}>
							<span>Event date: {item.date}</span>
							<h1 className={css.title}>{item.name}</h1>
							<span>{item.description}</span>
						</div>
					</div>
				))}
			</div>
		);
	}

	const tabs = [{name: 'News'}, {name: 'Events'}, {name: 'Other'}];

	const content = {
		News: newsContent,
		Events: eventContent,
		Other: <div className={css.other}>Docs Content</div>,
	};

	return <Tabs tabs={tabs} content={content} />;
};
