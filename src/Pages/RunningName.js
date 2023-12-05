import React from 'react';

const RunningName = () => {
  return (
    <div className="w-full overflow-hidden">
      <p className="animate-running-name whitespace-no-wrap text-2xl">Thank you for choosing us! Your satisfaction is our top priority</p>
    </div>
  );
};

export default RunningName;

// CSS-in-JS using Tailwind CSS
const styles = `
  .animate-running-name {
    animation: runningText 15s linear infinite; /* Modify animation duration as needed */
  }

  @keyframes runningText {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

// Attach the styles to the head of the document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);
}
