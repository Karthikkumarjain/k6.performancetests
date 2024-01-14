/*
Spike test is a variation of a stress test, but it does not gradually increase the load, isntead it spikes to extreme load oveer a very short window of time.
This helps in determining how the system will perform under a sudden surge of traffic and to see if system recovers once the traffic has subsided

*/ 

import http from "k6/http";
import { sleep, check } from "k6";
 
 
export const options = {
    stages: [


        {
            duration: '10s',
            target: 100

        },
        {
            duration: '1m',
            target: 100

        },
        {
            duration: '10s',
            target: 1400

        },
      
        {
            duration: '3m',
            target: 1400

        },
        {
            duration: '10s',
            target: 100

        },
        {
            duration: '3m',
            target: 100

        },{
            duration: '10s',
            target: 0

        }
    ]
}
 


export default function () {
 
    const url = ""; // put endpoint here
 
    const payload = JSON.stringify(); // place json here ({})
 
    //headers can be added here
    const params = {
        headers: {
            'Content-Type': 'application/json',
 
        },
 
    };
 
 
    const res = http.post(url, payload, params);
 
    // TO add validations
    check(res, {
        'is status code as 200': (r) => r.status === 200,
        'is res body': (r) => r.body.includes("J"),
 
    });
 
    // To log whole response
    //console.log(res.body);
 
    console.log(res.json("Data.0.Attribute")); // https://github.com/tidwall/gjson#path-syntax

}
