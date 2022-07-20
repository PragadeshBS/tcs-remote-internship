import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AdjustmentForm from "./pages/inventory/AdjustmentForm";
import Adjustments from "./pages/inventory/Adjustments";
import ItemForm from "./pages/inventory/ItemForm";
import ItemGroups from "./pages/inventory/ItemGroups";
import Items from "./pages/inventory/Items";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Customers from "./pages/sales/Customers";
import CustomerEdit from "./pages/sales/CustomerEdit";
import AddCustomer from "./pages/sales/AddCustomer";
import SalesOrders from "./pages/sales/SalesOrders";
import AddSalesOrder from "./pages/sales/AddSalesOrder";
import SalesDetail from "./pages/sales/SalesDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
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
              <Route path="/sales">
                <Route path="customers" element={<Customers />} />
                <Route path="customers/edit/:id" element={<CustomerEdit />} />
                <Route path="customers/add" element={<AddCustomer />} />
                <Route path="salesorders" element={<SalesOrders />} />
                <Route path="salesorders/:id" element={<SalesDetail />} />
                <Route path="salesorders/add" element={<AddSalesOrder />} />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
