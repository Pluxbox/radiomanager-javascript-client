# Pluxbox RadioManager Client

JavaScript client for Pluxbox RadioManager
Pluxbox RadioManager gives you the power, flexibility and speed you always wanted in a lightweight and easy-to-use web-based radio solution. With Pluxbox RadioManager you can organise your radio workflow and automate your omnichannel communication with your listeners. We offer wide range specialised services for the radio and connections like Hybrid Radio, Visual Radio, your website and social media without losing focus on your broadcast. For more information visit https://pluxbox.com

- API version: 2.0
- For more information, please visit [https://pluxbox.com](https://pluxbox.com)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install radiomanager --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install pluxbox/radiomanager-javascript-client --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var radiomanager = require('radiomanager');

var defaultClient = radiomanager.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix['api-key'] = "Token"

var api = new radiomanager.BlockApi()

var id = 789; // {Number} ID of Block **(Required)**

var opts = { 
  'externalStationId': 789 // {Number} Query on a different (content providing) station *(Optional)*
};
api.getBlockById(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://staging.radiomanager.pluxbox.com/api/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*radiomanager.BlockApi* | [**getBlockById**](docs/BlockApi.md#getBlockById) | **GET** /blocks/{id} | Get block by id
*radiomanager.BlockApi* | [**getCurrentBlock**](docs/BlockApi.md#getCurrentBlock) | **GET** /blocks/current | Get current Block
*radiomanager.BlockApi* | [**getNextBlock**](docs/BlockApi.md#getNextBlock) | **GET** /blocks/next | Get next Block
*radiomanager.BlockApi* | [**listBlocks**](docs/BlockApi.md#listBlocks) | **GET** /blocks | Get a list of all blocks currently in your station.
*radiomanager.BroadcastApi* | [**createBroadcast**](docs/BroadcastApi.md#createBroadcast) | **POST** /broadcasts | Create broadcast.
*radiomanager.BroadcastApi* | [**deleteBroadcastById**](docs/BroadcastApi.md#deleteBroadcastById) | **DELETE** /broadcasts/{id} | Delete broadcast by id
*radiomanager.BroadcastApi* | [**getBroadcastById**](docs/BroadcastApi.md#getBroadcastById) | **GET** /broadcasts/{id} | Get broadcast by id
*radiomanager.BroadcastApi* | [**getCurrentBroadcast**](docs/BroadcastApi.md#getCurrentBroadcast) | **GET** /broadcasts/current | Get current Broadcast
*radiomanager.BroadcastApi* | [**getDailyEPG**](docs/BroadcastApi.md#getDailyEPG) | **GET** /broadcasts/epg/daily | Get daily EPG
*radiomanager.BroadcastApi* | [**getEPGByDate**](docs/BroadcastApi.md#getEPGByDate) | **GET** /broadcasts/epg | Get EPG by date
*radiomanager.BroadcastApi* | [**getNextBroadcast**](docs/BroadcastApi.md#getNextBroadcast) | **GET** /broadcasts/next | Get next Broadcast
*radiomanager.BroadcastApi* | [**getWeeklyEPG**](docs/BroadcastApi.md#getWeeklyEPG) | **GET** /broadcasts/epg/weekly | Get weekly EPG
*radiomanager.BroadcastApi* | [**listBroadcasts**](docs/BroadcastApi.md#listBroadcasts) | **GET** /broadcasts | Get all broadcasts.
*radiomanager.BroadcastApi* | [**printBroadcastById**](docs/BroadcastApi.md#printBroadcastById) | **GET** /broadcasts/print/{id} | Print Broadcast by id
*radiomanager.BroadcastApi* | [**updateBroadcastByID**](docs/BroadcastApi.md#updateBroadcastByID) | **PATCH** /broadcasts/{id} | Update broadcast by id
*radiomanager.CampaignApi* | [**createCampaign**](docs/CampaignApi.md#createCampaign) | **POST** /campaigns | Create campaign.
*radiomanager.CampaignApi* | [**deleteCampaignById**](docs/CampaignApi.md#deleteCampaignById) | **DELETE** /campaigns/{id} | Delete campaign by id
*radiomanager.CampaignApi* | [**getCampaignById**](docs/CampaignApi.md#getCampaignById) | **GET** /campaigns/{id} | Get campaign by id
*radiomanager.CampaignApi* | [**listCampaigns**](docs/CampaignApi.md#listCampaigns) | **GET** /campaigns | Get all campaigns.
*radiomanager.CampaignApi* | [**updateCampaignByID**](docs/CampaignApi.md#updateCampaignByID) | **PATCH** /campaigns/{id} | Update campaign by id
*radiomanager.ContactApi* | [**createContact**](docs/ContactApi.md#createContact) | **POST** /contacts | Create contact.
*radiomanager.ContactApi* | [**deleteContactById**](docs/ContactApi.md#deleteContactById) | **DELETE** /contacts/{id} | Delete contact by id
*radiomanager.ContactApi* | [**getContactById**](docs/ContactApi.md#getContactById) | **GET** /contacts/{id} | Get contact by id
*radiomanager.ContactApi* | [**listContacts**](docs/ContactApi.md#listContacts) | **GET** /contacts | Get all contacts.
*radiomanager.ContactApi* | [**updateContactByID**](docs/ContactApi.md#updateContactByID) | **PATCH** /contacts/{id} | Update contact by id
*radiomanager.ExternalMessageApi* | [**queueExternalMessage**](docs/ExternalMessageApi.md#queueExternalMessage) | **POST** /externalmessagequeue | Queue External Message.
*radiomanager.GenreApi* | [**getGenreById**](docs/GenreApi.md#getGenreById) | **GET** /genres/{id} | Get genre by id
*radiomanager.GenreApi* | [**listGenres**](docs/GenreApi.md#listGenres) | **GET** /genres | List all genres.
*radiomanager.ItemApi* | [**createItem**](docs/ItemApi.md#createItem) | **POST** /items | Create an new item.
*radiomanager.ItemApi* | [**currentItemPostStructure**](docs/ItemApi.md#currentItemPostStructure) | **POST** /items/current/structure | Post a current playing item, keep structure
*radiomanager.ItemApi* | [**currentItemPostTiming**](docs/ItemApi.md#currentItemPostTiming) | **POST** /items/current/timing | Post a current playing item
*radiomanager.ItemApi* | [**deleteItemById**](docs/ItemApi.md#deleteItemById) | **DELETE** /items/{id} | Delete item by ID.
*radiomanager.ItemApi* | [**getItemById**](docs/ItemApi.md#getItemById) | **GET** /items/{id} | Get extended item details by ID.
*radiomanager.ItemApi* | [**listItems**](docs/ItemApi.md#listItems) | **GET** /items | Get a list of all the items currently in your station.
*radiomanager.ItemApi* | [**playlistPostStructure**](docs/ItemApi.md#playlistPostStructure) | **POST** /items/playlist/structure | Post a playlist, keep current structure
*radiomanager.ItemApi* | [**playlistPostTiming**](docs/ItemApi.md#playlistPostTiming) | **POST** /items/playlist/timing | Post a playlist
*radiomanager.ItemApi* | [**updateItemById**](docs/ItemApi.md#updateItemById) | **PATCH** /items/{id} | Update extended item details by ID.
*radiomanager.ModelTypeApi* | [**getModelTypeById**](docs/ModelTypeApi.md#getModelTypeById) | **GET** /model_types/{id} | Get modelType by id
*radiomanager.ModelTypeApi* | [**listModelTypes**](docs/ModelTypeApi.md#listModelTypes) | **GET** /model_types | Get all modelTypes.
*radiomanager.PresenterApi* | [**createPresenter**](docs/PresenterApi.md#createPresenter) | **POST** /presenters | Create presenter.
*radiomanager.PresenterApi* | [**deletePresenterById**](docs/PresenterApi.md#deletePresenterById) | **DELETE** /presenters/{id} | Delete presenter by id
*radiomanager.PresenterApi* | [**getPresenterById**](docs/PresenterApi.md#getPresenterById) | **GET** /presenters/{id} | Get presenter by id
*radiomanager.PresenterApi* | [**listPresenters**](docs/PresenterApi.md#listPresenters) | **GET** /presenters | Get all presenters.
*radiomanager.PresenterApi* | [**updatePresenterByID**](docs/PresenterApi.md#updatePresenterByID) | **PATCH** /presenters/{id} | Update presenter by id
*radiomanager.ProgramApi* | [**createProgram**](docs/ProgramApi.md#createProgram) | **POST** /programs | Create program.
*radiomanager.ProgramApi* | [**deleteProgramById**](docs/ProgramApi.md#deleteProgramById) | **DELETE** /programs/{id} | Delete program by id
*radiomanager.ProgramApi* | [**getProgramById**](docs/ProgramApi.md#getProgramById) | **GET** /programs/{id} | Get program by id
*radiomanager.ProgramApi* | [**listPrograms**](docs/ProgramApi.md#listPrograms) | **GET** /programs | Get all programs.
*radiomanager.ProgramApi* | [**updateProgramByID**](docs/ProgramApi.md#updateProgramByID) | **PATCH** /programs/{id} | Update program by id
*radiomanager.StringApi* | [**getStringsByName**](docs/StringApi.md#getStringsByName) | **GET** /strings/{name} | Get Strings (formatted)
*radiomanager.TagApi* | [**createTag**](docs/TagApi.md#createTag) | **POST** /tags | Create tag.
*radiomanager.TagApi* | [**deleteTagById**](docs/TagApi.md#deleteTagById) | **DELETE** /tags/{id} | Delete tag by id
*radiomanager.TagApi* | [**getTagById**](docs/TagApi.md#getTagById) | **GET** /tags/{id} | Get tags by id
*radiomanager.TagApi* | [**listTags**](docs/TagApi.md#listTags) | **GET** /tags | Get a list of all the tags currently in your station.
*radiomanager.TagApi* | [**updateTagByID**](docs/TagApi.md#updateTagByID) | **PATCH** /tags/{id} | Update tag by id
*radiomanager.UserApi* | [**deleteUserById**](docs/UserApi.md#deleteUserById) | **DELETE** /users/{id} | Remove user from station by Id
*radiomanager.UserApi* | [**getUserById**](docs/UserApi.md#getUserById) | **GET** /users/{id} | Get user by id
*radiomanager.UserApi* | [**inviteUserByMail**](docs/UserApi.md#inviteUserByMail) | **POST** /users/invite | Invite user by mail
*radiomanager.UserApi* | [**listUsers**](docs/UserApi.md#listUsers) | **GET** /users | Get all users.
*radiomanager.VisualSlideApi* | [**downloadVisualSlide**](docs/VisualSlideApi.md#downloadVisualSlide) | **GET** /visual/image | Get Visual Slide Image as JPEG
*radiomanager.VisualSlideApi* | [**getVisualSlide**](docs/VisualSlideApi.md#getVisualSlide) | **GET** /visual | Get Visual Slide Image as Base64


## Documentation for Models

 - [radiomanager.Block](docs/Block.md)
 - [radiomanager.BlockRelations](docs/BlockRelations.md)
 - [radiomanager.BlockRelationsBroadcast](docs/BlockRelationsBroadcast.md)
 - [radiomanager.BlockRelationsBroadcastParams](docs/BlockRelationsBroadcastParams.md)
 - [radiomanager.BlockRelationsItems](docs/BlockRelationsItems.md)
 - [radiomanager.BlockRelationsItemsParams](docs/BlockRelationsItemsParams.md)
 - [radiomanager.BlockRelationsProgram](docs/BlockRelationsProgram.md)
 - [radiomanager.BlockResults](docs/BlockResults.md)
 - [radiomanager.Broadcast](docs/Broadcast.md)
 - [radiomanager.BroadcastFieldValues](docs/BroadcastFieldValues.md)
 - [radiomanager.BroadcastInputOnly](docs/BroadcastInputOnly.md)
 - [radiomanager.BroadcastOutputOnly](docs/BroadcastOutputOnly.md)
 - [radiomanager.BroadcastRelations](docs/BroadcastRelations.md)
 - [radiomanager.BroadcastRelationsBlocks](docs/BroadcastRelationsBlocks.md)
 - [radiomanager.BroadcastRelationsItems](docs/BroadcastRelationsItems.md)
 - [radiomanager.BroadcastRelationsItemsParams](docs/BroadcastRelationsItemsParams.md)
 - [radiomanager.BroadcastRelationsModelType](docs/BroadcastRelationsModelType.md)
 - [radiomanager.BroadcastRelationsPresenters](docs/BroadcastRelationsPresenters.md)
 - [radiomanager.BroadcastRelationsTags](docs/BroadcastRelationsTags.md)
 - [radiomanager.BroadcastResults](docs/BroadcastResults.md)
 - [radiomanager.Campaign](docs/Campaign.md)
 - [radiomanager.CampaignOutputOnly](docs/CampaignOutputOnly.md)
 - [radiomanager.CampaignRelations](docs/CampaignRelations.md)
 - [radiomanager.CampaignRelationsItems](docs/CampaignRelationsItems.md)
 - [radiomanager.CampaignRelationsItemsParams](docs/CampaignRelationsItemsParams.md)
 - [radiomanager.CampaignResults](docs/CampaignResults.md)
 - [radiomanager.Contact](docs/Contact.md)
 - [radiomanager.ContactFieldValues](docs/ContactFieldValues.md)
 - [radiomanager.ContactOutputOnly](docs/ContactOutputOnly.md)
 - [radiomanager.ContactRelations](docs/ContactRelations.md)
 - [radiomanager.ContactRelationsItems](docs/ContactRelationsItems.md)
 - [radiomanager.ContactRelationsTags](docs/ContactRelationsTags.md)
 - [radiomanager.ContactRelationsTagsParams](docs/ContactRelationsTagsParams.md)
 - [radiomanager.ContactResults](docs/ContactResults.md)
 - [radiomanager.Data](docs/Data.md)
 - [radiomanager.Data1](docs/Data1.md)
 - [radiomanager.EPGBroadcast](docs/EPGBroadcast.md)
 - [radiomanager.ExternalMessageQueueData](docs/ExternalMessageQueueData.md)
 - [radiomanager.Forbidden](docs/Forbidden.md)
 - [radiomanager.Genre](docs/Genre.md)
 - [radiomanager.GenreOutputOnly](docs/GenreOutputOnly.md)
 - [radiomanager.GenreRelations](docs/GenreRelations.md)
 - [radiomanager.GenreRelationsBroadcasts](docs/GenreRelationsBroadcasts.md)
 - [radiomanager.GenreRelationsBroadcastsParams](docs/GenreRelationsBroadcastsParams.md)
 - [radiomanager.GenreRelationsPrograms](docs/GenreRelationsPrograms.md)
 - [radiomanager.GenreResults](docs/GenreResults.md)
 - [radiomanager.ImportItem](docs/ImportItem.md)
 - [radiomanager.ImportItemFieldValues](docs/ImportItemFieldValues.md)
 - [radiomanager.InlineResponse202](docs/InlineResponse202.md)
 - [radiomanager.InternalServerError](docs/InternalServerError.md)
 - [radiomanager.InviteUserData](docs/InviteUserData.md)
 - [radiomanager.InviteUserSuccess](docs/InviteUserSuccess.md)
 - [radiomanager.Item](docs/Item.md)
 - [radiomanager.ItemInputOnly](docs/ItemInputOnly.md)
 - [radiomanager.ItemOutputOnly](docs/ItemOutputOnly.md)
 - [radiomanager.ItemRelations](docs/ItemRelations.md)
 - [radiomanager.ItemRelationsBlock](docs/ItemRelationsBlock.md)
 - [radiomanager.ItemRelationsCampaign](docs/ItemRelationsCampaign.md)
 - [radiomanager.ItemRelationsContacts](docs/ItemRelationsContacts.md)
 - [radiomanager.ItemRelationsContactsParams](docs/ItemRelationsContactsParams.md)
 - [radiomanager.ItemRelationsProgram](docs/ItemRelationsProgram.md)
 - [radiomanager.ItemRelationsTags](docs/ItemRelationsTags.md)
 - [radiomanager.ItemResults](docs/ItemResults.md)
 - [radiomanager.ModelType](docs/ModelType.md)
 - [radiomanager.ModelTypeOptions](docs/ModelTypeOptions.md)
 - [radiomanager.ModelTypeOutputOnly](docs/ModelTypeOutputOnly.md)
 - [radiomanager.ModelTypeRelations](docs/ModelTypeRelations.md)
 - [radiomanager.ModelTypeRelationsBroadcasts](docs/ModelTypeRelationsBroadcasts.md)
 - [radiomanager.ModelTypeRelationsCampaigns](docs/ModelTypeRelationsCampaigns.md)
 - [radiomanager.ModelTypeRelationsCampaignsParams](docs/ModelTypeRelationsCampaignsParams.md)
 - [radiomanager.ModelTypeRelationsContacts](docs/ModelTypeRelationsContacts.md)
 - [radiomanager.ModelTypeRelationsItems](docs/ModelTypeRelationsItems.md)
 - [radiomanager.ModelTypeRelationsPresenters](docs/ModelTypeRelationsPresenters.md)
 - [radiomanager.ModelTypeRelationsPrograms](docs/ModelTypeRelationsPrograms.md)
 - [radiomanager.ModelTypeResults](docs/ModelTypeResults.md)
 - [radiomanager.NotFound](docs/NotFound.md)
 - [radiomanager.PostSuccess](docs/PostSuccess.md)
 - [radiomanager.Presenter](docs/Presenter.md)
 - [radiomanager.PresenterOutputOnly](docs/PresenterOutputOnly.md)
 - [radiomanager.PresenterRelations](docs/PresenterRelations.md)
 - [radiomanager.PresenterRelationsBroadcasts](docs/PresenterRelationsBroadcasts.md)
 - [radiomanager.PresenterRelationsPrograms](docs/PresenterRelationsPrograms.md)
 - [radiomanager.PresenterRelationsProgramsParams](docs/PresenterRelationsProgramsParams.md)
 - [radiomanager.PresenterResults](docs/PresenterResults.md)
 - [radiomanager.Program](docs/Program.md)
 - [radiomanager.ProgramFieldValues](docs/ProgramFieldValues.md)
 - [radiomanager.ProgramInputOnly](docs/ProgramInputOnly.md)
 - [radiomanager.ProgramOutputOnly](docs/ProgramOutputOnly.md)
 - [radiomanager.ProgramRelations](docs/ProgramRelations.md)
 - [radiomanager.ProgramRelationsBlocks](docs/ProgramRelationsBlocks.md)
 - [radiomanager.ProgramRelationsBroadcasts](docs/ProgramRelationsBroadcasts.md)
 - [radiomanager.ProgramRelationsItems](docs/ProgramRelationsItems.md)
 - [radiomanager.ProgramRelationsItemsParams](docs/ProgramRelationsItemsParams.md)
 - [radiomanager.ProgramRelationsPresenters](docs/ProgramRelationsPresenters.md)
 - [radiomanager.ProgramRelationsTags](docs/ProgramRelationsTags.md)
 - [radiomanager.ProgramResults](docs/ProgramResults.md)
 - [radiomanager.ReadOnly](docs/ReadOnly.md)
 - [radiomanager.RelationsPlaceholder](docs/RelationsPlaceholder.md)
 - [radiomanager.Success](docs/Success.md)
 - [radiomanager.Tag](docs/Tag.md)
 - [radiomanager.TagOutputOnly](docs/TagOutputOnly.md)
 - [radiomanager.TagRelations](docs/TagRelations.md)
 - [radiomanager.TagRelationsBroadcasts](docs/TagRelationsBroadcasts.md)
 - [radiomanager.TagRelationsBroadcastsParams](docs/TagRelationsBroadcastsParams.md)
 - [radiomanager.TagRelationsContacts](docs/TagRelationsContacts.md)
 - [radiomanager.TagRelationsItems](docs/TagRelationsItems.md)
 - [radiomanager.TagRelationsPrograms](docs/TagRelationsPrograms.md)
 - [radiomanager.TagResults](docs/TagResults.md)
 - [radiomanager.TextString](docs/TextString.md)
 - [radiomanager.TooManyRequests](docs/TooManyRequests.md)
 - [radiomanager.UnprocessableEntity](docs/UnprocessableEntity.md)
 - [radiomanager.UserResult](docs/UserResult.md)
 - [radiomanager.UserResultSettings](docs/UserResultSettings.md)
 - [radiomanager.UserResults](docs/UserResults.md)
 - [radiomanager.VisualResult](docs/VisualResult.md)
 - [radiomanager.BlockResult](docs/BlockResult.md)
 - [radiomanager.BroadcastDataInput](docs/BroadcastDataInput.md)
 - [radiomanager.BroadcastResult](docs/BroadcastResult.md)
 - [radiomanager.CampaignDataInput](docs/CampaignDataInput.md)
 - [radiomanager.CampaignResult](docs/CampaignResult.md)
 - [radiomanager.ContactDataInput](docs/ContactDataInput.md)
 - [radiomanager.ContactResult](docs/ContactResult.md)
 - [radiomanager.GenreResult](docs/GenreResult.md)
 - [radiomanager.ItemDataInput](docs/ItemDataInput.md)
 - [radiomanager.ItemResult](docs/ItemResult.md)
 - [radiomanager.ModelTypeResult](docs/ModelTypeResult.md)
 - [radiomanager.PresenterDataInput](docs/PresenterDataInput.md)
 - [radiomanager.PresenterResult](docs/PresenterResult.md)
 - [radiomanager.ProgramDataInput](docs/ProgramDataInput.md)
 - [radiomanager.ProgramResult](docs/ProgramResult.md)
 - [radiomanager.TagDataInput](docs/TagDataInput.md)
 - [radiomanager.TagResult](docs/TagResult.md)


## Documentation for Authorization


### API Key

- **Type**: API key
- **API key parameter name**: api-key
- **Location**: HTTP header

