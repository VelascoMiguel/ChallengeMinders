import { useEffect } from "react";
import { House } from "./CardHouse";
import * as amplitude from "@amplitude/analytics-browser";

type ModalHouseProps = House & {
  onClose: () => void;
};

export default function ModalHouse(props: ModalHouseProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      amplitude.init("bae12a7fedf82b197368ea59594574b0", { autocapture: true });

      amplitude.track("House Viewed", {
        houseId: props.id,
        houseName: props.name,
      });
    }
  }, [props.id, props.name]); 

  const handleCloseOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).classList.contains("modal")) {
      props.onClose();
    }
  };

  return (
    <div className="modal" onClick={handleCloseOutsideClick}>
      <div className="modal-content">
        <button className="close-button" onClick={props.onClose}>
          ×
        </button>
        <h2>{props.name}</h2>
        <p>
          <strong>Founder:</strong> {props.founder}
        </p>
        <p>
          <strong>House Colours:</strong> {props.houseColours}
        </p>
        <p>
          <strong>Animal:</strong> {props.animal}
        </p>
        <p>
          <strong>Element:</strong> {props.element}
        </p>
        <p>
          <strong>Ghost:</strong> {props.ghost}
        </p>
        <p>
          <strong>Common Room:</strong> {props.commonRoom}
        </p>
        <h3>Heads</h3>
        <ul>
          {props.heads.map((head) => (
            <li key={head.id}>
              {head.firstName} {head.lastName}
            </li>
          ))}
        </ul>
        <h3>Traits</h3>
        <ul>
          {props.traits.map((trait) => (
            <li key={trait.id}>{trait.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
