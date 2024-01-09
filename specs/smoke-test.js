import http from "k6/http";
import { sleep, check } from "k6";
 
 
// export const options = {
//     insecureSkipTLSVerify:true,
//    // noonnecationReuse: false,
//     executor: 'per-vu-iterations', //per-vu-iterations //shared-iterations
//     vus: 1,
//     iterations: 5,
//     duration: '1s'
// }


export const options = {
    insecureSkipTLSVerify:true,
    scenarios: {
        
      constant_request_rate: {
        executor: 'constant-arrival-rate',
        rate: 3,
        //timeUnit: '1s',
        duration: '5s',
        preAllocatedVUs: 5,
        maxVUs: 10,
      },
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
