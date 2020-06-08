<<<<<<< HEAD
function Layout({ children }) {
    return <div>{children}</div>
  }
  
  export default Layout
=======
import styles from './layout.module.css'

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>
}
>>>>>>> master
