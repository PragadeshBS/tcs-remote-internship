import { Link } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { title: "Items", to: "/inventory/items" },
    { title: "Item Groups", to: "/inventory/item-groups" },
    { title: "Adjustments", to: "/inventory/adjustments" },
  ];
  return (
    <div className="mt-2">
      <ul className="list-group list-group-flush">
        {links.map((link, idx) => (
          <Link key={idx} to={link.to} className="sidebar-links">
            <li className="p-2 my-2">{link.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
