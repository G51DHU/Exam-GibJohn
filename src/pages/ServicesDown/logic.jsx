/** @module ServicesDown/Logic */

import { useEffect, useState } from 'react';

/** 
 * Gets the status for all services.
 * @returns {Object} - returns array of the backend and database status.
 */
export default function GetServicesState(){
  /**
   * Stores the backend state, and  has a function to set the backend state
   * @typedef {Array.<String, Function>}
   */
  const [backend_state, set_backend_state] = useState()

  /**
   * Stores the database state, and has a function to set the database state.
   * @typedef {Array.<String, Function>}
   */
  const [db_state, set_db_state] = useState()
  
  useEffect(() => {
    fetch("http://localhost:8000")
      .then((data) => data.json())
      .then((response) => {
        set_backend_state(response.status.backend)
        set_db_state(response.status.database)
      })
  },[])
  return {"backend":backend_state, "database": db_state}
}