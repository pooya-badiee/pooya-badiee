import classes from './styles.module.scss'

function HomeScreen() {
  return (
    <main className={classes.canvasOwner}>
      <div className={classes.canvas}>
        <img src="/assets/background.jpg" width={3615} height={2259} className={classes.background} alt="background" />
        <img src="/assets/table.png" width={3615} height={2259} className={classes.table} alt="table" />
      </div>
    </main>
  )
}

export default HomeScreen
