import styles from "../styles/Navbar.module.css";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  const menuItems = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "Pricing",
      href: "/pricing",
    },
  ];

  return (
    <nav className={styles.menu}>
      {menuItems.map((menuItem) => (
        <ActiveLink
          key={menuItem.text}
          text={menuItem.text}
          href={menuItem.href}
        />
      ))}
    </nav>
  );
};

export default Navbar;
