# Cadmea WebAPP top bar

## Syntax for use:
 ```
 import Top from 'app-top-bar-cadmea';
 
 let Store = <Redux Store>
 ...
 <Top store={Store}>
 ```

This package uses redux for state management. A single global state is required in the whole react app.

### For add Profile state to the redux state in Store.js of redux:
```
import {ProfileReducer} from 'app-top-bar-cadmea';
import { createStore, combineReducers } from 'redux';

...

const Store = createStore(combineReducers({ ..., Profile: ProfileReducer}), {});

```

A MetaData state is also required in the redux global state.

### Following is the meta data state configuration:

```
state = {
    base: 'http://localhost:8000', //the base url of the react app for production is will be ''
    profile_url: 'http://localhost:8000/user/api/profile', //url to fetch profile data
    fetch_credentials: 'include',  //the value for credentials attribute of fetch api call
    media_url: 'http://localhost:8000/media/' // Url for fecthing media files
	}
```
