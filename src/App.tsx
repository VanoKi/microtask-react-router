import styles from "./components/Site.module.css";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {PageOne} from "./components/pages/PageOne.tsx";
import {PageTwo} from "./components/pages/PageTwo.tsx";
import {PageThree} from "./components/pages/PageThree.tsx";
import {Error404} from "./components/pages/Error404.tsx";

export const App = ()=> {
  return (
    <div>
      <div className={styles.header}><h1>HEADER</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <div> <NavLink to={'/page_one'}> Adidas </NavLink></div>
          <div> <NavLink to={'/page_two'}> Puma </NavLink></div>
          <div> <NavLink to={'/page_three'}> Abibas </NavLink></div>
        </div>
        <div className={styles.content}>
          {/*Здесь будут кроссовки*/}
          <Routes>
            <Route  path={'/'} element={<Navigate to={'/page_one'}/> }/>
            <Route path={'/page_one'} element={<PageOne/>}/>
            <Route path={'/page_two'} element={<PageTwo/>}/>
            <Route path={'/page_three'} element={<PageThree/>}/>

            <Route path={'/error404'} element={<Error404/>}/>
            <Route path={'*'} element={<Navigate to={'/error404'}/>}/>
          </Routes>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}
