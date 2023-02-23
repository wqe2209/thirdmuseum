import React, { Component } from 'react';
import BoardService from './service';
import NoticeVisual from './noticevisual';

class NoticeList extends Component {
    constructor(props) {
        super(props) 
        this.state = { 
            boards: []
        }
        
        //글 쓰기 버튼을 클릭 했을 때 동작하는 'createBoard' 함수를 바인드
        this.createBoard = this.createBoard.bind(this);
    }
     
    componentDidMount() {
        BoardService.getBoards().then((res) => {
            this.setState({ boards: res.data});
        });
    }

    //글쓰기 버튼 클릭시 글쓰기화면으로 이동하게 해주는 함수
    createBoard() {
        //this.props.history.push('/create-board/');
        //글수정을 위해 경로에 파라미터를 추가
        this.props.history.push('/create-board/_create');
        //window.location.replace('/create-board/_create');
    }

    //글 제목을 클릭 했을 때 글 상세보기 페이지로 이동하게 해주는 함수를 정의
    readBoard(ntcNo) {
        this.props.history.push(`/read-board/${ntcNo}`);
        //window.location.replace(`/read-board/${ntcNo}`);
    }

    render() {
        return (
            <>
            <NoticeVisual />
            <div className='contianer-xxl'>
                <div className ="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목 </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.boards.map(
                                    board => 
                                    <tr key = {board.ntcNo}>
                                        <td> {board.ntcNo} </td>
                                        <td><a onClick = {() => this.readBoard(board.ntcNo)}>{board.ntcTitle}</a></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.createBoard}>새 글 쓰기</button>
                </div>
            </div>
            </>
        );
    }
}

export default NoticeList;