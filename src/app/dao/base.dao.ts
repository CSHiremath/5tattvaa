export interface BaseDataServices {
    /**
     * Given an Id get the object back. Most of the time the
     * return may have enough shallow details - like name, title etc
     */
    get(id:string):Promise<any>;
    /**
     * query for objects using the key-word query spec
     * q = { query : < string> , page: , size: }
     */
    query(q:any):Promise<any[]>;
    /**
     * helper method same as above, but may have additional params
     * q = { query : <string> , status : <string>, fromDate : .., page: , size: }
     * exact nature of parameters like status, fromDate depends upon back-end REST API
     * spec.
     */
    search(q:any):Promise<any[]>;
    /**
     * Save a give object. if obj["id"] is null, it is assumed an INSERT
     * otherwise a "UPDATE". So, be careful while sending
     */
    save(obj:any):Promise<any>;
    /**
     * Permanently delete a given object. May not be possible in all cases
     */
    delete(objId:string):Promise<any>;
    /**
     * Set the status of a given object. Status is any string
     */
    setStatus(objId:string,status:string):Promise<any>;
    /**
     * get the status of the given object.
     */
    getStatus(objId: string): Promise<any>;
}