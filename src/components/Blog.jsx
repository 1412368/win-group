import React from "react";
import BlogPost from "./BlogPost"

class Blog extends React.Component {
    render() {
        return (
            <div class="content-page">
                <div class="content">
                    <div class="container">
                        <div class="blog-post blog-post-column m-b-20">
                            <div class="post-image" style={{margintop:'-50px'}}>
                                <img src="/images/antoine-barres.jpg" alt="" class="img-responsive" style={{ width: '100%', height: '200px' }}/>
                                <a class="pull-left" href="#" style={{ width: '100px', height: '100px', position:"absolute", top:"100px" }}>
                                    <img class=""
                                        src="/images/placeholder.jpg" alt="img" style={{ width: '100px', height: '100px'}} />
                                </a>
                                <span class="label" style={{left:"100px"}}><h3>Company Name</h3></span>
                            </div>
                            <div class="p-20">
                                <BlogPost></BlogPost>
                                <BlogPost></BlogPost>
                                <BlogPost></BlogPost>
                                <BlogPost></BlogPost>
                                <BlogPost></BlogPost>
                                <BlogPost></BlogPost>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;