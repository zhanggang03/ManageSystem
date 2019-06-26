import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducers from './rootreducers';
import createSagaMiddleware from 'redux-saga';
import {watchFetchUsers} from './app/dept/saga';
import * as serviceWorker from './serviceWorker';
import {composeWithDevTools} from 'redux-devtools-extension';

//创建一个Saga中间件
const sagaMiddleware = createSagaMiddleware();

//使用合并后的Reducer,以及加入Saga中间件;
const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// 动态执行saga，注意：run函数只能在store创建好之后调用
sagaMiddleware.run(watchFetchUsers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
