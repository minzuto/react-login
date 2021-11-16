function Post(props) {
    return (
        <div className='post'>
            <img src={props.src} />
            <div className='post-content'>
                <div>Bài viết {props.number}</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ...</div>
            </div>
        </div>
    );
}
export default Post;