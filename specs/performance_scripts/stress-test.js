/*
 Stress testing is a type of load testing used to determine the limits of the system.
 The purpose of the test is to verify the stability and reliability of the system under extreme conditions
*/


import http from "k6/http";
import { sleep, check } from "k6";


export const options = {
    stages: [

        {
            duration: '2m',
            target: 100

        },
        {
            duration: '5m',
            target: 100

        },
        {
            duration: '2m',
            target: 200

        },
        {
            duration: '5m',
            target: 200

        },
        {
            duration: '2m',
            target: 300

        },
        {
            duration: '5m',
            target: 300

        },
        {
            duration: '2m',
            target: 400

        },
        {
            duration: '5m',
            target: 400

        },
        {
            duration: '10m',
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
