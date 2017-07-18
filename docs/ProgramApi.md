# radiomanager.ProgramApi

All URIs are relative to *https://staging.radiomanager.pluxbox.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProgram**](ProgramApi.md#createProgram) | **POST** /programs | Create program.
[**deleteProgramById**](ProgramApi.md#deleteProgramById) | **DELETE** /programs/{id} | Delete program by id
[**getProgramById**](ProgramApi.md#getProgramById) | **GET** /programs/{id} | Get program by id
[**listPrograms**](ProgramApi.md#listPrograms) | **GET** /programs | Get all programs.
[**updateProgramByID**](ProgramApi.md#updateProgramByID) | **PATCH** /programs/{id} | Update program by id


<a name="createProgram"></a>
# **createProgram**
> PostSuccess createProgram(data)

Create program.

Create program.

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.ProgramApi();

var data = new radiomanager.ProgramDataInput(); // ProgramDataInput | Data **(Required)**

apiInstance.createProgram(data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**ProgramDataInput**](ProgramDataInput.md)| Data **(Required)** | 

### Return type

[**PostSuccess**](PostSuccess.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteProgramById"></a>
# **deleteProgramById**
> Success deleteProgramById(id)

Delete program by id

Delete program by id

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.ProgramApi();

var id = 789; // Number | ID of program **(Required)**

apiInstance.deleteProgramById(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of program **(Required)** | 

### Return type

[**Success**](Success.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProgramById"></a>
# **getProgramById**
> ProgramResult getProgramById(id, opts)

Get program by id

Get program by id

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.ProgramApi();

var id = 789; // Number | ID of Program **(Required)**

var opts = { 
  'externalStationId': 789 // Number | Query on a different (content providing) station *(Optional)*
};
apiInstance.getProgramById(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of Program **(Required)** | 
 **externalStationId** | **Number**| Query on a different (content providing) station *(Optional)* | [optional] 

### Return type

[**ProgramResult**](ProgramResult.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listPrograms"></a>
# **listPrograms**
> ProgramResults listPrograms(opts)

Get all programs.

List all programs.

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.ProgramApi();

var opts = { 
  'page': 789, // Number | Current page *(Optional)*
  'genreId': 789, // Number | Search on Genre ID *(Optional)*
  'modelTypeId': 789, // Number | Search on ModelType ID *(Optional)*
  'presenterId': 789, // Number | Search on Presenter ID *(Optional)* `(Relation)`
  'tagId': 789, // Number | Search on Tag ID *(Optional)* `(Relation)`
  'broadcastId': 789, // Number | Search on Broadcast ID *(Optional)* `(Relation)`
  'itemId': 789, // Number | Search on Item ID *(Optional)* `(Relation)`
  'blockId': 789, // Number | Search on Block ID *(Optional)* `(Relation)`
  'externalStationId': 789 // Number | Query on a different (content providing) station *(Optional)*
};
apiInstance.listPrograms(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Current page *(Optional)* | [optional] 
 **genreId** | **Number**| Search on Genre ID *(Optional)* | [optional] 
 **modelTypeId** | **Number**| Search on ModelType ID *(Optional)* | [optional] 
 **presenterId** | **Number**| Search on Presenter ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **tagId** | **Number**| Search on Tag ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **broadcastId** | **Number**| Search on Broadcast ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **itemId** | **Number**| Search on Item ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **blockId** | **Number**| Search on Block ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **externalStationId** | **Number**| Query on a different (content providing) station *(Optional)* | [optional] 

### Return type

[**ProgramResults**](ProgramResults.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateProgramByID"></a>
# **updateProgramByID**
> Success updateProgramByID(id, opts)

Update program by id

Update program by id

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.ProgramApi();

var id = 789; // Number | ID of Program **(Required)**

var opts = { 
  'data': new radiomanager.ProgramDataInput() // ProgramDataInput | Data *(Optional)*
};
apiInstance.updateProgramByID(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of Program **(Required)** | 
 **data** | [**ProgramDataInput**](ProgramDataInput.md)| Data *(Optional)* | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

