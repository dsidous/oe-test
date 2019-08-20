import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  image: {
    padding: {
      left: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2,
    },
    '& img': {
      width: '100%',
    },
  },
}));

export default useStyles;
