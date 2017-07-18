# radiomanager.UserApi

All URIs are relative to *https://staging.radiomanager.pluxbox.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUserById**](UserApi.md#deleteUserById) | **DELETE** /users/{id} | Remove user from station by Id
[**getUserById**](UserApi.md#getUserById) | **GET** /users/{id} | Get user by id
[**inviteUserByMail**](UserApi.md#inviteUserByMail) | **POST** /users/invite | Invite user by mail
[**listUsers**](UserApi.md#listUsers) | **GET** /users | Get all users.


<a name="deleteUserById"></a>
# **deleteUserById**
> Success deleteUserById(id)

Remove user from station by Id

Remove user from station by Id

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.UserApi();

var id = 789; // Number | id of User

apiInstance.deleteUserById(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id of User | 

### Return type

[**Success**](Success.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserById"></a>
# **getUserById**
> UserResult getUserById(id)

Get user by id

Get user by id

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.UserApi();

var id = 789; // Number | id of User

apiInstance.getUserById(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id of User | 

### Return type

[**UserResult**](UserResult.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="inviteUserByMail"></a>
# **inviteUserByMail**
> InviteUserSuccess inviteUserByMail(data)

Invite user by mail

Invite user by mail

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.UserApi();

var data = new radiomanager.InviteUserData(); // InviteUserData | Data **(Required)**

apiInstance.inviteUserByMail(data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**InviteUserData**](InviteUserData.md)| Data **(Required)** | 

### Return type

[**InviteUserSuccess**](InviteUserSuccess.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listUsers"></a>
# **listUsers**
> UserResults listUsers(opts)

Get all users.

List all users.

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.UserApi();

var opts = { 
  'page': 1, // Number | Current page *(Optional)*
  'roleId': 789 // Number | Search on Role ID *(Optional)*
};
apiInstance.listUsers(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Current page *(Optional)* | [optional] [default to 1]
 **roleId** | **Number**| Search on Role ID *(Optional)* | [optional] 

### Return type

[**UserResults**](UserResults.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

