import axios from 'axios';
import { useState, useContext } from 'react';
import { LoginContext } from './LoginProvider';
import ForgetModal from './ForgetModal';
import { useNavigate } from 'react-router';

function Form_login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passtype, setPasstype] = useState('password');

  const value = useContext(LoginContext);
  console.log(value)
  let navigate= useNavigate();
  
  const Login = async () => {
    const find_user = {
      Device: {
        DeviceEnvironment: "WEB"
      },
      Action: {
        ActionCode: "USER_SUQD.find_user"
      },
      Data: {
        email,
        password
      }
    }
    console.log(find_user)

    let dataLogin = await axios.post('https://dev-api-interns.hdinsurance.com.vn/OpenApi/TT/Post', find_user)
    const { data } = dataLogin
    console.log(data);
    if (data.Success) {
      if (data.Data[0].length != 0) {
        data.Data.forEach(e => {
          if (e[0].EMAIL === email && e[0].PASSWORD === password) {
            value.onSuccess()
            navigate('/profile')
          }
        });
      } else alert('Bạn đã nhập sai thông tin đăng nhập')
    } else alert('Bạn chưa nhập đủ thông tin');
  }

  return (
    <div>
      <div className='title'>
        <div className='one'>Chào mừng bạn trở lại</div>
        <div className='two'>Đăng nhập vào hệ thống</div>
      </div>
      <form>
        <div className='input'>
          <div className='user space'>
            <input className='form-control' type='text' placeholder='E-mail hoặc Số điện thoại'
              onChange={(e) => {
                setEmail(e.target.value)
              }} />
          </div>
          <div className='pass form-control flex space'>
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
          <div className='btn log flex' onClick={Login}>
            <div className='inner'>Đăng nhập</div>
            <i className="fas fa-arrow-right" />
          </div>
          <a className='link' href='#' data-bs-toggle="modal" data-bs-target="#ForgetModal">Quên mật khẩu</a>
        </div>
      </form>
      <ForgetModal />
    </div>
  );
}
export default Form_login;