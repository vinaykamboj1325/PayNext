import React, { useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { IoSearch } from "react-icons/io5";
import { RiDownloadCloud2Fill } from "react-icons/ri";


const PassIssue = () => {
    const [passIssue, setPassIssue] = useState({ FromDate: "", EndDate: "",  Group: "", Company: "",Project:"", PlazaName:"",Status:"", TypePass: "" });
    const [tableData, setTableData] = useState([{}]);

    const valuechange = (e) => {
      setPassIssue({ ...passIssue, [e.target.name]: e.target.value })
    };

    const handleDropdownChange = (name, value) => {
      setPassIssue({ ...passIssue, [name]: value });
    };

    const reset = () => {
        setTransaction({ FromDate: "", EndDate: "",  Group: "", Company: "",Project:"", PlazaName:"",Status:"", TypePass: "" });
    };

    const getdata = () => {
        console.log(transaction)
    };

    const transactionData = (e) => {
        e.preventDefaults();
    };


    return (
        <>
            <div className="PassIssue">
                <div className="search">
                    <form action="" onSubmit={transactionData}>
                        <div className="form-group">
                            <label htmlFor="fromDate">From Date *</label>
                            <input type="datetime-local" id="fromDate" name="FromDate" value={passIssue.FromDate} onChange={valuechange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="endDate">End Date *</label>
                            <input type="datetime-local" id="endDate" name="EndDate" value={passIssue.EndDate} onChange={valuechange} required />
                        </div>
                        
                        <div className="btn-group">
                            <h9>Group</h9>
                            <button
                                className="btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {passIssue.Group|| "Select Group"}
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Group', 'Group 1')}>Group 1</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Group', 'Group 2')}>Group 2</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Group', 'Group 3')}>Group 3</a></li>
                            </ul>
                        </div>
                        <div className="btn-group">
                            <h9>Company Name</h9>
                            <button
                                className="btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {passIssue.Company || "Select Company"}
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Company', 'Company 1')}>Company 1</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Company', 'Company 2')}>Company 2</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Company', 'Company 3')}>Company 3</a></li>
                            </ul>
                        </div>

                        <div className="btn-group">
                            <h9>Project Name</h9>
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {passIssue.Project || "Name"}
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Project', 'SAFEHAVEN GUARDING LLP')}>SAFEHAVEN GUARDING LLP 1</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Project', 'SAFEHAVEN GUARDING LLP 2')}>SAFEHAVEN GUARDING LLP 2</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Project', 'SAFEHAVEN GUARDING LLP 3')}>SAFEHAVEN GUARDING LLP 3</a></li>
                            </ul>
                        </div>
                        <div className="btn-group">
                            <h9>Plaza</h9>
                            <button
                                className="btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {passIssue.PlazaName || "BCD parking"}
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('PlazaName', 'Parking 1')}>Parking 1</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('PlazaName', 'Parking 2')}>Parking 2</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('PlazaName', 'Parking 3')}>Parking 3</a></li>
                            </ul>
                        </div>
                        <div className="btn-group">
                            <h9>Activition Status</h9>
                            <button
                                className="btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {passIssue.Status|| "All"}
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Status', 'Approval Pending')}>Approval Pending</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Status', 'Accepted')}>Accepted</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Status', 'Rejected')}>Rejected</a></li>
                            </ul>
                        </div>
                    
                        <div className="btn-group">
                            <h9>Type of pass</h9>
                            <button
                                className="btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {passIssue.TypePass || "Type"}
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('TypePass', 'Periodic Pass')}>Periodic Pass</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('TypePass', 'Value Based Pass')}>Value Based Pass</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('TypePass', 'Exempt Pass')}>Exempt Pass</a></li>
                            </ul>
                        </div>

                        <div className="btn-groups">
                            <button type="button" class="btn btn-outline-primary" onClick={reset}>Reset</button>
                            <button type="button" class="btn btn-primary" onClick={getdata}>Search</button>
                        </div>

                    </form>

                    
          {
            tableData.length > 0 ? <div className="compalain-table">
              <div className="table-head">
                <h5>Authorize Local Pass</h5>
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
                    <th scope='col'>Application ID</th>
                    <th scope='col'>Tag ID</th>
                    <th scope='col'>Vehicle No.</th>
                    <th scope='col'>TID</th>
                    <th scope='col'>Vehicle class</th>
                    <th scope='col'>Tag Status</th>
                    <th scope='col'>Tag Issued date</th>
                    <th scope='col'>Exception code</th>
                    <th scope='col'>Bank Name</th>
                    <th scope='col'>Status</th>
                    <th scope='col'>Action</th>
                    
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {
                    tableData?.map(() => {
                      return <>
                        <tr>
                          <td>Hrss123455555</td>
                          <td>tgii12270222292</td>
                          <td>HR22vv1001</td>
                          <td>TTDD1234</td>
                          <td>Four wheeler</td>
                          <td style={{color:"green"}}>Active</td>
                          <td>1-05-2024</td>
                          <td>WW12</td>
                          <td>PBN Bank</td>
                          <td style={{color:"green"}}>Active</td>
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

export default PassIssue;