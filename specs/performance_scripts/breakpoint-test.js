import http from "k6/http";
import { sleep, check } from "k6";
 
 
export const options = {
    stages: [
 
        {
            duration: '1h',
            target: 10000
 
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