# staticTimestamp.js

Location: /lib/staticTimestamp.js

Required NPM: node-timestamp

Refrence: `var timestamp = require('./lib/timstamp.js')`

### Overview 

This module will return a dynamic timestamp. That it will fetch the current time every time a getter is called. 

Useful if you only want to call the object once and call getters multiple times. 

Scroll down to the Usage section for more details.

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
    
    
### Usage 


This timestamp will return dynamic current timestamps.
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

> 04
```


Whereas StaticTimestamp returns 01 both times. 
