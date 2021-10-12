import { FC, memo } from "react";
import "./style.css";

interface Props {
  setIsModalVisible: (toggle: boolean) => void;
  setBoardTitle: (text: string) => void;
  boardTitle: string;
  handleCreateBoard: () => void;
}

const BoardsModal: FC<Props> = memo(
  ({ setIsModalVisible, boardTitle, setBoardTitle, handleCreateBoard }) => {
    return (
      <div className="boardsModal">
        <div className="boardsModal_header">
          <div className="boardsModal_title">Add board</div>
          <button onClick={() => setIsModalVisible(false)}>X</button>
        </div>
        <input
          style={{ margin: "10px 20px" }}
          value={boardTitle}
          onChange={(event) => setBoardTitle(event.target.value)}
        />
        <button disabled={!boardTitle.length} onClick={handleCreateBoard}>
          Add
        </button>
      </div>
    );
  }
);

export default BoardsModal;
