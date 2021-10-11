import React, { useEffect } from 'react';

interface IProps {
    host: string;
    history: any;
    name: string;
}

const MicroFrontend: React.FC<IProps> = ({ name, history, host }) => {
    useEffect(() => {
        const win = window as { [key: string]: any }
        const scriptId = `micro-frontend-script-${name}`;

        const renderMicroFrontend = () => {
            win[`render${name}`](`${name}-container`, history)
        };

        if (document.getElementById(scriptId)) {
            renderMicroFrontend();
            return;
        }

        fetch(`${host}/asset-manifest.json`)
            .then((res) => res.json())
            .then((manifest) => {
                const script = document.createElement('script');
                script.id = scriptId;
                script.crossOrigin = '';
                script.src = `${host}${manifest.files["main.js"]}`
                script.onload = () => {
                    renderMicroFrontend();
                };
                document.head.appendChild(script);
            });

        return () => {
            win[`unmount${name}`] && win[`unmount${name}`](`${name}-container`);
        }
    });
    return (
        <main id={`${name}-container`}/>
    );
};

export default MicroFrontend;