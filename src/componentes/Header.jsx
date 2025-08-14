import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.ItemHeader}>1</div>
            <div className={styles.ItemHeader}>2</div>
            <div className={styles.ItemHeader}>3</div>
        </header>
    );
}

export default Header;