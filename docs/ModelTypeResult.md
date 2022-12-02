# radiomanager.ModelTypeResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | 
**name** | **String** |  | [optional] 
**model** | **String** |  | [optional] 
**createdAt** | **Date** |  | [optional] 
**updatedAt** | **Date** |  | [optional] 
**options** | [**ModelTypeOptions**](ModelTypeOptions.md) |  | [optional] 
**order** | **Number** |  | [optional] 
**deletedAt** | **Date** |  | [optional] 
**campaigns** | [**ModelTypeRelationsCampaigns**](ModelTypeRelationsCampaigns.md) |  | [optional] 
**broadcasts** | [**ModelTypeRelationsBroadcasts**](ModelTypeRelationsBroadcasts.md) |  | [optional] 
**programs** | [**ModelTypeRelationsPrograms**](ModelTypeRelationsPrograms.md) |  | [optional] 
**contacts** | [**ModelTypeRelationsContacts**](ModelTypeRelationsContacts.md) |  | [optional] 
**presenters** | [**ModelTypeRelationsPresenters**](ModelTypeRelationsPresenters.md) |  | [optional] 
**items** | [**ModelTypeRelationsItems**](ModelTypeRelationsItems.md) |  | [optional] 
**externalStationId** | **Number** |  | [optional] 



## Enum: ModelEnum


* `broadcast` (value: `"broadcast"`)

* `program` (value: `"program"`)

* `item` (value: `"item"`)

* `campaign` (value: `"campaign"`)

* `presenter` (value: `"presenter"`)

* `contact` (value: `"contact"`)

* `external` (value: `"external"`)




