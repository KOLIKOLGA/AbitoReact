import "./Side.css";
export const Side = ({ title, text, img }) => {
  return (
    <div>
      <div className="content-side__list-item">
        <img src={img} className="content-side__list-item_img" alt="" />
        <h5 className="content-side__list-item_title">{title}</h5>
        <p className="content-side__list-item_text">{text}</p>
      </div>
    </div>
  );
};
