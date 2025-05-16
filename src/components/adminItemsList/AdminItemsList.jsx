import AdminItem from '../adminItem/AdminItem'
import css from './adminItemsList.module.scss'

const AdminItemsList = () => {
  return (
    <div className={css.layout}>
      <AdminItem />
    </div>
  );
}

export default AdminItemsList;
