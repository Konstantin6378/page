import { Context } from "./Context";
import { useContext } from "react";
import styles from "./style.module.scss";
const Footer = () => {
  const { scrollRef } = useContext(Context);
  return (
    <footer className={styles.footer}>
      <div>
        <a ref={scrollRef}>corp@viclouds.ru</a>
      </div>
    </footer>
  );
};

export default Footer;
