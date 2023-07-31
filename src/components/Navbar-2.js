import React from 'react';
import styles from '../styles/navbar-2.module.css'

export default function TopNavbar() {
  return (
    <div>
        <div className={styles.container}>
            <div className={styles.logo}>
            <p>ElderFitness <img src="https://clipartmag.com/images/good-health-clipart-50.jpg"/></p>
            <span>FITNESS FOR ELDERLY</span>
            </div>
        </div>
    </div>
  )
}