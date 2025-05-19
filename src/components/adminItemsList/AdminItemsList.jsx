/* eslint-disable no-unused-vars */
import {useCallback} from 'react';
import AdminItem from '../adminItem/AdminItem';
import css from './adminItemsList.module.scss';
import {useGetNewsQuery, useDeleteNewsMutation} from '../../api/apiSlice';

const AdminItemsList = () => {
	const {data: news = [], isLoading, isError} = useGetNewsQuery();

	const [deleteNews] = useDeleteNewsMutation();
	const onDelete = useCallback((id) => {
		deleteNews(id);
	}, []);

	if (isLoading) {
		return <span>...Loading</span>;
	} else if (isError) {
		return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
	}
	const renderNewsList = (arr) => {
		if (arr.length === 0) {
			return (
				<span>
					<h5>No any news</h5>
				</span>
			);
		}
		return arr.map(({id, ...props}) => {
			return (
				<div className={css.layout} key={id}>
					<AdminItem {...props} onDelete={() => onDelete(id)} />
				</div>
			);
		});
  };
  
  return (
    <>
      { renderNewsList(news)}
    </>
  )
};

export default AdminItemsList;
