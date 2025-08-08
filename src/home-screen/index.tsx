import HomeScreenImage from './components/home-screen-image'
import classes from './styles.module.scss'

function HomeScreen() {
  return (
    <main className={classes.canvasOwner}>
      <div className={classes.canvas}>
        <HomeScreenImage path="/assets/background.jpg" alt="Background" className={classes.background} />
        <HomeScreenImage path="/assets/table.png" alt="Table" className={classes.layer} />
        <HomeScreenImage path="/assets/phone.png" alt="Phone" className={classes.layer} />
        <HomeScreenImage path="/assets/laptop.png" alt="Laptop" className={classes.layer} />
        <HomeScreenImage path="/assets/glasses.png" alt="Glasses" className={classes.layer} />
      </div>
    </main>
  )
}

export default HomeScreen
