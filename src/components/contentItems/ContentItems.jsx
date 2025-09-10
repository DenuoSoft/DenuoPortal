import css from './contentItems.module.css';
import PropTypes from 'prop-types';

const ContentItems = ({children}) => {
  return (
    <div className={css.itemsBox}>
      {children}
    </div>
  );
}
ContentItems.propTypes = {
  children: PropTypes.node,
};
export default ContentItems;
