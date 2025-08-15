import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <a href="" className={styles.ItemHeader}>Logar</a>
                <a href="" className={styles.ItemHeader}>Perfil</a>
                <a href="" className={styles.ItemHeader}>Amigos</a>
                <a href="" className={styles.ItemHeader}>Publicar</a>
                <a href="" className={styles.ItemHeader}>Comunidade</a>
            </nav>
            
        </header>
     
    );
}

export default Header;