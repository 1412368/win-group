import React from "react";
import Comment from "./Comment"
class BlogPost extends React.Component {
    render() {
        return (
            <div class="content-page">
                <div class="content">
                    <div class="container">


                        <div class="row">
                            <div class="col-xs-12">
                                <div class="page-title-box">
                                    <h4 class="page-title">Blog Detail </h4>
                                    <ol class="breadcrumb p-0 m-0">
                                        <li>
                                            <a href="#">Zircos</a>
                                        </li>
                                        <li>
                                            <a href="#">Blogs </a>
                                        </li>
                                        <li class="active">
                                            Blog Detail
                                    </li>
                                    </ol>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>

                        <div class="blog-list-wrapper">
                            <div class="row">
                                <div class="col-sm-8">
                                    <div class="p-20">

                                        <div class="blog-post m-b-30">
                                            <div class="post-image">
                                                <img src="assets/images/blog/1.jpg" alt="" class="img-responsive"></img>
                                                <span class="label label-danger">Lifestyle</span>
                                            </div>
                                            <div class="text-muted"><span>by <a class="text-dark font-secondary">John Doe</a>,</span> <span>Sep 10, 2016</span></div>
                                            <div class="post-title">
                                                <h3><a href="javascript:void(0);">Exclusive: Get a First Look at the Fall Collection</a></h3>
                                            </div>
                                            <div>
                                                <p>Praesentium voluptatum deleniti atque corrupti quos dolores et quas
                                                    molestias excepturi sint occaecati cupiditate non provident,
                                                    similique sunt in culpa qui officia deserunt mollitia animi, id est
                                                    laborum et dolorum fuga. Et harum quidem rerum facilis est et
                                                    expedita distinctio.
                                            </p>

                                                <blockquote class="custom-blockquote margin-t-30">
                                                    <p>
                                                        When an unknown printer took a galley of type and scrambled it to
                                                        make a type specimen book. It has survived not only five centuries.
                                                </p>
                                                    <footer>
                                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                                    </footer>
                                                </blockquote>

                                                <p>Praesentium voluptatum deleniti atque corrupti quos dolores et quas
                                                    molestias excepturi sint occaecati cupiditate non provident,
                                                    similique sunt in culpa qui officia deserunt mollitia animi, id est
                                                    laborum et dolorum fuga. Et harum quidem rerum facilis est et
                                                    expedita distinctio.
                                            </p>

                                                <div class="text-center p-20">
                                                    <h4 class="text-danger"><i>"Excepturi sint occaecati cupiditate non provident deserunt mollitia anim"</i></h4>
                                                </div>

                                                <p class="text-muted">Praesentium voluptatum deleniti atque corrupti quos dolores et quas
                                                    molestias excepturi sint occaecati cupiditate non provident,
                                                    similique sunt in culpa qui officia deserunt mollitia animi, id est
                                                    laborum et dolorum fuga. Et harum quidem rerum facilis est et
                                                    expedita distinctio.
                                            </p>

                                                <blockquote class="blockquote-reverse margin-t-30">
                                                    <p>
                                                        When an unknown printer took a galley of type and scrambled it to
                                                        make a type specimen book. It has survived not only five centuries.
                                                </p>
                                                    <footer>
                                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                                    </footer>
                                                </blockquote>
                                            </div>

                                        </div>

                                        <div class="m-t-50">
                                            <h4 class="text-uppercase">About Author</h4>
                                            <div class="border m-b-20"></div>

                                            <div class="media">
                                                <div class="media-left">
                                                    <a href="#"> <img class="media-object m-r-10" alt="64x64" src="assets/images/users/avatar-1.jpg" style={{width: '96px', height: '96px'}} /> </a>
                                                </div>
                                                <div class="media-body">
                                                    <h4 class="media-heading">Daniel Syme</h4>
                                                    <p>
                                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                                    ante sollicitudin commodo.
                                                </p>

                                                    <a href="javascript:void(0);" class="btn btn-xs btn-success waves-light waves-effect">View Profile</a>
                                                </div>
                                            </div>
                                        </div>

                                        <hr />

                                        <div class="m-t-50 blog-post-comment">
                                            <h4 class="text-uppercase">Comments <small>(4)</small></h4>
                                            <div class="border m-b-20"></div>

                                            <ul class="media-list">
                                                <li class="media">
                                                    <Comment></Comment>
                                                </li>

                                                <li class="media">
                                                    <Comment></Comment>
                                                </li>
                                            </ul>

                                            <h4 class="text-uppercase m-t-50">Leave a comment</h4>
                                            <div class="border m-b-20"></div>

                                            <form name="ajax-form" action="#" method="post" class="contact-form" data-parsley-validate="" novalidate="">

                                                <div class="form-group">
                                                    <input class="form-control" id="name2" name="name" placeholder="Your name" type="text" value="" required="" />
                                                </div>

                                                <div class="form-group">
                                                    <input class="form-control" id="email2" name="email" type="email" placeholder="Your email" value="" required="" />
                                                </div>

                                                <div class="form-group">
                                                    <textarea class="form-control" id="message2" name="message" rows="5" placeholder="Message" required=""></textarea>
                                                </div>

                                                <div class="row">
                                                    <div class="col-xs-12">
                                                        <div class="">
                                                            <button type="submit" class="btn btn-custom" id="send">Submit</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </form>


                                        </div>

                                    </div>
                                </div>

                                <div class="col-sm-4">
                                    <div class="p-20">

                                        <div class="">
                                            <h4 class="text-uppercase">Search</h4>
                                            <div class="border m-b-20"></div>
                                            <div class="form-group search-box">
                                                <input type="text" id="search-input" class="form-control" placeholder="Search here..." />
                                                <button type="submit" class="btn btn-search"><i class="fa fa-search"></i></button>
                                            </div>
                                        </div>

                                        <div class="m-t-50">
                                            <h4 class="text-uppercase">Categories</h4>
                                            <div class="border m-b-20"></div>

                                            <ul class="blog-categories-list list-unstyled">
                                                <li><a href="#">Lifestyle</a></li>
                                                <li><a href="#">Music</a></li>
                                                <li><a href="#">Travel</a></li>
                                                <li><a href="#">Fashion</a></li>
                                                <li><a href="#">Videos</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogPost;