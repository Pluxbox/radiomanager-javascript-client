# radiomanager.CampaignApi

All URIs are relative to *https://radiomanager.io/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCampaign**](CampaignApi.md#createCampaign) | **POST** /campaigns | Create campaign.
[**deleteCampaignById**](CampaignApi.md#deleteCampaignById) | **DELETE** /campaigns/{id} | Delete campaign by id
[**getCampaignById**](CampaignApi.md#getCampaignById) | **GET** /campaigns/{id} | Get campaign by id
[**listCampaigns**](CampaignApi.md#listCampaigns) | **GET** /campaigns | Get all campaigns.
[**updateCampaignByID**](CampaignApi.md#updateCampaignByID) | **PATCH** /campaigns/{id} | Update campaign by id


<a name="createCampaign"></a>
# **createCampaign**
> PostSuccess createCampaign(data)

Create campaign.

Create campaign.

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.CampaignApi();

var data = new radiomanager.CampaignDataInput(); // CampaignDataInput | Data **(Required)**

apiInstance.createCampaign(data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**CampaignDataInput**](CampaignDataInput.md)| Data **(Required)** | 

### Return type

[**PostSuccess**](PostSuccess.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCampaignById"></a>
# **deleteCampaignById**
> Success deleteCampaignById(id)

Delete campaign by id

Delete campaign by id

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.CampaignApi();

var id = 789; // Number | ID of Campaign **(Required)**

apiInstance.deleteCampaignById(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of Campaign **(Required)** | 

### Return type

[**Success**](Success.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCampaignById"></a>
# **getCampaignById**
> CampaignResult getCampaignById(id, opts)

Get campaign by id

Get campaign by id

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.CampaignApi();

var id = 789; // Number | ID of Campaign **(Required)**

var opts = { 
  'externalStationId': 789 // Number | Query on a different (content providing) station *(Optional)*
};
apiInstance.getCampaignById(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of Campaign **(Required)** | 
 **externalStationId** | **Number**| Query on a different (content providing) station *(Optional)* | [optional] 

### Return type

[**CampaignResult**](CampaignResult.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listCampaigns"></a>
# **listCampaigns**
> CampaignResults listCampaigns(opts)

Get all campaigns.

List all campaigns.

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.CampaignApi();

var opts = { 
  'page': 789, // Number | Current page *(Optional)*
  'itemId': 789, // Number | Search on Item ID *(Optional)* `(Relation)`
  'modelTypeId': 789, // Number | Search on ModelType ID *(Optional)* `(Relation)`
  'startMin': new Date("2013-10-20T19:20:30+01:00"), // Date | Minimum start date *(Optional)*
  'startMax': new Date("2013-10-20T19:20:30+01:00"), // Date | Maximum start date *(Optional)*
  'limit': 789, // Number | Results per page *(Optional)*
  'orderBy': "orderBy_example", // String | Field to order the results *(Optional)*
  'orderDirection': "orderDirection_example", // String | Direction of ordering *(Optional)*
  'externalStationId': 789 // Number | Query on a different (content providing) station *(Optional)*
};
apiInstance.listCampaigns(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Current page *(Optional)* | [optional] 
 **itemId** | **Number**| Search on Item ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **modelTypeId** | **Number**| Search on ModelType ID *(Optional)* &#x60;(Relation)&#x60; | [optional] 
 **startMin** | **Date**| Minimum start date *(Optional)* | [optional] 
 **startMax** | **Date**| Maximum start date *(Optional)* | [optional] 
 **limit** | **Number**| Results per page *(Optional)* | [optional] 
 **orderBy** | **String**| Field to order the results *(Optional)* | [optional] 
 **orderDirection** | **String**| Direction of ordering *(Optional)* | [optional] 
 **externalStationId** | **Number**| Query on a different (content providing) station *(Optional)* | [optional] 

### Return type

[**CampaignResults**](CampaignResults.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCampaignByID"></a>
# **updateCampaignByID**
> Success updateCampaignByID(id, opts)

Update campaign by id

Update campaign by id

### Example
```javascript
var radiomanager = require('radiomanager');
var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new radiomanager.CampaignApi();

var id = 789; // Number | ID of Campaign **(Required)**

var opts = { 
  'data': new radiomanager.CampaignDataInput() // CampaignDataInput | Data *(Optional)*
};
apiInstance.updateCampaignByID(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of Campaign **(Required)** | 
 **data** | [**CampaignDataInput**](CampaignDataInput.md)| Data *(Optional)* | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

