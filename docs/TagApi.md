# radiomanager.TagApi

All URIs are relative to *https://staging.radiomanager.io/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTag**](TagApi.md#createTag) | **POST** /tags | Create tag.
[**deleteTagById**](TagApi.md#deleteTagById) | **DELETE** /tags/{id} | Delete tag by id
[**getTagById**](TagApi.md#getTagById) | **GET** /tags/{id} | Get tags by id
[**listTags**](TagApi.md#listTags) | **GET** /tags | Get a list of all the tags currently in your station.
[**updateTagByID**](TagApi.md#updateTagByID) | **PATCH** /tags/{id} | Update tag by id



## createTag

> InlineResponse2002 createTag(tagDataInput)

Create tag.

Create tag.

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.TagApi();
let tagDataInput = new radiomanager.TagDataInput(); // TagDataInput | Data **(Required)**
apiInstance.createTag(tagDataInput).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagDataInput** | [**TagDataInput**](TagDataInput.md)| Data **(Required)** | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTagById

> InlineResponse202 deleteTagById(id)

Delete tag by id

Delete tag by id

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.TagApi();
let id = 789; // Number | ID of Tag **(Required)**
apiInstance.deleteTagById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of Tag **(Required)** | 

### Return type

[**InlineResponse202**](InlineResponse202.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTagById

> TagResult getTagById(id)

Get tags by id

Get tags by id

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.TagApi();
let id = 789; // Number | ID of Tag **(Required)**
apiInstance.getTagById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of Tag **(Required)** | 

### Return type

[**TagResult**](TagResult.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTags

> InlineResponse20012 listTags(opts)

Get a list of all the tags currently in your station.

Get a list of all the tags currently in your station. This feature supports pagination and will give a maximum results of 50 tags back.

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.TagApi();
let opts = {
  'programId': 789, // Number | Search on Program ID *(Optional)* `(Relation)`
  'itemId': 789, // Number | Search on Item ID *(Optional)* `(Relation)`
  'broadcastId': 789, // Number | Search on Broadcast ID *(Optional)* `(Relation)`
  'contactId': 789, // Number | Search on Contact ID *(Optional)* `(Relation)`
  'page': 1, // Number | Current page *(Optional)*
  'limit': 789, // Number | Results per page *(Optional)*
  'orderBy': "orderBy_example", // String | Field to order the results *(Optional)*
  'orderDirection': "orderDirection_example", // String | Direction of ordering *(Optional)*
  'externalStationId': 789 // Number | Query on a different (content providing) station *(Optional)*
};
apiInstance.listTags(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **programId** | **Number**| Search on Program ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **itemId** | **Number**| Search on Item ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **broadcastId** | **Number**| Search on Broadcast ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **contactId** | **Number**| Search on Contact ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **page** | **Number**| Current page *(Optional)* | [optional] [default to 1]
 **limit** | **Number**| Results per page *(Optional)* | [optional] 
 **orderBy** | **String**| Field to order the results *(Optional)* | [optional] 
 **orderDirection** | **String**| Direction of ordering *(Optional)* | [optional] 
 **externalStationId** | **Number**| Query on a different (content providing) station *(Optional)* | [optional] 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTagByID

> InlineResponse202 updateTagByID(id, tagDataInput)

Update tag by id

Update tag by id

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.TagApi();
let id = 789; // Number | ID of Tag **(Required)**
let tagDataInput = new radiomanager.TagDataInput(); // TagDataInput | Data *(Optional)*
apiInstance.updateTagByID(id, tagDataInput).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of Tag **(Required)** | 
 **tagDataInput** | [**TagDataInput**](TagDataInput.md)| Data *(Optional)* | 

### Return type

[**InlineResponse202**](InlineResponse202.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

