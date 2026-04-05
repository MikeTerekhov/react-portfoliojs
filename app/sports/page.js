"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function SportsPage() {
  const [team, setTeam] = useState(null);

  useEffect(() => {
    const config = {
      method: "get",
      url: "https://v1.hockey.api-sports.io/teams?name=Washington%20Capitals",
      headers: {
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
        "x-rapidapi-host": "v1.hockey.api-sports.io"
      }
    };

    axios(config)
      .then((res) => {
        if (res.data.response && res.data.response.length > 0) {
          setTeam(res.data.response[0]);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  if (!team) {
    return <div>Loading Washington Capitals...</div>;
  }

    console.log(team)

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">{team.name}</h1>
            <div className="mt-4 p-4 border rounded shadow w-fit">
                <img src={team.logo} alt={team.name} className="w-24 mb-2" />
            </div>
            <div> {team.name} </div>
            <div> this is a new test </div>
       </div>
    );
}
