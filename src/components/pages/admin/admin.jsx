import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import AdminItemsList from '../../adminItemsList/AdminItemsList';
import Input from '../../form/input/input';
import {TextArea} from '../../form/textarea/textarea';
import Button from '../../shared/buttons/button';
import css from './admin.module.css';
import {useCreateNewsMutation} from '../../../api/apiSlice';

const Admin = () => {
	const [newsTitle, setNewsTitle] = useState('');
	const [newsDescr, setNewsDescr] = useState('');
	// eslint-disable-next-line no-unused-vars
	const [createNews, {isLoading}] = useCreateNewsMutation();

	const onSubmitHandler = (e) => {
		console.log("onSubmitHandler called");
		e.preventDefault();
		const newNews = {
			id: uuidv4(),
			name: newsTitle,
			description: newsDescr,
		};
		createNews(newNews).unwrap();

		setNewsTitle('');
		setNewsDescr('');
	};

	return (
		<main>
			<div className={css.layout}>
				<div className={css.box}>
					<AdminItemsList />
				</div>
				<div className={css.box}>
					<h1>Info details</h1>
					<form onSubmit={onSubmitHandler}>
						<Input
							placeholder="Info title"
							type="text"
							name="title"
							id="title"
							value={newsTitle}
							onChange={(e) => setNewsTitle(e.target.value)}
						/>

						<TextArea
							placeholder="Add info here"
							name="description"
							id="text"
							value={newsDescr}
							onChange={(e) => setNewsDescr(e.target.value)}
						/>
						<div className={css.buttons}>
							<Button type="submit" label="Publish" />
						</div>
					</form>
				</div>
			</div>
		</main>
	);
};

export default Admin;
