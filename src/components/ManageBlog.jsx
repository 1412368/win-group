import React from "react";
import WaitingBlogList from "./WaitingBlogList"
import BlogList from "./BlogList"
class ManageBlog extends React.Component {
    render() {
        return (
            <div class="content-page" style={{ background: "#FFF" }}>
                <div class="content">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="page-title-box">
                                    <h4 class="page-title">Quản lý blog </h4>
                                    <ol class="breadcrumb p-0 m-0">
                                        <li>
                                            <a href="#">Trang chủ</a>
                                        </li>
                                        <li class="active">
                                            Quản lý blog
                                        </li>
                                    </ol>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-sm-12">
                                <div class="col-sm-12">
                                    <WaitingBlogList></WaitingBlogList>
                                </div>
                                <div class="col-sm-12">
                                    <BlogList></BlogList>
                                </div>
                                <div class="col-sm-12">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default ManageBlog