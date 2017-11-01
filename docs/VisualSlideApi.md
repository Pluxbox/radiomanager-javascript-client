# radiomanager.VisualSlideApi

All URIs are relative to *https://staging.radiomanager.io/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getVisualSlide**](VisualSlideApi.md#getVisualSlide) | **GET** /visual | Get Visual Slide Image as Base64


<a name="getVisualSlide"></a>
# **getVisualSlide**
> VisualResult getVisualSlide()

Get Visual Slide Image as Base64

Get Visual Slide Image as Base64

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.VisualSlideApi();
apiInstance.getVisualSlide().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**VisualResult**](VisualResult.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

