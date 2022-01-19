import { all } from '@redux-saga/core/effects';

import { cartSaga } from '@redux/cart/sagas';
import { profileSaga } from '@redux/profile/sagas';
import { ordersSaga } from '@redux/orders/sagas';

function* rootSagas() {
    yield all([cartSaga(), profileSaga(), ordersSaga()]);
}

export default rootSagas;
