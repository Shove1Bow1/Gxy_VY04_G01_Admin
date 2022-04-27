import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const EditService=()=>{
    const [getService, setService] = useState([]);  
    const location=useLocation();
    const id=location.state;
    const fetchTasks=async()=>{
        const res=await fetch(`http://localhost:8020/Admin/getServiceManager/${id}`,{mode:"cors"})
        const data = await res.json();
        // console.log(data)
        return data;
      }
    useEffect(()=>{
        const getServiceCode=async()=>{
            const ServiceCode=await fetchTasks();
            setName(ServiceCode[0].APP_NAME);
            setMin(ServiceCode[0].MIN_PRICE);
            setMax(ServiceCode[0].MAX_PRICE);
            setPoint(ServiceCode[0].POINT_EXCHANGE_RANGE);
        }
        getServiceCode()
    },[])
    function handleControl(e){
        name=e.target
    }
   function onSubmit(){

   }
    var name;
    var [getName,setName]=useState("");
    var [getMin,setMin]=useState(0);
    var [getMax,setMax]=useState(0);
    var [getPoint,setPoint]=useState(0);
    return(
        <div>
            <div key={id}>
                <form className="container-fluid form-control" style={{width:50+"%"}} onSubmit={onSubmit} method="patch">
                    <div style={{textAlign:"center"}}>
                           <h3>{getName}</h3>
                    </div>
                 
                    <div className="">
                        <label>Giá trị tối thiểu</label>
                        <div>
                               <input value={getMin} className="form-control" onChange={(name)=>setMin(name.target.value)} type="numbder" placeholder={name}/>
                        </div>
                    </div>
                    <div className="">
                        <label>Giá trị tối đa</label>
                        <div>
                              <input value={getMax} className="form-control" onChange={(name)=>setMax(name.target.value)} type="numbder" />
                        </div>
                      
                    </div>
                    <div className="">
                        <label>Mức đổi thưởng</label>
                        <div>
                            <input value={getPoint} className="form-control" onChange={(name)=>setPoint(name.target.value)} type="numbder" />
                        </div>
                    </div>
                    <div style={{marginTop:5+"px",textAlign:"center"}}> 
                        <Link to="/Admin/Services" style={{marginRight:5+"px"}}><input type="submit" value="Huỷ thay đổi" /></Link>
                        <Link to="/Admin/Services"><input type="button" value="Lưu thay đổi" /></Link>
                    </div>
                 
                </form>
            </div>
        </div>
    )
}
export default EditService;