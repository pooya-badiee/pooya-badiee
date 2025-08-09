'use client'
import clsx from 'clsx'
import { PointToLaptopArrow, PointToPhoneArrow } from './components/arrows'
import HomeScreenImage from './components/home-screen-image'
import classes from './styles.module.scss'
import useAreImagesLoaded from './use-are-images-loaded'

function HomeScreen() {
  const { areImagesLoaded, rootElementRef } = useAreImagesLoaded()
  return (
    <main ref={rootElementRef} className={clsx(classes.canvasOwner, { [classes.loaded]: areImagesLoaded })}>
      <div className={classes.canvas}>
        <HomeScreenImage path="/assets/background.jpg" alt="Background" className={classes.background} />
        <HomeScreenImage path="/assets/table.png" alt="Table" className={classes.layer} />
        <HomeScreenImage path="/assets/phone.png" alt="Phone" className={classes.layer} />
        <HomeScreenImage path="/assets/laptop.png" alt="Laptop" className={classes.layer} />
        <HomeScreenImage path="/assets/glasses.png" alt="Glasses" className={classes.layer} />
        {/* Selections */}
        <button type="button" aria-label="Select Laptop" className={classes.selectLaptop} />
        <button type="button" aria-label="Select Phone" className={classes.selectPhone} />
        {/* arrows */}
        <PointToLaptopArrow className={classes.arrow} />
        <PointToPhoneArrow className={classes.arrow} />
      </div>
    </main>
  )
}

export default HomeScreen
