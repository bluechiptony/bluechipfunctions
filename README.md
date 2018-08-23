#Bluechip Functions Library

## Simple library/service with abstraction functions for your usage pleasure

#Getting started


##Installation
To install this awesome package enter the root folder of your project:
```
npm install --save bluechip-functions

```


##Set Up and Usage
Import this into your app.module.ts file and also add the service to providers array :
```
import { BluechipFunctionsService} from 'bluechip-functions';

...
providers:[
  BluechipFunctionsService
]

```

Import this into your desired component and usage ;
```
import { BluechipFunctionsService} from 'bluechip-functions';

constructor(private bchip:BluechipFunctionsService){}

date:String = bchip.getStringDateFromLong(1223723723);

```
Enjoy
