import ContentItems from '../../contentItems/ContentItems';
import ContentLayout from '../../contentLayout/ContentLayout';
import {Tabs} from '../../tabs/tabs';

export const IT = () => {
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
      )

	const tabs = [{name: 'Info'}, {name: 'Policies'}, {name: 'Docs'}];

	const content = {
		Info: infoContent,
		Policies: policyContent,
		Docs: docsContent,
	};
	return <Tabs tabs={tabs} content={content} />;
};
