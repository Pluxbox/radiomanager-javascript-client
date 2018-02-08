# radiomanager.SearchApi

All URIs are relative to *https://radiomanager.io/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSearch**](SearchApi.md#getSearch) | **POST** /search | Search.


<a name="getSearch"></a>
# **getSearch**
> getSearch(opts)

Search.

You know. For search.

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.SearchApi();

var opts = { 
  'data': new radiomanager.SearchDataInput() // SearchDataInput | Data *(Optional)*
};
apiInstance.getSearch(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**SearchDataInput**](SearchDataInput.md)| Data *(Optional)* | [optional] 

### Return type

null (empty response body)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

