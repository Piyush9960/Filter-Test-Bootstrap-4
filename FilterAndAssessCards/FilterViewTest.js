import React from 'react';
import './FilterViewTestStyle.css';
import AssessCardsNew from './AssessCardNew';

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
                    <li className="nav-item"><a href="#" className="nav-link active"><i className="fa fa-fw fa-line-chart mr-2"></i>Best Seller</a></li>
                    <li className="nav-item"><a href="#" className="nav-link"><i className="fa fa-fw fa-calendar-o mr-2"></i>Highest reviewed</a></li>
                </ul>
            </div>
            <div className="mb-4">
                <div className="small mb-3"><i className="fa fa-filter" aria-hidden="true"></i> Filter</div>
                <ul className="nav flex-column nav-pills">
    <li> <label htmlFor='info1' className='switch switch--info'>
    <input className='switch__input' type="checkbox" id='info1' />
    <div className="switch__box">
        <span className="switch__box-inner"></span>
    </div>
    <p className="switch__desc">React JS</p>
</label></li>
<li> <label htmlFor='info2' className='switch switch--info'>
    <input className='switch__input' type="checkbox" id='info2' />
    <div className="switch__box">
        <span className="switch__box-inner"></span>
    </div>
    <p className="switch__desc">Anular JS</p>
</label></li>

<li> <label htmlFor='info3' className='switch switch--info'>
    <input className='switch__input' type="checkbox" id='info3' />
    <div className="switch__box">
        <span className="switch__box-inner"></span>
    </div>
    <p className="switch__desc">Python</p>
</label></li>

<li> <label htmlFor='info4' className='switch switch--info'>
    <input className='switch__input' type="checkbox" id='info4' />
    <div className="switch__box">
        <span className="switch__box-inner"></span>
    </div>
    <p className="switch__desc">Java</p>
</label></li>

<li> <label htmlFor='info5' className='switch switch--info'>
    <input className='switch__input' type="checkbox" id='info5' />
    <div className="switch__box">
        <span className="switch__box-inner"></span>
    </div>
    <p className="switch__desc">R Programming</p>
</label></li>

    </ul>
            </div>
            <div className="mb-4">
                <div className="small mb-3"><i className="fa fa-level-up" aria-hidden="true"></i> Level </div>
                <ul className="nav flex-column nav-pills">
    <li className="nav-item">
        <span href="#" className="d-flex nav-link">
    <div className="media">
        <div className="mr-3 align-self-center media-left media-middle">
            <ul>
            <li> <label htmlFor='level1' className='switch switch--info'>
                <input className='switch__input' type="checkbox" id='level1' checked />
                <div className="switch__box">
                    <span className="switch__box-inner"></span>
                </div>
                <p className="text-primary switch__desc">Beginner</p>
            </label></li>
    </ul>
    </div>
    </div><i className="fa fa-fw fa-circle text-success ml-auto align-self-center ml-2"></i></span>
                    </li>
                

                    <li className="nav-item">
        <span href="#" className="d-flex nav-link">
    <div className="media">
        <div className="mr-3 align-self-center media-left media-middle">
            <ul>
            <li> <label htmlFor='level2' className='switch switch--info'>
                <input className='switch__input' type="checkbox" id='level2' checked />
                <div className="switch__box">
                    <span className="switch__box-inner"></span>
                </div>
                <p className="text-primary switch__desc">Moderate</p>
            </label></li>
    </ul>
    </div>
    </div><i className="fa fa-fw fa-circle text-warning ml-auto align-self-center ml-2"></i></span>
                    </li>
                   

                    <li className="nav-item">
        <span href="#" className="d-flex nav-link">
    <div className="media">
        <div className="mr-3 align-self-center media-left media-middle">
            <ul>
            <li> <label htmlFor='level3' className='switch switch--info'>
                <input className='switch__input' type="checkbox" id='level3' checked/>
                <div className="switch__box">
                    <span className="switch__box-inner"></span>
                </div>
                <p className="text-primary switch__desc">Expert</p>
            </label></li>
    </ul>
    </div>
    </div><i className="fa fa-fw fa-circle text-danger ml-auto align-self-center ml-2"></i></span>
                    </li>
                    <li className="nav-item"><a href="#" className="nav-link"><i className="fa fa-fw fa-plus mr-2"></i>Explore latest</a></li>
                </ul>
            </div>
        </div>
        <div className="col-lg-9">
            <div className="d-flex flex-column flex-md-row mb-3 mb-md-0">
                <nav className="mr-auto d-flex align-items-center" aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="active breadcrumb-item" aria-current="page"><a href="/"><i className="fa fa-home"></i></a></li>
                        <li className="active breadcrumb-item" aria-current="page">Assessments</li>
                    </ol>
                </nav>
                <div role="toolbar" className="btn-toolbar">
                    <div role="group" className="mr-auto mr-md-2 btn-group"><span className="align-self-center btn btn-secondary active"
                     aria-current="page" id="tooltipShowList">
                         <i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                         </div>
                    <div role="group" className="btn-group">
                        <button id="tooltipAddNew" className="align-self-center btn btn-primary"><i className="fa-fw fa fa-plus"></i></button>
                    </div>
                </div>
            </div>


            {/******* cards New look.. ********/}
        <AssessCardsNew/>



            
        </div>
    </div>
</div>
    )
}

export default FilterTest;