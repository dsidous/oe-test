import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(theme => ({
  header: {
    backgroundColor: theme.backgroundPrimary,
    display: 'flex',
    justifyContent: 'space-between',
    padding: {
      left: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2,
    },
  },
  logo: {
    maxWidth: '50%',
    '& img': {
      width: '100%',
    },
  },
}));
