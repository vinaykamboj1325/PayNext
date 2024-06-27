import { React, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { IoSearch } from "react-icons/io5";
import { RiDownloadCloud2Fill } from "react-icons/ri";

const Settlement = () => {
  const [settlement, setSettlement] = useState({ FromDate: "", EndDate: "" });
  const [tableData, setTableData] = useState([{}]);

  const valuechange = (e) => {
    setSettlement({ ...settlement, [e.target.name]: e.target.value })
  };


  const reset = () => {
    setSettlement({ FromDate: "", EndDate: "" });
  };

  const getdata = () => {
    console.log(settlement)
  };

  const ComplainData = (e) => {
    e.preventDefaults();
    console.log(settlement)
  };

  return (
    <>
      <div className="settlement">
        <div className="settlement-search">
          <form action="" onSubmit={ComplainData} >

            <div className="form-group">
              <label htmlFor="fromDate">From Date *</label>
              <input type="datetime-local" id="fromDate" name="FromDate" value={settlement.FromDate} onChange={valuechange} required />
            </div>
            <div className="form-group">
              <label htmlFor="endDate">End Date *</label>
              <input type="datetime-local" id="endDate" name="EndDate" value={settlement.EndDate} onChange={valuechange} required />
            </div>

            <div className="btn-groups">
              <button type="button" class="btn btn-outline-primary" onClick={reset}>Reset</button>
              <button type="button" class="btn btn-primary" onClick={getdata}>Search</button>
            </div>

          </form>

          {
            tableData.length > 0 ? <div className="compalain-table">
              <div className="table-head">
                <h5>Settlements</h5>
              </div>
              <div className="table-download">
              <div class="search-box">
                  <input type="text" class="search-txt" name="" placeholder="Search "/>
                    <a href="#" class="search-btn">
                      <IoSearch/>
                      <ion-icon name="search-outline"></ion-icon>
                    </a>
                </div>
              </div>
              <MDBTable responsive>
                
                <MDBTableHead>
                  <tr>
                    <th scope='col'>Toll ID</th>
                    <th scope='col'>Bill No.</th>
                    <th scope='col'>Settlement Date</th>
                    <th scope='col'>Total TXN Amount</th>
                    <th scope='col'>MDR</th>
                    <th scope='col'>GST</th>
                    <th scope='col'>Charge back Amt</th>
                    <th scope='col'>Db.Adj Amt</th>
                    <th scope='col'>Cr.Adj Amt</th>
                    <th scope='col'>Payout Amount</th>
                    <th scope='col'>UTR No</th>
                    <th scope='col'>Download</th>

                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {
                    tableData?.map(() => {
                      return <>
                        <tr>
                          <td>7458685</td>
                          <td>7174585695552</td>
                          <td>2024-06-05</td>
                          <td>₹4,140.00</td>
                          <td >₹40.00</td>
                          <td>₹10.00</td>
                          
                          <td>₹0.00</td>
                          <td>₹0.00</td>
                          <td>₹0.00</td>
                          <td>₹4,066.72</td>
                          <td>₹0.00</td>
                          <td style={{cursor:"pointer"}}><RiDownloadCloud2Fill/></td>
                        </tr>
                      </>
                    })
                  }

                </MDBTableBody>
              </MDBTable>

            </div> : <h4 style={{ marginTop: "40px", color: "red" }}>Data Not Found sorry</h4>
          }
          
        </div>
      </div>
    </>
  )
}

export default Settlement;