import React from "react";
class WaitingBlogList extends React.Component {
    render() {
        return (
            <div class="card-box table-responsive">
                <h4 class="m-t-0 header-title"><b>Danh sách các bài viết đang chờ kiểm duyệt</b></h4>
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
                                <th>Nội Dung</th>
                                <th>Hành Động</th>
                            </tr>
                        </thead>


                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>30/6/2018</td>
                                <td>Công ty TNHH A</td>
                                <td><textarea class="form-control">Nội dung bài viết. Nội dung bài viết. Nội dung bài viết. Nội dung bài viết. Nội dung bài viết. Nội dung bài viết.</textarea></td>
                                <td style={{width:"180px"}}>
                                    <button class="btn btn-success waves-effect w-xs waves-light "> <i class="mdi mdi-check-circle-outline"></i> <span></span>
                                    </button>
                                    <button class="btn btn-danger waves-effect w-xs waves-light "> <i class="mdi mdi-close-circle-outline"></i> <span></span>
                                    </button>
                                </td>
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
            </div>
        )
    }
}

export default WaitingBlogList