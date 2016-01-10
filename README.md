[logo]: http://aping.io/logo/320/aping-plugin.png "apiNG Plugin"
![apiNG][logo]

**_apiNG-plugin-ngArray_** is a [**apiNG**](https://github.com/JohnnyTheTank/apiNG) plugin for loading data from $rootScope

# Information
* **This plugin supports every apiNG model (no data transformation)**

# Documentation

1. [INSTALLATION](#1-installation)
    1. Get file
    2. Include file
    3. Add dependencies
    4. Add plugin
2. [USAGE](#2-usage)
    1. Models
    2. Controller
    3. Requests

## 1. INSTALLATION

### I. Get file
Install via either [bower](http://bower.io/), [npm](https://www.npmjs.com/) or downloaded files:

* `bower install apiNG-plugin-ng-array --save`
* `npm install aping-plugin-ng-array --save`
* download [apiNG-plugin-ng-array.zip](https://github.com/JohnnyTheTank/apiNG-plugin-ng-array/zipball/master)

### II. Include file
Include `aping-plugin-ng-array.min.js` in your apiNG application

```html
<!-- when using bower -->
<script src="bower_components/apiNG-plugin-ng-array/dist/aping-plugin-ng-array.min.js"></script>

<!-- when using npm -->
<script src="node_modules/aping-plugin-ng-array/dist/aping-plugin-ng-array.min.js"></script>

<!-- when using downloaded files -->
<script src="aping-plugin-ng-array.min.js"></script>
```

### III. Add dependencies
Add the module `jtt_aping_ng_array` as a dependency to your app module:
```js
var app = angular.module('app', ['jtt_aping', 'jtt_aping_ng_array']);
```

### IV. Add the plugin
Add the plugin's directive `aping-ng-array="[]"` to your apiNG directive and [configure your requests](#iii-requests)
```html
<aping
    template-url="templates/event.html"
    model="event"
    items="20"
    aping-ng-array="[{'name':'eventsArray'}]">
</aping>
```

## 2. USAGE

### I. Models
This plugin supports **every apiNG model**

|  model   | content |
|----------|---------|
| `native` | **any kind of data** |


### II. Controller
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

### III. Requests
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

