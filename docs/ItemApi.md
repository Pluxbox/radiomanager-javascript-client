# radiomanager.ItemApi

All URIs are relative to *https://radiomanager.pb/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createItem**](ItemApi.md#createItem) | **POST** /items | Create an new item.
[**currentItemPostStructure**](ItemApi.md#currentItemPostStructure) | **POST** /items/current/structure | Post a current playing item, keep structure
[**currentItemPostTiming**](ItemApi.md#currentItemPostTiming) | **POST** /items/current/timing | Post a current playing item
[**deleteItemById**](ItemApi.md#deleteItemById) | **DELETE** /items/{id} | Delete item by ID.
[**getItemById**](ItemApi.md#getItemById) | **GET** /items/{id} | Get extended item details by ID.
[**listItems**](ItemApi.md#listItems) | **GET** /items | Get a list of all the items currently in your station.
[**playlistPostStructure**](ItemApi.md#playlistPostStructure) | **POST** /items/playlist/structure | Post a playlist, keep current structure
[**playlistPostTiming**](ItemApi.md#playlistPostTiming) | **POST** /items/playlist/timing | Post a playlist
[**updateItemById**](ItemApi.md#updateItemById) | **PATCH** /items/{id} | Update extended item details by ID.


<a name="createItem"></a>
# **createItem**
> PostSuccess createItem(opts)

Create an new item.

Create item.

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.ItemApi();

var opts = { 
  'data': new radiomanager.ItemDataInput() // ItemDataInput | Data *(Optional)*
};
apiInstance.createItem(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**ItemDataInput**](ItemDataInput.md)| Data *(Optional)* | [optional] 

### Return type

[**PostSuccess**](PostSuccess.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="currentItemPostStructure"></a>
# **currentItemPostStructure**
> Success currentItemPostStructure(opts)

Post a current playing item, keep structure

Post a current playing item, keep structure

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.ItemApi();

var opts = { 
  'data': new radiomanager.ImportItem() // ImportItem | Data *(Optional)*
};
apiInstance.currentItemPostStructure(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**ImportItem**](ImportItem.md)| Data *(Optional)* | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="currentItemPostTiming"></a>
# **currentItemPostTiming**
> Success currentItemPostTiming(opts)

Post a current playing item

Post a current playing item

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.ItemApi();

var opts = { 
  'data': new radiomanager.ImportItem() // ImportItem | Data *(Optional)*
};
apiInstance.currentItemPostTiming(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**ImportItem**](ImportItem.md)| Data *(Optional)* | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteItemById"></a>
# **deleteItemById**
> Success deleteItemById(id)

Delete item by ID.

Delete item by id.

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.ItemApi();

var id = 789; // Number | ID of Item **(Required)**

apiInstance.deleteItemById(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of Item **(Required)** | 

### Return type

[**Success**](Success.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getItemById"></a>
# **getItemById**
> ItemResult getItemById(id, opts)

Get extended item details by ID.

Read item by id.

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.ItemApi();

var id = 789; // Number | ID of Item **(Required)**

var opts = { 
  'externalStationId': 789 // Number | Query on a different (content providing) station *(Optional)*
};
apiInstance.getItemById(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of Item **(Required)** | 
 **externalStationId** | **Number**| Query on a different (content providing) station *(Optional)* | [optional] 

### Return type

[**ItemResult**](ItemResult.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listItems"></a>
# **listItems**
> ItemResults listItems(opts)

Get a list of all the items currently in your station.

Get a list of all the items currently in your station. This feature supports pagination and will give a maximum results of 50 items back.

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.ItemApi();

var opts = { 
  'page': 789, // Number | Current page *(Optional)*
  'blockId': 789, // Number | Search on Block ID *(Optional)* `(Relation)`
  'broadcastId': 789, // Number | Search on Broadcast ID *(Optional)* `(Relation)`
  'modelTypeId': 789, // Number | Search on ModelType ID *(Optional)* `(Relation)`
  'tagId': 789, // Number | Search on Tag ID *(Optional)* `(Relation)`
  'campaignId': 789, // Number | Search on Campaign ID *(Optional)* `(Relation)`
  'contactId': 789, // Number | Search on Contact ID *(Optional)* `(Relation)`
  'programDraftId': 789, // Number | Search on Program Draft ID *(Optional)*
  'userDraftId': 789, // Number | Search on User Draft ID *(Optional)*
  'stationDraftId': 789, // Number | Search on Station Draft ID *(Optional)*
  'programId': 789, // Number | Search on Program ID *(Optional)* `(Relation)`
  'startMin': new Date("2013-10-20T19:20:30+01:00"), // Date | Minimum start date *(Optional)*
  'startMax': new Date("2013-10-20T19:20:30+01:00"), // Date | Maximum start date *(Optional)*
  'durationMin': 56, // Number | Minimum duration (seconds) *(Optional)*
  'durationMax': 56, // Number | Maximum duration (seconds) *(Optional)*
  'status': "status_example", // String | Play Status of item *(Optional)*
  'limit': 789, // Number | Results per page *(Optional)*
  'orderBy': "orderBy_example", // String | Field to order the results *(Optional)*
  'orderDirection': "orderDirection_example", // String | Direction of ordering *(Optional)*
  'externalStationId': 789 // Number | Query on a different (content providing) station *(Optional)*
};
apiInstance.listItems(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Current page *(Optional)* | [optional] 
 **blockId** | **Number**| Search on Block ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **broadcastId** | **Number**| Search on Broadcast ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **modelTypeId** | **Number**| Search on ModelType ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **tagId** | **Number**| Search on Tag ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **campaignId** | **Number**| Search on Campaign ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **contactId** | **Number**| Search on Contact ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **programDraftId** | **Number**| Search on Program Draft ID *(Optional)* | [optional] 
 **userDraftId** | **Number**| Search on User Draft ID *(Optional)* | [optional] 
 **stationDraftId** | **Number**| Search on Station Draft ID *(Optional)* | [optional] 
 **programId** | **Number**| Search on Program ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **startMin** | **Date**| Minimum start date *(Optional)* | [optional] 
 **startMax** | **Date**| Maximum start date *(Optional)* | [optional] 
 **durationMin** | **Number**| Minimum duration (seconds) *(Optional)* | [optional] 
 **durationMax** | **Number**| Maximum duration (seconds) *(Optional)* | [optional] 
 **status** | **String**| Play Status of item *(Optional)* | [optional] 
 **limit** | **Number**| Results per page *(Optional)* | [optional] 
 **orderBy** | **String**| Field to order the results *(Optional)* | [optional] 
 **orderDirection** | **String**| Direction of ordering *(Optional)* | [optional] 
 **externalStationId** | **Number**| Query on a different (content providing) station *(Optional)* | [optional] 

### Return type

[**ItemResults**](ItemResults.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="playlistPostStructure"></a>
# **playlistPostStructure**
> InlineResponse202 playlistPostStructure(opts)

Post a playlist, keep current structure

Post a playlist, keep current structure

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.ItemApi();

var opts = { 
  'data': new radiomanager.Data1() // Data1 | Data *(Optional)*
};
apiInstance.playlistPostStructure(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Data1**](Data1.md)| Data *(Optional)* | [optional] 

### Return type

[**InlineResponse202**](InlineResponse202.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="playlistPostTiming"></a>
# **playlistPostTiming**
> InlineResponse202 playlistPostTiming(opts)

Post a playlist

Post a playlist

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.ItemApi();

var opts = { 
  'data': new radiomanager.Data() // Data | Data *(Optional)*
};
apiInstance.playlistPostTiming(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Data**](Data.md)| Data *(Optional)* | [optional] 

### Return type

[**InlineResponse202**](InlineResponse202.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateItemById"></a>
# **updateItemById**
> Success updateItemById(id, opts)

Update extended item details by ID.

Update item by id.

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.ItemApi();

var id = 789; // Number | ID of Item **(Required)**

var opts = { 
  'data': new radiomanager.Item() // Item | Data *(Optional)*
};
apiInstance.updateItemById(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of Item **(Required)** | 
 **data** | [**Item**](Item.md)| Data *(Optional)* | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

