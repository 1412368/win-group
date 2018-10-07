import React from "react";

class Comment extends React.Component {
    render() {
        return (
            <div>
                <a class="pull-left" href="#">
                    <img class="media-object img-circle"
                        src="assets/images/users/avatar-2.jpg" alt="img" />
                </a>
                <div class="media-body">
                    <h5 class="media-heading">Johnathan deo</h5>
                    <h6 class="text-muted">March 23, 2016, 11:45 am</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                        viverra euismod odio, gravida pellentesque urna varius
                        vitae. Sed dui lorem, adipiscing in adipiscing et, interdum
                        nec metus. Mauris ultricies, justo eu convallis placerat,
            felis enim.</p>
                    <a href="#" class="text-success"><i
                        class="mdi mdi-reply"></i>&nbsp; Reply</a>
                </div>
            </div>
        )
    }
}

export default Comment