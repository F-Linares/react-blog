import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
                <div className="singlePostWrapper">
                    <img 
                        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                        alt="" 
                        className="singlePost img" 
                    />
                    <h1 className="singlePostTitle">
                        Lorem ipsum dolor sit amet.
                        <div className="singlePostEdit">
                            <i className="singlePostIcon far fa-edit"></i>
                            <i className="singlePostIcon far fa-trash-alt"></i>    
                        </div> 
                    </h1>
                    <div className="singlePostInfo">
                        <span className="singlePostAuthor">Author: <b>Fernando</b>
                        </span>
                        <span className="singlePostDate">1 hour ago</span>
                    </div>
                    <p className="singlePostDesc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum 
                        error laborum fugit, rerum a rem inventore in laboriosam explicabo 
                        ut tempore eius eum ipsam aliquam quidem atque, voluptatibus 
                        pariatur reiciendis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum 
                        error laborum fugit, rerum a rem inventore in laboriosam explicabo 
                        ut tempore eius eum ipsam aliquam quidem atque, voluptatibus 
                        pariatur reiciendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum 
                        error laborum fugit, rerum a rem inventore in laboriosam explicabo 
                        ut tempore eius eum ipsam aliquam quidem atque, voluptatibus 
                        pariatur reiciendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum 
                        error laborum fugit, rerum a rem inventore in laboriosam explicabo 
                        ut tempore eius eum ipsam aliquam quidem atque, voluptatibus 
                        pariatur reiciendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum 
                        error laborum fugit, rerum a rem inventore in laboriosam explicabo 
                        ut tempore eius eum ipsam aliquam quidem atque, voluptatibus 
                        pariatur reiciendis.
                        </p>
                </div>
        </div>
    )
}