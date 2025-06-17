import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne.tsx";
import {PageTwo} from "./components/pages/PageTwo.tsx";
import {PageThree} from "./components/pages/PageThree.tsx";

export const App = ()=> {
  return (
    <div>
      <div className={styles.header}><h1>HEADER</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>
          Здесь будет навигация
        </div>
        <div className={styles.content}>
          Здесь будут кроссовки
          <PageOne/>
          <PageTwo/>
          <PageThree/>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}
