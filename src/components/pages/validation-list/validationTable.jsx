
import { useState } from 'react';
import { TablePagination } from '@mui/material';

const Table = () => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5); // Set rows per page to 5

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); // Reset page number when rows per page changes
    };

    const tableData = [
        {
            id: 1,
            VID: "Vb65486TF56",
            Name: "Asad Javaid",
            Email: "Asadjavaid.com.au",
            Date: "04-10-23 04:42:32",
            status: true
        },
        {
            id: 2,
            VID: "Vb65486TF56",
            Name: "Syed Hammad",
            Email: "syedhammad@gmail.com",
            Date: "04-10-23 05:42:32",
            status: false
        },
        {
            id: 3,
            VID: "Vb65486TF56",
            Name: "Khizar Abbas",
            Email: "khizarabbas@gmail.com",
            Date: "04-10-23 06:42:32",
            status: true
        },
        {
            id: 4,
            VID: "Vb65486TF56",
            Name: "Uzair",
            Email: "Uzair@gmail.com",
            Date: "04-10-23 07:42:32",
            status: false
        }
    ]

    const [searchTerms, setSearchTerms] = useState({
        VID: '',
        Name: '',
        Email: '',
        Date: '',
        Status: ''
    });

    const filteredData = tableData.filter(item => {
        return (
            item.VID.toLowerCase().includes(searchTerms.VID.toLowerCase()) &&
            item.Name.toLowerCase().includes(searchTerms.Name.toLowerCase()) &&
            item.Email.toLowerCase().includes(searchTerms.Email.toLowerCase()) &&
            item.Date.toLowerCase().includes(searchTerms.Date.toLowerCase()) &&
            (item.status ? 'verified' : 'unverified').toLowerCase().includes(searchTerms.Status.toLowerCase())
        );
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchTerms(predata => ({
            ...predata,
            [name]: value
        }));
    };

    const mapFields = [
        { id: 1, name: "VID", placeholder: "VID..." },
        { id: 2, name: "Name", placeholder: "Name..." },
        { id: 3, name: "Email", placeholder: "Email/Phone..." },
        { id: 4, name: "Date", placeholder: "Date..." },
        { id: 5, name: "Status", placeholder: "Status..." },
    ];
    const handleExportCSV = () => {
        const csvContent = slicedData.map(item => Object.values(item).join(',')).join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'table_data.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };
    const rowCount = filteredData?.length;
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const slicedData = filteredData?.slice(startIndex, endIndex);
    return (
        <div className="card">
            <div className="card-datatable pt-0">
                <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                    <div className="card-header header-flex d-flex justify-content-between p-3">
                        <div className="head-label d-flex align-items-center">
                            <h5 className="card-title mb-0">List Of Validations</h5>
                        </div>
                        <div className="dt-action-buttons text-end pt-3 pt-md-0">
                            <div className="dt-buttons">
                                <button className="dt-button buttons-collection  btn btn-label-primary me-2 waves-effect waves-light" aria-controls="DataTables_Table_0" type="button" aria-haspopup="dialog" aria-expanded="false"
                                onClick={handleExportCSV}>
                                    <span>
                                        <i className="ti ti-upload me-1 ti-xs"></i>
                                        <span className="d-none d-sm-inline-block">Export</span>
                                    </span>
                                </button>
                                <button className="dt-button create-new btn btn-primary waves-effect waves-light" aria-controls="DataTables_Table_0" type="button">
                                    <span>
                                        <i className="menu-icon tf-icons ti ti-calendar"></i>
                                        <span className="d-none d-sm-inline-block">Search By Dates</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table table-striped text-center">
                                <thead className='table-bg'>
                                    <tr>
                                        <th>VID</th>
                                        <th>Name</th>
                                        <th>Email/Phone</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='input-row'>
                                        {mapFields.map(field => (
                                            <th key={field.id}>
                                                <div className="input-group input-group-merge">
                                                    <span className="input-group-text p-2" id={`basic-addon-search}`}><i className="ti ti-search"></i></span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder={field.placeholder}
                                                        name={field.name}
                                                        value={searchTerms[field.name]}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                    {slicedData.map(item => (
                                        <tr key={item.id}>
                                            <td><small>{item.VID}</small></td>
                                            <td><small>{item.Name}</small></td>
                                            <td><small>{item.Email}</small></td>
                                            <td><small>{item.Date}</small></td>
                                            <td>
                                                <span className={`badge ${item.status ? "bg-label-success" : "bg-label-danger"}`}>
                                                    {item.status ? "verified" : "unverified"}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="row mt-3 mb-3">
                        <TablePagination
                rowsPerPageOptions={[10, 25, 50]}
                component="div"
                count={rowCount}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;