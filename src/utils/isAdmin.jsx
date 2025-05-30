import PropTypes from 'prop-types';
const adminUsers = [
    {main: ['losevi']},
	{it: ['shirinn', 'khlgatye', 'losevi', 'tersinv', 'prokhore']},
	{hr: ['ivanovv', 'petrovv', 'losevi']},
	{market: ['semonov', 'zykov']},
];
const IsAdmin = ({userInfo, groupType}) => {
	if (!userInfo || !userInfo.shortname || !groupType) {
		return false;
	}
	const userShortname = userInfo.shortname.toLowerCase();
	return adminUsers.some(
		(group) => group[groupType] && group[groupType].includes(userShortname)
	);
};
IsAdmin.propTypes = {
	userInfo: PropTypes.shape({
		shortname: PropTypes.string.isRequired,
	}).isRequired,
	groupType: PropTypes.string.isRequired,
};
export default IsAdmin;