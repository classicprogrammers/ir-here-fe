
import USflag from "../../../../assets/svg/flags/us.svg";
import AUflag from "../../../../assets/svg/flags/au.svg";
import BRflag from "../../../../assets/svg/flags/br.svg";
import CNflag from "../../../../assets/svg/flags/cn.svg";
import FRflag from "../../../../assets/svg/flags/fr.svg";
import PTflag from "../../../../assets/svg/flags/pt.svg";

const Dealchart = () => {
    const data = [
        { id: 1, flag: USflag, count: '$8,567k', country: 'US', icon: 'ti ti-chevron-up', status: 'text-success', per: '25.8%' },
        { id: 2, flag: AUflag, count: '$8,567k', country: 'US', icon: 'ti ti-chevron-down', status: 'text-danger', per: '25.8%' },
        { id: 3, flag: BRflag, count: '$8,567k', country: 'US', icon: 'ti ti-chevron-up', status: 'text-success', per: '25.8%' },
        { id: 4, flag: CNflag, count: '$8,567k', country: 'US', icon: 'ti ti-chevron-up', status: 'text-success', per: '25.8%' },
        { id: 5, flag: FRflag, count: '$8,567k', country: 'US', icon: 'ti ti-chevron-down', status: 'text-danger', per: '25.8%' },
        { id: 6, flag: PTflag, count: '$8,567k', country: 'US', icon: 'ti ti-chevron-up', status: 'text-success', per: '25.8%' },
    ];

    return (
        <div className="card h-100">
            <div className="card-header d-flex justify-content-between">
                <div className="card-title mb-0">
                    <h5 className="m-0 me-2">Validations by States</h5>
                    <small className="text-muted">Monthly Overview</small>
                </div>
                <div className="dropdown">
                    <button className="btn p-0" type="button" id="salesByCountry" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="ti ti-dots-vertical ti-sm text-muted"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="salesByCountry">
                        <button className="dropdown-item" type="button">Download</button>
                        <button className="dropdown-item" type="button">Refresh</button>
                        <button className="dropdown-item" type="button">Share</button>
                    </div>
                </div>
            </div>

            <div className="card-body">
                <ul className="p-0 m-0">
                    {data.map((deal) => (
                        <li className="d-flex align-item-center mb-4" key={deal.id}>
                            <div className='pe-2'>
                                <img src={deal.flag} alt={deal.country} />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div className="me-2">
                                    <div className="d-flex align-items-center">
                                        <h6 className="mb-0 me-1">{deal.count}</h6>
                                    </div>
                                    <small className="text-muted">{deal.country}</small>
                                </div>
                                <div className="user-progress">
                                    <p className={`${deal.status} fw-medium mb-0 d-flex justify-content-center gap-1`}>
                                        <i className={deal.icon}></i>
                                        {deal.per}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dealchart;
