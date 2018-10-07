import React from "react";
class Comment extends React.Component {
    render() {
        return (
            <div>
                <a class="pull-left" href="#">
                    <img class="media-object img-circle"
                        src="/images/users/avatar-2.jpg" alt="img" style={{width:'30px', height:'30px' }} />
                </a>
                <div class="media-body">
                    <span><a>Company Name</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                        viverra euismod odio, gravida pellentesque urna varius
                        vitae. Sed dui lorem, adipiscing in adipiscing et, interdum
                        nec metus. Mauris ultricies, justo eu convallis placerat,
                    felis enim.</span>
                    <h6 class="text-muted">March 23, 2016, 11:45 am</h6>
                </div>
            </div>
        )
    }
}

export default Comment