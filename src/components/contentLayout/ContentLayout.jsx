import css from './contentLayout.module.scss';
import PropTypes from 'prop-types';

const ContentLayout = ({ children }) => {
  return (
    <div className={css.layout}>
      {children}
    </div>
  );
}
ContentLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ContentLayout;
