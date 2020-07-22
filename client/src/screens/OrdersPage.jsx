import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { truncate, formatNumber, TOKEN } from '../utils'

function OrdersPage({ history }) {
  const { user } = useSelector((state) => state)
  const [allOrders, setAllOrders] = React.useState([])
  const [myOrders, setMyOrders] = React.useState([])

  const getOrders = async (myOrders = false) => {
    const { data } = await axios.get(`/api/orders/${myOrders ? `mine/${user._id}` : 'all'}`, {
      headers: { 
      Authorization: TOKEN
    }})
    if (myOrders) {
      return setMyOrders(data)
    }
    return setAllOrders(data)
  }

  React.useEffect(() => {
    if (user.isAdmin) {
      getOrders()
      getOrders(true)
    } else {
      getOrders(true)
    }
  }, [])

  return (
    <div className='orders'>
      <div className='your-orders'>
        <h2>My Orders</h2>
        <Table data={myOrders} mine />
      </div>
      <br />
      <hr />
      <br/>
      {user.isAdmin && (
        <div className='all-orders'>
          <h2>All Orders</h2>
          <Table data={allOrders} />
        </div>
      )}
    </div>
  )
}

const Table = ({ mine = false, data }) => {
  const addyFormat = (shipping) => {
    const { address, city, zipCode, country, state } = shipping
    return truncate(`${address} ${city}, ${state} ${zipCode} ${country}`, 11)
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <table>
        <thead>
          <tr>
            {!mine && <th>User</th>}

            <th>Qty</th>
            <th>Payment</th>
            <th>Placed On</th>
            <th>Address</th>
            <th>Delivered</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {[...data].reverse().map((o) => (
            <tr key={o._id}>
              {!mine && <td>{o.user.name}</td>}

              <td>{o.products.length}</td>
              <td>{o.payment}</td>
              <td>{new Date(o.placedOn).toLocaleDateString()}</td>
              <td>{addyFormat(o.shipping)}</td>
              <td>{o.delivered ? 'Yes' : 'No'}</td>
              <td>${formatNumber(o.total)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrdersPage
