import React from 'react';
import ImageComponent, { ImageProps } from 'next/image';

const Image: React.FC<ImageProps> = ({ loading, ...props }) => {
    return <ImageComponent {...props} loading="eager" />;
};

export default Image;
