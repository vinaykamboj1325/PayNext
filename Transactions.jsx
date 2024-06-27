import React, { useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { FaEye } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";


const Transactions = () => {
    const [transaction, setTransaction] = useState({ FromDate: "", EndDate: "", Institution: "", Group: "", Company: "", SearchBy: "", Search: "" });
    const [tableData, setTableData] = useState([{}]);

    const valuechange = (e) => {
        setTransaction({ ...transaction, [e.target.name]: e.target.value })
    };

    const handleDropdownChange = (name, value) => {
        setTransaction({ ...transaction, [name]: value });
    };

    const reset = () => {
        setTransaction({ FromDate: "", EndDate: "", Institution: "", Group: "", Company: "", SearchBy: "", Search: "" });
    };

    const getdata = () => {
        console.log(transaction)
    };

    const transactionData = (e) => {
        e.preventDefaults();
    };


    return (
        <>
            <div className="transactions">
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
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {transaction.Institution || "Select Bank"}
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Institution', 'Bank 1')}>Bank 1</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Institution', 'Bank 2')}>Bank 2</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('Institution', 'Bank 3')}>Bank 3</a></li>
                            </ul>
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
                            <h9>Plaza Id</h9>
                            <button className="btn dropdown-toggle" type="button">
                                {transaction.PlazaId || "7455566"}
                            </button>
                        </div>

                        <div className="btn-group">
                            <h9>Plaza Name</h9>
                            <button
                                className="btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {transaction.PlazaName || "BCD parking"}
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('PlazaName', 'Parking 1')}>Parking 1</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('PlazaName', 'Parking 2')}>Parking 2</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('PlazaName', 'Parking 3')}>Parking 3</a></li>
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
                                {transaction.SearchBy || "ID"}
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('SearchBy', 'ID')}>ID</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('SearchBy', 'Name')}>Name</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('SearchBy', 'Date')}>Date</a></li>
                            </ul>
                        </div>
                        <div className="btn-group">
                            <h9>Search</h9>
                            <input
                                type="text"
                                name="Search"
                                value={transaction.Search}
                                onChange={valuechange}
                                style={{ marginLeft: "10px" }}
                            />
                        </div>
                        <div className="btn-group">
                            <h9>Status</h9>
                            <button
                                className="btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {transaction.PlazaName || "BCD parking"}
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('PlazaName', 'Parking 1')}>Parking 1</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('PlazaName', 'Parking 2')}>Parking 2</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => handleDropdownChange('PlazaName', 'Parking 3')}>Parking 3</a></li>
                            </ul>
                        </div>
                        <div className="btn-group" style={{ border: "none" }}>

                        </div>

                        <div className="btn-groups">
                            <button type="button" class="btn btn-outline-primary" onClick={reset}>Reset</button>
                            <button type="button" class="btn btn-primary" onClick={getdata}>Search</button>
                        </div>

                    </form>

                    {
                        tableData.length > 0 ? <div className="transaction-table">
                            <div className="table-head">
                                <h5>Transactions</h5>
                            </div>
                            <div className="table-download">
                                <button>Download</button>
                            </div>
                            <MDBTable responsive>
                                <MDBTableHead>
                                    <tr>
                                        <th scope='col'>Plaza ID</th>
                                        <th scope='col'>Plaza Name</th>
                                        <th scope='col'>Transaction ID</th>
                                        <th scope='col'>Transaction Date & Time</th>
                                        <th scope='col'>Vehicle Tag ID</th>
                                        <th scope='col'>Vehicle Reg. No</th>
                                        <th scope='col'>Status</th>
                                        <th scope='col'>View</th>
                                        <th scope='col'>Violation</th>
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
                                                    <td>34161FA82032897234C8AEC1</td>
                                                    <td>HR32SN3515</td>
                                                    <td style={{ color: 'green' }}>ACCEPTED</td>
                                                    <td style={{cursor:"pointer"}}><FaEye /></td>
                                                    <td style={{cursor:"pointer"}}><IoMdAddCircle /></td>
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

export default Transactions