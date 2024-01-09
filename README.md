# Performance Testing

### Run tests from CLI by providing vus in real time.

```
k6 run script.js --vus 1 --duration 10s --iterations 1
or
k6 run script.js --u 1 --d 10s --i 1
```

### K6 allow insecure requests

```
k6 run script.js --insecure-skip-tls-verify
```

### K6 get output in json

```
k6 run script.js --summary-export=result.json
```


### K6 get detailed output in json

```
k6 run script.js --out json=full_REsults.json
```


## run tests in cloud
```
k6 cloud login --token pass token
k6 cloud script.js
```
## run k6 cloud locally and import to cloud

```
k6 run first-script.js -o cloud
```

### Best practices to handle diff warnings and excpetions by K6
https://k6.io/docs/cloud/analyzing-results/performance-insights/
