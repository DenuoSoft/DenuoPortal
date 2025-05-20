//import { IconChevron } from '../../shared/icons/icon-chevron';
import { IconProfile } from '../../shared/icons/icon-profile';
import css from './profile.module.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
//import { userData } from '../../../data/userData';
//import { Modal } from '../../modal/modal';
//const userData = { name: 'User Name' };

const Profile = ({name}) => {
	
	//const [isOpen, setIsOpen] = useState(false);
	const [isMenuShown, setIsMenuShown] = useState(false);
	//const [userName, setUserName] = useState('Guest');

	/* const handleOpenModal = () => {
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
		setIsMenuShown(false);
	};
 */
	/* useEffect(() => {
		const cookieUserName = document.cookie
			.split('; ')
			.find((row) => row.startsWith('username='));
		if (cookieUserName) {
			const name = cookieUserName.split('=')[1];
			setUserName(name);
		} else {
			setUserName(userData.name);
		}
	}, []); */

	return (
		<div className={css.profile}>
			<div className={css.user} onClick={() => setIsMenuShown(!isMenuShown)}>
			{name ? (
                <p>
                    Welcome, {name}
                </p>
            ) : (
                <p >
                    Unknown user!!!</p>
            )}
			</div>
			<IconProfile />
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
	name: PropTypes.string
}
export default Profile