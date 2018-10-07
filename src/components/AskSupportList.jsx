import React from "react";
import SupportModal from './SupportModal';
class AskSupportList extends React.Component {
    render() {
        return (
            <div class="card-box table-responsive">
                <h4 class="m-t-0 header-title"><b>Danh sách gửi nhờ hỗ trợ</b></h4>
                <button data-toggle="modal" data-target="#SupportModal" class="btn btn-icon waves-effect btn-default" style={{float:"right", top:"-25px"}}><i class="glyphicon glyphicon-plus"></i></button>
                <div class="row">
                    <div class="col-sm-6" >
                        <div class="dataTables_length" id="datatable_length">
                            <label>Show <select name="datatable_length" aria-controls="datatable" class="form-control input-sm" style={{ textAlign: "left" }}>
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                            </label>
                        </div>
                    </div>
                    <div class="col-sm-6" style={{ textAlign: "right" }}>
                        <div id="datatable_filter" class="dataTables_filter">
                            <label style={{ textAlign: "left" }}>Search:<input type="search" class="form-control input-sm" placeholder="" aria-controls="datatable" />
                            </label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <table id="datatable" class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Ngày gửi</th>
                                <th>Doanh Nghiệp</th>
                                <th>Tiêu Đề</th>
                                <th>Nội Dung</th>
                                <th>Ghi Chú</th>
                                <th>Trạng Thái</th>
                            </tr>
                        </thead>


                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>30/6/2018</td>
                                <td>Công ty TNHH A</td>
                                <td>Tiêu đề hỗ trợ</td>
                                <td>Nội dung hỗ trợ</td>
                                <td>Cần trợ giúp</td>
                                <td>Hoàn thành</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>30/6/2018</td>
                                <td>Công ty TNHH A</td>
                                <td>Tiêu đề hỗ trợ</td>
                                <td>Nội dung hỗ trợ</td>
                                <td>Cần trợ giúp</td>
                                <td>Hoàn thành</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>30/6/2018</td>
                                <td>Công ty TNHH A</td>
                                <td>Tiêu đề hỗ trợ</td>
                                <td>Nội dung hỗ trợ</td>
                                <td>Cần trợ giúp</td>
                                <td>Hoàn thành</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>30/6/2018</td>
                                <td>Công ty TNHH A</td>
                                <td>Tiêu đề hỗ trợ</td>
                                <td>Nội dung hỗ trợ</td>
                                <td>Cần trợ giúp</td>
                                <td>Hoàn thành</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>30/6/2018</td>
                                <td>Công ty TNHH A</td>
                                <td>Tiêu đề hỗ trợ</td>
                                <td>Nội dung hỗ trợ</td>
                                <td>Cần trợ giúp</td>
                                <td>Hoàn thành</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>30/6/2018</td>
                                <td>Công ty TNHH A</td>
                                <td>Tiêu đề hỗ trợ</td>
                                <td>Nội dung hỗ trợ</td>
                                <td>Cần trợ giúp</td>
                                <td>Hoàn thành</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>30/6/2018</td>
                                <td>Công ty TNHH A</td>
                                <td>Tiêu đề hỗ trợ</td>
                                <td>Nội dung hỗ trợ</td>
                                <td>Cần trợ giúp</td>
                                <td>Hoàn thành</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>30/6/2018</td>
                                <td>Công ty TNHH A</td>
                                <td>Tiêu đề hỗ trợ</td>
                                <td>Nội dung hỗ trợ</td>
                                <td>Cần trợ giúp</td>
                                <td>Hoàn thành</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>30/6/2018</td>
                                <td>Công ty TNHH A</td>
                                <td>Tiêu đề hỗ trợ</td>
                                <td>Nội dung hỗ trợ</td>
                                <td>Cần trợ giúp</td>
                                <td>Hoàn thành</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>30/6/2018</td>
                                <td>Công ty TNHH A</td>
                                <td>Tiêu đề hỗ trợ</td>
                                <td>Nội dung hỗ trợ</td>
                                <td>Cần trợ giúp</td>
                                <td>Hoàn thành</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="row" >
                    <div class="col-sm-6" >
                        <div class="dataTables_info" id="datatable-fixed-header_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                    </div>
                    <div class="col-sm-6" style={{ textAlign: "right" }}>
                        <div class="dataTables_paginate paging_simple_numbers" id="datatable-fixed-header_paginate">
                            <ul class="pagination">
                                <li class="paginate_button previous disabled" aria-controls="datatable-fixed-header" tabindex="0" id="datatable-fixed-header_previous">
                                    <a href="#">Previous</a>
                                </li>
                                <li class="paginate_button active" aria-controls="datatable-fixed-header" tabindex="0">
                                    <a href="#">1</a>
                                </li>
                                <li class="paginate_button " aria-controls="datatable-fixed-header" tabindex="0">
                                    <a href="#">2</a>
                                </li>
                                <li class="paginate_button " aria-controls="datatable-fixed-header" tabindex="0">
                                    <a href="#">3</a>
                                </li>
                                <li class="paginate_button " aria-controls="datatable-fixed-header" tabindex="0">
                                    <a href="#">4</a>
                                </li>
                                <li class="paginate_button " aria-controls="datatable-fixed-header" tabindex="0">
                                    <a href="#">5</a>
                                </li><li class="paginate_button " aria-controls="datatable-fixed-header" tabindex="0"><a href="#">6</a></li><li class="paginate_button next" aria-controls="datatable-fixed-header" tabindex="0" id="datatable-fixed-header_next"><a href="#">Next</a></li></ul></div></div></div>
                <SupportModal></SupportModal>
            </div>
        )
    }
}

export default AskSupportList