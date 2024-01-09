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
