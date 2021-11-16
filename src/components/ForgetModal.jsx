import { useState } from 'react';
import axios from 'axios';

function ForgetModal() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passtype, setPasstype] = useState('password');

    const Reset = async () => {
        const reset_password = {
            "Device": {
                "DeviceEnvironment": "WEB"
            },
            "Action": {
                "ActionCode": "USER_SUQD.reset_password"
            },
            "Data": {
                email,
                password
            }
        }
        console.log(reset_password)

        let resetpassdata = await axios.post('https://dev-api-interns.hdinsurance.com.vn/OpenApi/TT/Post', reset_password)
        const { data } = resetpassdata;
        console.log(data)
        if (data.Success) {
            if (data.Data[0].length != 0) {
                data.Data.forEach(e => {
                    if (e[0].TRANGTHAI == 'Thanh cong') {
                        alert('Đã đặt lại mật khẩu')
                    }
                    else if (e[0].TRANGTHAI == 'That bai') {
                        alert('Bạn đã nhập sai Email')
                    }
                })
            }
        } else alert('Bạn chưa điền đủ thông tin')
    }

    return (
        <div className="modal fade" id="ForgetModal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">

                    <div className="modal-header px-0">
                        <h4 className="modal-title">Đặt lại mật khẩu</h4>
                        <button type="button" data-bs-dismiss="modal"><i className="fas fa-times"></i></button>
                    </div>

                    <div className="modal-body px-0">
                        <form>
                            <div className='email space'>
                                <label>Email</label>
                                <input className='form-control' type='email' placeholder='example@gmail.com'
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                />
                            </div>
                            <div className='space'>
                                <label>Mật khẩu mới</label>
                                <div className='flex form-control pass'>
                                    <input className='form-control' type={passtype} placeholder='Mật khẩu'
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }} />
                                    <button className='btn' type='button' onClick={() => {
                                        const type = passtype === 'text' ? 'password' : 'text';
                                        setPasstype(type)
                                    }}>
                                        <i className="fas fa-eye"></i></button>
                                </div>
                            </div>
                            <div className='sub flex'>
                                <div className='btn log flex' data-bs-dismiss="modal" onClick={Reset}>
                                    <div className='inner'>Xác nhận</div>
                                    <i className="fas fa-arrow-right" />
                                </div>
                                <button className='btn link' type='reset'>Xóa hết thông tin</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ForgetModal;