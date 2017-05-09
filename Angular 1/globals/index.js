/**
 * Created by fraa on 01/02/2017.
 */
(function (){
    'use_strict';
    angular.module('testApp')
        .constant('GLOBALS', {
            baseApiUrl: 'http://localhost:3000',
            version : 'Appversie: 1.0.0',
            copyright: '\u00A9 2017 - Auto Configuratie App'
        });
})();