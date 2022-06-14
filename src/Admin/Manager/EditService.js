import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useLocation } from "react-router-dom";

const EditService=()=>{
    const [getService, setService] = useState([]);
    const [getCookies]=useCookies();
    const location=useLocation();
    const id=location.state;
    useEffect(()=>{
        // const getServiceCode=async()=>{
        //     const ServiceCode=await fetchTasks();
        axios.get(`https://gxyvy04g01backend-production.up.railway.app/Admin/getService/${id}`).then(res => res).then(data => {
            setName(data.data[0].APP_NAME);
            setMin(data.data[0].MIN_PRICE);
            setMax(data.data[0].MAX_PRICE);
            setPoint(data.data[0].POINT_EXCHANGE_RANGE);
        }
        )
        // return data;
          
        // }
        // getServiceCode()
    },[])
    function handleControl(e){
        name=e.target
    }
   function onSubmit(){
        if(parseInt(getMin)<100000){
            window.alert("Số tiền tối thiểu không được dưới 100000");
            return;
        }
        if(parseInt(getMin)>=parseInt(getMax)){
            window.alert("Số tiền tối thiểu không được lớn hơn hoặc bằng giá trị lớn nhất");
            return;
        }
        if(parseInt(getMax)>200000000){
            window.alert("Số tiền lớn nhất không được lớn hơn 200000000");
            return;
        }
        if(parseInt(getMax)<50000000){
            window.alert("Số tiền lớn nhất không được nhỏ hơn 100000000");
            return;
        }
        if(parseInt(getPoint)<500){
            window.alert("Số điểm thưởng quy đổi không được nhỏ hơn 500");
            return;
        }
        if(parseInt(getPoint)<500){
            window.alert("Số điểm thưởng quy đổi không được lớn hơn 20000");
            return;
        }
        axios.post("http://localhost:8020/Admin/updateServiceManager",{
            APP_ID:id,
            TOKEN:getCookies.Admin,
            MIN_PRICE:getMin,
            MAX_PRICE:getMax,
            POINT_EXCHANGE_RANGE:getPoint,
        }).then(res=>{
            window.alert(res.data.MESSAGE)
        })
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
                            <input value={getPoint} className="form-control" onChange={(name)=>setPoint(name.target.value)} type="text" />
                        </div>
                    </div>
                    <div style={{marginTop:5+"px",textAlign:"center"}}> 
                        <Link to="/Services" style={{marginRight:5+"px"}}><input type="submit" value="Huỷ thay đổi" /></Link>
                        <input onClick={()=>onSubmit()} type="button" value="Lưu thay đổi" />
                    </div>
                 
                </form>
            </div>
        </div>
    )
}
export default EditService;