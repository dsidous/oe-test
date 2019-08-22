import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  header: {
    backgroundColor: theme.colors.dark.bgcolor,
    display: 'flex',
    justifyContent: 'space-between',
    padding: {
      top: theme.spacing.unit,
      bottom: theme.spacing.unit,
      left: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2,
    },
  },
  logoWrapper: {
    maxWidth: '200px',

    '& svg': {
      height: '100%',
      width: '100%',
    },
  },
  menu: {
    paddingTop: theme.spacing.unit * 0.5,
  },
}));

export default useStyles;
