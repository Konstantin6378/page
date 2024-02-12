import gsap from "gsap";
import { Context } from "./Context";
import { useContext } from "react";
import styles from "./style.module.scss";
const Header = () => {
  const { scrollRef } = useContext(Context);
  const toScroll = (target) => {
    gsap.to(window, { duration: 1, scrollTo: target });
  };
  return (
    <div className={styles.header_block}>
      <div className={styles.header_logo}>
        <h2>VIClouds.ru</h2>
      </div>
      <div className={styles.header_content}>
        <h1>Empowering Businesses with Innovative Tech Solutions</h1>
        <button onClick={() => toScroll(scrollRef.current)}>
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Header;
