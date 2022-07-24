import { Link } from "react-router-dom";

const Sidebar = () => {
  const links = [
    {
      submodule: "Inventory",
      links: [
        { title: "Items", to: "/inventory/items" },
        { title: "Item Groups", to: "/inventory/item-groups" },
        { title: "Adjustments", to: "/inventory/adjustments" },
      ],
    },
    {
      submodule: "Sales",
      links: [
        { title: "Customers", to: "/sales/customers" },
        { title: "Sales Orders", to: "/sales/salesorders" },
        { title: "Packages", to: "/sales/packages" },
        { title: "Delivery Challans", to: "/sales/delivery-challans" },
        { title: "Invoices", to: "/sales/invoices" },
        { title: "Payments", to: "/sales/payments" },
        { title: "Sales Returns", to: "/sales/sales-returns" },
        { title: "Credit Notes", to: "/sales/credit-notes" },
      ],
    },
    {
      submodule: "Purchases",
      links: [
        { title: "Vendors", to: "/purchases/vendors" },
        { title: "Purchase Orders", to: "/purchases/purchase-orders" },
        { title: "Bills & Payments", to: "/purchases/bills" },
        { title: "Vendor Credits", to: "/purchases/vendor-credits" },
      ],
    },
  ];
  return (
    <div>
      <ul
        className="list-group list-group-flush"
        style={{ listStyleType: "none" }}
      >
        {links.map((link, idx) => {
          return (
            <div
              key={idx}
              className="my-1 border rounded py-3 px-2"
              style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
            >
              <h3 className="px-3 text-center">{link.submodule}</h3>
              {link.links.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.to}
                  className="sidebar-links"
                  style={{ color: "#d1d1d1" }}
                >
                  <li className="p-1">{link.title}</li>
                </Link>
              ))}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default Sidebar;
