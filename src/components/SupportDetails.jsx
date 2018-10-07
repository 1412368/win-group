import React from "react";
import Comment from './Comment';
import SupportModal from './SupportModal';
import RankModal from './RankModal';
import AddComment from "./AddComment";
class SupportDeails extends React.Component {
    render() {
        return (
            <div class="content-page" style={{ background: "#FFF" }}>
                <div class="content">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="page-title-box">
                                    <h4 class="page-title">Chi tiết hỗ trợ </h4>
                                    <ol class="breadcrumb p-0 m-0">
                                        <li>
                                            <a href="#">Trang chủ</a>
                                        </li>
                                        <li>
                                            <a href="#">Hỗ trợ</a>
                                        </li>
                                        <li class="active">
                                            Tiêu đề hỗ trợ
                                    </li>
                                    </ol>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-12">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h3 class="panel-title">Tiêu đề hỗ trợ (Màu tiêu đề phụ thuộc vào trạng thái)</h3>
                                    <p class="panel-sub-title font-13 text-muted">13:22 30/6/2018</p>
                                    <button data-toggle="modal" data-target="#SupportModal" class="btn btn-icon waves-effect btn-default" style={{float:"right", top:"-25px"}}><i class="glyphicon glyphicon-edit"></i></button>

                                </div>
                                <div class="panel-body">
                                    <p>
                                       Mô tả chi tiết hỗ trợ.  Mô tả chi tiết hỗ trợ.  Mô tả chi tiết hỗ trợ.  Mô tả chi tiết hỗ trợ.  Mô tả chi tiết hỗ trợ.  Mô tả chi tiết hỗ trợ.  Mô tả chi tiết hỗ trợ.  Mô tả chi tiết hỗ trợ.  Mô tả chi tiết hỗ trợ.  Mô tả chi tiết hỗ trợ. 
                                    </p>
                                </div>

                                <ul class="list-group">
                                    <li class="list-group-item">
                                       <Comment></Comment>
                                       <button data-toggle="modal" data-target="#RankModal" class="btn btn-icon waves-effect waves-light btn-primary" style={{float:"right", top:"-26px"}}><i class="ion-ribbon-b"></i></button>
                                    </li>
                                    <li class="list-group-item">
                                    <Comment></Comment>
                                        <button class="btn btn-icon waves-effect waves-light btn-primary" style={{float:"right", top:"-26px"}}><i class="ion-ribbon-b"></i></button>
                                        </li>
                                    <li class="list-group-item">
                                    <Comment></Comment>
                                        <button class="btn btn-icon waves-effect waves-light btn-primary" style={{float:"right", top:"-26px"}}><i class="ion-ribbon-b"></i></button>
                                        </li>
                                    <li class="list-group-item">
                                    <Comment></Comment>
                                        <button class="btn btn-icon waves-effect waves-light btn-primary" style={{float:"right", top:"-26px"}}><i class="ion-ribbon-b"></i></button>
                                        </li>
                                    <li class="list-group-item">
                                    <Comment></Comment>
                                        <button class="btn btn-icon waves-effect waves-light btn-primary" style={{float:"right", top:"-26px"}}><i class="ion-ribbon-b"></i></button>
                                        </li>
                                </ul>
                                <AddComment></AddComment>
                            </div>
                        </div>
                        <SupportModal></SupportModal>
                        <RankModal></RankModal>
                    </div>
                </div>
            </div>
        )
    }
}

export default SupportDeails;