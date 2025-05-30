import { Tabs } from '../../tabs/tabs';
import ContentItems from '../../contentItems/ContentItems';
import ContentLayout from '../../contentLayout/ContentLayout';
import PropTypes from 'prop-types';
import IsAdmin from '../../../utils/isAdmin';
import Admin from '../../admin/admin';

export const Marketing = ({userInfo}) => {
          let infoContent;
          let policyContent;
          let newsContent;
     
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
           newsContent = (
                 <ContentLayout>
                       <ContentItems>
                             <div></div>
                         <div>
                              <h1>News 1</h1>
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
           )
     
     let adminContent;
	adminContent = <Admin />;
	const isAdmin = IsAdmin({userInfo, groupType: 'market'});
	let tabs;
	if (isAdmin) {
		tabs = [
			{name: 'Info'},
			{name: 'News'},
			{name: 'Docs'},
			{name: 'Admin'},
		];
	} else {
		tabs = [{name: 'Info'}, {name: 'News'}, {name: 'Docs'}];
	}
     
          const content = {
               Info: infoContent,
               News: newsContent,
               Policies: policyContent,
               Admin: adminContent
          };
     return <Tabs tabs={tabs} content={content} />;
}
Marketing.propTypes = {
     userInfo: PropTypes.shape({
          name: PropTypes.string,
          shortname: PropTypes.string,
          email: PropTypes.string,
          id: PropTypes.string,
     }),
};