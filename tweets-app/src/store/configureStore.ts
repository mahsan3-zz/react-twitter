import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./reducers";
import createSagaMiddleware from 'redux-saga'
import loadTweetsSaga from "./sagas/tweets.saga";

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialStore = undefined) {

    // @ts-ignore
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        rootReducer,
        initialStore,
        composeEnhancers(applyMiddleware(
            sagaMiddleware
        ))
    );

    sagaMiddleware.run(loadTweetsSaga)

    return store;
}
