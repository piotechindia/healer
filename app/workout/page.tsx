import styles from '../styles/styles.module.css'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'

export default function Workout() {
    return (
      <main className={styles.main}>
        <Header/>
        <Sidebar/>
        <div className={styles.pageContent}>
          <p>Workout Page</p>
          <Footer/>
          </div>
      </main>
    )
  }