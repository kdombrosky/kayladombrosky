import React, {useState} from 'react';

// import components
import Nav from './components/Nav/';
import About from './components/About';
import Footer from './components/Footer/';

// About Me, Portfolio, Contact, and Resume, 
// and the title corresponding to the current section is highlighted
function App() {
  // Nav categories
  const[categories] = useState([
    {name: 'about'}, 
    {name: 'projects'}, 
    {name: 'contact'}, 
    {name: 'resume'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="App container-fluid">
      <Nav 
        categories={categories} 
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory} 
      />
      <About />

      <Footer />
    </div>
  );
}

export default App;
