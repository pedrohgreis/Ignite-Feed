import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';

const Comment = () => {
  return (
    
        <div className={styles.comment}> 
            <img className={styles.avatar} src="https://github.com/pedrohgreis.png"  />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Pedro Reis</strong>
                            <time title='13 de Março às 21:32h' dateTime="2025-03-13 21:32:40">Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} weight="bold" />
                        </button>
                    </header>

                    <p>Muito bom Pedro, parabéns!</p>
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
