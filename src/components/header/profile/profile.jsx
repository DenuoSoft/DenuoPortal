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
				
				<p className={css.userInfo}><strong>User name:</strong> {userInfo.name}</p>
				<p className={css.userInfo}><strong>Short Name:</strong> {userInfo.shortname}</p>
				<p className={css.userInfo}><strong>Email address:</strong> {userInfo.email}</p>
			</Modal>
			{/* 	<div className={`${css.chevron} ${isMenuShown ? css.up : ''}`}>
				<IconChevron />
			</div>
			{isMenuShown && (
				<div className={css.menu}>
					<div className={css.menuItems}>
						<div role='button' className={css.item} onClick={handleOpenModal}>
							Profile
						</div>
						<span className={css.item}>Log Out</span>
						<Modal isOpen={isOpen} onClose={handleCloseModal}>
						<h2>Profile Information</h2>
        					<p>User name:</p>
        					<p>Job position:</p>
        					<p>Office:</p>
        					<p>Phone number:</p>
						     <p>Assistant:</p>
						</Modal>
					</div>
				</div>
			)} */}
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
