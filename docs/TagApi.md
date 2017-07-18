# radiomanager.TagApi

All URIs are relative to *https://staging.radiomanager.pluxbox.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTag**](TagApi.md#createTag) | **POST** /tags | Create tag.
[**deleteTagById**](TagApi.md#deleteTagById) | **DELETE** /tags/{id} | Delete tag by id
[**getTagById**](TagApi.md#getTagById) | **GET** /tags/{id} | Get tags by id
[**listTags**](TagApi.md#listTags) | **GET** /tags | Get a list of all the tags currently in your station.
[**updateTagByID**](TagApi.md#updateTagByID) | **PATCH** /tags/{id} | Update tag by id


<a name="createTag"></a>
# **createTag**
> PostSuccess createTag(data)

Create tag.

Create tag.

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.TagApi();

var data = new radiomanager.TagDataInput(); // TagDataInput | Data **(Required)**

apiInstance.createTag(data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**TagDataInput**](TagDataInput.md)| Data **(Required)** | 

### Return type

[**PostSuccess**](PostSuccess.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTagById"></a>
# **deleteTagById**
> Success deleteTagById(id)

Delete tag by id

Delete tag by id

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.TagApi();

var id = 789; // Number | ID of Tag **(Required)**

apiInstance.deleteTagById(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of Tag **(Required)** | 

### Return type

[**Success**](Success.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTagById"></a>
# **getTagById**
> TagResult getTagById(id, opts)

Get tags by id

Get tags by id

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.TagApi();

var id = 789; // Number | ID of Tag **(Required)**

var opts = { 
  'externalStationId': 789 // Number | Query on a different (content providing) station *(Optional)*
};
apiInstance.getTagById(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of Tag **(Required)** | 
 **externalStationId** | **Number**| Query on a different (content providing) station *(Optional)* | [optional] 

### Return type

[**TagResult**](TagResult.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listTags"></a>
# **listTags**
> TagResults listTags(opts)

Get a list of all the tags currently in your station.

Get a list of all the tags currently in your station. This feature supports pagination and will give a maximum results of 50 tags back.

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.TagApi();

var opts = { 
  'page': 789, // Number | Current page *(Optional)*
  'programId': 789, // Number | Search on Program ID *(Optional)* `(Relation)`
  'itemId': 789, // Number | Search on Item ID *(Optional)* `(Relation)`
  'broadcastId': 789, // Number | Search on Broadcast ID *(Optional)* `(Relation)`
  'contactId': 789, // Number | Search on Contact ID *(Optional)* `(Relation)`
  'externalStationId': 789 // Number | Query on a different (content providing) station *(Optional)*
};
apiInstance.listTags(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Current page *(Optional)* | [optional] 
 **programId** | **Number**| Search on Program ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **itemId** | **Number**| Search on Item ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **broadcastId** | **Number**| Search on Broadcast ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **contactId** | **Number**| Search on Contact ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **externalStationId** | **Number**| Query on a different (content providing) station *(Optional)* | [optional] 

### Return type

[**TagResults**](TagResults.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTagByID"></a>
# **updateTagByID**
> Success updateTagByID(id, opts)

Update tag by id

Update tag by id

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.TagApi();

var id = 789; // Number | ID of Tag **(Required)**

var opts = { 
  'data': new radiomanager.TagDataInput() // TagDataInput | Data *(Optional)*
};
apiInstance.updateTagByID(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of Tag **(Required)** | 
 **data** | [**TagDataInput**](TagDataInput.md)| Data *(Optional)* | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

