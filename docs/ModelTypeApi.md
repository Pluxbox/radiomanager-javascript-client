# radiomanager.ModelTypeApi

All URIs are relative to *https://staging.radiomanager.io/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getModelTypeById**](ModelTypeApi.md#getModelTypeById) | **GET** /model_types/{id} | Get modelType by id
[**listModelTypes**](ModelTypeApi.md#listModelTypes) | **GET** /model_types | Get all modelTypes.



## getModelTypeById

> ModelTypeResult getModelTypeById(id, opts)

Get modelType by id

Get modelType by id

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.ModelTypeApi();
let id = 789; // Number | ID of ModelType **(Required)**
let opts = {
  'orderDirection': "orderDirection_example", // String | Direction of ordering *(Optional)*
  'externalStationId': 789 // Number | Query on a different (content providing) station *(Optional)*
};
apiInstance.getModelTypeById(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of ModelType **(Required)** | 
 **orderDirection** | **String**| Direction of ordering *(Optional)* | [optional] 
 **externalStationId** | **Number**| Query on a different (content providing) station *(Optional)* | [optional] 

### Return type

[**ModelTypeResult**](ModelTypeResult.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listModelTypes

> InlineResponse2009 listModelTypes(opts)

Get all modelTypes.

List all modelTypes.

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.ModelTypeApi();
let opts = {
  'programId': 789, // Number | Search on Program ID *(Optional)*
  'broadcastId': 789, // Number | Search on Broadcast ID *(Optional)*
  'itemId': 789, // Number | Search on Item ID *(Optional)*
  'campaignId': 789, // Number | Search on Campaign ID *(Optional)*
  'presenterId': 789, // Number | Search on Presenter ID *(Optional)*
  'contactId': 789, // Number | Search on Contact ID *(Optional)*
  'model': "model_example", // String | Search Modeltypes for certain Model *(Optional)*
  'orderDirection': "orderDirection_example", // String | Direction of ordering *(Optional)*
  'externalStationId': 789 // Number | Query on a different (content providing) station *(Optional)*
};
apiInstance.listModelTypes(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **programId** | **Number**| Search on Program ID *(Optional)* | [optional] 
 **broadcastId** | **Number**| Search on Broadcast ID *(Optional)* | [optional] 
 **itemId** | **Number**| Search on Item ID *(Optional)* | [optional] 
 **campaignId** | **Number**| Search on Campaign ID *(Optional)* | [optional] 
 **presenterId** | **Number**| Search on Presenter ID *(Optional)* | [optional] 
 **contactId** | **Number**| Search on Contact ID *(Optional)* | [optional] 
 **model** | **String**| Search Modeltypes for certain Model *(Optional)* | [optional] 
 **orderDirection** | **String**| Direction of ordering *(Optional)* | [optional] 
 **externalStationId** | **Number**| Query on a different (content providing) station *(Optional)* | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

