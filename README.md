# CovidUpdates

CovidUpdates app is a simple app based angular version (12)

Application consist 3 main features:
1. See popular countries (20 max deaths).
2. Set and see favorites countries from the popular list.
3. Get status by date on each country.


## Installation


```bash
- clone the repo.
- run "npm install".
- run "npm start".
```

## Usage

```python
1. run "npm start" or "ng serve"(if you have angular-cli installed globally) - 
   will be available at localhost:4200
```

## Client Application Structure

As stated before the app consist of three main features: 
1. Popular countries list.
2. Favorites countries list.
3. Country Status By Date.

In addition, it uses the following external libraries:
1. **Angular Material** - for global styling + UI components
2. **ngrx** - for state management

In addition, the following are the main folders structure:


**1. State** 

   here are all the store (state management) related files.
 
   - **actions** - all type actions related to the feature - responsible for requesting the app to make an action. For example: fetching countries list.
   - **reducers** - all reducers related to the feature - the only place where the store can be mutated (changed).
   - **selectors** - all selectors related to the feature.
   - **facade** - provides a simple public interface to mask more complex usage (see bullet #4).
   - **state** - define the state interface.


**2. components**

   Here are all the presentational/dumb components (they can be on a separate module or not - up to you to decide)


**3. facades**

This layer is based on the facade design pattern and its purpose is to prevent container components to be depend directly on the store.
This way it will be easier to upgrade/switch to a different state management library without the need to "touch" all containers as well.\
    In addition, it makes the container's code look much cleaner.


**4. services**

   Since services are singletons in angular it is a good idea to place all reusable business logic and any helpers here. for example: service with all api endpoint requests, error massages, localization, etc..      


## License
[MIT](https://choosealicense.com/licenses/mit/)
