/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {useState, useCallback} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {RadioButtons, Input, TextArea} from '../../form/index';
import {Modal} from '../../modal/modal';
import Button from '../../shared/buttons/button';
import css from './adminForm.module.css';
import {images} from '../../../data/imagesdb.jsx';

const AdminForm = ({
	title,
	setTitle,
	image,
	setImage,
	description,
	setDescription,
	eventDate,
	setEventDate,
	selectedType,
	setSelectedType,
	radioOptions,
	handleRadioChange,
	onSubmit,
}) => {
	//const [images, setImages] = useState(images || []);
	const [modalData, setModalData] = useState(null);
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
		setModalData();
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setModalData(null);
	};
	const selectImage = (image) => {
		setImage(image.url);
		setPreviewImage(image.url);
		closeModal();
	};
	return (
		<div className={css.box}>
			<h1 className={css.title}>Admin form</h1>
			<RadioButtons
				options={radioOptions}
				onChange={handleRadioChange}
				value={selectedType}
			/>
			<form onSubmit={onSubmitHandler}>
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
					</>
				)}
				<Input
					placeholder="Info title"
					type="text"
					name="title"
					id="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

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
						label={selectedType === 'news' ? 'Publish News' : 'Publish Event'}
					/>
				</div>
			</form>
			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<div className={css.images}>
					<h4>Select image:</h4>
					<ul className={css.imageList}>
						{images.map((image, index) => (
							<li
								key={index}
								onClick={() => selectImage(image)}
								className={css.imageItem}
							>
								<img src={image.url} className={css.image} alt={image.name} />
								<span>{image.name}</span>
							</li>
						))}
					</ul>
				</div>
			</Modal>
		</div>
	);
};
export default AdminForm;
