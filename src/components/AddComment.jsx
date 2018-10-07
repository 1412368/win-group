import React from "react";

class AddComment extends React.Component {
    render(){
        return (
            <div class="col-xs-12">
                <form name="ajax-form" action="#" method="post" class="contact-form" data-parsley-validate="" novalidate="">
                    <div class="form-group has-feedback ">
                        <input type="text" class="form-control" placeholder="Custom icons"/>
                        <i class="glyphicon glyphicon-send form-control-feedback l-h-34"></i>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddComment;