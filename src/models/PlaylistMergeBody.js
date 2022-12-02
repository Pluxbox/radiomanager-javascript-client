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
import ImportItem from './ImportItem';

/**
 * The PlaylistMergeBody model module.
 * @module models/PlaylistMergeBody
 * @version 2.0
 */
class PlaylistMergeBody {
    /**
     * Constructs a new <code>PlaylistMergeBody</code>.
     * @alias module:models/PlaylistMergeBody
     */
    constructor() { 
        
        PlaylistMergeBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PlaylistMergeBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/PlaylistMergeBody} obj Optional instance to populate.
     * @return {module:models/PlaylistMergeBody} The populated <code>PlaylistMergeBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlaylistMergeBody();

            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Date');
            }
            if (data.hasOwnProperty('allow_playlist_past')) {
                obj['allow_playlist_past'] = ApiClient.convertToType(data['allow_playlist_past'], 'Number');
            }
            if (data.hasOwnProperty('broadcast_id')) {
                obj['broadcast_id'] = ApiClient.convertToType(data['broadcast_id'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ImportItem]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PlaylistMergeBody</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PlaylistMergeBody</code>.
     */
    static validateJSON(data) {
        if (data['items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['items'])) {
                throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
            }
            // validate the optional field `items` (array)
            for (const item of data['items']) {
                ImportItem.validateJsonObject(item);
            };
        }

        return true;
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
     * @return {Number}
     */
    getAllowPlaylistPast() {
        return this.allow_playlist_past;
    }

    /**
     * @param {Number} allowPlaylistPast
     */
    setAllowPlaylistPast(allowPlaylistPast) {
        this['allow_playlist_past'] = allowPlaylistPast;
    }
/**
     * @return {Number}
     */
    getBroadcastId() {
        return this.broadcast_id;
    }

    /**
     * @param {Number} broadcastId
     */
    setBroadcastId(broadcastId) {
        this['broadcast_id'] = broadcastId;
    }
/**
     * @return {Array.<module:models/ImportItem>}
     */
    getItems() {
        return this.items;
    }

    /**
     * @param {Array.<module:models/ImportItem>} items
     */
    setItems(items) {
        this['items'] = items;
    }

}



/**
 * @member {Date} start
 */
PlaylistMergeBody.prototype['start'] = undefined;

/**
 * @member {Number} allow_playlist_past
 */
PlaylistMergeBody.prototype['allow_playlist_past'] = undefined;

/**
 * @member {Number} broadcast_id
 */
PlaylistMergeBody.prototype['broadcast_id'] = undefined;

/**
 * @member {Array.<module:models/ImportItem>} items
 */
PlaylistMergeBody.prototype['items'] = undefined;






export default PlaylistMergeBody;

