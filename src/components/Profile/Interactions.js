import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    border: '2px black solid',
    width: '364px',
    marginBottom: '1rem',
    padding: '1rem',
    padding: '1rem'
  }
}))

function Interactions() {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.container}
    >
      <h4>Interactions</h4>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <a href="/">Send Message</a>
        </Grid>
        <Grid item>
          <a href="/">Follow</a>
        </Grid>
        <Grid item>
          <a href="/">Other1</a>
        </Grid>
        <Grid item>
          <a href="/">Other2</a>
        </Grid>
        <Grid item>
          <a href="/">Other3</a>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Interactions
