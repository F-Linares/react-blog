import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img 
            className="postImg"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Boulder_after_a_snowfall..JPG/1280px-Boulder_after_a_snowfall..JPG" 
                alt=""
            />    
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Music</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet 
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Necessitatibus tempora ipsam ipsum quas consequatur quod consectetur, 
                debitis assumenda voluptatum eligendi, dolor quia tempore illo obcaecati 
                excepturi, soluta exercitationem. Dolorem, quisquam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Necessitatibus tempora ipsam ipsum quas consequatur quod consectetur, 
                debitis assumenda voluptatum eligendi, dolor quia tempore illo obcaecati 
                excepturi, soluta exercitationem. Dolorem, quisquam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Necessitatibus tempora ipsam ipsum quas consequatur quod consectetur, 
                debitis assumenda voluptatum eligendi, dolor quia tempore illo obcaecati 
                excepturi, soluta exercitationem. Dolorem, quisquam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Necessitatibus tempora ipsam ipsum quas consequatur quod consectetur, 
                debitis assumenda voluptatum eligendi, dolor quia tempore illo obcaecati 
                excepturi, soluta exercitationem. Dolorem, quisquam.

            </p>
        </div>
    )
}