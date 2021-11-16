import { useState } from 'react';
import axios from 'axios';

function ResModal() {
    let name, phone, gender, email, password;
    var usercode = "";
    var today = new Date();
    var createdate = today.getDate() + '-' + today.getMonth() + '-' + today.getFullYear();
    const [form, setForm] = useState({
        usercode,
        email,
        phone,
        password,
        name,
        createdate,
        gender
    });
    const [passtype, setPasstype] = useState('password');
    const [repass, setRepass] = useState();

    const Regis = async () => {
        const insert_user = {
            "Device": {
                "DeviceEnvironment": "WEB"
            },
            "Action": {
                "ActionCode": "USER_SUQD.insert_user"
            },
            "Data": form,
        }
        console.log(insert_user);

        let formdata = await axios.post('https://dev-api-interns.hdinsurance.com.vn/OpenApi/TT/Post', insert_user)
        const { data } = formdata;
        console.log(data);
        if (data.Success) {
            if (repass === form.password) {
                if (data.Data[0].length != 0) {
                    data.Data.forEach(e => {
                        if (e[0].TRANGTHAI == 'Dang ky thanh cong') {
                            alert('Bạn đã đăng ký thành công');
                        }
                        else if (e[0].TRANGTHAI == 'Email da ton tai') {
                            alert('Email đã tồn tại')
                        }
                    });
                }
            } else alert('Xác nhận mật khẩu không trùng khớp');
        } else alert('Bạn chưa điền đủ thông tin')
    }

    return (
        <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">

                    <div className="modal-header px-0">
                        <h4 className="modal-title">Đăng ký</h4>
                        <button type="button" data-bs-dismiss="modal"><i className="fas fa-times"></i></button>
                    </div>

                    <div className="modal-body px-0">
                        <form>
                            <div className='row'>
                                <div className='col'>
                                    <div className='name space'>
                                        <label>Họ và tên</label>
                                        <input className='form-control' type='text' placeholder='Trần Văn A'
                                            onChange={(e) => {
                                                setForm(prev => ({
                                                    ...prev,
                                                    name: e.target.value
                                                }))
                                            }} />
                                    </div>
                                    <div className='phone space'>
                                        <label>Số điện thoại</label>
                                        <input className='form-control' type='number' placeholder='0123 456 789'
                                            onChange={(e) => {
                                                setForm(prev => ({
                                                    ...prev,
                                                    phone: e.target.value,

                                                }))
                                            }} />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='gender space'>
                                        <label>Giới tính</label>
                                        <select className="form-select" name='gender'
                                            onChange={(e) => {
                                                setForm(prev => ({
                                                    ...prev,
                                                    gender: e.target.value
                                                }))
                                            }} >
                                            <option >Chọn</option>
                                            <option value='1'>Nam</option>
                                            <option value='0'>Nữ</option>
                                        </select>
                                    </div>
                                    <div className='email space'>
                                        <label>Email</label>
                                        <input className='form-control' type='email' placeholder='example@gmail.com'
                                            onChange={(e) => {
                                                setForm(prev => ({
                                                    ...prev,
                                                    email: e.target.value
                                                }))
                                            }} />
                                    </div>
                                </div>
                            </div>
                            <div className='space'>
                                <label>Mật khẩu</label>
                                <div className='flex form-control pass'>
                                    <input className='form-control' type={passtype} placeholder='Mật khẩu'
                                        onChange={(e) => {
                                            setForm(prev => ({
                                                ...prev,
                                                password: e.target.value
                                            }))
                                        }} />
                                    <button className='btn' type='button' onClick={() => {
                                        const type = passtype === 'text' ? 'password' : 'text';
                                        setPasstype(type)
                                    }}>
                                        <i className="fas fa-eye"></i></button>
                                </div>
                            </div>
                            <div className='space'>
                                <label>Xác nhận mật khẩu</label>
                                <div className='flex form-control pass'>
                                    <input className='form-control' type={passtype} placeholder='Mật khẩu'
                                        onChange={(e) => {
                                            setRepass(e.target.value)
                                        }} />
                                    <button className='btn' type='button' onClick={() => {
                                        const type = passtype === 'text' ? 'password' : 'text';
                                        setPasstype(type)
                                    }}>
                                        <i className="fas fa-eye"></i></button>
                                </div>
                            </div>
                            <div className='sub flex'>
                                <div className='btn log flex' data-bs-dismiss="modal" onClick={Regis}>
                                    <div className='inner'>Đăng ký</div>
                                    <i className="fas fa-arrow-right" />
                                </div>
                                <button className='btn link' type='reset'>Xóa hết thông tin</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ResModal;