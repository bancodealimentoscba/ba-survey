baSurvey.service('FieldService', [
  'StatusCode',
  'StatusText',
  'TimeCode',
  'TimeText',
  'TypeCode',
  'TypeText',
  function (StatusCode, StatusText, TimeCode, TimeText, TypeCode, TypeText) {

  var getSchedule = function (schedule) {
    var scheduleText = '';
    schedule = parseInt(schedule);
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
    status = parseInt(status);
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

  var getType = function (type) {
    var typeText = '';
    type = parseInt(type);
    switch(type) {
      case TypeCode.civilAssociation:
        typeText = TypeText.civilAssociation;
        break;
      case TypeCode.cooperative:
        typeText = TypeText.cooperative;
        break;
      case TypeCode.foundation:
        typeText = TypeText.foundation;
        break;
      case TypeCode.other:
        typeText = TypeText.other;
        break;
    }
    return typeText;
  };

  return {
    getSchedule: getSchedule,
    getStatus: getStatus,
    getType: getType
  };
}]);
