import ContentItems from '../../contentItems/ContentItems';
import css from './news.module.scss';
const News = () => {
	return (
		<>
			<div className={css.layout}>
				<div className={css.newsbox}>
					<ContentItems>
						<div className={css.itemsbox}>
							<div className={css.title}>News</div>
							<div className={css.image}>Image</div>
							<div className={css.descr}>Description</div>
						</div>
					</ContentItems>
					<ContentItems>
						<div className={css.itemsbox}>
							<div className={css.title}>News</div>
							<div className={css.image}>Image</div>
							<div className={css.descr}>Description</div>
						</div>
					</ContentItems>
					<ContentItems>
						<div className={css.itemsbox}>
							<div className={css.title}>News</div>
							<div className={css.image}>Image</div>
							<div className={css.descr}>Description</div>
						</div>
          </ContentItems>
          <ContentItems>
						<div className={css.itemsbox}>
							<div className={css.title}>News</div>
							<div className={css.image}>Image</div>
							<div className={css.descr}>Description</div>
						</div>
					</ContentItems>
				</div>
				<div className={css.eventbox}>
					<div className={css.title}>Events</div>
				</div>
			</div>
		</>
	);
};

export default News;
