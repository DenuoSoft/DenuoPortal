import { Tabs } from '../../tabs/tabs';
import { ConflictForm } from './conflict/conflictForm'
import Loader from '../../loader/loader';
import css from './forms.module.css'

export const Forms = () => {
	let isLoading;
	let isError;
	let conflictFormContent;
	
	conflictFormContent = (
		<div className={css.forms}>
			<ConflictForm />
		</div>
	);

	const content = {
		Conflict: conflictFormContent,
		Form: <div>Form 2</div>,
		Formas: <div>Form 3</div>,
		
	};

	const tabs = [{name: 'Conflict'}, {name: 'Form 2'}, {name: 'Form 3'}];

	return (
			<Loader isLoading={isLoading} isError={isError}>
				<Tabs tabs={tabs} content={content} />;
			</Loader>
		);
};
