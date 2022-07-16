import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AdjustmentForm from "./pages/inventory/AdjustmentForm";
import Adjustments from "./pages/inventory/Adjustments";
import ItemForm from "./pages/inventory/ItemForm";
import ItemGroups from "./pages/inventory/ItemGroups";
import Items from "./pages/inventory/Items";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div>
          <div className="row">
            <div className="col-2 sidebar p-3">
              <Sidebar />
            </div>
            <div className="col-10 container">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/inventory">
                  <Route path="items" element={<Items />} />
                  <Route path="items/add" element={<ItemForm />} />
                  <Route path="item-groups" element={<ItemGroups />} />
                  <Route path="adjustments" element={<Adjustments />} />
                  <Route path="adjustments/add" element={<AdjustmentForm />} />
                </Route>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
