//Css
import './App.css';
import styles from './App.module.css';

// Components
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Post from './Components/Post';

function App() {
  

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Pedro Henrique"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies ultricies. Nullam nec purus nec nunc ultricies ultricies."
          />

          <Post
            author="Pedro Henrique"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies ultricies. Nullam nec purus nec nunc ultricies ultricies."
          />
        </main>
      </div>
      
    </>
  )
}

export default App
