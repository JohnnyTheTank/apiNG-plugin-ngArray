[logo]: http://aping.io/logo/320/aping-plugin.png "apiNG Plugin"
![apiNG][logo]

**_apiNG-plugin-ngArray_** is a [**apiNG**](https://github.com/JohnnyTheTank/apiNG) plugin for loading data from $rootScope

# Information
* **This plugin supports every apiNG model**

# Documentation
    I.  INSTALLATION
    II. USAGE

## I. INSTALLATION
    a) Get files
    b) Include files
    c) Add dependencies
    d) Add the plugin


### a) Get files
You can choose your preferred method of installation:

* Via bower: `bower install apiNG-plugin-ngArray --save`
* Download from github: [apiNG-plugin-ngArray.zip](https://github.com/JohnnyTheTank/apiNG-plugin-ngArray/zipball/master)

### b) Include files
Include `aping-plugin-ng-array.min.js` in your apiNG application
```html
<script src="bower_components/apiNG-plugin-ngArray/dist/aping-plugin-ng-array.min.js"></script>
```

### c) Add dependencies
Add the module `jtt_aping_ng_array` as a dependency to your app module:
```js
var app = angular.module('app', ['jtt_aping', 'jtt_aping_ng_array']);
```

### d) Add the plugin
Add the plugin's directive `aping-ng-array="[]"` to your apiNG directive and configure your requests (_**II. USAGE**_)
```html
<aping
    template-url="templates/event.html"
    model="event"
    items="20"
    aping-ng-array="[{'name':'eventsArray'}]">
</aping>
```

## II. USAGE
    a) Models
    b) Controller
    c) Requests

### a) Models
This plugin supports **every apiNG model**

|  model   | content |
|----------|---------|
| `native` | **any kind of data** |


### b) Controller
You need an Angular Controller like this:
```JavaScript
angular.module('data', [])
    .controller('dataController', ['$rootScope', '$scope', function ($rootScope, $scope) {
        $rootScope.array1 = [
            {x: true, y: false},
            {z: false, q: true},
            {a: false, b: true}
        ];

        $rootScope.array2 = [
            {c: true, d: false},
            {e: false, h: true},
            {f: false, g: true}
        ];

        $rootScope.object1 = {type:"simple object"};
    }]);
```

Now you can load this `$rootScope` Arrays and Object like this:
```html
<div ng-controller="dataController">
    <aping
            aping-ng-array="[{'name':'array1'}, {'name':'array2'}, {'name':'object1'}]">
    </aping>
</div>
```

### c) Requests
Every **apiNG plugin** expects an array of **requests** as html attribute.


#### Requests by Path
|  parameter  | sample | default | description | optional |
|----------|---------|---------|---------|---------|
| **`name`** | `dataArray` |  | $ | no |
| **`items`**  | `20` | | Items per request (`0`-`n`) |  yes  |

Sample requests:
* `[{'name':'dataArray', 'items':5}]`
* `[{'name':'array1'}, {'name':'array2'}, {'name':'object1'}]`


# Licence
MIT

