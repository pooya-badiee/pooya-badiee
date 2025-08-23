'use client'
import clsx from 'clsx'
import HomeScreenImage from './components/home-screen-image'
import classes from './styles.module.scss'
import useAreImagesLoaded from './use-are-images-loaded'

function HomeScreen() {
  const { areImagesLoaded, rootElementRef } = useAreImagesLoaded()
  return (
    <main ref={rootElementRef} className={clsx(classes.canvasOwner, { [classes.loaded]: areImagesLoaded })}>
      <div className={classes.canvas}>
        <div className={classes.canvasEdges} />
        <div className={classes.backgroundColor} />
        <HomeScreenImage path="/assets/background.jpg" alt="Background" className={classes.background} />
        <HomeScreenImage path="/assets/table.png" alt="Table" className={classes.layer} />
        <HomeScreenImage path="/assets/phone.png" alt="Phone" className={clsx(classes.layer, classes.phoneLayer)} />
        <HomeScreenImage path="/assets/laptop.png" alt="Laptop" className={clsx(classes.layer, classes.laptopLayer)} />
        <HomeScreenImage path="/assets/glasses.png" alt="Glasses" className={clsx(classes.layer, classes.glassesLayer)} />
        <HomeScreenImage path="/assets/arrows.png" alt="Arrows" className={classes.layer} />
        {/* Selections */}
        <button type="button" aria-label="Select Laptop" className={classes.selectLaptop} />
        <button type="button" aria-label="Select Phone" className={classes.selectPhone} />
        <button type="button" aria-label="Select Me" className={classes.selectMe1} />
        <button type="button" aria-hidden="true" tabIndex={-1} className={classes.selectMe2} />
        {/* arrow texts */}
        <span className={clsx(classes.arrowText, classes.aboutMe)} aria-hidden="true">
          About Me
        </span>
        <span className={clsx(classes.arrowText, classes.myExperience)} aria-hidden="true">
          My Experience
        </span>
        <span className={clsx(classes.arrowText, classes.mySkills)} aria-hidden="true">
          My Skills
        </span>
      </div>
    </main>
  )
}

export default HomeScreen
