
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import AdminItemsList from './adminItemsList/AdminItemsList';
import AdminForm from './form/adminForm';
import css from './admin.module.css';
import {
	useCreateNewsMutation,
	useCreateAnnounceMutation,
} from '../../api/apiSlice';
import 'react-datepicker/dist/react-datepicker.css';
import {formatDate} from '../../utils/formatDate';

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
	const [createEvent] = useCreateAnnounceMutation();

	const handleRadioChange = (value) => {
		setSelectedType(value);
		setTitle('');
		setImage('');
		setDescription('');
		setVenue('');
		setParticipants('');
		setOrganizer('');
		setEventDate(new Date()); 
	};

	const onSubmitHandler = () => {
		const currentDate = new Date();
		const formattedPublishDate = formatDate(currentDate);
		setPublishDate(formattedPublishDate); 

		let newItem;
		if (selectedType === 'news') {
			newItem = {
				id: uuidv4(),
				name: title,
				description: description,
				image: image,
				publishDate: formattedPublishDate,
			};
			createNews(newItem)
				.unwrap()
				.then(() => {
					setTitle('');
					setImage('');
					setDescription('');
					setPublishDate('');
				})
				.catch((error) => console.error('Failed to create news:', error));
		} else if (selectedType === 'events') {
			const formattedEventDate = formatDate(eventDate);
			newItem = {
				id: uuidv4(),
				name: title,
				description: description,
				image: image,
				publishDate: formattedPublishDate,
				venue: venue,
				participants: participants,
				organizer: organizer,
				date: formattedEventDate,
			};
			createEvent(newItem)
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
				})
				.catch((error) => console.error('Failed to create event:', error));
		}
	};

	const handleSubmit = () => {
		onSubmitHandler();
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
						handleRadioChange={handleRadioChange}
						radioOptions={radioOptions}
						onSubmit={handleSubmit}
					/>
				</div>
			</div>
		</>
	);
};

export default Admin;

