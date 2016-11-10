# timestamp.js

Location: /lib/timestamp.js

Required NPM: node-timestamp

Refrence: `var timestamp = require('./lib/timstamp.js')`


### Components

**NOTE: Output's are listed for your formatting pleasure**

[Object] Timestamp()

* Creates a new timestamp object

[Function] getTimestamp24()

* Gets the timestamp in 24H time

    `11/10/2016 01:43`

[Function] getTimestamp12()

* Gets the timestamp in 12H time, PM is indicated
    
    `11/10/2016 01:43`
    
    `11/10/2016 01:43 PM`
    

[Function] getDate()

* Gets the date

    `11/10/2016`



[Function] getMonth()

* Gets the month

    `11`

[Function] getDay()

* Gets the day

    `10`

[Function] getYear()

* Gets the year (YYYY)

    `2016`

[Function] getTime24()

* Gets the time (24H Format)

    `21:54:24`

[Function] getTime12()

* Gets the time (12H Format)

    `01:54:24 PM`


[Function] getTimeNoSeconds24()

* Gets the time (24H Format)

    `21:54`


[Function] getTimeNoSecond12()

* Gets the time (12H Format)

    `01:54 PM`


[Function] getHour24()

* Get the hour (24H Format)

    `22`


[Function] getHour12()

* Get the hour (12H Format)

    `6 PM`


[Function] getMinute()

* Get the minute

    `32`


[Function] getSecond()

* Get the second

    `45`
    
   
Please note. The time is captured in the object on creation. So the function below will return the same thing


```

console.log(Timestamp.getSecond()); //Gets the current seconds

setTimeout(function(){
    console.log(Timestamp.getSecond()); // Gets current time again
}, 3000);

```

Output:

```
> 01

// Three second delay

> 01
```

Working on a solution