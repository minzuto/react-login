import { Link } from 'react-router-dom';
import '../css/Profile.css';
import images from '../img/image';
import Post from './Post';

function Profile() {
    return (
        <div className='profile'>
            <div className='header'>
                <nav className='navbar-light'>
                    <ul className="nav justify-content-end">
                        <li>
                            <a className='active' href='#'>Trang chủ</a>
                        </li>
                        <li>
                            <a href='#'>Thông báo</a>
                            <span>12</span>
                        </li>
                        <li>
                            <div className="btn-group">
                                <button type="button" className="btn ">Tài khoản</button>
                                <button type="button" className="btn dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
                                   
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Cài đặt</a></li>
                                    <li><Link className="dropdown-item" to='/'>Đăng xuất</Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className='info'>
                    <div className='top flex'>
                        <div className='avt'>
                            <img src={images.avt.default} />
                        </div>
                        <div className='about'>
                            <h2>Nguyễn Minh</h2>
                            <p>Là 1 lập trình viên yêu nghề. Tôi muốn lan toả niềm đam mê bất tận với tất cả mọi người.
                                Hãy theo dõi tôi và tạo ra 1 cộng đồng lớn mạnh</p>
                        </div>
                    </div>
                    <div className='bot flex'>
                        <div className='flex'>
                            <div className='num'>1.3K</div>
                            <div>Bài viết</div>
                        </div>
                        <div className='flex'>
                            <div className='num'>14</div>
                            <div>Ảnh</div>
                        </div>
                        <div className='flex'>
                            <div className='num'>2.3K</div>
                            <div>Người theo dõi</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='content'>
                <div className='row'>
                    <div className='col'>
                        <div className='title just flex'>
                            <div>Bài viết gần đây</div>
                            <div>Xem tất cả</div>
                        </div>
                        <div className='row second'>
                            <div className='col'>
                                <Post number='1' src={images.img5.default} />
                                <Post number='3' src={images.img4.default} />
                            </div>
                            <div className='col'>
                                <Post number='2' src={images.img2.default} />
                                <Post number='4' src={images.img3.default} />
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='title just flex'>
                            <div>Ảnh
                                <span>6</span>
                            </div>
                            <div>Xem tất cả</div>
                        </div>
                        <div className='row third'>
                            <div className='col'>
                                <img src={images.content3.default} />
                                <img src={images.content4.default} />
                            </div>
                            <div className='col'>
                                <img src={images.content5.default} />
                                <img src={images.content6.default} />
                            </div>
                            <div className='col'>
                                <img src={images.content2.default} />
                                <img src={images.content1.default} />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}
export default Profile;