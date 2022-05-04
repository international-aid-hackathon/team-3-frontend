import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name && user.lastName : 'friend'}</h1>
    </main>
  )
}

export default Landing
