# radiomanager.StringApi

All URIs are relative to *https://staging.radiomanager.io/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStringsByName**](StringApi.md#getStringsByName) | **GET** /strings/{name} | Get Strings (formatted)



## getStringsByName

> TextString getStringsByName(name, opts)

Get Strings (formatted)

Get RadioText/DAB String for publication based on String Templates

### Example

```javascript
import radiomanager from 'radiomanager';
let defaultClient = radiomanager.ApiClient.instance;
// Configure API key authorization: API-Key
let API-Key = defaultClient.authentications['API-Key'];
API-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API-Key.apiKeyPrefix = 'Token';

let apiInstance = new radiomanager.StringApi();
let name = "name_example"; // String | Name of String Template **(Required)**
let opts = {
  'fullModel': true // Boolean | Full model or content only **(Optional)**
};
apiInstance.getStringsByName(name, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of String Template **(Required)** | 
 **fullModel** | **Boolean**| Full model or content only **(Optional)** | [optional] 

### Return type

[**TextString**](TextString.md)

### Authorization

[API-Key](../README.md#API-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

