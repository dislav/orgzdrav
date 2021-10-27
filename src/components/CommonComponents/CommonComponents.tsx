import React from 'react';

import { CommonComponentsProps, WithFieldGroupName } from '@graphql/types';

import SectionText from '@components/CommonComponents/SectionText/SectionText';

const CommonComponents: React.FC<WithFieldGroupName<CommonComponentsProps>> = ({
    fieldGroupName,
    ...props
}) => {
    const componentType = fieldGroupName.split('_').slice(-1)[0];
    const components: {
        [key: string]: JSX.Element;
    } = {
        SectionText: <SectionText {...props} />,
    };

    if (!Object.keys(components).includes(componentType)) {
        console.warn(componentType, props);

        return null;
    }

    return components[componentType];
};

export default CommonComponents;
