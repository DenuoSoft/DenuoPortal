import css from './phonebook.module.scss';
import {useState, lazy, Suspense, useEffect} from 'react';
import {Modal} from '../../modal/modal.jsx';
import {Profile} from '../../profile/profile.jsx';
import Pagination from '../../pagination/pagination.jsx';
const Input = lazy(() => import('../../form/input/input.jsx'));
import Loader from '../../loader/loader.jsx';
import {useGetUsersQuery} from '../../../api/apiSlice';

export const Phonebook = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [modalData, setModalData] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const pageSize = 15;

	const {
		data: response = {results: [], count: 0},
		isLoading,
		isError,
	} = useGetUsersQuery({
		search: searchTerm,
		all: false,
		page: currentPage,
		page_size: pageSize,
	});

	useEffect(() => {
		setCurrentPage(1);
	}, [searchTerm]);

	const users = response.results;
	const totalCount = response.count;
	const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

	const openModal = (contact) => {
		setModalData(contact);
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
		setModalData(null);
	};

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handlePageChange = (direction) => {
		setCurrentPage((p) =>
			direction === 'next' ? Math.min(p + 1, totalPages) : Math.max(p - 1, 1)
		);
	};

	const columns = [
		'Name',
		'Job position',
		'Extension',
		'Mobile phone',
		'Office',
	];

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
							/>
						</Suspense>
					</div>
				</div>

				<div className={css.columns}>
					<div className={css.columnHeader}>
						{columns.map((col) => (
							<div className={css.header} key={col}>
								{col}
							</div>
						))}
					</div>

					{users.length > 0 ? (
						users.map((c) => {
							const fullName = `${c.first_name || ''} ${
								c.last_name || ''
							}`.trim();
							return (
								<div key={c.id} className={css.columnElem}>
									<div
										className={css.columnCellNM}
										style={{cursor: 'pointer'}}
										onClick={() => openModal(c)}
									>
										{fullName}
									</div>
									<div className={css.columnCell}>{c.position?.name || ''}</div>
									<div className={css.columnCell}>{c.ext_phone || ''}</div>
									<div className={css.columnCell}>{c.mobile_phone || ''}</div>
									<div className={css.columnCell}>{c.location || ''}</div>
								</div>
							);
						})
					) : (
						<div className={css.textCenter}>
							{isLoading ? 'Loading users...' : 'No users found'}
						</div>
					)}
				</div>

				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onNext={() => handlePageChange('next')}
					onPrev={() => handlePageChange('prev')}
				/>

				<Modal isOpen={isModalOpen} onClose={closeModal}>
					{modalData && <Profile modalData={modalData} />}
				</Modal>
			</main>
		</Loader>
	);
};
