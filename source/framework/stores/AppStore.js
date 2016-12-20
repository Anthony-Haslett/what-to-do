import AppDispatcher from '../AppDispatcher'
import {EventEmitter} from 'events'
import AppConstants from '../constants/AppConstants'
import LocalStorage from '../LocalStorage'


class AppStore extends EventEmitter {

    storeDefaults = () => {

        var user = {
            recall: LocalStorage.get('rememberUser'),
            email: LocalStorage.get('rememberEmail')
        }

        if(user.email == 'null' || user.email == undefined) {
            user.email = '';
        }

        return {
            storeName: 'AppStore',
            data: {},
            errors: {},
            loading: false
        }

    }

    constructor() {
        super();
        this.store = this.storeDefaults();
        AppDispatcher.register(this._handleDispatchedEvent.bind(this));
    }

    getState() {
        return this.store;
    }

    addChangeListener(callback) {
        this.on('change', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }

    _handleDispatchedEvent(payload) {

        var action = payload.action;
        var store = this.store;
        var data = store.data || {};

        if(action.storeName === store.storeName) {

            switch (action.actionType) {

                case AppConstants.APP_INIT_FETCH:
                    store.data = {};
                    store.errors = action.errors;
                    store.loading = true;
                    break;


                case AppConstants.APP_INIT_RESPONSE:
                    store.data = action.data;
                    store.errors = action.errors;
                    store.loading = false;
                    break;

            }

            this.store = store;
            this.emit('change');

        }
    }


}


export default new AppStore()
