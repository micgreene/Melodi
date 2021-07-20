import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    border: '2px black solid',
    width: '364px',
    height: '500px',
    marginBottom: '1rem',
    padding: '1rem'
  },
  picture: {
    marginRight: '1.5rem'
  }
}))

function Playlist() {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.container}
    >
      <h4>Playlist</h4>
      <iframe src="https://open.spotify.com/embed/playlist/6BnKZ1GGADXMxtjZLjzAMa?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="playlist"></iframe>
    </Grid>
  )
}

export default Playlist
