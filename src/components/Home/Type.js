import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
        "Full Stack .NET Developer",
        "Angular Developer",
        "SQL & PostgreSQL Specialist",
        "API & Web Application Developer",
      ],

        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
