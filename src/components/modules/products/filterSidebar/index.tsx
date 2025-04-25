"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const FilterSidebar = () => {
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedRooms, setSelectedRooms] = useState<number[]>([]);

  const locations = [
    "Dhaka",
    "Chittagong",
    "Sylhet",
    "Khulna",
    "Rajshahi",
    "Barishal",
  ];

  const roomOptions = [1, 2, 3, 4, 5, "5+"];

  const handleLocationChange = (location: string) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((l) => l !== location)
        : [...prev, location]
    );
  };

  const handleRoomChange = (room: number | string) => {
    setSelectedRooms((prev) =>
      prev.includes(room as number)
        ? prev.filter((r) => r !== room)
        : [...prev, room as number]
    );
  };

  return (
    <Card className="p-4 rounded-2xl shadow-md w-72">
      <CardContent>
        <h2 className="text-lg font-semibold mb-4">Filter By Location</h2>
        <ul className="space-y-2 mt-2">
          {locations.map((location, index) => (
            <li key={index} className="flex items-center gap-2">
              <Checkbox
                checked={selectedLocations.includes(location)}
                onCheckedChange={() => handleLocationChange(location)}
              />
              <span>{location}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-lg font-semibold mt-6">Number of Rooms</h2>
        <ul className="space-y-2 mt-2">
          {roomOptions.map((room, index) => (
            <li key={index} className="flex items-center gap-2">
              <Checkbox
                checked={selectedRooms.includes(room as number)}
                onCheckedChange={() => handleRoomChange(room)}
              />
              <span>
                {room} {typeof room === "number" && "rooms"}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FilterSidebar;
