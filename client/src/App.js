import React from 'react'
import Header from './components/Header'
import DetailsPage from './screens/DetailsPage'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './screens/HomePage'
import SignUpPage from './screens/auth/SignUpPage'
import LogInPage from './screens/auth/LogInPage'
import CartPage from './screens/CartPage'
import ShippingPage from './screens/checkout/ShippingPage'
import PaymentPage from './screens/checkout/PaymentPage'
import PlaceOrderPage from './screens/checkout/PlaceOrderPage'
import { useSelector } from 'react-redux'
import OrderPlacedPage from './screens/checkout/OrderPlacedPage'
import OrdersPage from './screens/OrdersPage'
import ProfilePage from './screens/ProfilePage'

function App() {
  const { user, checkout } = useSelector((state) => state)
  const { shipping, payment } = checkout

  React.useEffect(() => {}, [])

  return (
    <Router>
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={HomePage} />

          <Route path='/signup' render={(props) => (user ? <Redirect to='/' /> : <SignUpPage {...props} />)} />
          <Route path='/login' render={(props) => (user ? <Redirect to='/' /> : <LogInPage {...props} />)} />

          <Route path='/cart' component={CartPage} />
          <Route path='/details/:id' component={DetailsPage} />

          {/* checkout */}
          <Route path='/checkout/shipping' component={ShippingPage} />
          <Route path='/checkout/payment' component={PaymentPage} />
          <Route
            path='/checkout/placeorder'
            render={(props) =>
              !shipping || !payment ? <Redirect to='/checkout/shipping' /> : <PlaceOrderPage {...props} />
            }
          />
          <Route path='/checkout/orderplaced/:orderid' component={OrderPlacedPage} />

          {/* Orders */}
          <Route path='/orders' render={() => (user ? <OrdersPage /> : <Redirect to='/' />)} />

          {/* Profile Page */}
          <Route path='/profile' render={(props) => (user ? <ProfilePage {...props} /> : <Redirect to='/login' />)} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
