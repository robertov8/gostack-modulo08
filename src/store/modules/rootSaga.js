import { all } from 'redux-saga/effects';

import sagas from '~/store/modules/auth/sagas';

export default function* rootSaga() {
  return yield all([]);
}
