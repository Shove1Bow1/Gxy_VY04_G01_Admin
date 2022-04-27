import React from "react";
import { RulesData } from "./RuleData";
const Rules=()=>{
    return (
        <div>           
            <h4>Luật dùng để quy định một số thay đổi trên hệ thống</h4>
            <table className="table table-striped table-bordered table-responsive" >
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Nội dung</th>
                    </tr>
                   
                </thead>
                <tbody>
                    {RulesData.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.Number}</td>
                                <td style={{textAlign:"start"}}>{item.Content}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Rules;