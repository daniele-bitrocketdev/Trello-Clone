import { FC, memo, useState } from "react";
import BoardTitle from "../../components/BoardTitle";
import BoardsModal from "../../components/BoardModal";
import "./style.css";

interface BoardType {
  id: string;
  title: string;
}

const Boardspage: FC = memo(() => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [boardTitle, setBoardTitle] = useState<string>("");

  const [cards, setCards] = useState<BoardType[]>([
    { id: "1", title: "ciao" },
    { id: "2", title: "dany" },
  ]);

  const handleCreateBoard = () => {
    const newCards = [...cards, { id: "3", title: boardTitle }];
    setCards(newCards);
    setIsModalVisible(false);
    setBoardTitle("");
  };

  console.log(cards);

  return (
    <div className="boardsPage">
      <div className="boardsPage_container">
        {cards?.map((card) => {
          return (
            <BoardTitle
              id={card.id}
              title={card.title}
              action={() => console.log(card.id)}
            />
          );
        })}

        <BoardTitle
          id={"add new board"}
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
