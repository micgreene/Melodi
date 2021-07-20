import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: '1rem'
  }
}))


function Hero() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <img src="https://via.placeholder.com/797x400" alt="Hero"/>
    </div>
  )
}

export default Hero
