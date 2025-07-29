/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Modal} from '../../modal/modal';
import css from './adminForm.module.css';
import {images} from '../../../data/imagesdb.jsx';
import TextArea from '../../form/textarea/textarea.jsx';
import RadioButtons from '../../form/radiobuttons/radiobuttons';
import Input from '../../form/input/input';
import Button from '../../../components/shared/buttons/button.jsx';

const AdminForm = ({
	title,
	setTitle,
	image,
	setImage,
	venue,
	setVenue,
	organizer,
	setOrganizer,
	participants,
	setParticipants,
	description,
	setDescription,
	eventDate,
	setEventDate,
	selectedType,
	radioOptions,
	handleRadioChange,
	onSubmit,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [previewImage, setPreviewImage] = useState('');

	const onSubmitHandler = (e) => {
		e.preventDefault();
		const data = {
			title,
			description,
			type: selectedType,
			...(selectedType === 'news' ? {image} : {eventDate}),
		};
		onSubmit(data);
		setPreviewImage('');
	};
	const openModal = () => {
		//setModalData();
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		//setModalData(null);
	};
	const selectImage = (image) => {
		setImage(image.url);
		setPreviewImage(image.url);
		closeModal();
	};
	return (
		<div className={css.box}>
			<div className={css.title}>Admin form</div>

			<RadioButtons
				options={radioOptions}
				onChange={handleRadioChange}
				value={selectedType}
			/>

			<form onSubmit={onSubmitHandler}>
				<Input
					placeholder="Title"
					type="text"
					name="title"
					id="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				{selectedType === 'news' && (
					<>
						<Button
							label="Select image"
							type="button"
							name="image"
							id="image"
							onClick={openModal}
						/>

						{previewImage && (
							<div className={css.previewBox}>
								<span className={css.selected}>Selected image:</span>
								<img
									src={previewImage}
									alt="Preview"
									className={css.previewImage}
								/>
							</div>
						)}

						<TextArea
							placeholder="Add info here"
							name="description"
							id="text"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</>
				)}

				{selectedType === 'events' && (
					<div className={css.events}>
						<Input
							placeholder="Venue"
							type="text"
							name="venue"
							id="venue"
							value={venue}
							onChange={(e) => setVenue(e.target.value)}
						/>
						<Input
							placeholder="Organizer"
							type="text"
							name="organizer"
							id="organizer"
							value={organizer}
							onChange={(e) => setOrganizer(e.target.value)}
						/>
						<Input
							placeholder="Participants"
							type="text"
							name="participants"
							id="participants"
							value={participants}
							onChange={(e) => setParticipants(e.target.value)}
						/>

						<div>
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
					</div>
				)}
				<div className={css.buttons}>
					<Button
						type="submit"
						label={selectedType === 'news' ? 'Publish News' : 'Publish Event'}
					/>
				</div>
			</form>

			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<div className={css.images}>
					<h4 className={css.title}>Select image:</h4>
					<ul className={css.imageList}>
						{images.map((image, index) => (
							<li
								key={index}
								onClick={() => selectImage(image)}
								className={css.imageItem}
							>
								<img src={image.url} className={css.image} alt={image.name} />
								<span className={css.imgName}>{image.name}</span>
							</li>
						))}
					</ul>
				</div>
			</Modal>
		</div>
	);
};
export default AdminForm;
