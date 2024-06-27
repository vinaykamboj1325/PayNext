import { React, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { IoSearch } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";

const Complain = () => {
  const [complain, setComplain] = useState({ FromDate: "", EndDate: "" });
  const [tableData, setTableData] = useState([{}]);

  const valuechange = (e) => {
    setComplain({ ...complain, [e.target.name]: e.target.value })
  };


  const reset = () => {
    setComplain({ FromDate: "", EndDate: "" });
  };

  const getdata = () => {
    console.log(complain)
  };

  const ComplainData = (e) => {
    e.preventDefaults();
    console.log(complain)
  };

  return (
    <>
      <div className="complain">
        <div className="complain-search">
          <form action="" onSubmit={ComplainData} >

            <div className="form-group">
              <label htmlFor="fromDate">From Date *</label>
              <input type="datetime-local" id="fromDate" name="FromDate" value={complain.FromDate} onChange={valuechange} required />
            </div>
            <div className="form-group">
              <label htmlFor="endDate">End Date *</label>
              <input type="datetime-local" id="endDate" name="EndDate" value={complain.EndDate} onChange={valuechange} required />
            </div>

            <div className="btn-groups">
              <button type="button" class="btn btn-outline-primary" onClick={reset}>Reset</button>
              <button type="button" class="btn btn-primary" onClick={getdata}>Search</button>
            </div>

          </form>

          {
            tableData.length > 0 ? <div className="compalain-table">
              <div className="table-head">
                <h5>Complaint Management</h5>
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
                    <th scope='col'>Ticket ID</th>
                    <th scope='col'>Plaza Name</th>
                    <th scope='col'>Plaza ID</th>
                    <th scope='col'>Date of Request</th>
                    <th scope='col'>Status</th>
                    <th scope='col'>Date of Completion</th>
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
                          <td style={{ color: 'green' }}>ACCEPTED</td>
                          <td>2024-06-05 12:18:34</td>
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

export default Complain