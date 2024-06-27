import { React, useState } from 'react'

import {
  ComposedChart, Line, LineChart, BarChart, Label, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const Home = () => {
  const [payment, setPayment] = useState('');

  const data = [
    {
      name: 'Jan', 
     
      amt: 1400,
    },
    {
      name: 'Feb',
  
      amt: 1506,
    },
    {
      name: 'Mar',
      
      amt: 989,
    },
    {
      name: 'Apr',
      
      amt: 1228,
    },
    {
      name: 'May',
    
      amt: 1100,
    },
    {
      name: 'Jun',
   
      amt: 1700,
    },
    {
      name: 'Jul',
   
      amt: 900,
    },
    {
      name: 'Aug',
   
      amt: 1700,
    },
    {
      name: 'Sep',
   
      amt: 0,
    },
    {
      name: 'Oct',
   
      amt: 700,
    },
    {
      name: 'Nov',
   
      amt: 1400,
    },
    {
      name: 'dec',
   
      amt: 200,
    },
  ];

  const data2 = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 2000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
    { name: 'Jun', value: 2390 },
    { name: 'Jul', value: 3490 },
    { name: 'Aug', value: 2000 },
    { name: 'Sep', value: 3000 },
    { name: 'Oct', value: 2000 },
    { name: 'Nov', value: 2780 },
    { name: 'Dec', value: 1890 },
  ];
  const dataYTD = [
    { name: 'Jan', amount: 400000, count: 2400 },
    { name: 'Feb', amount: 300000, count: 2210 },
    { name: 'Mar', amount: 200000, count: 2290 },
    { name: 'Apr', amount: 278000, count: 2000 },
    { name: 'May', amount: 189000, count: 2181 },
    { name: 'Jun', amount: 239000, count: 2500 },
    { name: 'Jul', amount: 349000, count: 2100 },
    { name: 'Aug', amount: 200000, count: 2400 },
    { name: 'Sep', amount: 300000, count: 2210 },
    { name: 'Oct', amount: 200000, count: 2290 },
    { name: 'Nov', amount: 278000, count: 2000 },
    { name: 'Dec', amount: 189000, count: 2181 },
  ];

  const dataMTD = [
    { name: '2024-01-01', amount: 4000, count: 240 },
    { name: '2024-02-01', amount: 3000, count: 210 },
    { name: '2024-03-01', amount: 2000, count: 290 },
    { name: '2024-04-01', amount: 2780, count: 200 },
    { name: '2024-05-01', amount: 1890, count: 281 },
    { name: '2024-06-01', amount: 2390, count: 250 },
    { name: '2024-07-01', amount: 3490, count: 210 },
    { name: '2024-09-01', amount: 3490, count: 210 },
    { name: '2024-010-01', amount: 3490, count: 210 },
    { name: '2024-011-01', amount: 3490, count: 210 },
    { name: '2024-012-01', amount: 3490, count: 210 },
    // Add more data points as needed
  ];

  return (

    <div className="home">

      <div className="right-page">

        <div className="dropdown">

          <div className="btn-group">
            <h9>Group</h9>
            <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false" >
              SAFEHAVEN GUARDING LLP
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
            </ul>

          </div>

          <div className="btn-group">
            <h9>Company</h9>
            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">
              SAFEHAVEN GUARDING LLP
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
            </ul>
          </div>

          <div className="btn-group">
            <h9>Plaza ID</h9>
            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
              124578
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
            </ul>
          </div>

          <div className="btn-group">
            <h9>Plaza Name</h9>
            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
              Delhi plaza parking
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
              <li><a className="dropdown-item" href="#">Menu item</a></li>
            </ul>
          </div>
        </div>

        <div className="transaction">

          <div className="bar">
            <div className="title">
              <h8>Transaction Summary</h8>
            </div>
           
        <ComposedChart
          width={400}
          height={250}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" label={{ value: 'Time', position: 'insideBottom',  offset: 0 }} scale="band" />
          <YAxis label={{ value: 'Amount', angle: -90, position: 'insideLeft' }} />
         
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="amount" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="time" stroke="#ff7300" />
        </ComposedChart>

          </div>
          <div className="bar2">
            <div className="title">
              <h8>Violation Summary</h8>
            </div>

            <BarChart

              width={400}
              height={250}
              data={data2}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <XAxis dataKey="name" >
                <Label offset={-5} position="insideBottom" />
              </XAxis>
              <YAxis
                tickFormatter={(value) => `₹${value.toFixed(2)}`}
              >
              </YAxis>
              <Tooltip formatter={(value) => `₹${value.toFixed(2)}`} />

              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </div>

        </div>

        <div className="dispute-summary-container">
          <div className="top">
            <h2>Dispute Summary</h2>
            <div className="date">
              <span className="date-icon" style={{ fontSize: '12px' }}>📅</span>
              <div>
                <span>Date *</span>
                <input type="date" name='summary' onChange={e => setPayment(e.target.value)} />
              </div>
            </div>
          </div>

          <div className="summary">

            <div className="summary-item received">
              <div className="icon">🏠</div>
              <div className="dispute">
                <span>Dispute Received</span>
                <span>₹ 0.00</span>
                <span>Count: 0</span>
              </div>
            </div>

            <div className="summary-item open">
              <div className="icon">🏠</div>
              <div className="dispute">
                <span>Dispute Open</span>
                <span>₹ 0.00</span>
                <span>Count: 0</span>
              </div>
            </div>

            <div className="summary-item lost">
              <div className="icon">🏠</div>
              <div className="dispute">
                <span>Dispute Lost</span>
                <span>₹ 0.00</span>
                <span>Count: 0</span>
              </div>
            </div>

            <div className="summary-item won">
              <div className="icon">🏠</div>
              <div className="dispute">
                <span>Dispute Won</span>
                <span>₹ 0.00</span>
                <span>Count: 0</span>
              </div>
            </div>

          </div>
        </div>

        <div className="trendline-charts">
          <div className="chart-container">
            <h3 style={{ fontSize: '20px' }}>Trendline YTD</h3>
            <ResponsiveContainer width={400} height={300}>
              <LineChart
                data={dataYTD}
                margin={{ top: 5, right: 0, left: 12, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="amount" stroke="#8884d8" />
                <Line yAxisId="right" type="monotone" dataKey="count" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-container">
            <h3 style={{ fontSize: '20px' }}> Trendline MTD</h3>
            <ResponsiveContainer width={400} height={300} style={{ padding: "10px" }}>
              <LineChart
                data={dataMTD}
                margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="" style={{ fontSize: '5px' }} />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="amount" stroke="#8884d8" />
                <Line yAxisId="right" type="monotone" dataKey="count" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="date-transaction">

        <div className="date">
          <span className="date-icon" style={{ fontSize: '12px' }}>📅</span>
          <div>
            <span>Date *</span>
            <input type="date" name='dateValue' onChange={e => setPayment(e.target.value)} />
          </div>
        </div>

        <div className="transaction-summary">
          <div className="summary-container">
            <div className="summary-item">
              <div className="summary-icon total-icon"></div>
              <div className="summary-text">
                <h9 className="summary-tag">Total</h9>
                <div className="summary-amount">₹ 2,340.00</div>
                <div className="summary-count">Count: 40</div>
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-icon successful-icon"></div>
              <div className="summary-text">
                <h9 className="summary-tag">Successfull</h9>
                <div className="summary-amount">₹ 2,340.00</div>
                <div className="summary-count">Count: 39</div>
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-icon decline-icon"></div>
              <div className="summary-text">
                <h9 className="summary-tag">Decline</h9>
                <div className="summary-amount">₹ 0.00</div>
                <div className="summary-count">Count: 1</div>
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-icon blacklist-icon"></div>
              <div className="summary-text">
                <div className="summary-tag">Blacklisted Tag</div>
                <div className="summary-count">Count: 1200</div>
              </div>
            </div>
          </div>

        </div>

        <div className="Lasts-Transaction">
          <div className="head">
            <h8>Last 10 Transaction</h8>
            <div>
              <h7 className="approve">Approve</h7>
              <h7 className="decline">Decline</h7>
            </div>
          </div>
          <div className="list">
            <div className="item">
              <div className="item-first">
                <h7>₹40.00</h7>
                <input type="date" name="" id="" readOnly />
              </div>

              <h7>Tag ID : 34161FA8203289723A7DF720</h7>

            </div>
            <div className="item">
              <div className="item-first">
                <h7>₹40.00</h7>
                <input type="date" name="" id="" readOnly />
              </div>

              <h7>Tag ID : 34161FA8203289723A7DF720</h7>

            </div>
            <div className="item">
              <div className="item-first">
                <h7>₹40.00</h7>
                <input type="date" name="" id="" readOnly />
              </div>

              <h7>Tag ID : 34161FA8203289723A7DF720</h7>

            </div>
            <div className="item">
              <div className="item-first">
                <h7>₹40.00</h7>
                <input type="date" name="" id="" readOnly />
              </div>

              <h7>Tag ID : 34161FA8203289723A7DF720</h7>

            </div>
            <div className="item">
              <div className="item-first">
                <h7>₹40.00</h7>
                <input type="date" name="" id="" readOnly />
              </div>

              <h7>Tag ID : 34161FA8203289723A7DF720</h7>

            </div>
            <div className="item">
              <div className="item-first">
                <h7>₹40.00</h7>
                <input type="date" name="" id="" readOnly />
              </div>

              <h7>Tag ID : 34161FA8203289723A7DF720</h7>

            </div>
            <div className="item">
              <div className="item-first">
                <h7>₹40.00</h7>
                <input type="date" name="" id="" readOnly />
              </div>

              <h7>Tag ID : 34161FA8203289723A7DF720</h7>

            </div>
            <div className="item">
              <div className="item-first">
                <h7>₹40.00</h7>
                <input type="date" name="" id="" readOnly />
              </div>

              <h7>Tag ID : 34161FA8203289723A7DF720</h7>

            </div>
            <div className="item">
              <div className="item-first">
                <h7>₹40.00</h7>
                <input type="date" name="" id="" readOnly />
              </div>

              <h7>Tag ID : 34161FA8203289723A7DF720</h7>

            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Home;