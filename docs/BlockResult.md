# radiomanager.BlockResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID of the current Block. | 
**broadcastId** | **Number** | Currently assigned Broadcast connected to the current Block, identified by the Broadcast ID. | 
**start** | **Date** | Start of the Block (formatted as a DateTime object), saved with an TimeZone. | 
**stop** | **Date** | End of the Block (formatted as a DateTime object), saved with an TimeZone. | 
**createdAt** | **Date** | Time of the creation of the Block (formatted as a DateTime object), saved with an TimeZone. | 
**updatedAt** | **Date** | Time of the last update of the Block (formatted as a DateTime object), saved with an TimeZone. | 
**deletedAt** | **Date** | Moment when the Block got deleted (formatted as a DateTime object), saved with an TimeZone. | 
**externalStationId** | **Number** |  | [optional] 
**items** | [**BlockRelationsItems**](BlockRelationsItems.md) |  | [optional] 
**broadcast** | [**BlockRelationsBroadcast**](BlockRelationsBroadcast.md) |  | [optional] 
**program** | [**BlockRelationsProgram**](BlockRelationsProgram.md) |  | [optional] 


