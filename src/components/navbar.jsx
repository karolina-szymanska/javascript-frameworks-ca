import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useCart } from "./useCart";
import { IoHome } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoCart } from "react-icons/io5";

function Nav() {
  const { cart } = useCart();
  useEffect(() => {
    const count = document.querySelector("#cartCount");
    count.innerHTML = cart.length;
  });

  return (
    <nav>
      <div>
        <Link className="navLink" to="/">
          <IoHome />
          <span>Home</span>
        </Link>
      </div>
      <ul>
        <li>
          <Link className="navLink" to="/contact">
            <IoMail />
            <span>Contact</span>
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/cart">
            <div id="cartCount">0</div>
            <IoCart />
            <span>Cart</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
