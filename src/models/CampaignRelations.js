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
import BroadcastRelationsModelType from './BroadcastRelationsModelType';
import CampaignRelationsItems from './CampaignRelationsItems';

/**
 * The CampaignRelations model module.
 * @module models/CampaignRelations
 * @version 2.0
 */
class CampaignRelations {
    /**
     * Constructs a new <code>CampaignRelations</code>.
     * @alias module:models/CampaignRelations
     */
    constructor() { 
        
        CampaignRelations.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CampaignRelations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CampaignRelations} obj Optional instance to populate.
     * @return {module:models/CampaignRelations} The populated <code>CampaignRelations</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignRelations();

            if (data.hasOwnProperty('items')) {
                obj['items'] = CampaignRelationsItems.constructFromObject(data['items']);
            }
            if (data.hasOwnProperty('model_type')) {
                obj['model_type'] = BroadcastRelationsModelType.constructFromObject(data['model_type']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CampaignRelations</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CampaignRelations</code>.
     */
    static validateJSON(data) {
        // validate the optional field `items`
        if (data['items']) { // data not null
          CampaignRelationsItems.validateJSON(data['items']);
        }
        // validate the optional field `model_type`
        if (data['model_type']) { // data not null
          BroadcastRelationsModelType.validateJSON(data['model_type']);
        }

        return true;
    }

/**
     * @return {module:models/CampaignRelationsItems}
     */
    getItems() {
        return this.items;
    }

    /**
     * @param {module:models/CampaignRelationsItems} items
     */
    setItems(items) {
        this['items'] = items;
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
 * @member {module:models/CampaignRelationsItems} items
 */
CampaignRelations.prototype['items'] = undefined;

/**
 * @member {module:models/BroadcastRelationsModelType} model_type
 */
CampaignRelations.prototype['model_type'] = undefined;






export default CampaignRelations;

