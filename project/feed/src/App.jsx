//Css
import './App.css';
import styles from './App.module.css';

// Components
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function App() {
  

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main></main>
      </div>
      
    </>
  )
}

export default App
