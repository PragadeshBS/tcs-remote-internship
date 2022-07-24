import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AdjustmentForm from "./pages/inventory/AdjustmentForm";
import Adjustments from "./pages/inventory/Adjustments";
import ItemForm from "./pages/inventory/ItemForm";
import ItemGroups from "./pages/inventory/ItemGroups";
import Items from "./pages/inventory/Items";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Customers from "./pages/sales/customers/Customers";
import CustomerEdit from "./pages/sales/customers/CustomerEdit";
import AddCustomer from "./pages/sales/customers/AddCustomer";
import SalesOrders from "./pages/sales/salesOrders/SalesOrders";
import AddSalesOrder from "./pages/sales/salesOrders/AddSalesOrder";
import SalesDetail from "./pages/sales/salesOrders/SalesDetails";
import Packages from "./pages/sales/pkgs/Packages";
import AddPackage from "./pages/sales/pkgs/AddPackage";
import DeliveryChallans from "./pages/sales/challans/DeliveryChallans";
import AddDeliveryChallan from "./pages/sales/challans/AddDeliveryChallan";
import Invoices from "./pages/sales/invoices/Invoices";
import AddInvoice from "./pages/sales/invoices/AddInvoice";
import PackageDetail from "./pages/sales/pkgs/PackageDetail";
import DeliveryChallanDetail from "./pages/sales/challans/DeliveryChallanDetail";
import InvoiceDetail from "./pages/sales/invoices/InvoiceDetail";
import Payments from "./pages/sales/payments/Payments";
import AddPayment from "./pages/sales/payments/AddPayment";
import SalesReturns from "./pages/sales/salesReturns/SalesReturns";
import AddSalesReturn from "./pages/sales/salesReturns/AddSalesReturn";
import SalesReturnDetail from "./pages/sales/salesReturns/SalesReturnDetail";
import CreditNotes from "./pages/sales/creditNotes/CreditNotes";
import AddCreditNotes from "./pages/sales/creditNotes/AddCreditNotes";
import CreditNotesDetail from "./pages/sales/creditNotes/CreditNotesDetail";
import Vendors from "./pages/purchases/vendors/Vendors";
import AddVendor from "./pages/purchases/vendors/AddVendor";
import EditVendor from "./pages/purchases/vendors/EditVendor";
import PurchaseOrders from "./pages/purchases/purchaseOrders/PurchaseOrders";
import AddPurchaseOrder from "./pages/purchases/purchaseOrders/AddPurchaseOrder";
import PurchaseDetail from "./pages/purchases/purchaseOrders/PurchaseOrderDetail";
import Bills from "./pages/purchases/bills/Bills";
import BillDetail from "./pages/purchases/bills/BillDetail";
import AddBill from "./pages/purchases/bills/AddBill";
import VendorCredits from "./pages/purchases/vendorCredits/VendorCredits";
import AddVendorCredit from "./pages/purchases/vendorCredits/AddVendorCredit";
import VendorCreditDetails from "./pages/purchases/vendorCredits/VendorCreditDetails";

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
                <Route path="packages" element={<Packages />} />
                <Route path="packages/:id" element={<PackageDetail />} />
                <Route path="packages/add" element={<AddPackage />} />
                <Route
                  path="delivery-challans"
                  element={<DeliveryChallans />}
                />
                <Route
                  path="delivery-challans/:id"
                  element={<DeliveryChallanDetail />}
                />
                <Route
                  path="delivery-challan/add"
                  element={<AddDeliveryChallan />}
                />
                <Route path="invoices" element={<Invoices />} />
                <Route path="invoices/:id" element={<InvoiceDetail />} />
                <Route path="invoices/add" element={<AddInvoice />} />
                <Route path="payments" element={<Payments />} />
                <Route path="payments/add" element={<AddPayment />} />
                <Route path="sales-returns" element={<SalesReturns />} />
                <Route
                  path="sales-returns/:id"
                  element={<SalesReturnDetail />}
                />
                <Route path="sales-returns/add" element={<AddSalesReturn />} />
                <Route path="credit-notes" element={<CreditNotes />} />
                <Route
                  path="credit-notes/:id"
                  element={<CreditNotesDetail />}
                />
                <Route path="credit-notes/add" element={<AddCreditNotes />} />
              </Route>
              <Route path="purchases">
                <Route path="vendors" element={<Vendors />} />
                <Route path="vendors/add" element={<AddVendor />} />
                <Route path="vendors/edit/:id" element={<EditVendor />} />
                <Route path="purchase-orders" element={<PurchaseOrders />} />
                <Route
                  path="purchase-orders/:id"
                  element={<PurchaseDetail />}
                />
                <Route
                  path="purchase-orders/add"
                  element={<AddPurchaseOrder />}
                />
                <Route path="bills" element={<Bills />} />
                <Route path="bills/:id" element={<BillDetail />} />
                <Route path="bills/add" element={<AddBill />} />
                <Route path="vendor-credits" element={<VendorCredits />} />
                <Route
                  path="vendor-credits/:id"
                  element={<VendorCreditDetails />}
                />
                <Route
                  path="vendor-credits/add"
                  element={<AddVendorCredit />}
                />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
