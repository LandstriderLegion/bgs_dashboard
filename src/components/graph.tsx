import React from "react";
import { Chart as ChartJS} from "chart.js";


const DATA_COUNT = 30;

type GraphProps = {
    system: string
}

export default function Graph({system}: GraphProps) {
    

    return (
        <div>
            <h2>{system}</h2>
            <svg>
                
            </svg>
        </div>
    )
}