import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';

// Components
import Avatar from './Avatar';

const Comment = ({content, onDeleteComment}) => {

    const handleDeleteComment = () => {
        // * Tem que deletar do estado de comments que está no Post
        
        onDeleteComment(content);
    }
  return (
    
        <div className={styles.comment}> 
             <Avatar hasBorder={false} src="https://github.com/pedrohgreis.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Pedro Reis</strong>
                            <time title='13 de Março às 21:32h' dateTime="2025-03-13 21:32:40">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} weight="bold" />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} weight="bold" />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    
  )
}

export default Comment
