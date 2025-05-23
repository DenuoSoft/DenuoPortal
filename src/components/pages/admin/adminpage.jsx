import { Tabs } from '../../tabs/tabs';
import Admin from '../../admin/admin';

function AdminPage() {

  let mainContent;
  let hrContent;
  let marketContent;
  let itContent;

  mainContent = (
    <>
      <Admin />
    </>
  )
  
  hrContent = (
    <div>HR</div>
  )

  marketContent = (
    <div>Marketing</div>
  )

  itContent = (
    <div>IT</div>
  )

const tabs = [{name: 'Main'}, {name: 'HR'}, {name: 'Marketing'}, {name: 'IT'}];

	const content = {
		Main: mainContent,
		HR: hrContent,
    Marketing: marketContent,
    IT: itContent
	};
 
  return <Tabs tabs={tabs} content={content} />;
}

export default AdminPage;
