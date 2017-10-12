# radiomanager.StationApi

All URIs are relative to *https://radiomanager.pb/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStation**](StationApi.md#getStation) | **GET** /station | Get own station only


<a name="getStation"></a>
# **getStation**
> StationResult getStation()

Get own station only

Get own station only

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.StationApi();
apiInstance.getStation().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**StationResult**](StationResult.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

