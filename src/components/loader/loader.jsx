import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import { Spinner } from '../shared/spinner/spinner';

const Loader = ({
	isLoading,
	isError,
	minDelay = 500,
	maxDelay = 900,
	children,
}) => {
	const [isDelay, setIsDelay] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsDelay(false);
		}, minDelay + Math.random() * (maxDelay - minDelay));

		return () => clearTimeout(timer);
	}, [minDelay, maxDelay]);

	if (isLoading || isDelay) {
		return <Spinner />;
	}

	if (isError) {
		return <div className="loading-error">Error loading</div>;
	}

	return children;
};
Loader.propTypes = {
	isLoading: PropTypes.bool,
	isError: PropTypes.bool,
	minDelay: PropTypes.number,
	maxDelay: PropTypes.number,
	children: PropTypes.node,
};



export default Loader;
