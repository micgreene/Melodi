import React from 'react'
import { Grid, makeStyles, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    border: '2px black solid',
    width: '364px',
    height: '800px',
    marginBottom: '1rem',
    overflowX: 'auto',
    padding: '1rem'
  },
  picture: {
    marginRight: '1.5rem'
  }
}))

function Aboutme() {
  const classes = useStyles()

  return (
    <Grid
      container
      direction="row"
      className={classes.container}
    >
      <h3>Posts</h3>

      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="flex-start"
      >
        <h4>TITLE OF POST 1</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laudantium iure excepturi quisquam repellendus non exercitationem quasi, adipisci corrupti possimus et vero reprehenderit voluptates explicabo officia eveniet pariatur sed beatae.</p>
      </Grid>
      <Divider />
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="flex-start"
      >
        <h4>TITLE OF POST 2</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laudantium iure excepturi quisquam repellendus non exercitationem quasi, adipisci corrupti possimus et vero reprehenderit voluptates explicabo officia eveniet pariatur sed beatae.</p>
      </Grid>
      <Divider />
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="flex-start"
      >
        <h4>TITLE OF POST 3</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laudantium iure excepturi quisquam repellendus non exercitationem quasi, adipisci corrupti possimus et vero reprehenderit voluptates explicabo officia eveniet pariatur sed beatae.</p>
      </Grid>
      <Divider />
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="flex-start"
      >
        <h4>TITLE OF POST 4</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laudantium iure excepturi quisquam repellendus non exercitationem quasi, adipisci corrupti possimus et vero reprehenderit voluptates explicabo officia eveniet pariatur sed beatae.</p>
      </Grid>
      <Divider />
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="flex-start"
      >
        <h4>TITLE OF POST 5</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laudantium iure excepturi quisquam repellendus non exercitationem quasi, adipisci corrupti possimus et vero reprehenderit voluptates explicabo officia eveniet pariatur sed beatae.</p>
      </Grid>
      <Divider />
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="flex-start"
      >
        <h4>TITLE OF POST 6</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laudantium iure excepturi quisquam repellendus non exercitationem quasi, adipisci corrupti possimus et vero reprehenderit voluptates explicabo officia eveniet pariatur sed beatae.</p>
      </Grid>
      <Divider />
    </Grid>
  )
}

export default Aboutme
