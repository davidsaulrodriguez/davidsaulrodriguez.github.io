import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(0, 3),
    position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    marginTop: 'auto',
    color: 'white',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.primary.main
        : theme.palette.primary.dark,
  },
}));

export default useStyles;
