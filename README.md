# Cadmea WebAPP top bar

## Syntax for use:
 ```
 import Top from 'app-top-bar-cadmea';
 
 let Store = <Redux Store>
 ...
 // render the following on screen
 <Top store={Store}>
 ```

This package uses redux for state management. A single global state is required in the whole react app.
This package requires two reducers to be added to redux global state: Profile-State and MetaData state

### To add Profile and MetaData state to the redux state in Store.js of redux:
```
import {ProfileReducer, MetaData} from 'app-top-bar-cadmea';
import { createStore, combineReducers } from 'redux';

...

const Store = createStore(combineReducers({ ..., Profile: ProfileReducer, MetaData}), {});

```



### Following is the default meta data state configuration(All data are according to production configration) :

```
state = {
    base: '', //the base url of the react app for production is will be ''
    profile_url: '/user/api/profile', //url to fetch profile data
    fetch_credentials: 'same-origin',  //the value for credentials attribute of fetch api call
    media_url: 'https://cadmea.blob.core.windows.net/education/' // Root url for fecthing media files
    theme={...}
	}
```

### Redux dispatchable actions are also exported from this package as MetaStateAction and ProfileStateAction:
#### to import: 
```
import {MetaStateAction} from 'app-top-bar-cadmea';
import {ProfileStateAction} from 'app-top-bar-cadmea';

```
Dispatchable actions to update MetaData: ```MetaStateAction.updateMetaState(updatedMetaState)```
Dispatchable action to update Profile: ``` ProfileStateAction.updateProfile(updatedProfleStat) ```
### Meta Data also includes the default theme configuration:(It can be extended according to the app that is using this package)
```
theme: {
		light: [
			[ '--body-color', 'rgb(247, 247, 247)' ],
			[ '--primary-bgColor', 'white' ],
			[ '--complementary-bgColor', 'black' ],
			[ '--primary-color', 'black' ],
			[ '--secondary-color', 'rgba(50, 50, 50, 0.7)' ],
			[ '--primary-shadow-color', 'black' ],
			[ '--green-color', 'green' ]
		],
		dark: [
			[ '--body-color', 'rgba(0, 0, 0, 0.9)' ],
			[ '--primary-bgColor', 'rgb(30, 34, 36)' ],
			[ '--complementary-bgColor', 'white' ],
			[ '--primary-color', 'white' ],
			[ '--secondary-color', 'silver' ],
			[ '--primary-shadow-color', 'white' ],
			[ '--green-color', 'lightgreen' ]
		]
	}
```

### Top BAr height: 85px in desktop view, 60px in mobile view