import { IconChevron } from '../../shared/icons/icon-chevron';
import { IconProfile } from '../../shared/icons/icon-profile';
import css from './profile.module.scss';
import { useState, useEffect } from 'react';
//import { userData } from '../../../data/userData';

const userData = { name: "Losev Ivan" };

export const Profile = () => {

	const [isMenuShown, setIsMenuShown] = useState(false);
  const [userName, setUserName] = useState('Guest');
  
	useEffect(() => {
		const cookieUserName = document.cookie
			.split('; ')
			.find((row) => row.startsWith('username='));
		if (cookieUserName) {
			const name = cookieUserName.split('=')[1];
			setUserName(name);
		} else {
			setUserName(userData.name);
		}
  }, []);
  
	return (
		<div className={css.profile} onClick={() => setIsMenuShown(!isMenuShown)}>
			<div className={css.user}>
				<span>{userName}</span>
			</div>
			<IconProfile />
			<div className={`${css.chevron} ${isMenuShown ? css.up : ''}`}>
				<IconChevron />
			</div>
			{isMenuShown && (
				<div className={css.menu}>
					<div>Profile</div>
					<div>Log Out</div>
				</div>
			)}
		</div>
	);
};
