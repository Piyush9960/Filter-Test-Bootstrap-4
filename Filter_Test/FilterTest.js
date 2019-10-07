import React from 'react';
import './FilterTestStyle.css';

const FilterTest = () => {
    return(
<div className="container">
    <div className="row">
        <div className="col-lg-3">
            <div className="mb-4">
                <div className="small mb-3">Search</div>
                <div className="input-group">
                    <input placeholder="Search for..." type="text" className="form-control"/>
                    <div className="input-group-append">
                        <button className="btn btn-secondary"><i className="fa fa-search"></i></button>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <div className="small mb-3">Favorites</div>
                <ul className="nav flex-column nav-pills">
                    <li className="nav-item"><a href="#" className="nav-link active"><i className="fa fa-fw fa-line-chart mr-2"></i>Overview</a></li>
                    <li className="nav-item"><a href="#" className="nav-link"><i className="fa fa-fw fa-calendar-o mr-2"></i>Calendar</a></li>
                </ul>
            </div>
            <div className="mb-4">
                <div className="small mb-3">Projects</div>
                <ul className="nav flex-column nav-pills">
                    <li className="nav-item"><a href="#" className="d-flex nav-link"><i className="fa fa-fw fa-star-o align-self-center mr-2"></i>Analytics Redesign<span className="ml-auto align-self-center badge badge-secondary badge-pill">12</span></a></li>
                    <li className="nav-item"><a href="#" className="d-flex nav-link"><i className="fa fa-fw fa-star-o align-self-center mr-2"></i>New Website<span className="ml-auto align-self-center badge badge-secondary badge-pill">4</span></a></li>
                    <li className="nav-item"><a href="#" className="d-flex nav-link"><i className="fa fa-fw fa-star-o align-self-center mr-2"></i>Chart for Newsletter<span className="ml-auto align-self-center badge badge-secondary badge-pill">9</span></a></li>
                    <li className="nav-item"><a href="#" className="nav-link"><i className="fa fa-fw fa-plus mr-2"></i>Add New Project</a></li>
                </ul>
            </div>
            <div className="mb-4">
                <div className="small mb-3">People</div>
                <ul className="nav flex-column nav-pills">
                    <li className="nav-item">
                        <a href="#" className="d-flex nav-link">
                            <div className="media">
                                <div className="mr-3 align-self-center media-left media-middle">
                                    <div className="avatar-image avatar-image--loaded">
                                        <div className="avatar avatar--md avatar-image__image">
                                            <div className="avatar__content">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png"/></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div className="mt-0">Harvey Blick</div><span className="small">Pennsylvania, SD</span></div>
                            </div><i className="fa fa-fw fa-circle text-success ml-auto align-self-center ml-2"></i></a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="d-flex nav-link">
                            <div className="media">
                                <div className="mr-3 align-self-center media-left media-middle">
                                    <div className="avatar-image avatar-image--loaded">
                                        <div className="avatar avatar--md avatar-image__image">
                                            <div className="avatar__content">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png"/></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div className="mt-0">Hobart Hintz</div><span className="small">North Carolina, CT</span></div>
                            </div><i className="fa fa-fw fa-circle text-warning ml-auto align-self-center ml-2"></i></a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="d-flex nav-link">
                            <div className="media">
                                <div className="mr-3 align-self-center media-left media-middle">
                                    <div className="avatar-image avatar-image--loaded">
                                        <div className="avatar avatar--md avatar-image__image">
                                            <div className="avatar__content">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png"/></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div className="mt-0">Elmore Cummerata</div><span className="small">Michigan, NC</span></div>
                            </div><i className="fa fa-fw fa-circle text-danger ml-auto align-self-center ml-2"></i></a>
                    </li>
                    <li className="nav-item"><a href="#" className="nav-link"><i className="fa fa-fw fa-plus mr-2"></i>Add New People</a></li>
                </ul>
            </div>
        </div>
        <div className="col-lg-9">
            <div className="d-flex flex-column flex-md-row mb-3 mb-md-0">
                <nav className="mr-auto d-flex align-items-center" aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="active breadcrumb-item" aria-current="page"><a href="/"><i className="fa fa-home"></i></a></li>
                        <li className="active breadcrumb-item" aria-current="page">Projects List</li>
                    </ol>
                </nav>
                <div role="toolbar" className="btn-toolbar">
                    <div role="group" className="mr-auto mr-md-2 btn-group"><a className="align-self-center btn btn-secondary active" aria-current="page" id="tooltipShowList" href="/apps/projects/list"><i className="fa-fw fa fa-bars"></i></a><a className="align-self-center btn btn-secondary" id="tooltipShowGrid" href="/apps/projects/grid"><i className="fa-fw fa fa-th-large"></i></a></div>
                    <div role="group" className="btn-group">
                        <button id="tooltipAddNew" className="align-self-center btn btn-primary"><i className="fa-fw fa fa-plus"></i></button>
                    </div>
                </div>
            </div>
            <div className="mb-3 Card_custom-card--border_5wJKy card">
                <div className="table-responsive-xl">
                    <table className="mb-0 table table-hover">
                        <thead>
                            <tr>
                                <th className="align-middle bt-0">Star</th>
                                <th className="align-middle bt-0">Project</th>
                                <th className="align-middle bt-0">Status</th>
                                <th className="align-middle bt-0">Tasks Completed</th>
                                <th className="align-middle bt-0">People</th>
                                <th className="align-middle bt-0 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="align-middle">
                                    <div className="text-inverse"><a href="#"><i className="fa fa-fw fa-lg fa-star-o"></i></a></div>
                                </td>
                                <td className="align-middle">
                                    <div><a href="/apps/tasks/list">Ergonomic real-time adapter</a></div>
                                    <span>Last Edited by: Savanah Durgan <br/>Sunday, 12 June, 2018</span></td>
                                <td className="align-middle"><span className="badge badge-success badge-pill">Active</span></td>
                                <td className="align-middle">
                                    <div className="mb-2 progress" style={{height: '5px'}}>
                                        <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" 
                                        style={{width: '25%'}}></div>
                                    </div>
                                    <div>Tasks Completed:<span className="text-inverse">36/94</span></div>
                                </td>
                                <td className="align-middle">
                                    <div className="avatar-image avatar-image--loaded">
                                        <div className="avatar avatar--md avatar-image__image">
                                            <div className="avatar__content"><img src="https://bootdey.com/img/Content/avatar/avatar1.png"/></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-right">
                                    <div className="btn-group">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-link"><i className="fa fa-gear"></i></button>
                                        <div tabindex="-1" role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-folder-open mr-2"></i>View</button>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-ticket mr-2"></i>Add Task</button>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-paperclip mr-2"></i>Add Files</button>
                                            <div tabindex="-1" className="dropdown-divider"></div>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-trash mr-2"></i>Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <div className="text-inverse"><a href="#"><i className="fa fa-fw fa-lg fa-star-o"></i></a></div>
                                </td>
                                <td className="align-middle">
                                    <div><a href="/apps/tasks/list">Stand-alone clear-thinking initiative</a></div><span>Last Edited by: Brando Gutkowski <br/>Friday, 12 December, 2018</span></td>
                                <td className="align-middle"><span className="badge badge-danger badge-pill">Suspended</span></td>
                                <td className="align-middle">
                                    <div className="mb-2 progress" style={{height: '5px'}}>
                                        <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                                         style={{width: '50%'}}></div>
                                    </div>
                                    <div>Tasks Completed:<span className="text-inverse">36/94</span></div>
                                </td>
                                <td className="align-middle">
                                    <div className="avatar-image avatar-image--loaded">
                                        <div className="avatar avatar--md avatar-image__image">
                                            <div className="avatar__content"><img src="https://bootdey.com/img/Content/avatar/avatar2.png"/></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-right">
                                    <div className="btn-group">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-link"><i className="fa fa-gear"></i></button>
                                        <div tabindex="-1" role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-folder-open mr-2"></i>View</button>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-ticket mr-2"></i>Add Task</button>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-paperclip mr-2"></i>Add Files</button>
                                            <div tabindex="-1" className="dropdown-divider"></div>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-trash mr-2"></i>Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <div className="text-inverse"><a href="#"><i className="fa fa-fw fa-lg fa-star-o"></i></a></div>
                                </td>
                                <td className="align-middle">
                                    <div><a href="/apps/tasks/list">Configurable homogeneous knowledge user</a></div><span>Last Edited by: Wilmer Gorczany <br/>Tuesday, 12 June, 2018</span></td>
                                <td className="align-middle"><span className="badge badge-warning badge-pill">Waiting</span></td>
                                <td className="align-middle">
                                    <div className="mb-2 progress" style={{height: '5px'}}>
                                        <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" 
                                        style={{width: '70%'}}></div>
                                    </div>
                                    <div>Tasks Completed:<span className="text-inverse">36/94</span></div>
                                </td>
                                <td className="align-middle">
                                    <div className="avatar-image avatar-image--loaded">
                                        <div className="avatar avatar--md avatar-image__image">
                                            <div className="avatar__content"><img src="https://bootdey.com/img/Content/avatar/avatar3.png"/></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-right">
                                    <div className="btn-group">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-link"><i className="fa fa-gear"></i></button>
                                        <div tabindex="-1" role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-folder-open mr-2"></i>View</button>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-ticket mr-2"></i>Add Task</button>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-paperclip mr-2"></i>Add Files</button>
                                            <div tabindex="-1" className="dropdown-divider"></div>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-trash mr-2"></i>Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <div className="text-inverse"><a href="#"><i className="fa fa-fw fa-lg fa-star-o"></i></a></div>
                                </td>
                                <td className="align-middle">
                                    <div><a href="/apps/tasks/list">Progressive 3rd generation superstructure</a></div><span>Last Edited by: Eden Green <br/>Sunday, 12 September, 2018</span></td>
                                <td className="align-middle"><span className="badge badge-secondary badge-pill">Paused</span></td>
                                <td className="align-middle">
                                    <div className="mb-2 progress" style={{height: '5px'}}>
                                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
                                         style={{width: '90%'}}></div>
                                    </div>
                                    <div>Tasks Completed:<span className="text-inverse">36/94</span></div>
                                </td>
                                <td className="align-middle">
                                    <div className="avatar-image avatar-image--loaded">
                                        <div className="avatar avatar--md avatar-image__image">
                                            <div className="avatar__content"><img src="https://bootdey.com/img/Content/avatar/avatar4.png"/></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-right">
                                    <div className="btn-group">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-link"><i className="fa fa-gear"></i></button>
                                        <div tabindex="-1" role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-folder-open mr-2"></i>View</button>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-ticket mr-2"></i>Add Task</button>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-paperclip mr-2"></i>Add Files</button>
                                            <div tabindex="-1" className="dropdown-divider"></div>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-trash mr-2"></i>Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <div className="text-inverse"><a href="#"><i className="fa fa-fw fa-lg fa-star-o"></i></a></div>
                                </td>
                                <td className="align-middle">
                                    <div><a href="/apps/tasks/list">Virtual intermediate portal</a></div><span>Last Edited by: Gregoria Hagenes <br/>Friday, 12 October, 2018</span></td>
                                <td className="align-middle"><span className="badge badge-success badge-pill">Active</span></td>
                                <td className="align-middle">
                                    <div className="mb-2 progress" style={{height: '5px'}}>
                                        <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
                                         style={{width: '25%'}}></div>
                                    </div>
                                    <div>Tasks Completed:<span className="text-inverse">36/94</span></div>
                                </td>
                                <td className="align-middle">
                                    <div className="avatar-image avatar-image--loaded">
                                        <div className="avatar avatar--md avatar-image__image">
                                            <div className="avatar__content"><img src="https://bootdey.com/img/Content/avatar/avatar5.png"/></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-right">
                                    <div className="btn-group">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-link"><i className="fa fa-gear"></i></button>
                                        <div tabindex="-1" role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-folder-open mr-2"></i>View</button>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-ticket mr-2"></i>Add Task</button>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-paperclip mr-2"></i>Add Files</button>
                                            <div tabindex="-1" className="dropdown-divider"></div>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-trash mr-2"></i>Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <div className="text-inverse"><a href="#"><i className="fa fa-fw fa-lg fa-star-o"></i></a></div>
                                </td>
                                <td className="align-middle">
                                    <div><a href="/apps/tasks/list">Visionary client-server hardware</a></div><span>Last Edited by: Haskell Mills <br/>Monday, 12 July, 2018</span></td>
                                <td className="align-middle"><span className="badge badge-danger badge-pill">Suspended</span></td>
                                <td className="align-middle">
                                    <div className="mb-2 progress" style={{height: '5px'}}>
                                        <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                                         style={{width: '50%'}}></div>
                                    </div>
                                    <div>Tasks Completed:<span className="text-inverse">36/94</span></div>
                                </td>
                                <td className="align-middle">
                                    <div className="avatar-image avatar-image--loaded">
                                        <div className="avatar avatar--md avatar-image__image">
                                            <div className="avatar__content"><img src="https://bootdey.com/img/Content/avatar/avatar6.png"/></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-right">
                                    <div className="btn-group">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-link"><i className="fa fa-gear"></i></button>
                                        <div tabindex="-1" role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-folder-open mr-2"></i>View</button>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-ticket mr-2"></i>Add Task</button>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-paperclip mr-2"></i>Add Files</button>
                                            <div tabindex="-1" className="dropdown-divider"></div>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-trash mr-2"></i>Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <div className="text-inverse"><a href="#"><i className="fa fa-fw fa-lg fa-star-o"></i></a></div>
                                </td>
                                <td className="align-middle">
                                    <div><a href="/apps/tasks/list">Focused context-sensitive hardware</a></div><span>Last Edited by: Rey Hansen <br/>Friday, 12 May, 2018</span></td>
                                <td className="align-middle"><span className="badge badge-warning badge-pill">Waiting</span></td>
                                <td className="align-middle">
                                    <div className="mb-2 progress" style={{height: '5px'}}>
                                        <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"
                                         style={{width: '70%'}}></div>
                                    </div>
                                    <div>Tasks Completed:<span className="text-inverse">36/94</span></div>
                                </td>
                                <td className="align-middle">
                                    <div className="avatar-image avatar-image--loaded">
                                        <div className="avatar avatar--md avatar-image__image">
                                            <div className="avatar__content"><img src="https://bootdey.com/img/Content/avatar/avatar7.png"/></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-right">
                                    <div className="btn-group">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-link"><i className="fa fa-gear"></i></button>
                                        <div tabindex="-1" role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-folder-open mr-2"></i>View</button>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-ticket mr-2"></i>Add Task</button>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-paperclip mr-2"></i>Add Files</button>
                                            <div tabindex="-1" className="dropdown-divider"></div>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-trash mr-2"></i>Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <div className="text-inverse"><a href="#"><i className="fa fa-fw fa-lg fa-star-o"></i></a></div>
                                </td>
                                <td className="align-middle">
                                    <div><a href="/apps/tasks/list">Advanced mission-critical groupware</a></div><span>Last Edited by: Carey Runolfsson <br/>Friday, 12 May, 2018</span></td>
                                <td className="align-middle"><span className="badge badge-secondary badge-pill">Paused</span></td>
                                <td className="align-middle">
                                    <div className="mb-2 progress" style={{height: '5px'}}>
                                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
                                         style={{width: '90%'}}></div>
                                    </div>
                                    <div>Tasks Completed:<span className="text-inverse">36/94</span></div>
                                </td>
                                <td className="align-middle">
                                    <div className="avatar-image avatar-image--loaded">
                                        <div className="avatar avatar--md avatar-image__image">
                                            <div className="avatar__content"><img src="https://bootdey.com/img/Content/avatar/avatar1.png"/></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-right">
                                    <div className="btn-group">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-link"><i className="fa fa-gear"></i></button>
                                        <div tabindex="-1" role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-folder-open mr-2"></i>View</button>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-ticket mr-2"></i>Add Task</button>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-paperclip mr-2"></i>Add Files</button>
                                            <div tabindex="-1" className="dropdown-divider"></div>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-trash mr-2"></i>Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <div className="text-inverse"><a href="#"><i className="fa fa-fw fa-lg fa-star-o"></i></a></div>
                                </td>
                                <td className="align-middle">
                                    <div><a href="/apps/tasks/list">De-engineered tertiary matrix</a></div><span>Last Edited by: Jacynthe Beier <br/>Wednesday, 12 May, 2018</span></td>
                                <td className="align-middle"><span className="badge badge-success badge-pill">Active</span></td>
                                <td className="align-middle">
                                    <div className="mb-2 progress" style={{height: '5px'}}>
                                        <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
                                         style={{width: '25%'}}></div>
                                    </div>
                                    <div>Tasks Completed:<span className="text-inverse">36/94</span></div>
                                </td>
                                <td className="align-middle">
                                    <div className="avatar-image avatar-image--loaded">
                                        <div className="avatar avatar--md avatar-image__image">
                                            <div className="avatar__content"><img src="https://bootdey.com/img/Content/avatar/avatar2.png"/></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-right">
                                    <div className="btn-group">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-link"><i className="fa fa-gear"></i></button>
                                        <div tabindex="-1" role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-folder-open mr-2"></i>View</button>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-ticket mr-2"></i>Add Task</button>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-paperclip mr-2"></i>Add Files</button>
                                            <div tabindex="-1" className="dropdown-divider"></div>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-trash mr-2"></i>Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <div className="text-inverse"><a href="#"><i className="fa fa-fw fa-lg fa-star-o"></i></a></div>
                                </td>
                                <td className="align-middle">
                                    <div><a href="/apps/tasks/list">Progressive 4th generation emulation</a></div><span>Last Edited by: Baby Robel <br/>Thursday, 12 March, 2018</span></td>
                                <td className="align-middle"><span className="badge badge-danger badge-pill">Suspended</span></td>
                                <td className="align-middle">
                                    <div className="mb-2 progress" style={{height: '5px'}}>
                                        <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                                         style={{width: '50%'}}></div>
                                    </div>
                                    <div>Tasks Completed:<span className="text-inverse">36/94</span></div>
                                </td>
                                <td className="align-middle">
                                    <div className="avatar-image avatar-image--loaded">
                                        <div className="avatar avatar--md avatar-image__image">
                                            <div className="avatar__content"><img src="https://bootdey.com/img/Content/avatar/avatar3.png"/></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-right">
                                    <div className="btn-group">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-link"><i className="fa fa-gear"></i></button>
                                        <div tabindex="-1" role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-folder-open mr-2"></i>View</button>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-ticket mr-2"></i>Add Task</button>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-paperclip mr-2"></i>Add Files</button>
                                            <div tabindex="-1" className="dropdown-divider"></div>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-trash mr-2"></i>Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <div className="text-inverse"><a href="#"><i className="fa fa-fw fa-lg fa-star-o"></i></a></div>
                                </td>
                                <td className="align-middle">
                                    <div><a href="/apps/tasks/list">Sharable even-keeled access</a></div><span>Last Edited by: Ethan Little <br/>Saturday, 12 March, 2018</span></td>
                                <td className="align-middle"><span className="badge badge-warning badge-pill">Waiting</span></td>
                                <td className="align-middle">
                                    <div className="mb-2 progress" style={{height: '5px'}}>
                                        <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"
                                         style={{width: '70%'}}></div>
                                    </div>
                                    <div>Tasks Completed:<span className="text-inverse">36/94</span></div>
                                </td>
                                <td className="align-middle">
                                    <div className="avatar-image avatar-image--loaded">
                                        <div className="avatar avatar--md avatar-image__image">
                                            <div className="avatar__content"><img src="https://bootdey.com/img/Content/avatar/avatar4.png"/></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-right">
                                    <div className="btn-group">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-link"><i className="fa fa-gear"></i></button>
                                        <div tabindex="-1" role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-folder-open mr-2"></i>View</button>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-ticket mr-2"></i>Add Task</button>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-paperclip mr-2"></i>Add Files</button>
                                            <div tabindex="-1" className="dropdown-divider"></div>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-trash mr-2"></i>Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <div className="text-inverse"><a href="#"><i className="fa fa-fw fa-lg fa-star-o"></i></a></div>
                                </td>
                                <td className="align-middle">
                                    <div><a href="/apps/tasks/list">Optimized responsive attitude</a></div><span>Last Edited by: Kolby Batz <br/>Saturday, 12 February, 2018</span></td>
                                <td className="align-middle"><span className="badge badge-secondary badge-pill">Paused</span></td>
                                <td className="align-middle">
                                    <div className="mb-2 progress" style={{height: '5px'}}>
                                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
                                         style={{width: '90%'}}></div>
                                    </div>
                                    <div>Tasks Completed:<span className="text-inverse">36/94</span></div>
                                </td>
                                <td className="align-middle">
                                    <div className="avatar-image avatar-image--loaded">
                                        <div className="avatar avatar--md avatar-image__image">
                                            <div className="avatar__content"><img src="https://bootdey.com/img/Content/avatar/avatar5.png"/></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle text-right">
                                    <div className="btn-group">
                                        <button type="button" aria-haspopup="true" aria-expanded="false"
                                         className="dropdown-toggle btn btn-link"><i className="fa fa-gear"></i></button>
                                        <div tabindex="-1" role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-folder-open mr-2"></i>View</button>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-ticket mr-2"></i>Add Task</button>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-paperclip mr-2"></i>Add Files</button>
                                            <div tabindex="-1" className="dropdown-divider"></div>
                                            <button type="button" tabindex="0" className="dropdown-item"><i className="fa fa-fw fa-trash mr-2"></i>Delete</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="d-flex justify-content-center pb-0 card-footer">
                    <nav className="" aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item"><a href="#" className="page-link" aria-label="Previous"><span aria-hidden="true"><i className="fa fa-fw fa-angle-left"></i></span><span className="sr-only">Previous</span></a></li>
                            <li className="page-item active"><a href="#" className="page-link">1</a></li>
                            <li className="page-item"><a href="#" className="page-link">2</a></li>
                            <li className="page-item"><a href="#" className="page-link">3</a></li>
                            <li className="page-item"><a href="#" className="page-link" aria-label="Next"><span aria-hidden="true"><i className="fa fa-fw fa-angle-right"></i></span><span className="sr-only">Next</span></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default FilterTest;