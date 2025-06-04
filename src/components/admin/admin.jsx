import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import AdminItemsList from './adminItemsList/AdminItemsList';
import AdminForm from './form/adminForm';
import css from './admin.module.css';
import {
	useCreateNewsMutation,
	useCreateEventMutation,
} from '../../api/apiSlice';
import 'react-datepicker/dist/react-datepicker.css';
import {formatDate} from '../../utils/formatDate';
//import ImageUploader from '../imageUploader/ImageUploader';

const radioOptions = [
	{label: 'News', value: 'news'},
	{label: 'Events', value: 'events'},
];

const Admin = () => {
	const [title, setTitle] = useState('');
	const [image, setImage] = useState('');
	const [venue, setVenue] = useState('');
	const [participants, setParticipants] = useState('');
	const [organizer, setOrganizer] = useState('');
	const [description, setDescription] = useState('');
	// eslint-disable-next-line no-unused-vars
	const [publishDate, setPublishDate] = useState('');
	const [selectedType, setSelectedType] = useState('news');
	const [eventDate, setEventDate] = useState(new Date());
	// eslint-disable-next-line no-unused-vars
	const [createNews, {isLoading}] = useCreateNewsMutation();
	const [createEvent] = useCreateEventMutation();

	const handleRadioChange = (value) => {
		setSelectedType(value);
		setTitle('');
		setImage('');
		setDescription('');
		setVenue('');
		setParticipants('');
		setOrganizer('');
	};

	const onSubmitHandler = () => {
		const currentDate = new Date();
		const formattedDate = formatDate(currentDate);
		setPublishDate(formattedDate);
		const newItem = {
			id: uuidv4(),
			name: title,
			description: description,
			image: image,
			publishDate: formattedDate,
			venue: venue,
			participants: participants,
			organizer: organizer,
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
					setVenue('');
					setParticipants('');
					setOrganizer('');
				});
		}
	};

	// eslint-disable-next-line no-unused-vars
	const data = {
		title,
		description,
		type: selectedType,
		...(selectedType === 'news' ? {image} : {eventDate}),
	};
	const handleSubmit = (data) => {
		onSubmitHandler(data);
	};
	return (
		<>
			<div className={css.layout}>
				<div className={css.box}>
					<h1 className={css.title}>Preview</h1>
					<AdminItemsList />
				</div>
				<div>
					<AdminForm
						title={title}
						setTitle={setTitle}
						venue={venue}
						setVenue={setVenue}
						organizer={organizer}
						setOrganizer={setOrganizer}
						participants={participants}
						setParticipants={setParticipants}
						image={image}
						setImage={setImage}
						description={description}
						setDescription={setDescription}
						eventDate={eventDate}
						setEventDate={setEventDate}
						selectedType={selectedType}
						setSelectedType={setSelectedType}
						radioOptions={radioOptions}
						handleRadioChange={handleRadioChange}
						onSubmit={handleSubmit}
					/>
				</div>
			</div>
		</>
	);
};

export default Admin;
