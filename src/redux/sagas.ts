import { all } from '@redux-saga/core/effects';

import { cartSaga } from '@redux/cart/sagas';
import { profileSaga } from '@redux/profile/sagas';

function* rootSagas() {
    yield all([cartSaga(), profileSaga()]);
}

export default rootSagas;
