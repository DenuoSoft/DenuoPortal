import {IconProfile} from '../../shared/icons/icon-profile';
import css from './profile.module.scss';
import {useState} from 'react';
import PropTypes from 'prop-types';
import {Modal} from '../../modal/modal';

const Profile = ({userInfo}) => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div>
			<div className={css.profile} role="button" onClick={openModal}>
				<div className={css.user}>
					{userInfo && userInfo.name ? (
						<span>Welcome, {userInfo.name}</span>
					) : (
						<p className={css.alert}>Unknown user!!!</p>
					)}
				</div>

				<IconProfile />
			</div>
			<Modal isOpen={isOpen} onClose={closeModal}>
				<h2 className={css.title}>Profile Information</h2>

				<p className={css.userInfo}>
					<strong>User name:</strong> {userInfo.name}
				</p>
				<p className={css.userInfo}>
					<strong>Short Name:</strong> {userInfo.shortname}
				</p>
				<p className={css.userInfo}>
					<strong>Email address:</strong> {userInfo.email}
				</p>
			</Modal>
		</div>
	);
};
Profile.propTypes = {
	userInfo: PropTypes.shape({
		name: PropTypes.string,
		shortname: PropTypes.string,
		email: PropTypes.string,
		id: PropTypes.string,
	}),
};
export default Profile;
