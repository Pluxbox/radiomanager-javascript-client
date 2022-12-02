/**
 * RadioManager
 * This OpenAPI 3 Document describes the functionality of the API v2 of RadioManager. Note that no rights can be derived from this Document and the true functionality of the API might differ.
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@pluxbox.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Item from './Item';
import ItemInputOnly from './ItemInputOnly';

/**
 * The ItemDataInput model module.
 * @module models/ItemDataInput
 * @version 2.0
 */
class ItemDataInput {
    /**
     * Constructs a new <code>ItemDataInput</code>.
     * @alias module:models/ItemDataInput
     * @implements module:models/Item
     * @implements module:models/ItemInputOnly
     * @param modelTypeId {Number} 
     */
    constructor(modelTypeId) { 
        Item.initialize(this, modelTypeId);ItemInputOnly.initialize(this);
        ItemDataInput.initialize(this, modelTypeId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, modelTypeId) { 
        obj['model_type_id'] = modelTypeId;
    }

    /**
     * Constructs a <code>ItemDataInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ItemDataInput} obj Optional instance to populate.
     * @return {module:models/ItemDataInput} The populated <code>ItemDataInput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemDataInput();
            Item.constructFromObject(data, obj);
            ItemInputOnly.constructFromObject(data, obj);

            if (data.hasOwnProperty('model_type_id')) {
                obj['model_type_id'] = ApiClient.convertToType(data['model_type_id'], 'Number');
            }
            if (data.hasOwnProperty('block_id')) {
                obj['block_id'] = ApiClient.convertToType(data['block_id'], 'Number');
            }
            if (data.hasOwnProperty('external_id')) {
                obj['external_id'] = ApiClient.convertToType(data['external_id'], 'String');
            }
            if (data.hasOwnProperty('field_values')) {
                obj['field_values'] = ApiClient.convertToType(data['field_values'], Object);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
            }
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('import')) {
                obj['import'] = ApiClient.convertToType(data['import'], 'Number');
            }
            if (data.hasOwnProperty('campaign_id')) {
                obj['campaign_id'] = ApiClient.convertToType(data['campaign_id'], 'Number');
            }
            if (data.hasOwnProperty('recommended')) {
                obj['recommended'] = ApiClient.convertToType(data['recommended'], 'Boolean');
            }
            if (data.hasOwnProperty('station_draft_id')) {
                obj['station_draft_id'] = ApiClient.convertToType(data['station_draft_id'], 'Number');
            }
            if (data.hasOwnProperty('program_draft_id')) {
                obj['program_draft_id'] = ApiClient.convertToType(data['program_draft_id'], 'Number');
            }
            if (data.hasOwnProperty('user_draft_id')) {
                obj['user_draft_id'] = ApiClient.convertToType(data['user_draft_id'], 'Number');
            }
            if (data.hasOwnProperty('static_start')) {
                obj['static_start'] = ApiClient.convertToType(data['static_start'], 'Boolean');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], 'String');
            }
            if (data.hasOwnProperty('_previous_id')) {
                obj['_previous_id'] = ApiClient.convertToType(data['_previous_id'], 'Number');
            }
            if (data.hasOwnProperty('_before_id')) {
                obj['_before_id'] = ApiClient.convertToType(data['_before_id'], 'Number');
            }
            if (data.hasOwnProperty('contacts')) {
                obj['contacts'] = ApiClient.convertToType(data['contacts'], ['Number']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ItemDataInput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ItemDataInput</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ItemDataInput.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['external_id'] && !(typeof data['external_id'] === 'string' || data['external_id'] instanceof String)) {
            throw new Error("Expected the field `external_id` to be a primitive type in the JSON string but got " + data['external_id']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['details'] && !(typeof data['details'] === 'string' || data['details'] instanceof String)) {
            throw new Error("Expected the field `details` to be a primitive type in the JSON string but got " + data['details']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['contacts'])) {
            throw new Error("Expected the field `contacts` to be an array in the JSON data but got " + data['contacts']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }

        return true;
    }

/**
     * @return {Number}
     */
    getModelTypeId() {
        return this.model_type_id;
    }

    /**
     * @param {Number} modelTypeId
     */
    setModelTypeId(modelTypeId) {
        this['model_type_id'] = modelTypeId;
    }
/**
     * @return {Number}
     */
    getBlockId() {
        return this.block_id;
    }

    /**
     * @param {Number} blockId
     */
    setBlockId(blockId) {
        this['block_id'] = blockId;
    }
/**
     * @return {String}
     */
    getExternalId() {
        return this.external_id;
    }

    /**
     * @param {String} externalId
     */
    setExternalId(externalId) {
        this['external_id'] = externalId;
    }
/**
     * @return {Object}
     */
    getFieldValues() {
        return this.field_values;
    }

    /**
     * @param {Object} fieldValues
     */
    setFieldValues(fieldValues) {
        this['field_values'] = fieldValues;
    }
/**
     * @return {String}
     */
    getTitle() {
        return this.title;
    }

    /**
     * @param {String} title
     */
    setTitle(title) {
        this['title'] = title;
    }
/**
     * @return {Number}
     */
    getDuration() {
        return this.duration;
    }

    /**
     * @param {Number} duration
     */
    setDuration(duration) {
        this['duration'] = duration;
    }
/**
     * @return {Date}
     */
    getStart() {
        return this.start;
    }

    /**
     * @param {Date} start
     */
    setStart(start) {
        this['start'] = start;
    }
/**
     * @return {module:models/ItemDataInput.StatusEnum}
     */
    getStatus() {
        return this.status;
    }

    /**
     * @param {module:models/ItemDataInput.StatusEnum} status
     */
    setStatus(status) {
        this['status'] = status;
    }
/**
     * @return {Number}
     */
    getImport() {
        return this.import;
    }

    /**
     * @param {Number} _import
     */
    setImport(_import) {
        this['import'] = _import;
    }
/**
     * @return {Number}
     */
    getCampaignId() {
        return this.campaign_id;
    }

    /**
     * @param {Number} campaignId
     */
    setCampaignId(campaignId) {
        this['campaign_id'] = campaignId;
    }
/**
     * @return {Boolean}
     */
    getRecommended() {
        return this.recommended;
    }

    /**
     * @param {Boolean} recommended
     */
    setRecommended(recommended) {
        this['recommended'] = recommended;
    }
/**
     * @return {Number}
     */
    getStationDraftId() {
        return this.station_draft_id;
    }

    /**
     * @param {Number} stationDraftId
     */
    setStationDraftId(stationDraftId) {
        this['station_draft_id'] = stationDraftId;
    }
/**
     * @return {Number}
     */
    getProgramDraftId() {
        return this.program_draft_id;
    }

    /**
     * @param {Number} programDraftId
     */
    setProgramDraftId(programDraftId) {
        this['program_draft_id'] = programDraftId;
    }
/**
     * @return {Number}
     */
    getUserDraftId() {
        return this.user_draft_id;
    }

    /**
     * @param {Number} userDraftId
     */
    setUserDraftId(userDraftId) {
        this['user_draft_id'] = userDraftId;
    }
/**
     * @return {Boolean}
     */
    getStaticStart() {
        return this.static_start;
    }

    /**
     * @param {Boolean} staticStart
     */
    setStaticStart(staticStart) {
        this['static_start'] = staticStart;
    }
/**
     * @return {String}
     */
    getDetails() {
        return this.details;
    }

    /**
     * @param {String} details
     */
    setDetails(details) {
        this['details'] = details;
    }
/**
     * @return {Number}
     */
    getPreviousId() {
        return this._previous_id;
    }

    /**
     * @param {Number} previousId
     */
    setPreviousId(previousId) {
        this['_previous_id'] = previousId;
    }
/**
     * @return {Number}
     */
    getBeforeId() {
        return this._before_id;
    }

    /**
     * @param {Number} beforeId
     */
    setBeforeId(beforeId) {
        this['_before_id'] = beforeId;
    }
/**
     * @return {Array.<Number>}
     */
    getContacts() {
        return this.contacts;
    }

    /**
     * @param {Array.<Number>} contacts
     */
    setContacts(contacts) {
        this['contacts'] = contacts;
    }
/**
     * @return {Array.<Number>}
     */
    getTags() {
        return this.tags;
    }

    /**
     * @param {Array.<Number>} tags
     */
    setTags(tags) {
        this['tags'] = tags;
    }

}

ItemDataInput.RequiredProperties = ["model_type_id"];

/**
 * @member {Number} model_type_id
 */
ItemDataInput.prototype['model_type_id'] = undefined;

/**
 * @member {Number} block_id
 */
ItemDataInput.prototype['block_id'] = undefined;

/**
 * @member {String} external_id
 */
ItemDataInput.prototype['external_id'] = undefined;

/**
 * @member {Object} field_values
 */
ItemDataInput.prototype['field_values'] = undefined;

/**
 * @member {String} title
 */
ItemDataInput.prototype['title'] = undefined;

/**
 * @member {Number} duration
 */
ItemDataInput.prototype['duration'] = undefined;

/**
 * @member {Date} start
 */
ItemDataInput.prototype['start'] = undefined;

/**
 * @member {module:models/ItemDataInput.StatusEnum} status
 */
ItemDataInput.prototype['status'] = undefined;

/**
 * @member {Number} import
 */
ItemDataInput.prototype['import'] = undefined;

/**
 * @member {Number} campaign_id
 */
ItemDataInput.prototype['campaign_id'] = undefined;

/**
 * @member {Boolean} recommended
 */
ItemDataInput.prototype['recommended'] = undefined;

/**
 * @member {Number} station_draft_id
 */
ItemDataInput.prototype['station_draft_id'] = undefined;

/**
 * @member {Number} program_draft_id
 */
ItemDataInput.prototype['program_draft_id'] = undefined;

/**
 * @member {Number} user_draft_id
 */
ItemDataInput.prototype['user_draft_id'] = undefined;

/**
 * @member {Boolean} static_start
 */
ItemDataInput.prototype['static_start'] = undefined;

/**
 * @member {String} details
 */
ItemDataInput.prototype['details'] = undefined;

/**
 * @member {Number} _previous_id
 */
ItemDataInput.prototype['_previous_id'] = undefined;

/**
 * @member {Number} _before_id
 */
ItemDataInput.prototype['_before_id'] = undefined;

/**
 * @member {Array.<Number>} contacts
 */
ItemDataInput.prototype['contacts'] = undefined;

/**
 * @member {Array.<Number>} tags
 */
ItemDataInput.prototype['tags'] = undefined;


// Implement Item interface:
/**
 * @member {Number} model_type_id
 */
Item.prototype['model_type_id'] = undefined;
/**
 * @member {Number} block_id
 */
Item.prototype['block_id'] = undefined;
/**
 * @member {String} external_id
 */
Item.prototype['external_id'] = undefined;
/**
 * @member {Object} field_values
 */
Item.prototype['field_values'] = undefined;
/**
 * @member {String} title
 */
Item.prototype['title'] = undefined;
/**
 * @member {Number} duration
 */
Item.prototype['duration'] = undefined;
/**
 * @member {Date} start
 */
Item.prototype['start'] = undefined;
/**
 * @member {module:models/Item.StatusEnum} status
 */
Item.prototype['status'] = undefined;
/**
 * @member {Number} import
 */
Item.prototype['import'] = undefined;
/**
 * @member {Number} campaign_id
 */
Item.prototype['campaign_id'] = undefined;
/**
 * @member {Boolean} recommended
 */
Item.prototype['recommended'] = undefined;
/**
 * @member {Number} station_draft_id
 */
Item.prototype['station_draft_id'] = undefined;
/**
 * @member {Number} program_draft_id
 */
Item.prototype['program_draft_id'] = undefined;
/**
 * @member {Number} user_draft_id
 */
Item.prototype['user_draft_id'] = undefined;
/**
 * @member {Boolean} static_start
 */
Item.prototype['static_start'] = undefined;
/**
 * @member {String} details
 */
Item.prototype['details'] = undefined;
// Implement ItemInputOnly interface:
/**
 * @member {Number} _previous_id
 */
ItemInputOnly.prototype['_previous_id'] = undefined;
/**
 * @member {Number} _before_id
 */
ItemInputOnly.prototype['_before_id'] = undefined;
/**
 * @member {Array.<Number>} contacts
 */
ItemInputOnly.prototype['contacts'] = undefined;
/**
 * @member {Array.<Number>} tags
 */
ItemInputOnly.prototype['tags'] = undefined;



/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
ItemDataInput['StatusEnum'] = {

    /**
     * value: "scheduled"
     * @const
     */
    "scheduled": "scheduled",

    /**
     * value: "playing"
     * @const
     */
    "playing": "playing",

    /**
     * value: "played"
     * @const
     */
    "played": "played"
};



export default ItemDataInput;

