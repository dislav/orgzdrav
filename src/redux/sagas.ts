import { all } from '@redux-saga/core/effects';

import { cartSaga } from '@redux/cart/sagas';
import { customerSaga } from '@redux/customer/sagas';

function* rootSagas() {
    yield all([cartSaga(), customerSaga()]);
}

export default rootSagas;
