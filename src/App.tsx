import styles from "./components/Site.module.css";
import {Link, Navigate, NavLink, Route, Routes} from "react-router-dom";
import {PageOne} from "./components/pages/PageOne.tsx";
import {PageTwo} from "./components/pages/PageTwo.tsx";
import {PageThree} from "./components/pages/PageThree.tsx";
import {Error404} from "./components/pages/Error404.tsx";

const PATH = {
  PAGE1: '/page1',
  PAGE2: '/page2',
  PAGE3: '/page3',
  ERROR: '/error404'
} as const

export const App = ()=> {
  const getClassName = ({isActive} : {isActive:boolean}) => {
    return isActive ? styles.activeNavLink : styles.navLink
  }

  return (
    <div>
      <div className={styles.header}><h1>HEADER</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <div> <NavLink to={PATH.PAGE1} className={getClassName}> Adidas </NavLink></div>
          <div> <NavLink to={PATH.PAGE2} className={getClassName}> Puma </NavLink></div>
          <div> <NavLink to={PATH.PAGE3} className={getClassName}> Abibas </NavLink></div>
        </div>
        <div className={styles.content}>
          {/*Здесь будут кроссовки*/}
          <Routes>
            <Route  path={'/'} element={<Navigate to={PATH.PAGE1}/> }/>
            <Route path={PATH.PAGE1} element={<PageOne/>}/>
            <Route path={PATH.PAGE2} element={<PageTwo/>}/>
            <Route path={PATH.PAGE3} element={<PageThree/>}/>

            <Route path={PATH.ERROR} element={<Error404/>}/>
            <Route path={'*'} element={<Navigate to={PATH.ERROR}/>}/>
          </Routes>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}
