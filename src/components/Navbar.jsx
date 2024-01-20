import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span>Redux Tutorial</span>
      <div>
        <Link
          className="navLink"
          style={{ fontWeight: "bold", marginRight: "5px" }}
          to={"/"}
        >
          Home
        </Link>
        <Link
          className="navLink"
          style={{ marginRight: "5px", fontWeight: "bolder" }}
          to={"/cart"}
        >
          Cart
        </Link>
        <span style={{ fontWeight: "bolder" }}>items:{items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
