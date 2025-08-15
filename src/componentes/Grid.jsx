import styles from './Grid.module.css';

function Grid() {
    return (

        <article className={styles.grid}>
            <div className={styles.GridElement}>
                <div className={styles.FlexIcon}>
                    <img src="icon1.jpeg" alt="" /><h1>Emerson7s6</h1></div>

                <div className={styles.FlexAv}>
                    <img src="BackInBlack.jpg" alt="Música" /><h1>Não tem como negar, "Back in Black"
                        é um clássico! O riff inicial já te arrepia e a voz do Brian Johnson te joga
                        no meio de um show.</h1></div>
            </div>

            <div className={styles.GridElement}>
                <div className={styles.FlexIcon}>
                    <img src="icon2.jpeg" alt="" /><h1>Iazsiud10</h1></div>

                <div className={styles.FlexAv}>
                    <img src="ShesMyCollar.jpeg" alt="Gorrilaz" /><h1>She's My Collar" é uma música do Gorillaz e
                        não do Daft Punk. Ela faz parte do álbum Humanz de 2017</h1></div>
            </div>


            <div className={styles.GridElement}>
                <div className={styles.FlexIcon}>
                    <img src="icon3.jpeg" alt="" /><h1>Olivia06</h1></div>

                <div className={styles.FlexAv}>
                    <img src="MyOrdinaryLife.jpeg" alt="Música de Fnaf" /><h1>uma música que te pega de surpresa!
                        A batida é bem moderna e a letra fala de um jeito honesto sobre a rotina
                    </h1></div>
            </div>



            <div className={styles.GridElement}>
                <div className={styles.FlexIcon}>
                    <img src="icon4.jpeg" alt="" /><h1>Lycs</h1></div>

                <div className={styles.FlexAv}>
                    <img src="Morgana.jpg" alt="Música de Fnaf" /><h1>é uma música que te puxa para um universo bizarro e fascinante.
                        A letra é uma poesia sombria, cheia de referências de terror, ocultismo e cultura pop gótica.
                    </h1></div>
            </div>

















        </article>
    );
}

export default Grid