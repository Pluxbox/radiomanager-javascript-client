# radiomanager.PresenterApi

All URIs are relative to *https://staging.radiomanager.io/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPresenter**](PresenterApi.md#createPresenter) | **POST** /presenters | Create presenter.
[**deletePresenterById**](PresenterApi.md#deletePresenterById) | **DELETE** /presenters/{id} | Delete presenter by id
[**getPresenterById**](PresenterApi.md#getPresenterById) | **GET** /presenters/{id} | Get presenter by id
[**listPresenters**](PresenterApi.md#listPresenters) | **GET** /presenters | Get all presenters.
[**updatePresenterByID**](PresenterApi.md#updatePresenterByID) | **PATCH** /presenters/{id} | Update presenter by id



## createPresenter

> InlineResponse2002 createPresenter(presenterDataInput)

Create presenter.

Create presenter.

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.PresenterApi();
let presenterDataInput = new radiomanager.PresenterDataInput(); // PresenterDataInput | Data **(Required)**
apiInstance.createPresenter(presenterDataInput).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **presenterDataInput** | [**PresenterDataInput**](PresenterDataInput.md)| Data **(Required)** | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePresenterById

> InlineResponse202 deletePresenterById(id)

Delete presenter by id

Delete presenter by id

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.PresenterApi();
let id = 789; // Number | id of presenter
apiInstance.deletePresenterById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id of presenter | 

### Return type

[**InlineResponse202**](InlineResponse202.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPresenterById

> PresenterResult getPresenterById(id)

Get presenter by id

Get presenter by id

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.PresenterApi();
let id = 789; // Number | id of Presenter
apiInstance.getPresenterById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id of Presenter | 

### Return type

[**PresenterResult**](PresenterResult.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPresenters

> InlineResponse20010 listPresenters(opts)

Get all presenters.

List all presenters.

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.PresenterApi();
let opts = {
  'programId': 789, // Number | Search on Program ID *(Optional)* `(Relation)`
  'broadcastId': 789, // Number | Search on Broadcast ID *(Optional)* `(Relation)`
  'modelTypeId': 789, // Number | Search on ModelType ID (Optional)
  'page': 1, // Number | Current page *(Optional)*
  'limit': 789, // Number | Results per page *(Optional)*
  'orderBy': "orderBy_example", // String | Field to order the results *(Optional)*
  'orderDirection': "orderDirection_example", // String | Direction of ordering *(Optional)*
  'externalStationId': 789 // Number | Query on a different (content providing) station *(Optional)*
};
apiInstance.listPresenters(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **programId** | **Number**| Search on Program ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **broadcastId** | **Number**| Search on Broadcast ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **modelTypeId** | **Number**| Search on ModelType ID (Optional) | [optional] 
 **page** | **Number**| Current page *(Optional)* | [optional] [default to 1]
 **limit** | **Number**| Results per page *(Optional)* | [optional] 
 **orderBy** | **String**| Field to order the results *(Optional)* | [optional] 
 **orderDirection** | **String**| Direction of ordering *(Optional)* | [optional] 
 **externalStationId** | **Number**| Query on a different (content providing) station *(Optional)* | [optional] 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatePresenterByID

> InlineResponse202 updatePresenterByID(id, presenterDataInput)

Update presenter by id

Update presenter by id

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.PresenterApi();
let id = 789; // Number | id of Presenter
let presenterDataInput = new radiomanager.PresenterDataInput(); // PresenterDataInput | Data *(Optional)*
apiInstance.updatePresenterByID(id, presenterDataInput).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id of Presenter | 
 **presenterDataInput** | [**PresenterDataInput**](PresenterDataInput.md)| Data *(Optional)* | 

### Return type

[**InlineResponse202**](InlineResponse202.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

