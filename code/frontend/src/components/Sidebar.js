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
  ];
  return (
    <div>
      <ul className="list-group list-group-flush">
        {links.map((link, idx) => {
          return (
            <div key={idx}>
              <h3 className="px-3 mt-2 text-center">{link.submodule}</h3>
              {link.links.map((link, idx) => (
                <Link key={idx} to={link.to} className="sidebar-links">
                  <li className="p-2">{link.title}</li>
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
