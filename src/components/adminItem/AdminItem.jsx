import css from './adminItem.module.scss';

const AdminItem = () => {
	return (
		<div className={css.layout}>
			<div className={css.itemBox}>
				<h1>Title</h1>
				<span>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio qui
					nesciunt non ab earum. Consequuntur, similique laudantium? Veniam,
					ipsum ipsa. Voluptatem suscipit repellat atque rerum culpa.
					Consectetur cum odio nihil.
				</span>
			</div>
		</div>
	);
};

export default AdminItem;
