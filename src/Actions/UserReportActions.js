import alt from '../Alt';
import UserSource from '../Sources/UserSource';

class UserReportActions {
  constructor() {
    this.generateActions('updateDataList');
  }

  fetchDataList(model) {
    var self = this;
    return (dispatch) => {
      dispatch();
      UserSource
        .fetch(model)
        .then((dataList) => {
          self
            .actions
            .updateDataList(dataList);
        });
    }
  }
}

export default alt.createActions(UserReportActions);