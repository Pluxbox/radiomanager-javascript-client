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
import BlockRelationsItems from './BlockRelationsItems';
import BlockRelationsProgram from './BlockRelationsProgram';

/**
 * The BlockRelations model module.
 * @module models/BlockRelations
 * @version 2.0
 */
class BlockRelations {
    /**
     * Constructs a new <code>BlockRelations</code>.
     * @alias module:models/BlockRelations
     */
    constructor() { 
        
        BlockRelations.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BlockRelations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/BlockRelations} obj Optional instance to populate.
     * @return {module:models/BlockRelations} The populated <code>BlockRelations</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BlockRelations();

            if (data.hasOwnProperty('items')) {
                obj['items'] = BlockRelationsItems.constructFromObject(data['items']);
            }
            if (data.hasOwnProperty('broadcast')) {
                obj['broadcast'] = BlockRelationsBroadcast.constructFromObject(data['broadcast']);
            }
            if (data.hasOwnProperty('program')) {
                obj['program'] = BlockRelationsProgram.constructFromObject(data['program']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BlockRelations</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BlockRelations</code>.
     */
    static validateJSON(data) {
        // validate the optional field `items`
        if (data['items']) { // data not null
          BlockRelationsItems.validateJSON(data['items']);
        }
        // validate the optional field `broadcast`
        if (data['broadcast']) { // data not null
          BlockRelationsBroadcast.validateJSON(data['broadcast']);
        }
        // validate the optional field `program`
        if (data['program']) { // data not null
          BlockRelationsProgram.validateJSON(data['program']);
        }

        return true;
    }

/**
     * @return {module:models/BlockRelationsItems}
     */
    getItems() {
        return this.items;
    }

    /**
     * @param {module:models/BlockRelationsItems} items
     */
    setItems(items) {
        this['items'] = items;
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
     * @return {module:models/BlockRelationsProgram}
     */
    getProgram() {
        return this.program;
    }

    /**
     * @param {module:models/BlockRelationsProgram} program
     */
    setProgram(program) {
        this['program'] = program;
    }

}



/**
 * @member {module:models/BlockRelationsItems} items
 */
BlockRelations.prototype['items'] = undefined;

/**
 * @member {module:models/BlockRelationsBroadcast} broadcast
 */
BlockRelations.prototype['broadcast'] = undefined;

/**
 * @member {module:models/BlockRelationsProgram} program
 */
BlockRelations.prototype['program'] = undefined;






export default BlockRelations;

