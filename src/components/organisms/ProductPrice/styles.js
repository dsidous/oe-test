import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.unit * 2,
  },
  price: {
    color: '#fff',
    fontSize: '2.2rem',
    fontWeight: 'bold',
    lineHeight: '2.2rem',
    paddingTop: theme.spacing.unit * 1.5,

    '& span': {
      fontSize: '1.5rem',
      verticalAlign: 'text-top',
    },
  },
}));

export default useStyles;
