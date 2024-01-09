/*
Load testing is primarily concerned with assessing the current performance of the system in terms of concurrent users or requests per second
*/


import http from "k6/http";
import { sleep, check } from "k6";
 
 
export const options = {
    stages: [
 
        {
            duration: '5m',
            target: 10
 
        },
        {
            duration: '10m',
            target: 10
 
        },
        {
            duration: '5m',
            target: 0
 
        }
    ],
    thresholds: {
        http_req_duration: ['p(95)<150'],
        http_req_failed: ['rate<0.01']

    },
};
 
 
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
