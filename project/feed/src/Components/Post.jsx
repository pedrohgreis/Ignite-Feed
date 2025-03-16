import styles from './Post.module.css';

// Components
import Comment from './Comment';
import Avatar from './Avatar';

// Data
import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';


// Para não utilizar o props.author.avatar_url, props.author.name, props.author.role, podemos utilizar o destructuring

const Post = ({author, publishedAt, content}) => {
  // utilizando o data fns para formatar a data
  const date = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {locale: ptBR});

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true});

  return (
    
      <article className={styles.post}>
        <header className={styles.postHeader}>
          <div className={styles.author}>
            <Avatar src= {author.avatar_url} />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>

          <time title={date} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
        </header>

        <div className={styles.content}>
          {content.map(line => {
            if (line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>;
            } else if (line.type === 'link') {
              return <p key={line.content}><a href="#">{line.content}</a></p>;
            }
            return null; // Se não for nenhum dos dois, retorna null
          })}
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
