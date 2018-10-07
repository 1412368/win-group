import React from "react";
class RankModal extends React.Component {
    render() {
        return (
            <div id="RankModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: "none"}}>
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h4 class="modal-title">Hỗ trợ</h4>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="field-1" class="control-label">Doanh Nghiệp</label>
                                        <input type="text" readOnly class="form-control" id="field-1" placeholder="Tên doanh nghiệp" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="field-2" class="control-label">Đánh giá</label>
                                        <select type="text" class="form-control" id="field-2" placeholder="Đánh giá">
                                            <option>Tốt</option>
                                            <option>Trung Bình</option>
                                            <option>Kém</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group no-margin">
                                        <label for="field-7" class="control-label">Ghi chú</label>
                                        <textarea class="form-control autogrow" id="field-7" placeholder="Nội dung cần hỗ trợ" style={{ overflow: "hidden", wordWrap: "break-word", resize: "horizontal", height: "104px" }}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group no-margin">
                                        <label for="field-7" class="control-label">Bonus</label>
                                        <textarea class="form-control autogrow" id="field-7" placeholder="Bonus" style={{ overflow: "hidden", wordWrap: "break-word", resize: "horizontal", height: "104px" }}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">Đóng</button>
                            <button type="button" class="btn btn-info waves-effect waves-light">Lưu</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RankModal;