import { Form } from './conflict/conflict';
import css from './forms.module.css'
export const tabs = [
	{ name: 'Conflict' },
	{ name: 'Form 2' },
	{ name: 'Form 3' },
];
export const content = {
	Conflict: (
    <div className={css.forms}>
			<Form />
		</div>
	),
	Form: <div>Form 2</div>,
	Formas: <div>Form 3</div>,
};
