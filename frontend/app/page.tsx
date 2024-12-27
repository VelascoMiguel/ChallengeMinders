"use client";

import { useEffect, useState } from "react";
import CardHouse from "./ui/CardHouse";

type House = {
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

export default function Home() {
  const [houses, setHouses] = useState<House[]>([]);
  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await fetch("http://localhost:3001/houses");
        const data = await response.json();

        console.log("Data : ", data);

        const parsedHouses =
          typeof data.data === "string" ? JSON.parse(data.data) : data.data;

        setHouses(parsedHouses || []);
      } catch (error) {
        console.error("Error fetching houses:", error);
      }
    };

    fetchHouses();
  }, []);

  return (
    <div className="houses-container">
      {houses.length > 0 ? (
        houses.map((house) => <CardHouse key={house.id} {...house} />)
      ) : (
        <p>Loading houses or no houses available.</p>
      )}
    </div>
  );
}
