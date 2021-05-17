import './App.css';
import { AppBar, Container, makeStyles, Toolbar, Typography } from '@material-ui/core';
import ShieldIcon from '@material-ui/icons/Security';
import ProductTable from './components/ProductTable.Material';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position='relative'>
        <Toolbar>
          <ShieldIcon className={classes.icon} />
          <Typography variant='h6' color='inherit' noWrap>
            Products
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth='md'>
        <ProductTable />
      </Container>
    </>
  );
};

export default App;
