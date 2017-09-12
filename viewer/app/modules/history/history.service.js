(function() {

  'use strict';

  /**
   * @class HistoryService
   * @classdesc Transacts logs with the server
   */
  class HistoryService {

    /**
     * Initialize global variables for the HistoryService
     * @param $q    Service to run functions asynchronously
     * @param $http Angular service that facilitates communication
     *              with the remote HTTP servers
     *
     * @ngInject
     */
    constructor($q, $http) {
      this.$q     = $q;
      this.$http  = $http;
    }

    /* service methods ----------------------------------------------------- */
    /**
     * Gets a list of logs from the server
     * @param {Object} params     The params to send with the request
     * @returns {Promise} Promise A promise object that signals the completion
     *                            or rejection of the request.
     */
    get(params) {
      return this.$q((resolve, reject) => {

        this.$http({ url:'logs', method:'GET', params:params })
           .then((response) => {
             resolve(response.data);
           }, (error) => {
             reject(error);
           });

      });
    }

  }

  HistoryService.$inject = ['$q', '$http'];


  angular.module('moloch')
     .service('HistoryService', HistoryService);

})();