import {useState, useEffect, useRef} from 'react';
import styles from './slider.module.scss';
import {slides} from '../../data/imagesdb';
import Button from '../shared/buttons/button';

const Slider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const timeoutRef = useRef(null);

	const resetTimeout = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	};

	useEffect(() => {
		resetTimeout();
		if (!isPaused) {
			timeoutRef.current = setTimeout(() => {
				setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
			}, 3000);
		}
		return () => {
			resetTimeout();
		};
	}, [currentIndex, isPaused]);

	const prevSlide = () => {
		setCurrentIndex((idx) => (idx === 0 ? slides.length - 1 : idx - 1));
	};

	const nextSlide = () => {
		setCurrentIndex((idx) => (idx === slides.length - 1 ? 0 : idx + 1));
	};

	const handleSlideClick = (link) => {
		window.location.href = link;
	};

	return (
		<div className={styles.container}>
			<div
				className={`${styles.sliderBox} ${isPaused ? styles.paused : ''}`}
				onMouseEnter={() => setIsPaused(true)}
				onMouseLeave={() => setIsPaused(false)}
			>
				{slides.map((slide, index) => (
					<div
						key={index}
						className={`${styles.slide} ${
							index === currentIndex ? styles.active : ''
						}`}
						style={{backgroundImage: `url(${slide.image})`}}
					>
						<div className={styles.content}>
							<h2>{slide.title}</h2>
							<div className={styles.buttonBox}>
								<Button
									onClick={() => handleSlideClick(slide.link)}
									label={slide.buttonText}
								/>
							</div>
						</div>
					</div>
				))}

				<button
					className={`${styles.navButton} ${styles.prev}`}
					onClick={prevSlide}
					aria-label="Previous Slide"
				>
					&#10094;
				</button>
				<button
					className={`${styles.navButton} ${styles.next}`}
					onClick={nextSlide}
					aria-label="Next Slide"
				>
					&#10095;
				</button>
			</div>

			<div className={styles.dots}>
				{slides.map((_, idx) => (
					<span
						key={idx}
						className={`${styles.dot} ${
							idx === currentIndex ? styles.active : ''
						}`}
						onClick={() => setCurrentIndex(idx)}
					/>
				))}
			</div>
		</div>
	);
};

export default Slider;
