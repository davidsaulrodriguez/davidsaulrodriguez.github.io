import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  myMasonryGrid: {
    display: 'flex',
    marginLeft: '-30px',
    width: 'auto',
  },
  myMasonryGridColumn: {
    paddingLeft: '30px',
    backgroundClip: 'padding-box',
  },
  myMasonryGridColumnDiv: {
    background: 'wihte',
    marginBottom: '30px',
  },
}));

export { useTheme };
export default useStyles;
