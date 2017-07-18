# radiomanager.BroadcastApi

All URIs are relative to *https://staging.radiomanager.pluxbox.com/api/v2*

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
[**printBroadcastById**](BroadcastApi.md#printBroadcastById) | **GET** /broadcasts/print/{id} | Print Broadcast by id
[**updateBroadcastByID**](BroadcastApi.md#updateBroadcastByID) | **PATCH** /broadcasts/{id} | Update broadcast by id


<a name="createBroadcast"></a>
# **createBroadcast**
> PostSuccess createBroadcast(data)

Create broadcast.

Create broadcast.

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.BroadcastApi();

var data = new radiomanager.BroadcastDataInput(); // BroadcastDataInput | Data **(Required)**

apiInstance.createBroadcast(data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**BroadcastDataInput**](BroadcastDataInput.md)| Data **(Required)** | 

### Return type

[**PostSuccess**](PostSuccess.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteBroadcastById"></a>
# **deleteBroadcastById**
> Success deleteBroadcastById(id)

Delete broadcast by id

Delete broadcast by id

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.BroadcastApi();

var id = 789; // Number | ID of Broadcast **(Required)**

apiInstance.deleteBroadcastById(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of Broadcast **(Required)** | 

### Return type

[**Success**](Success.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBroadcastById"></a>
# **getBroadcastById**
> BroadcastResult getBroadcastById(id, opts)

Get broadcast by id

Get broadcast by id

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.BroadcastApi();

var id = 789; // Number | ID of Broadcast **(Required)**

var opts = { 
  'externalStationId': 789 // Number | Query on a different (content providing) station *(Optional)*
};
apiInstance.getBroadcastById(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCurrentBroadcast"></a>
# **getCurrentBroadcast**
> Broadcast getCurrentBroadcast()

Get current Broadcast

Get current Broadcast

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.BroadcastApi();
apiInstance.getCurrentBroadcast().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Broadcast**](Broadcast.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDailyEPG"></a>
# **getDailyEPG**
> EPGBroadcast getDailyEPG(opts)

Get daily EPG

Get current Broadcast

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.BroadcastApi();

var opts = { 
  '_date': new Date("2013-10-20T19:20:30+01:00") // Date | Date *(Optional)*
};
apiInstance.getDailyEPG(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **Date**| Date *(Optional)* | [optional] 

### Return type

[**EPGBroadcast**](EPGBroadcast.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEPGByDate"></a>
# **getEPGByDate**
> EPGBroadcast getEPGByDate(opts)

Get EPG by date

Get EPG by date

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.BroadcastApi();

var opts = { 
  '_date': new Date("2013-10-20T19:20:30+01:00") // Date | Date *(Optional)*
};
apiInstance.getEPGByDate(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **Date**| Date *(Optional)* | [optional] 

### Return type

[**EPGBroadcast**](EPGBroadcast.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNextBroadcast"></a>
# **getNextBroadcast**
> Broadcast getNextBroadcast()

Get next Broadcast

Get next Broadcast

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.BroadcastApi();
apiInstance.getNextBroadcast().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Broadcast**](Broadcast.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getWeeklyEPG"></a>
# **getWeeklyEPG**
> EPGBroadcast getWeeklyEPG(opts)

Get weekly EPG

Get weekly EPG

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.BroadcastApi();

var opts = { 
  '_date': "_date_example" // String | Date *(Optional)*
};
apiInstance.getWeeklyEPG(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **String**| Date *(Optional)* | [optional] 

### Return type

[**EPGBroadcast**](EPGBroadcast.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listBroadcasts"></a>
# **listBroadcasts**
> BroadcastResults listBroadcasts(opts)

Get all broadcasts.

List all broadcasts.

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.BroadcastApi();

var opts = { 
  'page': 1, // Number | Current page *(Optional)*
  'startMin': new Date("2013-10-20T19:20:30+01:00"), // Date | Minimum start date *(Optional)*
  'startMax': new Date("2013-10-20T19:20:30+01:00"), // Date | Maximum start date *(Optional)*
  'modelTypeId': 789, // Number | Search on ModelType ID *(Optional)*
  'tagId': 789, // Number | Search on Tag ID *(Optional)* `(Relation)`
  'presenterId': 789, // Number | Search on Presenter ID *(Optional)* `(Relation)`
  'itemId': 789, // Number | Search on Item ID *(Optional)* `(Relation)`
  'blockId': 789, // Number | Search on Block ID *(Optional)* `(Relation)`
  'genreId': 789, // Number | Search on Genre ID *(Optional)* `(Relation)`
  'programId': 789, // Number | Search on Program ID *(Optional)* `(Relation)`
  'externalStationId': 789 // Number | Query on a different (content providing) station *(Optional)*
};
apiInstance.listBroadcasts(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Current page *(Optional)* | [optional] [default to 1]
 **startMin** | **Date**| Minimum start date *(Optional)* | [optional] 
 **startMax** | **Date**| Maximum start date *(Optional)* | [optional] 
 **modelTypeId** | **Number**| Search on ModelType ID *(Optional)* | [optional] 
 **tagId** | **Number**| Search on Tag ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **presenterId** | **Number**| Search on Presenter ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **itemId** | **Number**| Search on Item ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **blockId** | **Number**| Search on Block ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **genreId** | **Number**| Search on Genre ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **programId** | **Number**| Search on Program ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **externalStationId** | **Number**| Query on a different (content providing) station *(Optional)* | [optional] 

### Return type

[**BroadcastResults**](BroadcastResults.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="printBroadcastById"></a>
# **printBroadcastById**
> EPGBroadcast printBroadcastById(id, opts)

Print Broadcast by id

Print Broadcast by id

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.BroadcastApi();

var id = 789; // Number | ID of Broadcast **(Required)**

var opts = { 
  'programId': 789, // Number | Search on Program ID *(Optional)* `(Relation)`
  'presenterId': 789, // Number | Search on Presenter ID *(Optional)* `(Relation)`
  'tagId': 789 // Number | Search on Tag ID *(Optional)* `(Relation)`
};
apiInstance.printBroadcastById(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of Broadcast **(Required)** | 
 **programId** | **Number**| Search on Program ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **presenterId** | **Number**| Search on Presenter ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **tagId** | **Number**| Search on Tag ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 

### Return type

[**EPGBroadcast**](EPGBroadcast.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateBroadcastByID"></a>
# **updateBroadcastByID**
> Success updateBroadcastByID(id, opts)

Update broadcast by id

Update broadcast by id

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.BroadcastApi();

var id = 789; // Number | ID of Broadcast **(Required)**

var opts = { 
  'data': new radiomanager.BroadcastDataInput() // BroadcastDataInput | Data *(Optional)*
};
apiInstance.updateBroadcastByID(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of Broadcast **(Required)** | 
 **data** | [**BroadcastDataInput**](BroadcastDataInput.md)| Data *(Optional)* | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
