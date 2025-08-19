import css from './phonebook.module.scss';
import {useState, lazy, Suspense, useEffect} from 'react';
const loadUserData = async () => {
	const {userData} = await import('../../../data/userData');
	return userData;
};
import { Modal } from '../../modal/modal.jsx';
import { Profile } from '../../profile/profile.jsx'
import Pagination from '../../pagination/pagination.jsx';
const Input = lazy(() => import('../../form/input/input.jsx'));
import Loader from '../../loader/loader.jsx';

export const Phonebook = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [userData, setUserData] = useState([]);

	const [searchTerm, setSearchTerm] = useState('');
	const [contacts, setContacts] = useState(userData || []);
	const [modalData, setModalData] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const contactsPerPage = 12;

	useEffect(() => {
		setIsLoading(true);
		loadUserData()
			.then((data) => {
				setUserData(data);
				setContacts(data);
			})
			.catch(() => setIsError(true))
			.finally(() => setIsLoading(false));
	}, []);

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const openModal = (contact) => {
		setModalData(contact);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setModalData(null);
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

	const totalPages = Math.ceil(filteredContacts.length / contactsPerPage) || 1;

	const indexOfLastContact = currentPage * contactsPerPage;
	const indexOfFirstContact = indexOfLastContact - contactsPerPage;
	const currentContacts = filteredContacts.slice(
		indexOfFirstContact,
		indexOfLastContact
	);

	const handlePageChange = (direction) => {
		if (direction === 'next' && currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
		if (direction === 'prev' && currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	return (
		<Loader isLoading={isLoading} isError={isError}>
			<main>
				<div className={css.layout}>
					<div className={css.searchBlock}>
						<Suspense fallback={<Loader />}>
							<Input
								type="text"
								placeholder="Search..."
								value={searchTerm}
								onChange={handleSearchChange}
								readOnly={true}
							/>
						</Suspense>
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

					{currentContacts.length > 0 ? (
						currentContacts.map((contact) => (
							<div key={contact.id} className={css.columnElem}>
								<div
									className={css.columnCellNM}
									style={{cursor: 'pointer'}}
									onClick={() => openModal(contact)}
								>
									{contact.name}
								</div>
								<div className={css.columnCell}>{contact.position}</div>
								<div className={css.columnCell}>{contact.phone}</div>
								<div className={css.columnCell}>{contact.mobile}</div>
								<div className={css.columnCell}>{contact.location}</div>
							</div>
						))
					) : (
						<div className={css.textCenter}>There is no such user!!!</div>
					)}
				</div>
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onNext={() => handlePageChange('next')}
					onPrev={() => handlePageChange('prev')}
				/>

				<Modal isOpen={isModalOpen} onClose={closeModal}>
					{modalData && <Profile modalData={modalData}/>}
				</Modal>
			</main>
		</Loader>
	);
};
