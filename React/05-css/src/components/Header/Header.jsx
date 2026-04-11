import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>Header
        <h3>Vishal</h3>
        <button className={styles.btn}> Login </button>
    </div>
  )
}

export default Header