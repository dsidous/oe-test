import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  title: {
    fontSize: '1.7rem',
    margin: 0,
    padding: 0,
  },
  subtitle: {
    color: theme.colors.dark.color,
    fontSize: '1.1rem',
    fontWeight: 'normal',
    margin: 0,
    paddingTop: theme.spacing.unit,
  },
}));

export default useStyles;
