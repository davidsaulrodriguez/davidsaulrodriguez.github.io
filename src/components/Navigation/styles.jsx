import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: '1rem',
  },
  title: {
    flexGrow: 1,
    userSelect: 'none',
    cursor: 'pointer',
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
}));

export { useTheme };
export default useStyles;
