import http from "k6/http";
import { sleep, check } from "k6";
 
 
export const options = {
    executor: 'per-vu-iterations', //per-vu-iterations //shared-iterations
    vus: 1,
    iterations: 1,
    duration: '1s'
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