import React, {useState} from 'react';

// import components
import Nav from './components/Nav/';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer/';

// About Me, Portfolio, Contact, and Resume, 
// and the title corresponding to the current section is highlighted
function App() {
  // Nav categories
  const[categories] = useState([
    {name: 'about'}, 
    {name: 'projects'}, 
    {name: 'contact'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="">
      <Nav 
        categories={categories} 
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory} 
      />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
