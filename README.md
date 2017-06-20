# Coding Assignment 

In these two code snippets there are more than 2 functions and we have purposely added bad/less efficient
code. The 2 code snippets are part of a Pull Request your teammate did. So we would like you to do the
following:

* 1. Review the code and provide feedback if you see anything that could be improved.
* 2. Provide the code of a better way to implement this.

Each function should have a method that is going to be executed by an endpoint in AWS.The callback
parameter is a function pointer that returns the HTTP Response parameters.

### Function 1

```
TangoCoder Ronald Wayne, implemented a feature to retrieve the list of all the Clients from our MySQL DB.
This code is triggered in response to a GET HTTP Request, and the query string parameters are passed inside
the event object as event.queryStringParameters . The only required parameter for this method is the
sort criteria, that will tell the attribute in the table by which the data will be ordered. In case of an error, the
status code has to reflect such result.

```

### Function 2

```
TangoCoder Margaret Brown, implemented a function to update a Client in our MySQL DB, this function could
be triggered from different sources (REST API, lambda function, etc). This function basically triggers an update
and return the results in a Promise

The second function is a wrapper of the first one, and is the function to be triggered in response to the API
request. It is in charge of parsing the data received, trigger the update and return a response.

```



