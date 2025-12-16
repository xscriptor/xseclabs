const activityStore = {
  recordsByDay: null,
  totalCount: null,
};

function registerActivity() {}

function getRecordsByDay() {
  return activityStore.recordsByDay;
}

function getTotalCount() {
  return activityStore.totalCount;
}

export { activityStore, registerActivity, getRecordsByDay, getTotalCount };
