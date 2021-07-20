import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    border: '2px black solid',
    width: '364px',
    marginBottom: '1rem',
    padding: '1rem'
  },
  picture: {
    marginRight: '1.5rem'
  }
}))

function Picture() {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.container}
    >
      <h4>Name will go here</h4>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        <Grid className={classes.picture}>
          <img src="https://via.placeholder.com/171x180" alt="Hero" />
        </Grid>
        <Grid>
          <p>Age goes here</p>
          <p>Location goes here</p>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Picture
