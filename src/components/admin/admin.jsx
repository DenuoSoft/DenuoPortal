import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import AdminItemsList from '../adminItemsList/AdminItemsList';
import Input from '../form/input/input';
import {TextArea} from '../form/textarea/textarea';
import Button from '../shared/buttons/button';
import css from './admin.module.css';
import {
	useCreateNewsMutation,
	useCreateEventMutation,
} from '../../api/apiSlice';
import RadioButtons from '../form/radiobuttons/radiobuttons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {formatDate} from '../../utils/formatDate';

const radioOptions = [
	{label: 'News', value: 'news'},
	{label: 'Events', value: 'events'},
];

const Admin = () => {
	const [title, setTitle] = useState('');
	const [image, setImage] = useState('')
	const [description, setDescription] = useState('');
	// eslint-disable-next-line no-unused-vars
	const [publishDate, setPublishDate] = useState('');
	const [selectedType, setSelectedType] = useState('news');
	const [eventDate, setEventDate] = useState(new Date());
	// eslint-disable-next-line no-unused-vars
	const [createNews, {isLoading}] = useCreateNewsMutation();
	const [createEvent] = useCreateEventMutation();

	const onSubmitHandler = (e) => {
		e.preventDefault();
		const currentDate = new Date();
		const formattedDate = formatDate(currentDate);
		setPublishDate(formattedDate);
		const newItem = {
			id: uuidv4(),
			name: title,
			description: description,
			image: image,
			publishDate: formattedDate,
		};
		if (selectedType === 'news') {
			createNews(newItem)
				.unwrap()
				.then(() => {
					setTitle('');
					setImage('');
					setDescription('');
					setPublishDate('');
				});
		} else {
			const formattedEventDate = formatDate(eventDate);
			const eventItem = {
				...newItem,
				date: formattedEventDate,
				publishDate: formattedDate,
			};
			createEvent(eventItem)
				.unwrap()
				.then(() => {
					setEventDate(new Date());
					setTitle('');
					setImage('');
					setDescription('');
					setPublishDate('');
				});
		}
	};
	const handleRadioChange = (value) => {
		setSelectedType(value);
		setTitle('');
		setImage('');
		setDescription('');
	};

	return (
		<main>
			<div className={css.layout}>
				<div className={css.box}>
					<AdminItemsList />
				</div>
				<div className={css.box}>
					<h1>Admin form</h1>
					<RadioButtons
						options={radioOptions}
						onChange={handleRadioChange}
						value={selectedType}
					/>
					<form onSubmit={onSubmitHandler}>
						<Input
							placeholder="Info title"
							type="text"
							name="title"
							id="title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						{selectedType === 'news' && (
							<Input
							placeholder="Paste path to image"
							type="text"
							name="image"
							id="image"
							value={image}
							onChange={(e) => setImage(e.target.value)}
						/>
						)}
						
						<TextArea
							placeholder="Add info here"
							name="description"
							id="text"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
						{selectedType === 'events' && (
							<div className="flex flex-col">
								<label htmlFor="eventDate" className={css.label}>
									Event Date:
								</label>
								<DatePicker
									id="eventDate"
									selected={eventDate}
									onChange={(date) => setEventDate(date)}
									className={css.datePicker}
								/>
							</div>
						)}
						<div className={css.buttons}>
							<Button
								type="submit"
								label={
									selectedType === 'news' ? 'Publish News' : 'Publish Event'
								}
							/>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
};

export default Admin;
