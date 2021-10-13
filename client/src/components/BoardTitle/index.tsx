import { FC } from "react";
import "./style.css";

interface Props {
  title: string;
  addition?: boolean;
  action: () => void;
  handleDelete?: () => void;
}

const BoardTitle: FC<Props> = ({ title, addition, action, handleDelete }) => {
  return (
    <div
      onClick={action}
      className={`boardTitle ${
        addition ? " boardTitle_grey " : " boardTitle_blue"
      }`}
    >
      {addition ? (
        <div>{title}</div>
      ) : (
        <div className={"boardTitle_header"}>
          <div>{title}</div>
          <div onClick={handleDelete}>X</div>
        </div>
      )}
    </div>
  );
};

export default BoardTitle;
