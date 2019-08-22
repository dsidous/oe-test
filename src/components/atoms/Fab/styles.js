import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  fabPrimary: {
    backgroundColor: theme.colors.dark.color,
    border: 'none',
    borderRadius: theme.spacing.unit,
    color: theme.colors.light.color,
    fontSize: '1.5rem',
    fontWeight: 'bold',
    padding: {
      top: theme.spacing.unit * 0.75,
      bottom: theme.spacing.unit * 0.75,
      left: theme.spacing.unit * 1.75,
      right: theme.spacing.unit * 1.75,
    },
  },
}));

export default useStyles;
