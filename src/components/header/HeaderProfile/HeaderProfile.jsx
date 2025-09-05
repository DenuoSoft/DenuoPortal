//import {IconProfile} from '../../shared/icons/icon-profile';
import css from './HeaderProfile.module.scss';
import {useState} from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../../modal/modal';
import img from '../../../assets/img/user_photo.jpg'

const HeaderProfile = ({userInfo}) => {
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
				<div className={css.userPhoto}>
					<img src={img} alt="user photo" />
				</div>
				
			</div>
			<Modal isOpen={isOpen} onClose={closeModal}>
				<div className={css.titleBox}>
					<div className={css.titleImage}>
						<img src={img} alt="" />
					</div>
					<h2 className={css.title}>{userInfo.name}</h2>
				</div>

				<div className={css.userInfo}>
					<strong>User name:</strong> {userInfo.name}
				</div>
				<div className={css.userInfo}>
					<strong>Short Name:</strong> {userInfo.shortname}
				</div>
				<div className={css.userInfo}>
					<strong>Email address:</strong> {userInfo.email}
				</div>
			</Modal>
		</div>
	);
};
HeaderProfile.propTypes = {
	userInfo: PropTypes.shape({
		name: PropTypes.string,
		shortname: PropTypes.string,
		email: PropTypes.string,
		id: PropTypes.string,
	}),
};
export default HeaderProfile;
