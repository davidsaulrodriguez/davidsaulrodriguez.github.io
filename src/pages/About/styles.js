import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(1, 0, 3),
    display: 'flex',
    flexDirection: 'column',
  },
  theContent: {
    textAlign: 'center',
  },
  contentStart: {
    marginTop: '2rem',
  },
  abtImg: {
    alignSelf: 'center',
    height: '150px',
    width: '150px',
  },
}));

export default useStyles;
