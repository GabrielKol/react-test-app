import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
//import withWidth from '@material-ui/core/withWidth';
//import Typography from '@material-ui/core/Typography';



class Home extends Component {
  state = {
    originalPhoto: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXp7vG6vsG3u77s8fTCxsnn7O/f5OfP09bFyczM0dO8wMPk6ezY3eDh5unJzdDR1tlr0sxZAAACVUlEQVR4nO3b23KDIBRA0QgmsaLx//+2KmPi/YJMPafZ6619sOzARJjq7QYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuJyN4+qMZcUri+BV3WQ22iIxSRTGFBITbRGpr218Ckx0EQPrxMfVPRP25QvNaT4xFTeJ1g/sJ4K8/aTuVxdNNJ99/Q0RQWlELtN7xGH9+8KYH1ZEX1hY770C9186Cm2R1TeONGj/paHQury7OwbsvzQUlp/9jakOJ2ooPLf/kl9on4Mtan50EhUUDvfgh8cqv/AxKlw+Cc3vPeUXjg+Kr4VCm+Vbl5LkeKHNTDKbKL9w3yr1B8q5RPmFu75puhPzTKKCwh13i2aJJguJ8gt33PG7GZxN1FC4tWvrB04TNRRu7Lw/S3Q2UUPh+ulpOIPTRB2FKyfgaeAoUUvhkvESnSYqL5ybwVGi7sKlwH6i6sL5JTpKVFZYlr0flmewTbyvX+piC8NyiXHvH9YD37OoqtA1v+wS15ZofxY1FTo/cJ+4NYNJd9BSVOi6kTeJOwLVFbrPyJ3dXqL6Cl1/7G7HDGordMOx7+hTVui2arQXBgVqKgwLVFQYGKinMDRQTWFwoJrC8AfcKLwUhRRSeL3vKkyDVaNLSdIf1snXEBQUyrlUTBQeIbPQD6uK8Zx3+yyHKbf/5N+y/gn78K/Rj/ZmY64Omhg9gHFaJu59i+EDGKf1/tshRxlxEoW+2uXS868EeflDYmDNltUzgkpqXyPGzULyK6QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8DV+AUrRI7QWHsWNAAAAAElFTkSuQmCC",
    protectedPhoto: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXp7vG6vsG3u77s8fTCxsnn7O/f5OfP09bFyczM0dO8wMPk6ezY3eDh5unJzdDR1tlr0sxZAAACVUlEQVR4nO3b23KDIBRA0QgmsaLx//+2KmPi/YJMPafZ6619sOzARJjq7QYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuJyN4+qMZcUri+BV3WQ22iIxSRTGFBITbRGpr218Ckx0EQPrxMfVPRP25QvNaT4xFTeJ1g/sJ4K8/aTuVxdNNJ99/Q0RQWlELtN7xGH9+8KYH1ZEX1hY770C9186Cm2R1TeONGj/paHQury7OwbsvzQUlp/9jakOJ2ooPLf/kl9on4Mtan50EhUUDvfgh8cqv/AxKlw+Cc3vPeUXjg+Kr4VCm+Vbl5LkeKHNTDKbKL9w3yr1B8q5RPmFu75puhPzTKKCwh13i2aJJguJ8gt33PG7GZxN1FC4tWvrB04TNRRu7Lw/S3Q2UUPh+ulpOIPTRB2FKyfgaeAoUUvhkvESnSYqL5ybwVGi7sKlwH6i6sL5JTpKVFZYlr0flmewTbyvX+piC8NyiXHvH9YD37OoqtA1v+wS15ZofxY1FTo/cJ+4NYNJd9BSVOi6kTeJOwLVFbrPyJ3dXqL6Cl1/7G7HDGordMOx7+hTVui2arQXBgVqKgwLVFQYGKinMDRQTWFwoJrC8AfcKLwUhRRSeL3vKkyDVaNLSdIf1snXEBQUyrlUTBQeIbPQD6uK8Zx3+yyHKbf/5N+y/gn78K/Rj/ZmY64Omhg9gHFaJu59i+EDGKf1/tshRxlxEoW+2uXS868EeflDYmDNltUzgkpqXyPGzULyK6QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8DV+AUrRI7QWHsWNAAAAAElFTkSuQmCC",

  }
  handleOriginalChange = (e) => {
    console.log("original changed");
    this.setState({
      originalPhoto: URL.createObjectURL(e.target.files[0])
    })
  }
  handleProtectedChange = (e) => {
    console.log("protected changed");
    this.setState({
      protectedPhoto: URL.createObjectURL(e.target.files[0])
    })
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="Home">
        <Grid container spacing={24}>
          <Hidden xsDown><Grid item sm={1} lg={2} xl={3}></Grid></Hidden>

          <Grid item xs={12} sm={5} lg={4} xl={3}>
            <Paper className={classes.paper}>
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <img src={this.state.originalPhoto} alt="original" ></img>
                </Grid>
                <Grid item xs={12}>
                  <input accept="image/*" className={classes.input}  id="contained-button-file-original" multiple type="file" onChange={(e) => {this.handleOriginalChange(e)}}/>
                  <label htmlFor="contained-button-file-original" style={{flex:1}}>
                    <Button fullWidth variant="contained" color="primary" className={classes.button}>
                      Upload Original Photo
                    </Button>
                  </label>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={5} lg={4} xl={3}>
            <Paper className={classes.paper}>
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <img src={this.state.protectedPhoto} alt="protected"></img>
                </Grid>
                <Grid item xs={12}>
                  <input accept="image/*" className={classes.input}  id="contained-button-file-protected" multiple type="file" onChange={(e) => {this.handleProtectedChange(e)}}/>
                  <label htmlFor="contained-button-file-protected" style={{flex:1}}>
                    <Button fullWidth variant="contained" color="primary" className={classes.button}>
                      Upload Protected Photo
                    </Button>
                  </label>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Hidden xsDown><Grid item sm={1} lg={2} xl={3}></Grid></Hidden>
        </Grid>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Home;
