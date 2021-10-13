import { FC, memo, useEffect, useState } from "react";
import BoardTitle from "../../components/BoardTitle";
import BoardsModal from "../../components/BoardModal";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchBoardsData } from "../../features/board/boardSlice";
import "./style.css";

const Boardspage: FC = memo(() => {
  const dispatch = useAppDispatch();
  const { boards, loading } = useAppSelector((state) => state.boards);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [boardTitle, setBoardTitle] = useState<string>("");

  const createBoard = () => {
    fetch("http://localhost:5000/boards", {
      method: "POST",

      body: JSON.stringify({
        title: boardTitle,
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  useEffect(() => {
    dispatch(fetchBoardsData());
  }, []);

  const handleCreateBoard = () => {
    createBoard();
    setIsModalVisible(false);
    setBoardTitle("");
  };

  return (
    <div className="boardsPage">
      <div className="boardsPage_container">
        {boards?.map((board) => {
          return <BoardTitle title={board.title} action={() => {}} />;
        })}

        <BoardTitle
          title="Add new board"
          action={() => setIsModalVisible(true)}
          addition={true}
        />
      </div>
      {isModalVisible && (
        <BoardsModal
          boardTitle={boardTitle}
          setBoardTitle={setBoardTitle}
          setIsModalVisible={setIsModalVisible}
          handleCreateBoard={handleCreateBoard}
        />
      )}
    </div>
  );
});

export default Boardspage;
