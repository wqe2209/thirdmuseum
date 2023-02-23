import React, { Component } from 'react';
import '../../style/common.css';

class NoticeVisual extends Component {
    render() {
        return (
            <div className="subvisual">
                <h1 className='display-1'>공지사항</h1>
                <img src="resource/notice/notice_visual.png" className="ratio" alt="공지사항" />
            </div>
        );
    }
}

export default NoticeVisual;