import React from 'react'; 
import logo from '../../assets/logo.png';

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
                    <a className="navbar-brand" href="#hero">
                        <img 
                            src={logo}
                            alt="'k'" 
                            className="icon-logo"
                        /> ayla Dombrosky</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
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
                                className='nav-link'>
                                    {category.name}
                                </a>
                                </span>
                            </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    );
}

export default Nav;