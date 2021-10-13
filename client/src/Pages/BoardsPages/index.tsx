import { FC, memo, useEffect, useState } from "react";
import BoardTitle from "../../components/BoardTitle";
import BoardsModal from "../../components/BoardModal";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchBoardsData } from "../../features/board/boardSlice";
import axios from "axios";
import "./style.css";

const Boardspage: FC = memo(() => {
  const dispatch = useAppDispatch();
  const { boards, loading } = useAppSelector((state) => state.boards);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [boardTitle, setBoardTitle] = useState<string>("");

  const createBoard = () => {
    axios
      .post("http://localhost:5000/boards", {
        title: boardTitle,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteBoard = (id: string) => {
    axios
      .delete(`http://localhost:5000/boards/${id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
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

  const handleDelete = (id: string) => {
    deleteBoard(id);
  };

  if (loading) {
    return <div>spinner</div>;
  }

  return (
    <div className="boardsPage">
      <div className="boardsPage_container">
        {boards?.map((board) => {
          return (
            <BoardTitle
              //@ts-ignore
              handleDelete={() => handleDelete(board._id)}
              title={board.title}
              action={() => {}}
            />
          );
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
