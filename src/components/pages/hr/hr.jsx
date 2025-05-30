//import css from './hr.module.scss';
import {Tabs} from '../../tabs/tabs';
import ContentItems from '../../contentItems/ContentItems';
import ContentLayout from '../../contentLayout/ContentLayout';
import PropTypes from 'prop-types';
import IsAdmin from '../../../utils/isAdmin';
import Admin from '../../admin/admin';

export const HR = ({userInfo}) => {
	let infoContent;
	let policyContent;
	let vacationsContent;

	infoContent = (
		<ContentLayout>
			<ContentItems>
				<div></div>
				<div>
					<h1>Info 1</h1>
					<span>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quidem
						vel nisi mollitia corporis voluptatum tenetur, provident quia
						voluptates explicabo error doloremque doloribus velit quod
						consequatur sequi ratione facilis cupiditate. Lorem ipsum dolor, sit
						amet consectetur adipisicing elit. In quidem vel nisi mollitia
						corporis voluptatum tenetur, provident quia voluptates
					</span>
				</div>
			</ContentItems>
		</ContentLayout>
	);
	policyContent = (
		<ContentLayout>
			<ContentItems>
				<div></div>
				<div>
					<h1>Policy 1</h1>
					<span>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quidem
						vel nisi mollitia corporis voluptatum tenetur, provident quia
						voluptates explicabo error doloremque doloribus velit quod
						consequatur sequi ratione facilis cupiditate. Lorem ipsum dolor, sit
						amet consectetur adipisicing elit. In quidem vel nisi mollitia
						corporis voluptatum tenetur, provident quia voluptates
					</span>
				</div>
			</ContentItems>
		</ContentLayout>
	);
	vacationsContent = (
		<ContentLayout>
			<ContentItems>
				<div></div>
				<div>
					<h1>Vacations</h1>
					<span>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quidem
						vel nisi mollitia corporis voluptatum tenetur, provident quia
						voluptates explicabo error doloremque doloribus velit quod
						consequatur sequi ratione facilis cupiditate. Lorem ipsum dolor, sit
						amet consectetur adipisicing elit. In quidem vel nisi mollitia
						corporis voluptatum tenetur, provident quia voluptates
					</span>
				</div>
			</ContentItems>
		</ContentLayout>
	);

	let adminContent;
	adminContent = <Admin />;
	const isAdmin = IsAdmin({userInfo, groupType: 'hr'});

	let tabs;
	if (isAdmin) {
		tabs = [
			{name: 'Info'},
			{name: 'Vacations'},
			{name: 'Policies'},
			{name: 'Admin'},
		];
	} else {
		tabs = [{name: 'Info'}, {name: 'Vacations'}, {name: 'Policies'}];
	}

	const content = {
		Info: infoContent,
		Vacations: vacationsContent,
		Policies: policyContent,
		Admin: adminContent,
	};

	return <Tabs tabs={tabs} content={content} />;
};
HR.propTypes = {
	userInfo: PropTypes.shape({
		name: PropTypes.string,
		shortname: PropTypes.string,
		email: PropTypes.string,
		id: PropTypes.string,
	}),
};
