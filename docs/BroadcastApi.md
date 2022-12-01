# radiomanager.BroadcastApi

All URIs are relative to *https://staging.radiomanager.io/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBroadcast**](BroadcastApi.md#createBroadcast) | **POST** /broadcasts | Create broadcast.
[**deleteBroadcastById**](BroadcastApi.md#deleteBroadcastById) | **DELETE** /broadcasts/{id} | Delete broadcast by id
[**getBroadcastById**](BroadcastApi.md#getBroadcastById) | **GET** /broadcasts/{id} | Get broadcast by id
[**getCurrentBroadcast**](BroadcastApi.md#getCurrentBroadcast) | **GET** /broadcasts/current | Get current Broadcast
[**getDailyEPG**](BroadcastApi.md#getDailyEPG) | **GET** /broadcasts/epg/daily | Get daily EPG
[**getEPGByDate**](BroadcastApi.md#getEPGByDate) | **GET** /broadcasts/epg | Get EPG by date
[**getNextBroadcast**](BroadcastApi.md#getNextBroadcast) | **GET** /broadcasts/next | Get next Broadcast
[**getWeeklyEPG**](BroadcastApi.md#getWeeklyEPG) | **GET** /broadcasts/epg/weekly | Get weekly EPG
[**listBroadcasts**](BroadcastApi.md#listBroadcasts) | **GET** /broadcasts | Get all broadcasts.
[**printBroadcastById**](BroadcastApi.md#printBroadcastById) | **GET** /broadcasts/print/{id} | Print broadcast by id with template
[**updateBroadcastByID**](BroadcastApi.md#updateBroadcastByID) | **PATCH** /broadcasts/{id} | Update broadcast by id



## createBroadcast

> InlineResponse2002 createBroadcast(broadcastDataInput)

Create broadcast.

Create broadcast.

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.BroadcastApi();
let broadcastDataInput = new radiomanager.BroadcastDataInput(); // BroadcastDataInput | Data **(Required)**
apiInstance.createBroadcast(broadcastDataInput).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **broadcastDataInput** | [**BroadcastDataInput**](BroadcastDataInput.md)| Data **(Required)** | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteBroadcastById

> InlineResponse202 deleteBroadcastById(id)

Delete broadcast by id

Delete broadcast by id

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.BroadcastApi();
let id = 789; // Number | ID of Broadcast **(Required)**
apiInstance.deleteBroadcastById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of Broadcast **(Required)** | 

### Return type

[**InlineResponse202**](InlineResponse202.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBroadcastById

> BroadcastResult getBroadcastById(id, opts)

Get broadcast by id

Get broadcast by id

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.BroadcastApi();
let id = 789; // Number | ID of Broadcast **(Required)**
let opts = {
  'externalStationId': 789 // Number | Query on a different (content providing) station *(Optional)*
};
apiInstance.getBroadcastById(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of Broadcast **(Required)** | 
 **externalStationId** | **Number**| Query on a different (content providing) station *(Optional)* | [optional] 

### Return type

[**BroadcastResult**](BroadcastResult.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCurrentBroadcast

> BroadcastResult getCurrentBroadcast(opts)

Get current Broadcast

Get currently playing Broadcast

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.BroadcastApi();
let opts = {
  'withunpublished': true // Boolean | Show Unpublished *(Optional)*
};
apiInstance.getCurrentBroadcast(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **withunpublished** | **Boolean**| Show Unpublished *(Optional)* | [optional] 

### Return type

[**BroadcastResult**](BroadcastResult.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDailyEPG

> EPGResults getDailyEPG(opts)

Get daily EPG

Get a list of broadcasts as Programming guide for 1 day

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.BroadcastApi();
let opts = {
  'date': new Date("2013-10-20T19:20:30+01:00"), // Date | Date *(Optional)*
  'withunpublished': true // Boolean | Show Unpublished *(Optional)*
};
apiInstance.getDailyEPG(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date** | **Date**| Date *(Optional)* | [optional] 
 **withunpublished** | **Boolean**| Show Unpublished *(Optional)* | [optional] 

### Return type

[**EPGResults**](EPGResults.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEPGByDate

> EPGResults getEPGByDate(opts)

Get EPG by date

Get a list of broadcasts as Programming guide, seperated per day

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.BroadcastApi();
let opts = {
  'date': new Date("2013-10-20T19:20:30+01:00"), // Date | Date *(Optional)*
  'withunpublished': true // Boolean | Show Unpublished *(Optional)*
};
apiInstance.getEPGByDate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date** | **Date**| Date *(Optional)* | [optional] 
 **withunpublished** | **Boolean**| Show Unpublished *(Optional)* | [optional] 

### Return type

[**EPGResults**](EPGResults.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNextBroadcast

> BroadcastResult getNextBroadcast(opts)

Get next Broadcast

Get currently upcoming Broadcast

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.BroadcastApi();
let opts = {
  'withunpublished': true // Boolean | Show Unpublished *(Optional)*
};
apiInstance.getNextBroadcast(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **withunpublished** | **Boolean**| Show Unpublished *(Optional)* | [optional] 

### Return type

[**BroadcastResult**](BroadcastResult.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWeeklyEPG

> EPGResults getWeeklyEPG(opts)

Get weekly EPG

Get a list of broadcasts as Programming guide for 7 days, seperated per day

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.BroadcastApi();
let opts = {
  'date': new Date("2013-10-20"), // Date | Date *(Optional)*
  'withunpublished': true // Boolean | Show Unpublished *(Optional)*
};
apiInstance.getWeeklyEPG(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date** | **Date**| Date *(Optional)* | [optional] 
 **withunpublished** | **Boolean**| Show Unpublished *(Optional)* | [optional] 

### Return type

[**EPGResults**](EPGResults.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listBroadcasts

> InlineResponse2001 listBroadcasts(opts)

Get all broadcasts.

List all broadcasts.

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.BroadcastApi();
let opts = {
  'programId': 789, // Number | Search on Program ID *(Optional)* `(Relation)`
  'blockId': 789, // Number | Search on Block ID *(Optional)* `(Relation)`
  'modelTypeId': 789, // Number | Search on ModelType ID *(Optional)* `(Relation)`
  'tagId': 789, // Number | Search on Tag ID *(Optional)* `(Relation)`
  'presenterId': 789, // Number | Search on Presenter ID *(Optional)* `(Relation)`
  'genreId': 789, // Number | Search on Genre ID *(Optional)* `(Relation)`
  'groupId': 789, // Number | Search on Group ID *(Optional)* `(Relation)`
  'itemId': 789, // Number | Search on Item ID *(Optional)* `(Relation)`
  'plannedInEpg': 789, // Number | Checks if item is in EPG *(Optional)*
  'startMin': new Date("2013-10-20T19:20:30+01:00"), // Date | Minimum start date *(Optional)*
  'startMax': new Date("2013-10-20T19:20:30+01:00"), // Date | Maximum start date *(Optional)*
  'page': 1, // Number | Current page *(Optional)*
  'limit': 789, // Number | Results per page *(Optional)*
  'orderBy': "orderBy_example", // String | Field to order the results *(Optional)*
  'orderDirection': "orderDirection_example", // String | Direction of ordering *(Optional)*
  'externalStationId': 789 // Number | Query on a different (content providing) station *(Optional)*
};
apiInstance.listBroadcasts(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **programId** | **Number**| Search on Program ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **blockId** | **Number**| Search on Block ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **modelTypeId** | **Number**| Search on ModelType ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **tagId** | **Number**| Search on Tag ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **presenterId** | **Number**| Search on Presenter ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **genreId** | **Number**| Search on Genre ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **groupId** | **Number**| Search on Group ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **itemId** | **Number**| Search on Item ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **plannedInEpg** | **Number**| Checks if item is in EPG *(Optional)* | [optional] 
 **startMin** | **Date**| Minimum start date *(Optional)* | [optional] 
 **startMax** | **Date**| Maximum start date *(Optional)* | [optional] 
 **page** | **Number**| Current page *(Optional)* | [optional] [default to 1]
 **limit** | **Number**| Results per page *(Optional)* | [optional] 
 **orderBy** | **String**| Field to order the results *(Optional)* | [optional] 
 **orderDirection** | **String**| Direction of ordering *(Optional)* | [optional] 
 **externalStationId** | **Number**| Query on a different (content providing) station *(Optional)* | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## printBroadcastById

> InlineResponse2003 printBroadcastById(id, opts)

Print broadcast by id with template

Download a rundown in printable format as HTML inside the JSON repsonse

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.BroadcastApi();
let id = 789; // Number | ID of Broadcast **(Required)**
let opts = {
  'templateId': 789 // Number | The print template to be used *(Optional)*
};
apiInstance.printBroadcastById(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of Broadcast **(Required)** | 
 **templateId** | **Number**| The print template to be used *(Optional)* | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateBroadcastByID

> InlineResponse202 updateBroadcastByID(id, opts)

Update broadcast by id

Update broadcast by id

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.BroadcastApi();
let id = 789; // Number | ID of Broadcast **(Required)**
let opts = {
  'broadcastDataInput': new radiomanager.BroadcastDataInput() // BroadcastDataInput | Data *(Optional)*
};
apiInstance.updateBroadcastByID(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of Broadcast **(Required)** | 
 **broadcastDataInput** | [**BroadcastDataInput**](BroadcastDataInput.md)| Data *(Optional)* | [optional] 

### Return type

[**InlineResponse202**](InlineResponse202.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

