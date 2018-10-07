import React from "react";
import AddComment from "./AddComment";
import Comment from "./Comment";
class BlogPost extends React.Component {
    render() {
        return (
            <div>
                <a class="pull-left" href="#">
                    <img class="media-object img-circle"
                        src="/images/users/avatar-2.jpg" alt="img" style={{width:'30px', height:'30px' }} />
                </a>
                <div class="media-body">
                    <h5 class="media-heading">Company Name</h5>
                    <h6 class="text-muted">March 23, 2016, 11:45 am</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                        viverra euismod odio, gravida pellentesque urna varius
                        vitae. Sed dui lorem, adipiscing in adipiscing et, interdum
                        nec metus. Mauris ultricies, justo eu convallis placerat,
            felis enim.</p>
                    <div class="">
                        <button class="btn btn-default waves-effect m-b-5"> <i class="fa fa-heart m-r-5"></i> <span>Follow</span> </button>
                        <button class="btn btn-default waves-effect m-b-5"> <i class="glyphicon glyphicon-comment"></i> <span>Comment</span> </button>
                    </div>
                    <Comment></Comment>
                    <AddComment></AddComment>

                </div>
            </div>
            
        )
    }
}

export default BlogPost