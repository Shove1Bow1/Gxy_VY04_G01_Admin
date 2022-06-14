import React,{useState,useEffect} from 'react';
import { useCookies } from 'react-cookie';
import './Password.css';
import axios from 'axios';
export default function ChangePassword(){
    const [getCookies,setCookes]=useCookies();
    const [getOldPassword,setOldPassword]=useState("");
    const [getNewPassword,setNewPassword]=useState("");
    const [getConfirmPassword,setConfirmPassword]=useState("");
    function handleNewPassword(){
        if(getNewPassword!==getConfirmPassword){
            window.alert("Hai Mật khẩu mới không giống nhau");
            return;
        }
        if(getCookies.Admin){
            axios.post("https://gxyvy04g01backend-production.up.railway.app/Admin/updatePassword", {
                ADMIN_OLD_PASSWORD: getOldPassword,
                ADMIN_NEW_PASSWORD: getNewPassword
            }).then(res => {
                if (res.data.STATUS) {
                    window.alert("Thay đổi mật khẩu thành công");
                }
                else
                {
                    window.alert(res.data.MESSAGE);
                    return;
                }
            })
         
        }
    }
    function handleCancel(){
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
    }
    return (
        <div>
            <div>
                <div className="row-body">
                    <div className="card offset-md-4 col-md-6 ">
                        <div className="card-body">
                            <div className="form-group">
                                <div style={{ fontWeight: "bolder" }}>Mật khẩu cũ:</div>
                                <input type="password" placeholder="Nhập mật khẩu hiện tại của bạn" name="oldPassword" className="form-control"
                                    value={getOldPassword} onChange={(e) => setOldPassword(e.target.value)}></input>
                            </div>
                            <div className="form-group">
                                <div style={{ fontWeight: "bolder" }}>Mật khẩu mới:</div>
                                <input type="password" placeholder="Nhập mật khẩu mới của bạn" name="newPassword" className="form-control"
                                    value={getNewPassword} onChange={(e) => setNewPassword(e.target.value)}></input>
                            </div>
                            <div className="form-group">
                                <div style={{ fontWeight: "bolder" }}>Xác nhận mật khẩu:</div>
                                <input type="password" placeholder="Nhập lại mật khẩu mới của bạn" name="confirmPassword" className="form-control"
                                    value={getConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
                            </div>
                            <div>Hảy đảm bảo rằng nó khớp với mật khẩu của bạn</div>
                        </div>
                    </div>
                </div>
                <div className='row-head'>
                    <div className='card offset-md-4 col-md-6 '>
                        <div className='card-head'>
                            <div className="pass-head" style={{ fontWeight: "bolder" }}>Đổi mật khẩu</div>
                            <div className="click-btn">
                                <button className="btn-btn-save" onClick={handleNewPassword}>Lưu</button>
                                <button className="btn-btn-cancel" onClick={handleCancel}>Hủy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}