import React, { useState, useEffect } from 'react';

const ClientOnly: React.FC = ({ children }) => {
    const [isInit, setIsInit] = useState(false);

    useEffect(() => {
        setIsInit(true);
    }, []);

    if (!isInit) return null;

    return <>{children}</>;
};

export default ClientOnly;
