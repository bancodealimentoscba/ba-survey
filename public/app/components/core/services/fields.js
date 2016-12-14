baSurvey.service('FieldService', [
  'StatusCode',
  'StatusText',
  'TimeCode',
  'TimeText',
  function (StatusCode, StatusText, TimeCode, TimeText) {

  var getSchedule = function (schedule) {
    var scheduleText = '';
    switch(schedule) {
      case TimeCode.onceWeek:
        scheduleText = TimeText.onceWeek;
        break;
      case TimeCode.threeTimes:
        scheduleText = TimeText.threeTimes;
        break;
      case TimeCode.everyday:
        scheduleText = TimeText.everyday;
        break;
    }
    return scheduleText;
  };

  var getStatus = function (status) {
    var statusText = '';
    switch(status) {
      case StatusCode.pendingLegal:
        statusText = StatusText.pendingLegal;
        break;
      case StatusCode.pendingNotLegal:
        statusText = StatusText.pendingNotLegal;
        break;
      case StatusCode.approved:
        statusText = StatusText.approved;
        break;
      case StatusCode.inactive:
        statusText = StatusText.inactive;
        break;
    }
    return statusText;
  };

  return {
    getSchedule: getSchedule,
    getStatus: getStatus
  };
}]);
