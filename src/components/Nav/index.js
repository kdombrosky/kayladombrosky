import React, { useEffect } from 'react'; 

import logo from '../../assets/logo2.png';
import logo2 from '../../assets/logo.png';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    // useEffect(() => {
    //     document.title = (currentCategory.name);
    // }, [currentCategory]);

    return(
        <header>
            <nav className="navbar navbar-light fixed-top navbar-expand-lg bg-light"> 
                <div className="container">
                <a className="navbar-brand" href="/">
                    <img 
                    src={logo2}
                    alt="name-logo" 
                    className="icon-logo"
                    /> ayla Dombrosky
                </a>
                    <ul className="navbar-nav mb-2 d-flex">
                        {categories.map((category) => (
                        // Set class to 'active' if the current category has been selected 
                        <li
                        className={`nav-item mx-2 fs-5 ${currentCategory.name === category.name && `active`}`}
                        key={category.name}
                        data-testid={`#${category.name}`}
                        >
                            <span onClick={() => { setCurrentCategory(category) }}>
                            <a 
                            href={`#${category.name}`}
                            className='nav-link '>
                                {category.name}
                            </a>
                            </span>
                        </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Nav;