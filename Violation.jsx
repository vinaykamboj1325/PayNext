import { React, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { FaEye } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Violation = () => {
  const [violation, setViolation] = useState({ FromDate: "", EndDate: "" });
  const [tableData, setTableData] = useState([{}]);

  const valuechange = (e) => {
    setViolation({ ...violation, [e.target.name]: e.target.value })
  };


  const reset = () => {
    setViolation({ FromDate: "", EndDate: "" });
  };

  const getdata = () => {
    console.log(violation)
  };

  const ComplainData = (e) => {
    e.preventDefaults();
    console.log(violation)
  };

  return (
    <>
      <div className="violation">
        <div className="violation-search">
          <form action="" onSubmit={ComplainData} >

            <div className="form-group">
              <label htmlFor="fromDate">From Date *</label>
              <input type="datetime-local" id="fromDate" name="FromDate" value={violation.FromDate} onChange={valuechange} required />
            </div>
            <div className="form-group">
              <label htmlFor="endDate">End Date *</label>
              <input type="datetime-local" id="endDate" name="EndDate" value={violation.EndDate} onChange={valuechange} required />
            </div>

            <div className="btn-groups">
              <button type="button" class="btn btn-outline-primary" onClick={reset}>Reset</button>
              <button type="button" class="btn btn-primary" onClick={getdata}>Search</button>
            </div>

          </form>

          {
            tableData.length > 0 ? <div className="compalain-table">
              <div className="table-head">
                <h5>Violation Management</h5>
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
                    <th scope='col'>Plaza ID</th>
                    <th scope='col'>Plaza Name</th>
                    <th scope='col'>Transaction ID</th>
                    <th scope='col'>Reader Read Date & Time</th>
                    <th scope='col'>Vehicle Tag ID</th>
                    <th scope='col'>Vehicle Reg. No</th>
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

export default Violation;