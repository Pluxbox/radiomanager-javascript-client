# radiomanager.GenreApi

All URIs are relative to *https://staging.radiomanager.pluxbox.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGenreById**](GenreApi.md#getGenreById) | **GET** /genres/{id} | Get genre by id
[**listGenres**](GenreApi.md#listGenres) | **GET** /genres | List all genres.


<a name="getGenreById"></a>
# **getGenreById**
> GenreResult getGenreById(id, opts)

Get genre by id

Get genre by id

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.GenreApi();

var id = 789; // Number | ID of Genre **(Required)**

var opts = { 
  'externalStationId': 789 // Number | Query on a different (content providing) station *(Optional)*
};
apiInstance.getGenreById(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of Genre **(Required)** | 
 **externalStationId** | **Number**| Query on a different (content providing) station *(Optional)* | [optional] 

### Return type

[**GenreResult**](GenreResult.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listGenres"></a>
# **listGenres**
> GenreResults listGenres(opts)

List all genres.

List all genres.

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.GenreApi();

var opts = { 
  'page': 789, // Number | Current page *(Optional)*
  'parentId': 789, // Number | Search on Parent ID of Genre *(Optional)*
  'programId': 789, // Number | Search on Program ID *(Optional)* `(Relation)`
  'broadcastId': 789, // Number | Search on Broadcast ID *(Optional)* `(Relation)`
  'externalStationId': 789 // Number | Query on a different (content providing) station *(Optional)*
};
apiInstance.listGenres(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Current page *(Optional)* | [optional] 
 **parentId** | **Number**| Search on Parent ID of Genre *(Optional)* | [optional] 
 **programId** | **Number**| Search on Program ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **broadcastId** | **Number**| Search on Broadcast ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **externalStationId** | **Number**| Query on a different (content providing) station *(Optional)* | [optional] 

### Return type

[**GenreResults**](GenreResults.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

