import {useState} from 'react';
import css from './tabs.module.scss';
import PropTypes from 'prop-types';

export const Tabs = ({tabs, content}) => {
	const [activeTab, setActiveTab] = useState(tabs[0].name);

	const handleTabClick = (tabName) => {
		setActiveTab(tabName);
	};

	return (
		<>
			<div className={css.tabsLayout}>
				{tabs.map((tab) => (
					<div
						key={tab.name}
						onClick={() => handleTabClick(tab.name)}
						className={`${css.tabsItem} ${
							activeTab === tab.name ? css.activeTab : ''
						}`}
					>
						{tab.name}
					</div>
				))}
			</div>
			<div className={css.tabContent}>{content[activeTab]}</div>
		</>
	);
};
Tabs.propTypes = {
	tabs: PropTypes.array,
	content: PropTypes.object,
};
