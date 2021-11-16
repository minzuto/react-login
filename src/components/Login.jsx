import Footer_icon from "./Footer_icon";
import Form_login from "./Form_login";
import ResModal from "./ResModal";
import cover from '../img/img1.png';

function Login (props) {
    return (
        <div className="App flex">
          <div className='cover'>
            <div className='cover-inner'>
              <img src={cover} />
            </div>
          </div>
          <div className='login'>
            <div className='regis'>
              <button type='button' className='btn' data-bs-toggle="modal" data-bs-target="#myModal">Đăng ký</button>
            </div>
            <ResModal />
            <Form_login />
            <div className='footer flex'>
              <div className='footer-about'>Theo dõi trên mạng xã hội</div>
              <Footer_icon />
            </div>
          </div>
        </div>
    );
}
export default Login;