import React from 'react';

import { CommonComponentsProps, WithFieldGroupName } from '@graphql/types';
import { Error } from './CommonComponents.styled';

import SectionText from '@components/CommonComponents/SectionText/SectionText';

const CommonComponents: React.FC<WithFieldGroupName<CommonComponentsProps>> = ({
    fieldGroupName,
    ...props
}) => {
    const componentType = fieldGroupName.split('_').slice(-1)[0];
    const components: {
        [key: string]: React.ReactElement;
    } = {
        SectionText: <SectionText {...props} />,
    };

    if (Object.keys(components).includes(componentType)) {
        return components[componentType];
    }

    console.warn(componentType, props);
    return (
        <Error>
            Component <span>{componentType}</span> does not exist
        </Error>
    );
};

export default CommonComponents;
