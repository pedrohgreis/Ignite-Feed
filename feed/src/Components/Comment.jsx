import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';

// Components
import Avatar from './Avatar';
import { useState } from 'react';

const Comment = ({content, onDeleteComment}) => {

    // * o like vai mudar de acordo com alguma ação do user qnd clicar no botão, crio estado
    const [likeCount,setLikeCount] = useState(0);

    const handleDeleteComment = () => {
        // * Tem que deletar do estado de comments que está no Post
        
        onDeleteComment(content);
    }

    const handleLikeComment = () => {

        setLikeCount((state => {
            return state + 1;
        }))
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
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20} weight="bold" />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    
  )
}

export default Comment
