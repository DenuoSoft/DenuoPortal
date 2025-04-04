//import css from './main.module.scss';
import { Tabs } from '../../components/tabs/tabs';
import { tabs, content } from './main-data';
//import { Outlet} from "react-router-dom";
export const Main = () => {
	return <Tabs tabs={tabs} content={content} />;
};
