import GarbageCanIcon from '../assets/icons/garbage-can.svg';
import './GarbageCan.css';

function GarbageCan({ onClick }) {
  return (
    <button className="delete-button" onClick={onClick}>
      <img src={GarbageCanIcon} alt="Delete task" className="delete-icon" />
    </button>
  );
}

export { GarbageCan };