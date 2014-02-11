/*
 * Cekurte Query String
 *
 * https://github.com/CekurteSistemas/JQueryCekurteQueryStr
 *
 * Um plugin jQuery para interpretar as query strings da URL
 * e disponibiliza-las através de um objeto.
 *
 * @author: João Paulo Cercal <sistemas@cekurte.com>
 * @version: 1.1
 */
(function($) {

    $.cekurteQueryStr = function() {

        var queryResult     = [];
        var queryParam      = [];
        var queryString     = '';
        var currentPageUrl  = '';

        if (typeof this.href === "undefined") {
            currentPageUrl = document.location.toString();
        } else {
            currentPageUrl = this.href.toString();
        }

        queryString = currentPageUrl.split("?");

        if (queryString[1]) {

            queryString = queryString[1].split("&");

            for (var i = 0; i < queryString.length; i++) {

                queryParam = queryString[i].split("=");

                var queryData = {};

                queryData[queryParam[0]] = queryParam[1];

                queryResult.push(queryData);
            }
        }

        return $(queryResult);
    };

}) (jQuery);