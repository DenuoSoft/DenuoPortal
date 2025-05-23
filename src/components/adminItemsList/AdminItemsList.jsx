/* eslint-disable no-unused-vars */
import {useCallback, useMemo} from 'react';
import AdminItem from '../adminItem/AdminItem';
import css from './adminItemsList.module.scss';
import {
	useGetNewsQuery,
	useDeleteNewsMutation,
	useGetEventQuery,
	useDeleteEventMutation,
} from '../../api/apiSlice';

const AdminItemsList = () => {
	const {
		data: news = [],
		isLoading: isNewsLoading,
		isError: isNewsError,
	} = useGetNewsQuery();
	const {
		data: events = [],
		isLoading: isEventsLoading,
		isError: isEventsError,
	} = useGetEventQuery();

	const [deleteNews] = useDeleteNewsMutation();
	const [deleteEvent] = useDeleteEventMutation();

	const isLoading = isNewsLoading || isEventsLoading;
	const isError = isNewsError || isEventsError;

	const onDelete = useCallback(
		(id, type) => {
			if (type === 'news') {
				deleteNews(id);
			} else if (type === 'events') {
				deleteEvent(id);
			}
		},
		[deleteNews, deleteEvent]
	);

	const renderList = useCallback(
		(arr, type) => {
			if (!arr.length || arr.length === 0) {
				return (
					<span>
						<h5>No any {type}</h5>
					</span>
				);
			}
			return arr.map(({id, ...props}) => {
				return (
					<div className={css.layout} key={id}>
						<AdminItem
							{...props}
							onDelete={() => onDelete(id, type)}
							type={type}
						/>
					</div>
				);
			});
		},
		[onDelete]
	);

	const newsList = useMemo(() => renderList(news, 'news'), [news, renderList]);
	const eventsList = useMemo(
		() => renderList(events, 'events'),
		[events, renderList]
	);
	if (isLoading) {
		return <span>...Loading</span>;
	} else if (isError) {
		return <h5 className="text-center mt-5">Loading error</h5>;
	}

	return (
		<>
			{newsList}
			{eventsList}
		</>
	);
};

export default AdminItemsList;
