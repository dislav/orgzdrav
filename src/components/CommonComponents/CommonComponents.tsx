import React from 'react';

import { CommonComponentsProps } from '@components/CommonComponents/types';

import { Container, Component } from './CommonComponents.styled';
import SectionText from '@components/CommonComponents/SectionText/SectionText';
import SectionProduct from '@components/CommonComponents/SectionProduct/SectionProduct';
import SectionSlider from '@components/CommonComponents/SectionSlider/SectionSlider';
import SectionLink from '@components/CommonComponents/SectionLink/SectionLink';

interface ICommonComponents {
    className?: string;
    components: Array<CommonComponentsProps | undefined | null>;
}

const CommonComponents: React.FC<ICommonComponents> = ({
    className,
    components = [],
}) => {
    return (
        <Container className={className}>
            {components.map((props, index) => {
                if (!props?.fieldGroupName)
                    return <div>Block not have fieldGroupName</div>;

                const renderComponents: {
                    [key: string]: JSX.Element;
                } = {
                    SectionText: <SectionText {...props} />,
                    SectionProduct: <SectionProduct {...props} />,
                    SectionSlider: <SectionSlider {...props} />,
                    SectionLink: <SectionLink {...props} />,
                };

                const componentType = props.fieldGroupName
                    .split('_')
                    .slice(-1)[0];

                if (!Object.keys(renderComponents).includes(componentType)) {
                    console.warn(componentType, props);

                    return null;
                }

                return (
                    <Component key={index}>
                        {renderComponents[componentType]}
                    </Component>
                );
            })}
        </Container>
    );
};

export default CommonComponents;
