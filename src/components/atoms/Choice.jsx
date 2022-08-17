const Choice = ({ className, children, onClick }) => {
  return (
    <svg
      className={className}
      width="65"
      height="65"
      viewBox="0 0 203 178"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6845 123.733C-22.3844 43.9272 60.1765 8.10654 105.37 9.33661C109.791 6.97489 102.546 5.64641 98.3701 5.27739C62.8783 2.81726 0 26.3115 0 83.1405C0 164.694 79.2118 175.764 97.6332 177.61C131.529 181.005 211.477 163.218 202.267 86.4617C193.056 9.70561 116.791 -1.29401 92.4752 0.111112C77.1487 0.996765 80.6856 3.92431 84.3698 5.27739C164.687 -2.47203 194.53 63.5825 194.53 97.1632C194.53 189.787 49.7377 187.573 17.6845 123.733Z"
        fill="white"
      />
      <text
        value={children}
        onClick={onClick}
        x="50%"
        y="50%"
        textAnchor="middle"
        fill="white"
        dy=".3em"
        fontSize="6rem"
      >
        {children}
      </text>
    </svg>
  );
};

export default Choice;
