import Image from 'next/image'
import backgroundImageData from './images/background.jpg'
import classes from './styles.module.scss'

function HomeScreen() {
  return (
    <main className={classes.canvasOwner}>
      <div className={classes.canvas}>
        <Image
          src={backgroundImageData.src}
          width={backgroundImageData.width}
          height={backgroundImageData.height}
          className={classes.canvasBackground}
          alt="background"
        />
      </div>
    </main>
  )
}

export default HomeScreen
