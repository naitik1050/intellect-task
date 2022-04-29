import { all } from 'redux-saga/effects';
import watchSplash from './splashScreenSaga';
import watchDashboard from './dashboardSaga';

export default function* sagas() {
  yield all([
    watchSplash(),
    watchDashboard()
  ]);
}
