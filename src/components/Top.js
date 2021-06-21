import React from 'react';

const Top=()=>{
    var date=new Date();
    return(
        <div className="container-fuild" style={styles.outer}>
            <div className="row">
                <div className="col-lg-8 col-md-6 col-sm-12">
                    <h4>Dashboard</h4>
                    <p>{date.toDateString()}</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="d-flex justify-content-end">
                        <div className="pt-1">User</div>
                        <div className="btn">
                                <i className="fas fa-user"></i>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="btn btn-primary">+ Add</div>
                        <div>
                            <div className="input-group">
                            <button type="button" className="btn">
                                <i className="fas fa-search"></i>
                            </button>
                            <div className="form-outline">
                                <input type="search" id="form1" className="form-control" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles={
    outer:{
        paddingTop:5,
        paddingRight:20
    }
}

export default Top;