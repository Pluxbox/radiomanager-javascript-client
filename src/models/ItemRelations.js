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
import BlockRelationsBroadcast from './BlockRelationsBroadcast';
import BroadcastRelationsModelType from './BroadcastRelationsModelType';
import ItemRelationsBlock from './ItemRelationsBlock';
import ItemRelationsCampaign from './ItemRelationsCampaign';
import ItemRelationsContacts from './ItemRelationsContacts';
import ItemRelationsProgram from './ItemRelationsProgram';
import ItemRelationsTags from './ItemRelationsTags';

/**
 * The ItemRelations model module.
 * @module models/ItemRelations
 * @version 2.0
 */
class ItemRelations {
    /**
     * Constructs a new <code>ItemRelations</code>.
     * @alias module:models/ItemRelations
     */
    constructor() { 
        
        ItemRelations.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemRelations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ItemRelations} obj Optional instance to populate.
     * @return {module:models/ItemRelations} The populated <code>ItemRelations</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemRelations();

            if (data.hasOwnProperty('block')) {
                obj['block'] = ItemRelationsBlock.constructFromObject(data['block']);
            }
            if (data.hasOwnProperty('broadcast')) {
                obj['broadcast'] = BlockRelationsBroadcast.constructFromObject(data['broadcast']);
            }
            if (data.hasOwnProperty('program')) {
                obj['program'] = ItemRelationsProgram.constructFromObject(data['program']);
            }
            if (data.hasOwnProperty('contacts')) {
                obj['contacts'] = ItemRelationsContacts.constructFromObject(data['contacts']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ItemRelationsTags.constructFromObject(data['tags']);
            }
            if (data.hasOwnProperty('campaign')) {
                obj['campaign'] = ItemRelationsCampaign.constructFromObject(data['campaign']);
            }
            if (data.hasOwnProperty('model_type')) {
                obj['model_type'] = BroadcastRelationsModelType.constructFromObject(data['model_type']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ItemRelations</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ItemRelations</code>.
     */
    static validateJSON(data) {
        // validate the optional field `block`
        if (data['block']) { // data not null
          ItemRelationsBlock.validateJSON(data['block']);
        }
        // validate the optional field `broadcast`
        if (data['broadcast']) { // data not null
          BlockRelationsBroadcast.validateJSON(data['broadcast']);
        }
        // validate the optional field `program`
        if (data['program']) { // data not null
          ItemRelationsProgram.validateJSON(data['program']);
        }
        // validate the optional field `contacts`
        if (data['contacts']) { // data not null
          ItemRelationsContacts.validateJSON(data['contacts']);
        }
        // validate the optional field `tags`
        if (data['tags']) { // data not null
          ItemRelationsTags.validateJSON(data['tags']);
        }
        // validate the optional field `campaign`
        if (data['campaign']) { // data not null
          ItemRelationsCampaign.validateJSON(data['campaign']);
        }
        // validate the optional field `model_type`
        if (data['model_type']) { // data not null
          BroadcastRelationsModelType.validateJSON(data['model_type']);
        }

        return true;
    }

/**
     * @return {module:models/ItemRelationsBlock}
     */
    getBlock() {
        return this.block;
    }

    /**
     * @param {module:models/ItemRelationsBlock} block
     */
    setBlock(block) {
        this['block'] = block;
    }
/**
     * @return {module:models/BlockRelationsBroadcast}
     */
    getBroadcast() {
        return this.broadcast;
    }

    /**
     * @param {module:models/BlockRelationsBroadcast} broadcast
     */
    setBroadcast(broadcast) {
        this['broadcast'] = broadcast;
    }
/**
     * @return {module:models/ItemRelationsProgram}
     */
    getProgram() {
        return this.program;
    }

    /**
     * @param {module:models/ItemRelationsProgram} program
     */
    setProgram(program) {
        this['program'] = program;
    }
/**
     * @return {module:models/ItemRelationsContacts}
     */
    getContacts() {
        return this.contacts;
    }

    /**
     * @param {module:models/ItemRelationsContacts} contacts
     */
    setContacts(contacts) {
        this['contacts'] = contacts;
    }
/**
     * @return {module:models/ItemRelationsTags}
     */
    getTags() {
        return this.tags;
    }

    /**
     * @param {module:models/ItemRelationsTags} tags
     */
    setTags(tags) {
        this['tags'] = tags;
    }
/**
     * @return {module:models/ItemRelationsCampaign}
     */
    getCampaign() {
        return this.campaign;
    }

    /**
     * @param {module:models/ItemRelationsCampaign} campaign
     */
    setCampaign(campaign) {
        this['campaign'] = campaign;
    }
/**
     * @return {module:models/BroadcastRelationsModelType}
     */
    getModelType() {
        return this.model_type;
    }

    /**
     * @param {module:models/BroadcastRelationsModelType} modelType
     */
    setModelType(modelType) {
        this['model_type'] = modelType;
    }

}



/**
 * @member {module:models/ItemRelationsBlock} block
 */
ItemRelations.prototype['block'] = undefined;

/**
 * @member {module:models/BlockRelationsBroadcast} broadcast
 */
ItemRelations.prototype['broadcast'] = undefined;

/**
 * @member {module:models/ItemRelationsProgram} program
 */
ItemRelations.prototype['program'] = undefined;

/**
 * @member {module:models/ItemRelationsContacts} contacts
 */
ItemRelations.prototype['contacts'] = undefined;

/**
 * @member {module:models/ItemRelationsTags} tags
 */
ItemRelations.prototype['tags'] = undefined;

/**
 * @member {module:models/ItemRelationsCampaign} campaign
 */
ItemRelations.prototype['campaign'] = undefined;

/**
 * @member {module:models/BroadcastRelationsModelType} model_type
 */
ItemRelations.prototype['model_type'] = undefined;






export default ItemRelations;

