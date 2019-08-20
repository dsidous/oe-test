import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles(theme => ({
  footer: {
    backgroundColor: theme.backgroundSecondary,
    color: '#92abd0',
    fontSize: '.7rem',
    lineHeight: 1.6,
    padding: {
      top: theme.spacing.unit * 2,
      bottom: theme.spacing.unit * 2,
      left: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2,
    },
  },
}));

export default useStyle;
