import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  title: {
    color: '#fff',
    fontSize: '1.4rem',
    marginTop: 0,
    marginBottom: theme.spacing.unit * 2,
    padding: 0,
  },
}));

export default useStyles;
