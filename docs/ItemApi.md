# radiomanager.ItemApi

All URIs are relative to *https://staging.radiomanager.io/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createItem**](ItemApi.md#createItem) | **POST** /items | Create an new item.
[**currentItemPostStructure**](ItemApi.md#currentItemPostStructure) | **POST** /items/current/structure | Post a current playing item, keep structure
[**currentItemPostTiming**](ItemApi.md#currentItemPostTiming) | **POST** /items/current/timing | Post current playing Item
[**deleteItemById**](ItemApi.md#deleteItemById) | **DELETE** /items/{id} | Delete item by ID.
[**getCurrentItem**](ItemApi.md#getCurrentItem) | **GET** /items/current | Get current Item
[**getItemById**](ItemApi.md#getItemById) | **GET** /items/{id} | Get extended item details by ID.
[**listItems**](ItemApi.md#listItems) | **GET** /items | Get a list of all the items currently in your station.
[**playlistPostMerge**](ItemApi.md#playlistPostMerge) | **POST** /items/playlist/merge | Post a playlist, do not remove previously imported items
[**playlistPostStructure**](ItemApi.md#playlistPostStructure) | **POST** /items/playlist/structure | Post a playlist, keep current structure
[**playlistPostTiming**](ItemApi.md#playlistPostTiming) | **POST** /items/playlist/timing | Post a playlist
[**stopCurrentItem**](ItemApi.md#stopCurrentItem) | **POST** /items/stopcurrent | Stop an Item
[**updateItemById**](ItemApi.md#updateItemById) | **PATCH** /items/{id} | Update extended item details by ID.



## createItem

> InlineResponse2002 createItem(itemDataInput)

Create an new item.

Create item.

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.ItemApi();
let itemDataInput = new radiomanager.ItemDataInput(); // ItemDataInput | Data **(Required)**
apiInstance.createItem(itemDataInput).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemDataInput** | [**ItemDataInput**](ItemDataInput.md)| Data **(Required)** | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## currentItemPostStructure

> ItemResult currentItemPostStructure(importItem)

Post a current playing item, keep structure

Post current playing Item. Can be existing Item referenced by external_id. When Items are moved, this function **will attempt to** keep Items&#39; ModelType structure in rundown.

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.ItemApi();
let importItem = new radiomanager.ImportItem(); // ImportItem | Data **(Required)**
apiInstance.currentItemPostStructure(importItem).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **importItem** | [**ImportItem**](ImportItem.md)| Data **(Required)** | 

### Return type

[**ItemResult**](ItemResult.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## currentItemPostTiming

> ItemResult currentItemPostTiming(importItem)

Post current playing Item

Post current playing Item. Can be existing Item referenced by external_id. When Items are moved, this function **will not keep** Items&#39; ModelType structure in rundown.

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.ItemApi();
let importItem = new radiomanager.ImportItem(); // ImportItem | Data **(Required)**
apiInstance.currentItemPostTiming(importItem).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **importItem** | [**ImportItem**](ImportItem.md)| Data **(Required)** | 

### Return type

[**ItemResult**](ItemResult.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteItemById

> deleteItemById(id)

Delete item by ID.

Delete item by id.

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.ItemApi();
let id = 789; // Number | ID of Item **(Required)**
apiInstance.deleteItemById(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of Item **(Required)** | 

### Return type

null (empty response body)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCurrentItem

> ItemResult getCurrentItem(opts)

Get current Item

Get current Item

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.ItemApi();
let opts = {
  'lastplayed': true // Boolean | Show last played item if there is no current item*(Optional)*
};
apiInstance.getCurrentItem(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lastplayed** | **Boolean**| Show last played item if there is no current item*(Optional)* | [optional] 

### Return type

[**ItemResult**](ItemResult.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getItemById

> ItemResult getItemById(id, opts)

Get extended item details by ID.

Read item by id.

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.ItemApi();
let id = 789; // Number | ID of Item **(Required)**
let opts = {
  'externalStationId': 789 // Number | Query on a different (content providing) station *(Optional)*
};
apiInstance.getItemById(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listItems

> InlineResponse2008 listItems(opts)

Get a list of all the items currently in your station.

Get a list of all the items currently in your station. This feature supports pagination and will give a maximum results of 50 items back.

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.ItemApi();
let opts = {
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
  'externalId': "externalId_example", // String | Search on External ID *(Optional)*
  'durationMin': 56, // Number | Minimum duration (seconds) *(Optional)*
  'durationMax': 56, // Number | Maximum duration (seconds) *(Optional)*
  'status': "status_example", // String | Play Status of item *(Optional)*
  'startMin': new Date("2013-10-20T19:20:30+01:00"), // Date | Minimum start date *(Optional)*
  'startMax': new Date("2013-10-20T19:20:30+01:00"), // Date | Maximum start date *(Optional)*
  'page': 1, // Number | Current page *(Optional)*
  'limit': 789, // Number | Results per page *(Optional)*
  'orderBy': "orderBy_example", // String | Field to order the results *(Optional)*
  'orderDirection': "orderDirection_example", // String | Direction of ordering *(Optional)*
  'externalStationId': 789 // Number | Query on a different (content providing) station *(Optional)*
};
apiInstance.listItems(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
 **externalId** | **String**| Search on External ID *(Optional)* | [optional] 
 **durationMin** | **Number**| Minimum duration (seconds) *(Optional)* | [optional] 
 **durationMax** | **Number**| Maximum duration (seconds) *(Optional)* | [optional] 
 **status** | **String**| Play Status of item *(Optional)* | [optional] 
 **startMin** | **Date**| Minimum start date *(Optional)* | [optional] 
 **startMax** | **Date**| Maximum start date *(Optional)* | [optional] 
 **page** | **Number**| Current page *(Optional)* | [optional] [default to 1]
 **limit** | **Number**| Results per page *(Optional)* | [optional] 
 **orderBy** | **String**| Field to order the results *(Optional)* | [optional] 
 **orderDirection** | **String**| Direction of ordering *(Optional)* | [optional] 
 **externalStationId** | **Number**| Query on a different (content providing) station *(Optional)* | [optional] 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## playlistPostMerge

> InlineResponse2021 playlistPostMerge(playlistMergeBody)

Post a playlist, do not remove previously imported items

Post a playlist with &#39;keep structure&#39; method, but do not remove previously imported items

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.ItemApi();
let playlistMergeBody = new radiomanager.PlaylistMergeBody(); // PlaylistMergeBody | Data *(Required)*
apiInstance.playlistPostMerge(playlistMergeBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlistMergeBody** | [**PlaylistMergeBody**](PlaylistMergeBody.md)| Data *(Required)* | 

### Return type

[**InlineResponse2021**](InlineResponse2021.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## playlistPostStructure

> InlineResponse2021 playlistPostStructure(playlistStructureBody)

Post a playlist, keep current structure

Post a playlist for a block. Existing Items can referenced by external_id. When Items are moved, this function **will attempt to** keep Items&#39; ModelType structure in rundown.

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.ItemApi();
let playlistStructureBody = new radiomanager.PlaylistStructureBody(); // PlaylistStructureBody | Data *(Required)*
apiInstance.playlistPostStructure(playlistStructureBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlistStructureBody** | [**PlaylistStructureBody**](PlaylistStructureBody.md)| Data *(Required)* | 

### Return type

[**InlineResponse2021**](InlineResponse2021.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## playlistPostTiming

> InlineResponse2021 playlistPostTiming(playlistTimingBody)

Post a playlist

Post a playlist for a block. Existing Items can referenced by external_id. When Items are moved, this function **will not** keep Items&#39; ModelType structure in rundown.

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.ItemApi();
let playlistTimingBody = new radiomanager.PlaylistTimingBody(); // PlaylistTimingBody | Data *(Required)*
apiInstance.playlistPostTiming(playlistTimingBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playlistTimingBody** | [**PlaylistTimingBody**](PlaylistTimingBody.md)| Data *(Required)* | 

### Return type

[**InlineResponse2021**](InlineResponse2021.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## stopCurrentItem

> InlineResponse202 stopCurrentItem(opts)

Stop an Item

Set a current playing or specific item on played

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.ItemApi();
let opts = {
  'itemsStopcurrentBody': new radiomanager.ItemsStopcurrentBody() // ItemsStopcurrentBody | Data *(Optional)*
};
apiInstance.stopCurrentItem(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemsStopcurrentBody** | [**ItemsStopcurrentBody**](ItemsStopcurrentBody.md)| Data *(Optional)* | [optional] 

### Return type

[**InlineResponse202**](InlineResponse202.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateItemById

> InlineResponse202 updateItemById(id, itemDataInput)

Update extended item details by ID.

Update item by id.

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.ItemApi();
let id = 789; // Number | ID of Item **(Required)**
let itemDataInput = new radiomanager.ItemDataInput(); // ItemDataInput | Data *(Optional)*
apiInstance.updateItemById(id, itemDataInput).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of Item **(Required)** | 
 **itemDataInput** | [**ItemDataInput**](ItemDataInput.md)| Data *(Optional)* | 

### Return type

[**InlineResponse202**](InlineResponse202.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

