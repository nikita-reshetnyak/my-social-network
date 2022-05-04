import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar'
import { Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from "../src/redux/app-reducer"
import { compose } from 'redux';
import { Redirect, withRouter } from 'react-router';
import Preloader from './commons/Preloader/Preloader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import NoMatchPage from './components/NoMatchPage/NoMatchPage';


const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }


  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }
    return (

      <div className="app-wrapper">

        <Box sx={{ width: '100%' }}>

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>
              <HeaderContainer />
            </Grid>
            <Container maxWidth="lg">
              <Grid container
                direction="row"
              >
                <Grid item xs={4}>
                  <Navbar />
                </Grid>
                <Grid item xs={8}>
                  <div className="app-wrapper-content">
                    <Route path='/' render={() => <Redirect to='/profile' />} />
                    <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
                    <Route path='/users' component={UsersContainer} />
                    <Route path='/login' component={Login} />
                    <Route path='/news' component={NoMatchPage} />
                    <Route path='/music' component={NoMatchPage} />
                  </div>
                </Grid>
              </Grid>

            </Container>
          </Grid>


        </Box>

      </div >

    );

  }

}
let mapStateToProps = (state) => ({ initialized: state.app.initialized });

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)
  (App);

const MainProviderComponent = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}



export default MainProviderComponent;