import styles from './Post.module.css';
import Comment from './Comment';

const Post = () => {
  return (
    
      <article className={styles.post}>
        <header className={styles.postHeader}>
          <div className={styles.author}>
            <img className={styles.avatar} src="https://github.com/pedrohgreis.png"  />
            <div className={styles.authorInfo}>
              <strong>Pedro Reis</strong>
              <span>Web Developer</span>
            </div>
          </div>

          <time title='13 de Março às 21:32h' dateTime="2025-03-13 21:32:40">Publicado há 1h</time>
        </header>

        <div className={styles.content}>
          <p>Olá Pessoal</p>
          <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz para a Disney</p>
          <p><a href="#">pedro.developer/webCode</a></p>
          <p>
            <a href="#">#novoprojeto </a> 
            <a href="#"> #disney</a>
          </p>
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea placeholder="Escreva seu comentário"></textarea>

          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>
    
  )
}

export default Post
