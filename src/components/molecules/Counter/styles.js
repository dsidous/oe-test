import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    width: 119,
  },
  value: {
    alignSelf: 'flex-end',
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '40px',
  },
  label: {
    color: theme.colors.dark.color,
    fontSize: '.8rem',
    fontWeight: 'bold',
    gridColumn: '1/span 3',
    justifySelf: 'center',
    textAlign: 'center',
  },
}));

export default useStyles;
