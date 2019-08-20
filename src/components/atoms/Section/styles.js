import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  section: {
    backgroundColor: props => ((props.light)
      ? theme.backgroundSecondary
      : theme.backgroundPrimary),
    paddingTop: props => ((props.first)
      ? theme.spacing.unit * 7
      : theme.spacing.unit * 3),
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    marginTop: props => ((props.first)
      ? theme.spacing.unit * -6
      : 0),
  },
}));

export default useStyles;
