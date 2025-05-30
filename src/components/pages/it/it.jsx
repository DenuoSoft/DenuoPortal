import ContentItems from '../../contentItems/ContentItems';
import ContentLayout from '../../contentLayout/ContentLayout';
import {Tabs} from '../../tabs/tabs';
import PropTypes from 'prop-types';
import IsAdmin from '../../../utils/isAdmin';
import Admin from '../../admin/admin';

export const IT = ({userInfo}) => {
	let infoContent;
	let policyContent;
	let docsContent;

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
					<h1>Police 1</h1>
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
	docsContent = (
		<ContentLayout>
			<ContentItems>
				<div></div>
				<div>
					<h1>Police 1</h1>
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
	const isAdmin = IsAdmin({userInfo, groupType: 'it'});
	let tabs;
	if (isAdmin) {
		tabs = [
			{name: 'Info'},
			{name: 'Policies'},
			{name: 'Docs'},
			{name: 'Admin'},
		];
	} else {
		tabs = [{name: 'Info'}, {name: 'Vacations'}, {name: 'Policies'}];
	}

	const content = {
		Info: infoContent,
		Policies: policyContent,
		Docs: docsContent,
		Admin: adminContent,
	};
	return <Tabs tabs={tabs} content={content} />;
};
IT.propTypes = {
	userInfo: PropTypes.shape({
		name: PropTypes.string,
		shortname: PropTypes.string,
		email: PropTypes.string,
		id: PropTypes.string,
	}),
};
