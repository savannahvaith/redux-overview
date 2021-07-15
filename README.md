# Redux

## What is it?

* State mangement library
* Keep different parts of the UI in sync
* Data can flow from different parts of the UI seamlessely
* FLUX
  * Redux inspired by this
* Store all the state in a central repository, called the store.
* Single source of truth
* Db for the frontend
* Components don't maintain the state. Single place to update
* Centralise application store
* Makes data flow transparent and predictable.

## Pros and Cons

* Time travel debugging - useful for back tracking
* Log Rocket - reload the application in the same state as a user.
* Cache and preserve page state. Refresh the page will remember waht the page looks like, no need for waiting around.
* :heavy_check_mark: Predictable State changes
* :heavy_check_mark: Centralised state
* :heavy_check_mark: Easy Debugging
* :heavy_check_mark: Preserve page state
* :heavy_check_mark: Undo / Redo
* :heavy_check_mark: Large and growing eco system of addons
* :x: Complexity
* :x: Verbosity - You have to write boiler plate code to get things done

## When not to use REDUX

* Tight budget
* Small to medium size
* Simple ui/data flow
* Static data

