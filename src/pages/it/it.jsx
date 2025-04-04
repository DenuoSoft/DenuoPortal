import { Tabs } from "../../components/tabs/tabs";
import { tabs, content} from './it-data'

export const IT = () => {
        return <Tabs tabs={tabs} content={content} />;
  };