import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/NavBar'
import ItemListContainer from './components/screen/itemlistcontainer/ItemListContainer';


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <Navbar onCategorySelect={setSelectedCategory} />
      <ItemListContainer selectedCategory={selectedCategory} />
    </div>
  );
};


export default App
