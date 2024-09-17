import { Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const BoardList = () => {
  const [pageCount, setPageCount] = useState(0);
  const [boardList, setBoardList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // 페이지에 해당하는 게시물 가져오기
    const getBoardList = async () => {
      const page_number = searchParams.get('page');
      const { data } = await axios.get(
        `/api/board/list?page_number=${page_number}&page_size=4`
      );
      return data;
    };
    // 현재 페이지에 해당하는 게시물로 상태 변경하기
    getBoardList().then((result) => setBoardList(result));
    // 게시물 전체 갯수 구하기
    const getTotalBoard = async () => {
      const { data } = await axios.get('/api/board/count');
      return data.total;
    };
    // 페이지 카운트 구하기: (전체 board 갯수) / (한 페이지 갯수) 결과 올림
    getTotalBoard().then((result) => setPageCount(Math.ceil(result / 4)));
  }, []);

  return (
    <div className="boardList-wrapper">
      <div className="boardList-body">
        {boardList}
        {/* 게시판 리스트에 데이터 넣는거 구현하기 */}
      </div>
      <div className="boardList-footer">
        {/*페이지네이션: count에 페이지 카운트, page에 페이지 번호 넣기*/}
        <Pagination
          variant="outlined"
          color="primary"
          page={Number(searchParams.get('page'))}
          count={pageCount}
          size="large"
          onChange={(e, value) => {
            window.location.href = `/board-list?page=${value}`;
          }}
          showFirstButton
          showLastButton
        />
      </div>
    </div>
  );
};

export default BoardList;
