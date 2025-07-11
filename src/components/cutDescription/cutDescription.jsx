import {useState, useMemo} from 'react';
import PropTypes from 'prop-types';
import css from './cutDecription.module.css';

const CutDescription = ({description}) => {
	const [showFullDescription, setShowFullDescription] = useState(false);
	const wordLimit = 60;
	const words = description.split(' ');
	const needsTruncation = words.length > wordLimit;

	const displayedDescription = useMemo(() => {
		if (needsTruncation && !showFullDescription) {
			return words.slice(0, wordLimit).join(' ') + '...';
		}
		return description;
	}, [description, showFullDescription, needsTruncation, words]);

	return (
		<span
			className={css.descr}
			onMouseEnter={() => needsTruncation && setShowFullDescription(true)}
			onMouseLeave={() => needsTruncation && setShowFullDescription(false)}
		>
			{displayedDescription}
			{needsTruncation && !showFullDescription && (
				<div className={css.hoverMessage}>
					<div className={css.msg}>Hover over the text to see more</div>
				</div>
			)}
		</span>
	);
};

CutDescription.propTypes = {
	description: PropTypes.string.isRequired,
};

export default CutDescription;
