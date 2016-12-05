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
    };
    return scheduleText;
  };

  var getStatus = function (schedule) {
    var scheduleText = '';
    switch(schedule) {
      case StatusCode.pendingLegal:
        scheduleText = StatusText.pendingLegal;
        break;
      case StatusCode.pendingNotLegal:
        scheduleText = StatusText.pendingNotLegal;
        break;
      case StatusCode.approved:
        scheduleText = StatusText.approved;
        break;
      case StatusCode.inactive:
        scheduleText = StatusText.inactive;
        break;
    };
    return scheduleText;
  };

  return {
    getSchedule: getSchedule,
    getStatus: getStatus
  };
}]);
