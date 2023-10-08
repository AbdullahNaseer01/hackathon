
'use client'
import { useEffect } from "react";
import { Chart, initTE } from "tw-elements";

export default function Chart() {
  useEffect(() => {
    initTE({ Chart });
  }, []);

  return (
    <div className="mx-auto w-3/5 overflow-hidden">
      <canvas
        data-te-chart="bar"
        data-te-dataset-label="Traffic"
        data-te-labels="['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']"
        data-te-dataset-data="[2112, 2343, 2545, 3423, 2365, 1985, 987]"
      ></canvas>
    </div>
  );
}
