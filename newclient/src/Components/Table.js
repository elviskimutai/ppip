import React from "react";
import { MDBDataTable } from "mdbreact";
const Table=(props)=>{  
  
    const data = {
        columns: props.columns,
        rows: props.Rows
      };
      return (
        <div className="wrapper wrapper-content animated fadeInRight">
        <div className="row">
          <div className="col-lg-12">
            <div className="ibox ">
              <div className="ibox-content">
              <div className="table-responsive">
                    <MDBDataTable  striped responsiveLg btn exportToCSV bordered hover data={data} info />
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      );
}
export default Table;