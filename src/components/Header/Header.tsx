import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

import { Container, Links, Info } from './Header.styled';

const Header: React.FC = () => {
    const [scrollOffset, setScrollOffset] = useState(0);

    const onScroll = () => {
        setScrollOffset(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <Container>
            <Links>
                <ScrollLink to="catalog" smooth offset={-80}>
                    Каталог
                </ScrollLink>
                <ScrollLink to="reviews" smooth offset={-80}>
                    Отзывы
                </ScrollLink>
                <ScrollLink to="questions" smooth offset={-80}>
                    Чат
                </ScrollLink>
            </Links>
            <Info isHidden={scrollOffset > 40}>
                <Link href="/">Orgzdrav</Link>
                <p>Шаблоны документов для клиник и врачей</p>
            </Info>
        </Container>
    );
};

export default Header;
