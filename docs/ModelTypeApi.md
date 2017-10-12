# radiomanager.ModelTypeApi

All URIs are relative to *https://radiomanager.pb/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getModelTypeById**](ModelTypeApi.md#getModelTypeById) | **GET** /model_types/{id} | Get modelType by id
[**listModelTypes**](ModelTypeApi.md#listModelTypes) | **GET** /model_types | Get all modelTypes.


<a name="getModelTypeById"></a>
# **getModelTypeById**
> ModelTypeResult getModelTypeById(id, opts)

Get modelType by id

Get modelType by id

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.ModelTypeApi();

var id = 789; // Number | ID of ModelType **(Required)**

var opts = { 
  'externalStationId': 789 // Number | Query on a different (content providing) station *(Optional)*
};
apiInstance.getModelTypeById(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of ModelType **(Required)** | 
 **externalStationId** | **Number**| Query on a different (content providing) station *(Optional)* | [optional] 

### Return type

[**ModelTypeResult**](ModelTypeResult.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listModelTypes"></a>
# **listModelTypes**
> ModelTypeResults listModelTypes(opts)

Get all modelTypes.

List all modelTypes.

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.ModelTypeApi();

var opts = { 
  'page': 789, // Number | Current page *(Optional)*
  'programId': 789, // Number | Search on Program ID *(Optional)*
  'broadcastId': 789, // Number | Search on Broadcast ID *(Optional)*
  'itemId': 789, // Number | Search on Item ID *(Optional)*
  'campaignId': 789, // Number | Search on Campaign ID *(Optional)*
  'presenterId': 789, // Number | Search on Presenter ID *(Optional)*
  'contactId': 789, // Number | Search on Contact ID *(Optional)*
  'model': "model_example", // String | Search Modeltypes for certain Model *(Optional)*
  'limit': 789, // Number | Results per page *(Optional)*
  'orderBy': "orderBy_example", // String | Field to order the results *(Optional)*
  'orderDirection': "orderDirection_example", // String | Direction of ordering *(Optional)*
  'externalStationId': 789 // Number | Query on a different (content providing) station *(Optional)*
};
apiInstance.listModelTypes(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Current page *(Optional)* | [optional] 
 **programId** | **Number**| Search on Program ID *(Optional)* | [optional] 
 **broadcastId** | **Number**| Search on Broadcast ID *(Optional)* | [optional] 
 **itemId** | **Number**| Search on Item ID *(Optional)* | [optional] 
 **campaignId** | **Number**| Search on Campaign ID *(Optional)* | [optional] 
 **presenterId** | **Number**| Search on Presenter ID *(Optional)* | [optional] 
 **contactId** | **Number**| Search on Contact ID *(Optional)* | [optional] 
 **model** | **String**| Search Modeltypes for certain Model *(Optional)* | [optional] 
 **limit** | **Number**| Results per page *(Optional)* | [optional] 
 **orderBy** | **String**| Field to order the results *(Optional)* | [optional] 
 **orderDirection** | **String**| Direction of ordering *(Optional)* | [optional] 
 **externalStationId** | **Number**| Query on a different (content providing) station *(Optional)* | [optional] 

### Return type

[**ModelTypeResults**](ModelTypeResults.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

