//import css from './hr.module.scss';
import { Tabs } from '../../tabs/tabs'
import { tabs, content} from './hr-data'

export const HR = () => {
 
    return <Tabs tabs={tabs} content={content} />;
}