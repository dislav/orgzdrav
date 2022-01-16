import { all } from '@redux-saga/core/effects';
import { cartSaga } from '@redux/cart/sagas';

function* rootSagas() {
    yield all([cartSaga()]);
}

export default rootSagas;
