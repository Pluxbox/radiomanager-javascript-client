# radiomanager.StringApi

All URIs are relative to *https://radiomanager.io/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStringsByName**](StringApi.md#getStringsByName) | **GET** /strings/{name} | Get Strings (formatted)


<a name="getStringsByName"></a>
# **getStringsByName**
> TextString getStringsByName(name, fullModel)

Get Strings (formatted)

Get Strings (formatted)

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.StringApi();

var name = "name_example"; // String | Name of Strings **(Required)**

var fullModel = true; // Boolean | Full model or content only **(Required)**

apiInstance.getStringsByName(name, fullModel).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of Strings **(Required)** | 
 **fullModel** | **Boolean**| Full model or content only **(Required)** | [default to true]

### Return type

[**TextString**](TextString.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

