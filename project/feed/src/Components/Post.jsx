import styles from './Post.module.css';
import {useState} from 'react';

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


  // Utilizando o useState para criar um novo comentário
  const [comments, setComments] = useState([
    'Post muito bacana!',
  ]); 

  // * Aplicando programação declarativa, ou seja, criando uma função para criar um novo comentário
  const [newCommentText, setNewCommentText] = useState('');
  

  const handleCreateNewComment = (event) => {
    event.preventDefault();



    // * event.target[0].value é o valor do campo de texto, ele pega o valor do campo de texto e armazena em uma variável
    // const newCommentText = event.target.comment.value;
    // event.target.comment.value = ''; // Limpa o campo de texto

    /* 
      ! o comments.length + 1 é para criar um novo comentário com um id diferente, ou seja, ele pega a posição do último comentário
      ! e adiciona mais um, para que o comentário seja único e não tenha o mesmo id

      * o setComments é para atualizar o estado do comentário, ou seja, adicionar um novo comentário
    */
    setComments([...comments, newCommentText]);
    
    // * volta para o valor original
    setNewCommentText('');
  }

  const handleNewCommentChange = (event) => {
    
    // * salvando o valor do campo de texto em uma variável, ou seja, no newCommentText
    setNewCommentText(event.target.value);

  }

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

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea
            name='comment' 
            placeholder="Escreva seu comentário" 
            value={newCommentText} // * limpa o textarea
            onChange={handleNewCommentChange} 
           />

           

          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map(comment => (
            <Comment key={comment} content={comment} />
          ))}
        </div>
      </article>
    
  )
}

export default Post
