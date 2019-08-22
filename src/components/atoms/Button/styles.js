import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  buttonPrimary: {
    display: 'block',
    width: '100%',
    padding: '1.2rem 0',
    fontSize: '1.6rem',
    fontWeight: 'bold',
    lineHeight: '1.8rem',
    color: theme.colors.light.color,
    textAlign: 'center',
    textDecoration: 'none',
    backgroundColor: '#6d087c',
    border: 'none',
    borderRadius: '.4rem',
    backgroundImage: 'linear-gradient(to bottom,#ff0074 0,#6d087c 250%)',
    backgroundRepeat: 'repeat-x',
  },
  buttonSecondary: {

  },
}));

export default useStyles;
