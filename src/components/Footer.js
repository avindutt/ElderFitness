import React from 'react';
import styles from '../styles/footer.module.css';

export default function Footer() {
  return (
    <div>
      <footer>
        <span className={styles.copy}>Copyright ElderFitness&copy;</span>
        <div className={styles.links}>
            <a href="#">About</a>
            <a href="#">Disclaimer</a>
            <a href="#">Contact Us</a>
        </div>
      </footer>
    </div>
  )
}
