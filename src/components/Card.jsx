import "./style.css";

export default function Card(props) {
  return (
    <div className="profile">
      <img src={props.src} />
      <span>{props.name}</span>
      <p>{props.number}</p>
    </div>
  );
}
