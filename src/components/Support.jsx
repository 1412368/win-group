import React from "react";
import SupportList from "./SupportList"
import AskSupportList from "./AskSupportList"
import HelpSupportList from "./HelpSupportList"
class Support extends React.Component {
    render() {
        return (
            <div class="content-page" style={{ background: "#FFF" }}>
                <div class="content">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="page-title-box">
                                    <h4 class="page-title">Hỗ trợ </h4>
                                    <ol class="breadcrumb p-0 m-0">
                                        <li>
                                            <a href="#">Trang chủ</a>
                                        </li>
                                        <li class="active">
                                            Hỗ trợ
                                        </li>
                                    </ol>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card-box table-responsive">
                                    <h4 class="m-t-0 header-title"><b>Số lần gửi yêu cầu hỗ trợ: 1</b></h4>
                                </div>
                                <div class="col-sm-12">
                                    <SupportList></SupportList>
                                </div>
                                <div class="col-sm-12">
                                    <AskSupportList></AskSupportList>
                                </div>
                                <div class="col-sm-12">
                                    <HelpSupportList></HelpSupportList>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Support