import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  navbarContainer: {
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    '& h4': {
      marginLeft: '0.3em',
      '&:hover': {
        color: 'yellow',
        transition: 'color 0.5s linear',
      },
    },
  },

  navbarToolbar: {
    display: 'inherit',
    justifyContent: 'space-between',
  },

  navbarLogo: {
    display: 'inherit',
    alignItems: 'center',
  },

  navbarSearch: {
    display: 'inherit',
    alignItems: 'center',
    border: '2px solid #77B6F2',
    borderRadius: '10px',
    '@media (max-width: 576px)': {
      border: 'none',
    },
    '& input': {
      color: 'white',
      '@media (max-width: 576px)': {
        display: 'none',
      },
    },
    '& button': {
      color: 'white',
    },
  },

  navbarSunIcon: {
    color: 'yellow',
  },
});

export default useStyles;
