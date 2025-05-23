/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {RadioButtons, Input, TextArea} from '../../form/index';
import Button from '../../shared/buttons/button';
import css from './adminForm.module.css';

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
	const onSubmitHandler = (e) => {
		e.preventDefault();
		const data = {
			title,
			description,
			type: selectedType,
			...(selectedType === 'news' ? {image} : {eventDate}),
		};
		onSubmit(data);
	};
	return (
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
						label={selectedType === 'news' ? 'Publish News' : 'Publish Event'}
					/>
				</div>
			</form>
		</div>
	);
};
export default AdminForm;
