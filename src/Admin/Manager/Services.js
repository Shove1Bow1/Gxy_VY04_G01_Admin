import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
class Services extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[],
            DetailLoaded:false
        };
    }
    componentDidMount() {
       fetch(
        "http://127.0.0.1:8020/Admin/getServiceManager",{mode:"cors"}
       ).then((res)=>res.json()).then((data)=>{
           this.setState({
               items:data,
               DetailLoaded:true
            })
       })
    }
  
    render(){    
        var id;
        var {DetailLoaded,items}=this.state;
         return (
            <div>
                 <h3>Quản lý các dịch vụ</h3>
                 <table className="table table-striped table-bordered table-responsive">
                     <thead>
                         <tr>
                             <th>STT</th>
                             <th>Tên dịch vụ</th>
                             <th>Quy định tối thiểu</th>
                             <th>Quy định tối đa</th>
                             <th>Điểm thưởng</th>
                             <th>Hành động</th>
                         </tr>

                     </thead>
                     <tbody>
                         {items.map((item) => {
                             return (
                                 <tr key={item.APP_ID}>
                                     <td>{item.APP_ID}</td>
                                     <td>{item.APP_NAME}</td>
                                     <td>{item.MIN_PRICE}</td>
                                     <td>{item.MAX_PRICE}</td>
                                     <td>{item.POINT_EXCHANGE_RANGE}</td>
                                     <td><Link to={`/Services/${item.APP_ID}/EditService`} state={id=item.APP_ID}><button>Edit</button></Link></td>
                                 </tr>
                             )
                         })}
                     </tbody>
                 </table>
            </div>
        )
    }
}

export default Services;