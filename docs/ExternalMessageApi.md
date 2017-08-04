# radiomanager.ExternalMessageApi

All URIs are relative to *http://radiomanager.pb/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**queueExternalMessage**](ExternalMessageApi.md#queueExternalMessage) | **POST** /externalmessagequeue | Queue External Message.


<a name="queueExternalMessage"></a>
# **queueExternalMessage**
> Object queueExternalMessage(message)

Queue External Message.

Queue External Message.

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.ExternalMessageApi();

var message = new radiomanager.ExternalMessageQueueData(); // ExternalMessageQueueData | Data **(Required)**

apiInstance.queueExternalMessage(message).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message** | [**ExternalMessageQueueData**](ExternalMessageQueueData.md)| Data **(Required)** | 

### Return type

**Object**

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

