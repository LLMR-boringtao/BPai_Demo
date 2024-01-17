import { Outlet, NavLink, Link } from "react-router-dom";

import styles from "./Layout.module.css";

import { useLogin } from "../../authConfig";
import { LoginButton } from "../../components/LoginButton";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}>BPAI：财税专家</h3>
                    </Link>
                    <nav>
                        <ul className={styles.headerNavList}>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    税率查询
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <h4 className={styles.headerRightText}>基于大模型的一站式财税服务</h4>
                    {useLogin && <LoginButton />}
                </div>
            </header>
            <Outlet />
        </div>
    );
};

export default Layout;
