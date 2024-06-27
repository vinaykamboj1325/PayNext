import React, { useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { IoSearch } from "react-icons/io5";


const Report = () => {
    const [transaction, setTransaction] = useState({ FromDate: "", EndDate: "", Institution: "", Group: "", ReportType: "",ReportName:"",Status:"", SearchBy: "", Search: "" });
    const [tableData, setTableData] = useState([{}]);

    const valuechange = (e) => {
        setTransaction({ ...transaction, [e.target.name]: e.target.value })
    };

    const handleDropdownChange = (name, value) => {
        setTransaction({ ...transaction, [name]: value });
    };

    const reset = () => {
        setTransaction({ FromDate: "", EndDate: "", Institution: "", Group: "", ReportType: "",ReportName:"",Status:"", SearchBy: "", Search: "" });
    };

    const getdata = () => {
        console.log(transaction)
    };

    const transactionData = (e) => {
        e.preventDefaults();
    };


    return (
        <>
            <div className="Report">
                <div className="search">
                    <form action="" onSubmit={transactionData}>
                        <div className="form-group">
                            <label htmlFor="fromDate">From Date *</label>
                            <input type="datetime-local" id="fromDate" name="FromDate" value={transaction.FromDate} onChange={valuechange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="endDate">End Date *</label>
                            <input type="datetime-local" id="endDate" name="EndDate" value={transaction.EndDate} onChange={valuechange} required />
                        </div>
                        <div className="btn-group">
                            <h9>Institution Name</h9>
                            <button className="btn dropdown-toggle" type="button" aria-expanded="false">
                                Arete Limited
                            </button>
                        </div>

                        <div className="btn-group">
                            <h9>Group</h9>
                            <button
                                className="btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {transaction.Group || "Select Group"}
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Group', 'Group 1')}>Group 1</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Group', 'Group 2')}>Group 2</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Group', 'Group 3')}>Group 3</a></li>
                            </ul>
                        </div>

                        <div className="btn-group">
                            <h9>Company</h9>
                            <button
                                className="btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {transaction.Company || "Select Company"}
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Company', 'Company 1')}>Company 1</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Company', 'Company 2')}>Company 2</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Company', 'Company 3')}>Company 3</a></li>
                            </ul>
                        </div>

                        <div className="btn-group">
                            <h9>Report Types</h9>
                            <button
                                className="btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {transaction.ReportType || "Transactions"}
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('ReportType', 'Complaint')}>Complaint Management</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('ReportType', 'Violation')}>Violation Management</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('ReportType', 'Dispute')}>Dispute Management</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('ReportType', 'Blacklist')}>Blacklist Management</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('ReportType', 'Pass')}>Pass Issuance</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('ReportType', 'Fare')}>Fare Management</a></li>
                            </ul>
                        </div>
                        <div className="btn-group">
                            <h9>Report Name</h9>
                            <button
                                className="btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {transaction.ReportName || "Report Name"}
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('ReportName', 'Issuance')}>Monthly Pass Issuance Report</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('ReportName', 'Active')}>Active Monthly Pass Report</a></li>
                            </ul>
                        </div>
                        
                        <div className="btn-group">
                            <h9>Status</h9>
                            <button
                                className="btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {transaction.Status || "All"}
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Status', 'ACCEPTED')}>Accepted</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Status', 'DEEMED ACCEPTED')}>Deemed Accepted</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Status', 'DECLINED')}>Declined</a></li>
                            </ul>
                        </div>
                        <div className="btn-group">
                            <h9>Plaza Id</h9>
                            <button className="btn dropdown-toggle" type="button" aria-expanded="false">
                                712409
                            </button>
                        </div><div className="btn-group">
                            <h9>Plaza Name</h9>
                            <button className="btn dropdown-toggle" type="button" aria-expanded="false">
                                Arundhati Bhawan Parking
                            </button>
                        </div>
                        <div className="btn-group" style={{ border: "none" }}>

                        </div>

                        <div className="btn-groups">
                            <button type="button" class="btn btn-outline-primary" onClick={reset}>Reset</button>
                            <button type="button" class="btn btn-primary" onClick={getdata}>Search</button>
                        </div>

                    </form>

                    {
            tableData.length > 0 ? <div className="Report-table">
              <div className="table-head">
                <h5>Schedule Report</h5>
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
                    <th scope='col'>From Date</th>
                    <th scope='col'>End Date</th>
                    <th scope='col'>Institution Name</th>
                    <th scope='col'>Group</th>
                    <th scope='col'>Company</th>
                    <th scope='col'>Report Types</th>
                    <th scope='col'>Report Name</th>
                    <th scope='col'>Status</th>
                    <th scope='col'>Plaza Id</th>
                    <th scope='col'>Plaza Name</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {
                    tableData?.map(() => {
                      return <>
                        <tr>
                          <td>2024-06-05 12:18:34</td>
                          <td>2024-07-05 12:18:34</td>
                          <td>Arete Limited</td>
                          <td>SAFEHAVEN GUARDING LLP</td>
                          <td>SAFEHAVEN GUARDING LLP</td>
                          <td>Pass Issuance</td>
                          <td>Active Monthly Pass Report</td>
                          <td>DECLINED</td>
                          <td>712409</td>
                          <td>Arundhati Bhawan Parking</td>
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

export default Report