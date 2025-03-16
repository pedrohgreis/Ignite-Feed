//Css
import './App.css';
import styles from './App.module.css';

// Components
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Post from './Components/Post';

 // Post para ser exibido precisa de indformações como autor e conteúdo
  // author: {avatar_url: "", name: "", role: ""}
  // publishdAt: Date  
  // content: string

const post = [
    {
      id: 1,
      author: {
        avatar_url: "https://github.com/pedrohgreis.png",
        name: "Pedro Henrique",
        role: "Web Developer",
      },

      content: [
        {type: "paragraph", content: 'Olá Pessoal'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz para a Disney'},
        {type: 'link', content: 'pedro.developer/webCode'},
        
        {type: 'link', content:'#novoprojeto  '},
        {type: 'link', content:'#disney'} 
      ],

      publishedAt: new Date('2025-03-15 13:00:00'),
  },



  {
    id: 2,
    author: {
      avatar_url: "https://github.com/IuryAlmeidaDev.png",
      name: "Iury Almeida",
      role: "Java Developer",
    },

    content: [
      {type: "paragraph", content: 'Olá Pessoal'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz para a Disney'},
      {type: 'link', content: 'iury.developer/webCode'},
      
      {type: 'link', content:'#novoprojeto '},
      {type: 'link', content:'#disney'} 
    ],

    publishedAt: new Date('2025-03-18 14:32:00'),
},
]


function App() {


  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {/* iterando post */}
          {post.map((post) => (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt} 
            />
          ))}
        </main>
      </div>
      
    </>
  )
}

export default App
