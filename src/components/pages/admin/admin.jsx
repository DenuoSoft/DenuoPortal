//import React from 'react';
import AdminItemsList from '../../adminItemsList/AdminItemsList';
import Input from '../../form/input/input';
import {TextArea} from '../../form/textarea/textarea';
import Button from '../../shared/buttons/button';
import css from './admin.module.css';

const Admin = () => {
	return (
		<main>
			<div className={css.layout}>
				<div className={css.box}>
					<AdminItemsList />
				</div>
				<div className={css.box}>
					<h1>Info details</h1>
					<form>
						<Input placeholder="Info title" />
						<Input />
						<TextArea placeholder="Add info here" />
            <div className={css.buttons}>
              <Button type="button" label="Preview" />
							<Button type="button" label="Publish" />
						</div>
					</form>
				</div>
			</div>
		</main>
	);
};

export default Admin