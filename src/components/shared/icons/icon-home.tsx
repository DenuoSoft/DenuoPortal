import { useState, useEffect } from 'react';

export const IconHome = ({
  defaultColor = '#2E3436',
  hoverColor = '#d7ff23',
  ariaLabel = 'profile icon',
  isActive: initialActive = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(initialActive);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleBlur = () => {
 
      setIsActive(false);
    };

    window.addEventListener('blur', handleBlur);

    return () => {
      window.removeEventListener('blur', handleBlur);
    };
  }, []);

  const ariaAttributes = {
    role: 'img',
    'aria-label': ariaLabel,
    tabIndex: 0,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{
        outline: 'none',
        cursor: 'pointer',
      }}
      onFocus={(e) => {
        e.currentTarget.style.outline = 'none';
      }}
      {...ariaAttributes}
    >
      <path
        d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"
        fill={isActive ? hoverColor : isHovered ? hoverColor : defaultColor}
      />
    </svg>
  );
};