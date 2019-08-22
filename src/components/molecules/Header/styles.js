import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  header: {
    backgroundColor: theme.backgroundPrimary,
    display: 'flex',
    justifyContent: 'space-between',
    padding: {
      left: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2,
    },
  },
  logoWrapper: {
    maxWidth: '70%',
    padding: `${theme.spacing.unit}px 0`,
  },
}));

export default useStyles;
