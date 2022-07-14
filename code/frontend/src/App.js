import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ItemForm from "./pages/inventory/ItemForm";
import ItemGroups from "./pages/inventory/ItemGroups";
import ItemGroupsForm from "./pages/inventory/ItemGroupsForm";
import Items from "./pages/inventory/Items";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory">
            <Route path="items" element={<Items />} />
            <Route path="items/add" element={<ItemForm />} />
            <Route path="item-groups" element={<ItemGroups />} />
            <Route path="item-groups/add" element={<ItemGroupsForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
