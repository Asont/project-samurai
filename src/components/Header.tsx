import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="data:image/png;base64,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"
                alt="header"/>
        </header>
    );
};

export default Header;