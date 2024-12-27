"use client";

import { useState } from "react";
import * as amplitude from "@amplitude/analytics-browser";
import ModalHouse from "./ModalHouse";

export type House = {
  id: string;
  name: string;
  houseColours: string;
  founder: string;
  animal: string;
  element: string;
  ghost: string;
  commonRoom: string;
  heads: Head[];
  traits: Trait[];
};

type Head = {
  id: string;
  firstName: string;
  lastName: string;
};

type Trait = {
  id: string;
  name: string;
};

export default function CardHouse(props: House) {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);

    // Enviar el evento a Amplitude cuando el modal se abre
    if (!isModalOpen) {
      amplitude.track("House Viewed", {
        houseId: props.id,
        houseName: props.name,
      });
    }
  };

  return (
    <div>
      {/* Card */}
      <div className="cardHouse" onClick={toggleModal}>
        <div className="contentCard">
          <div className="founder">
            <h2>{props.founder}</h2>
          </div>
          <h3 className="name">{props.name}</h3>
        </div>
      </div>

      {isModalOpen && <ModalHouse {...props} onClose={toggleModal} />}
    </div>
  );
}
