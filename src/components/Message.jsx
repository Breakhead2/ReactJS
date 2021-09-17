import style from "./Message.module.css";

export const Message = (props) => {
  let src = "images/img_" + props.message.id + ".png";
  return (
    <div className={style.box}>
      <img className={style.cloud_img} src={src} alt="cloud" />
      <div className={style.text}>{props.message.text}</div>
    </div>
  );
};
