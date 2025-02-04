import css from './phonebook.module.scss';
import { useState } from 'react';
import { userData } from '../../../data/userData';

export const Phonebook = () => {
	const [searchTerm, setSearchTerm] = useState('');
  const [contacts, setContacts] = useState(userData || []);
  
	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};
	const columns = [
		'Name',
		'Job position',
		'Extension',
		'Mobile phone',
		'Office',
	];
	const filteredContacts = contacts.filter(
		(contact) =>
			(contact.name &&
				contact.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
			(contact.position &&
				contact.position.toLowerCase().includes(searchTerm.toLowerCase())) ||
			(contact.phone && contact.phone.includes(searchTerm)) ||
			(contact.location &&
				contact.location.toLowerCase().includes(searchTerm.toLowerCase()))
	);
  
	return (
		<main>
			<div className={css.layout}>
				<div className={css.searchBlock}>
					<div className={css.searchbox}>
						<input
							type='text'
							placeholder='Search...'
							value={searchTerm}
							onChange={handleSearchChange}
							className={css.input}
						/>
					</div>
				</div>
				
			</div>
			<div className={css.columns}>
				<div className={css.columnHeader}>
					{columns.map((column, index) => (
						<div className={css.header} key={index}>
							{column}
						</div>
					))}
				</div>

				{filteredContacts.length > 0 ? (
					filteredContacts.map((contact) => (
						<div key={contact.id} className={css.columnElem}>
							<div className={css.columnCell}>{contact.name}</div>
							<div className={css.columnCell}>{contact.position}</div>
							<div className={css.columnCell}>{contact.phone}</div>
							<div className={css.columnCell}>{contact.mobile}</div>
							<div className={css.columnCell}>{contact.location}</div>
						</div>
					))
				) : (
            <div className={css.textCenter }>Нет совпадений</div>
        )}
        
			</div>
		</main>
	);
};
