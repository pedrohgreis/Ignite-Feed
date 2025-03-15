import styles from './Avatar.module.css';

const Avatar = ({hasBorder = true, src}) => {
  // criar um hasBorde em que vem como true de forma padronizada
  // const hasBorder = props.hasBorder != false;

  
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={src} 
      alt="Avatar"
    />
  )
}

export default Avatar;