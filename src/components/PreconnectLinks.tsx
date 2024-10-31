// PreconnectLinks.tsx
"use client";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";

interface PreconnectLinksProps {
    domains: string[];
}

const PreconnectLinks: React.FC<PreconnectLinksProps> = ({ domains }) => {
    useEffect(() => {
        domains.forEach((domain) => {
            ReactDOM.preconnect(domain);
        });
    }, [domains]);

    return null;
};

export default PreconnectLinks;
