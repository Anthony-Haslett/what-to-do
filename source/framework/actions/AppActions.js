import AppDispatcher from '../AppDispatcher'
import request from 'superagent'
import AppConstants from '../constants/AppConstants'

var AppActions = {

    storeName: 'AppStore',

    init () {

        // Signal fetch
        AppDispatcher.handleServerAction({
            actionType: AppConstants.APP_INIT_FETCH,
            storeName: AppActions.storeName
        });


        // Request App Data
        request
            .get('HTTP-API-URL')
            .end(function(err, response) {

                // Signal fetch
                AppDispatcher.handleServerAction({
                    actionType: AppConstants.APP_INIT_RESPONSE,
                    storeName: AppActions.storeName,
                    data: response,
                    error: err
                });

            });

    }
    
}


export default AppActions