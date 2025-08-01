import classes from './styles.module.scss'

function HomeScreen() {
  return (
    <main className={classes.canvasOwner}>
      <div className={classes.canvas}>
        <img
          src="/images/background.jpg"
          width={3615}
          height={2259}
          className={classes.canvasBackground}
          alt="background"
        />
      </div>
    </main>
  )
}

export default HomeScreen
