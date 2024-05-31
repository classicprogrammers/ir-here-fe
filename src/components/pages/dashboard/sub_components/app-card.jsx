

const Appcard = () => {
    const data = [
        { id: 1, class: 'badge rounded bg-label-primary me-3 p-2', icon: <i className="ti ti-chart-pie-2 ti-sm"></i>, Heading: '230k ', title: 'Validations' },
        { id: 2, class: 'badge rounded bg-label-info me-3 p-2', icon: <i className="ti ti-users ti-sm"></i>, Heading: '8.549k', title: 'Active Users' },
        { id: 3, class: 'badge rounded bg-label-danger me-3 p-2', icon: <i className="ti ti-percentage ti-sm"></i>, Heading: '1.423k ', title: 'Vouchers' },
        { id: 4, class: 'badge rounded bg-label-success me-3 p-2', icon: <i className="ti ti-currency-dollar ti-sm"></i>, Heading: '$9745', title: 'Revenue' },
    ];

    return (
        <div className="card h-100">
            <div className="card-header">
                <div className="d-flex justify-content-between mb-3 header-flex">
                    <h4 className="card-title mb-0">At a Glance</h4>
                    <span className="text-muted">
                        Updated 1 month ago
                    </span>
                </div>
            </div>
            <div className="card-body">
                <div className="row gy-3">
                    {data.map((item) => {
                        return (
                            <div key={item.id} className="col-sm-12 col-md-6 col-lg-3">
                                <div className="d-flex align-items-center">
                                    <div className={item.class}>
                                        {item.icon}
                                    </div>
                                    <div className="card-info">
                                        <h5 className="mb-0">{item.Heading}</h5>
                                        <span>{item.title}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Appcard;
