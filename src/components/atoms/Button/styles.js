import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  buttonPrimary: {
    display: 'block',
    width: '100%',
    padding: '1.2rem 0',
    margin: '3.2rem 0 1.6rem',
    fontSize: '1.6rem',
    fontWeight: 'bold',
    lineHeight: '1.8rem',
    color: '#fff',
    textAlign: 'center',
    textDecoration: 'none',
    backgroundColor: '#6d087c',
    border: 'none',
    borderRadius: '.4rem',
    boxShadow: 'inset -0.1rem -0.1rem 0 0 #000, inset 0.1rem 0.1rem 0.1rem 0 #f36aa8, 0.2rem 0.2rem 0.1rem rgba(0,0,59,.6)',
    backgroundImage: 'linear-gradient(to bottom,#ff0074 0,#6d087c 250%)',
    backgroundRepeat: 'repeat-x',
  },
  buttonSecondary: {

  },
});

export default useStyles;
