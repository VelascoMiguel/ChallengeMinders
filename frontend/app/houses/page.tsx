"use client";

import { useEffect, useState } from "react";
import CardHouse from "../ui/CardHouse";
import * as amplitude from "@amplitude/analytics-browser";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  useEffect(() => {
    const startTime = Date.now();

    const fetchHouses = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL_HOUSES}`
        );
        const data = await response.json();

        if (typeof window !== "undefined") {
          amplitude.init("bae12a7fedf82b197368ea59594574b0", {
            autocapture: true,
          });

          amplitude.track("All Houses Viewed", {
            page: pathname,
            url: window.location.href,
          });
        }

        const parsedHouses =
          typeof data.data === "string" ? JSON.parse(data.data) : data.data;

        setHouses(parsedHouses || []);
      } catch (error) {
        amplitude.track("Error Fetching Houses", {
          error: error,
          page: pathname,
        });
      }
    };

    fetchHouses();

    return () => {
      const timeSpent = Date.now() - startTime;
      amplitude.track("Time on Page", { timeSpent });
    };
  }, [pathname]);

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
