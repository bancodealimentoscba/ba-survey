baSurvey.constant('TimeCode', {
  onceWeek: 1,
  threeTimes: 2,
  everyday: 3
})
.constant('TimeText', {
  onceWeek: 'Una vez por semana',
  threeTimes: 'Tres veces por semana',
  everyday: 'Diario'
})
.constant('StatusCode', {
  pendingLegal: 1,
  pendingNotLegal: 2,
  approved: 3,
  inactive: 4
})
.constant('StatusText', {
  pendingLegal: 'Pendiente Inscripta',
  pendingNotLegal: 'Pendiente No Inscripta',
  approved: 'Aprobada',
  inactive: 'Inactiva'
})
.constant('TypeCode', {
  civilAssociation: 1,
  cooperative: 2,
  foundation: 3,
  other: 4
})
.constant('TypeText', {
  civilAssociation: 'Asociación civil',
  cooperative: 'Cooperativa',
  foundation: 'Fundación',
  other: 'Otro'
});
