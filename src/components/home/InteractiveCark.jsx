import React from 'react';

const InteractiveCark = ({ onSectionClick }) => {
    const handleClick = (sectionId) => {
        if (onSectionClick) {
            onSectionClick(sectionId);
        } else {
            console.log(`Clicked section: ${sectionId}`);
        }
    };

    return (
        <div className="relative w-full h-full aspect-square">
            {/* The main visual gear image */}
            <img
                src="/cark_1@2x.webp"
                alt="Sistem Global Chark"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none"
            />

            {/* Transparent SVG overlay for interactivity */}
            <svg
                viewBox="0 0 1381.91 1375.97"
                className="absolute inset-0 w-full h-full"
            >
                <defs>
                    <style>{`
            .interactive-path { 
              fill: transparent; 
              cursor: pointer; 
              transition: fill 0.3s ease;
              pointer-events: auto;
            }
            .interactive-path:hover { 
              fill: rgba(243, 112, 33, 0.1); 
            }
          `}</style>
                </defs>

                {/* These paths are positioned exactly over the sections of the gear image */}
                <path
                    className="interactive-path"
                    d="M600.62,824.6V-22.86C314.5-22.86,72.02,250.91-11.81,629.56l567.5,270.44c66.52-300.45-182.09-75.4,44.93-75.4Z"
                    onClick={() => handleClick('Vergi')}
                />
                <path
                    className="interactive-path"
                    d="M720.99,651.75l654.77-185.01C1269.66,182.59,962.76-22.86,600.62-22.86v674.61c287.34,0,36.18-225.47,120.37,0Z"
                    onClick={() => handleClick('Globalleşme')}
                />
                <path
                    className="interactive-path"
                    d="M590.76,722.62L38.15,910.51c93.71,275.78,356.6,472.52,663.59,468.35l-8.94-657.63c-243.58,3.31-27.69,220.21-102.04,1.39Z"
                    onClick={() => handleClick('Mevzuat')}
                />
                <path
                    className="interactive-path"
                    d="M599.64,684.91c0-59.13-10.9,25.81,6.43-27.55L33.68,471.39C11.85,538.64,0,610.39,0,684.91c0,229.77,112.21,433.31,284.78,558.91l348.77-480.04c-136.93-99.66-33.91,103.45-33.91-78.87Z"
                    onClick={() => handleClick('Finansman')}
                />
                <path
                    className="interactive-path"
                    d="M792.34,562.83c25.53,60.46-31.5-26.89-22.24,42.64,28.54,214.39,131.25-20.91,11.13,114.35l405.13,499.12c151.38-170.47,230.73-424.62,194.75-694.82-11.67-87.64-34.65-170.45-66.82-246.65l-521.96,285.35Z"
                    onClick={() => handleClick('Yazılım')}
                />
                <path
                    className="interactive-path"
                    d="M663.79,768.19l8.45,621.98c326.12-4.43,599.77-209.11,691.55-488.32l-649.54-189.7c-72.82,221.54,208.3,52.52-50.46,56.04Z"
                    onClick={() => handleClick('Ar-Ge')}
                />
            </svg>
        </div>
    );
};

export default InteractiveCark;
