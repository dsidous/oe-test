import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  table: {
    margin: 0,
    padding: 0,

    '& $row:last-child': {
      borderBottom: 'none',
    },
  },
  row: {
    borderBottom: '1px solid #92abd036',
    display: 'flex',
    fontSize: '.9rem',
    marginTop: 0,
    padding: `${theme.spacing.unit}px 0px`,

  },
  cat: {
    width: '60%',
  },
}));

export default useStyles;
