import { React, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { FaEye } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Dispute = () => {
  const [dispute, setDispute] = useState({ FromDate: "", EndDate: "", Institution: "",SearchBy: "", Search: ""  });
  const [tableData, setTableData] = useState([{}]);

  const valuechange = (e) => {
    setDispute({ ...dispute, [e.target.name]: e.target.value })
  };


  const reset = () => {
    setDispute({  FromDate: "", EndDate: "", Institution: "",SearchBy: "", Search: "" });
  };
  const handleDropdownChange = (name, value) => {
    setDispute({ ...dispute, [name]: value });
  };

  const getdata = () => {
    console.log(dispute)
  };

  const ComplainData = (e) => {
    e.preventDefaults();
    console.log(dispute)
  };

  return (
    <>
      <div className="dispute">
        <div className="dispute-search">
          <form action="" onSubmit={ComplainData} >

            <div className="form-group">
              <label htmlFor="fromDate">From Date *</label>
              <input type="datetime-local" id="fromDate" name="FromDate" value={dispute.FromDate} onChange={valuechange} required />
            </div>
            <div className="form-group">
              <label htmlFor="endDate">End Date *</label>
              <input type="datetime-local" id="endDate" name="EndDate" value={dispute.EndDate} onChange={valuechange} required />
            </div>
            <div className="btn-group">
              <h9>Institution Name</h9>
              <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {dispute.Institution || "Select Bank"}
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Institution', 'Bank 1')}>Bank 1</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Institution', 'Bank 2')}>Bank 2</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Institution', 'Bank 3')}>Bank 3</a></li>
              </ul>
            </div>
            <div className="btn-group">
              <h9>Search By</h9>
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {dispute.SearchBy || "All"}
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('SearchBy', 'Transaction ID')}>Transaction ID</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('SearchBy', 'Vehicle Tag ID')}>Vehicle Tag ID</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('SearchBy', 'Vehicle Reg No.')}>Vehicle Reg No.</a></li>
              </ul>
            </div>
            <div className="btn-group">
              <h9>Search</h9>
              <input
                type="text"
                name="Search"
                value={dispute.Search}
                onChange={valuechange}
                style={{ marginLeft: "10px" }}
              />
            </div>

            <div className="btn-groups">
              <button type="button" class="btn btn-outline-primary" onClick={reset}>Reset</button>
              <button type="button" class="btn btn-primary" onClick={getdata}>Search</button>
            </div>

          </form>

          {
            tableData.length > 0 ? <div className="compalain-table">
              <div className="table-head">
                <h5>Dispute Management</h5>
              </div>
              <div className="table-download">
                <div class="search-box">
                  <input type="text" class="search-txt" name="" placeholder="Search " />
                  <a href="#" class="search-btn">
                    <IoSearch/>
                    <ion-icon name="search-outline"></ion-icon>
                  </a>
                </div>
              </div>
              <MDBTable responsive>

                <MDBTableHead>
                <tr>
                    <th scope='col'>Plaza ID</th>
                    <th scope='col'>Plaza Name</th>
                    <th scope='col'>Transaction ID</th>
                    <th scope='col'>Reader Read Date & Time</th>
                    <th scope='col'>Vehicle Tag ID</th>
                    <th scope='col'>Vehicle Reg. No</th>
                    <th scope='col'>Dispute Status</th>
                    <th scope='col'>Remaining Days</th>
                    <th scope='col'>View</th>

                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {
                    tableData?.map(() => {
                      return <>
                        <tr>
                          <td>748589</td>
                          <td>Bhawan Parking	</td>
                          <td>712409EX124060512173010</td>
                          <td>2024-06-05 12:18:34</td>
                          <td >34567654344jhgf654</td>
                          <td>hr22cb2345</td>
                          <td style={{color:"green"}}>Active</td>
                          <td>12days</td>
                          <td style={{cursor:"pointer"}}><FaEye/></td>
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

export default Dispute;