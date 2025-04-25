import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-logo">
          <h4>Early Stage Recruiter</h4>
        </div>
        <ul className="sidebar-menu">
            <li><a href="index.html" className="active"><i className="bi bi-grid"></i> Dashboard</a></li>
            <li><a href="search.html"><i className="bi bi-search"></i> Candidate Search</a></li>
            <li><a href="inbox.html"><i className="bi bi-inbox"></i> Inbox</a></li>
            <li><a href="#"><i className="bi bi-person"></i> Profile</a></li>
            <li><a href="#"><i className="bi bi-gear"></i> Settings</a></li>
        </ul>
      </div>

      <div className="content">
        <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Dashboard</h2>
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newSearchModal">
                    <i className="bi bi-plus"></i> New Search
                </button>
            </div>

            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card p-3">
                        <div className="d-flex align-items-center mb-2">
                            <div className="icon-box bg-light-primary me-2 p-2 rounded">
                                <i className="bi bi-search text-primary"></i>
                            </div>
                            <h6 className="mb-0">Active Searches</h6>
                        </div>
                        <h3>12</h3>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card p-3">
                        <div className="d-flex align-items-center mb-2">
                            <div className="icon-box bg-light-success me-2 p-2 rounded">
                                <i className="bi bi-person-check text-success"></i>
                            </div>
                            <h6 className="mb-0">Candidates</h6>
                        </div>
                        <h3>247</h3>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card p-3">
                        <div className="d-flex align-items-center mb-2">
                            <div className="icon-box bg-light-warning me-2 p-2 rounded">
                                <i className="bi bi-inbox text-warning"></i>
                            </div>
                            <h6 className="mb-0">New Messages</h6>
                        </div>
                        <h3>18</h3>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card p-3">
                        <div className="d-flex align-items-center mb-2">
                            <div className="icon-box bg-light-info me-2 p-2 rounded">
                                <i className="bi bi-check-circle text-info"></i>
                            </div>
                            <h6 className="mb-0">Hired</h6>
                        </div>
                        <h3>32</h3>
                    </div>
                </div>
            </div>

            <div className="card mb-4">
                <div className="card-header bg-white">
                    <h5 className="mb-0">Recent Searches</h5>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Position</th>
                                    <th>Created</th>
                                    <th>Status</th>
                                    <th>Candidates</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Frontend Developer Intern</td>
                                    <td>Oct 15, 2023</td>
                                    <td><span className="badge bg-success">Active</span></td>
                                    <td>42</td>
                                    <td>
                                        <a href="search.html" className="btn btn-sm btn-outline-primary">View</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>UX/UI Design Intern</td>
                                    <td>Oct 12, 2023</td>
                                    <td><span className="badge bg-success">Active</span></td>
                                    <td>28</td>
                                    <td>
                                        <a href="search.html" className="btn btn-sm btn-outline-primary">View</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Data Science Co-op</td>
                                    <td>Oct 5, 2023</td>
                                    <td><span className="badge bg-success">Active</span></td>
                                    <td>36</td>
                                    <td>
                                        <a href="search.html" className="btn btn-sm btn-outline-primary">View</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Backend Engineer Intern</td>
                                    <td>Sep 28, 2023</td>
                                    <td><span className="badge bg-warning">Closing</span></td>
                                    <td>53</td>
                                    <td>
                                        <a href="search.html" className="btn btn-sm btn-outline-primary">View</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Product Manager Intern</td>
                                    <td>Sep 20, 2023</td>
                                    <td><span className="badge bg-secondary">Closed</span></td>
                                    <td>31</td>
                                    <td>
                                        <a href="search.html" className="btn btn-sm btn-outline-primary">View</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
