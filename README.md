# Bluechip Functions Library

## Simple library/service with abstraction functions for your usage pleasure

# Getting started


## Installation
To install this awesome package enter the root folder of your project:
```
npm install --save bluechip-functions

```


## Set Up and Usage
Import these relevant dependencies into your app file and also add the service to providers array :
```
import { DatePipe} from '@angular/common';
import { BluechipFunctionsService} from 'bluechip-functions';

...
providers:[
  DatePipe,
  BluechipFunctionsService
]

```

Import this into the component of your heart desire :
```
import { BluechipFunctionsService} from 'bluechip-functions';

constructor(private bchip:BluechipFunctionsService){}

date:String = bchip.getStringDateFromLong(1223723723);

```
Enjoy
