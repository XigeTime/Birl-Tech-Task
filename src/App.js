import { createContext, useState } from "react";

import { Routes, Route } from "react-router-dom";

import './styles.css';

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ItemType from "./pages/ItemType";
import Condition from "./pages/Condition";
import Where from "./pages/Where";
import Overview from "./pages/Overview";

export const ItemContext = createContext(null);

function App() {
  const [ items, setItems ] = useState([]);
  const [ currentItem, setCurrentItem ] = useState(null);

  return <>
    <ItemContext.Provider value={{
      items: items,
      setItems: setItems,
      currentItem: currentItem,
      setCurrentItem: setCurrentItem
    }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="item-type" element={<ItemType />} />
          <Route path="condition" element={<Condition />} />
          <Route path="where" element={<Where />} />
          <Route path="overview" element={<Overview />} />

          <Route path="*" element={<p>Not found</p>} />
        </Route>
      </Routes>
    </ItemContext.Provider>
  </>;
}

export default App;
