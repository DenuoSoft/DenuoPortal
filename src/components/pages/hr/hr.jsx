//import css from './hr.module.scss';
import { Tabs } from '../../tabs/tabs'
import ContentItems from '../../contentItems/ContentItems';
import ContentLayout from '../../contentLayout/ContentLayout';

export const HR = () => {
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
      )

    const tabs = [{name: 'Info'}, {name: 'Vacations'}, {name: 'Policies'}];

    const content = {
        Info: infoContent,
        Vacations: vacationsContent,
        Policies: policyContent        
    };

 
    return <Tabs tabs={tabs} content={content} />;
}