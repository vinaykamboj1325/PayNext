import React, { useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { FaEye } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Blacklist = () => {
    const [blacklist, setBlacklist] = useState({SearchBy: "", Search: "" });
    const [tableData, setTableData] = useState([{}]);

    const valuechange = (e) => {
        setBlacklist({ ...blacklist, [e.target.name]: e.target.value })
    };

    const handleDropdownChange = (name, value) => {
        setBlacklist({ ...blacklist, [name]: value });
    };

    const reset = () => {
        setBlacklist({SearchBy: "", Search: "" });
    };

    const getdata = () => {
        console.log(blacklist)
    };

    const transactionData = (e) => {
        e.preventDefaults();
    };



    return (
        <>
            <div className="blacklist">
                <div className="search">
                    <form action="" onSubmit={transactionData}>

                        <div className="btn-group">
                            <h9>Search By</h9>
                            <button
                                className="btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {blacklist.SearchBy || "ID"}
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('SearchBy', 'Tag ID')}>Tag ID</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('SearchBy', 'Vehicle Reg No')}>Vehicle Reg No</a></li>
                            </ul>
                        </div>
                        <div className="btn-group">
                            <h9>Search</h9>
                            <input
                                type="text"
                                placeholder='Tag ID & Vehicle Registration NO.'
                                name="Search"
                                value={blacklist.Search}
                                onChange={valuechange}
                                style={{ marginLeft: "10px" , fontSize:"12px",fontWeight:"600",color:"black"}}
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
                <h5>Blacklist Management</h5>
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
                    <th scope='col'>TAG ID</th>
                    <th scope='col'>Vehicle Reg. No.</th>
                    <th scope='col'>Vehicle Class</th>
                    <th scope='col'>Hot List Status</th>
                    <th scope='col'>Exempted Status</th>
                    <th scope='col'>Low Balance Status</th>
                    <th scope='col'>Invalid Carriage Status</th>
                    <th scope='col'>Blacklist Status</th>
                    <th scope='col'>Closed / Replaced Status</th>
                    <th scope='col'>TAG Issued Date</th>
                    <th scope='col'>View</th>
                    
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {
                    tableData?.map(() => {
                      return <>
                        <tr>
                          <td>34161FA8203288AC03807200</td>
                          <td>DL2CBA1016</td>
                          <td>VC4</td>
                          <td>No</td>
                          <td>No</td>
                          <td style={{color:"green"}}>No</td>
                          <td>No</td>
                          <td>No</td>
                          <td>No</td>
                          <td>2019-04-20</td>
                          <td><FaEye/></td>
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

export default Blacklist;