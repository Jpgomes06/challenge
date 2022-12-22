function frontEnd1() {
  const nameOfYourResult = fakeRoute();
  console.log(nameOfYourResult);
}

function fakeRoute() {
  const test = fakeControllerTest();
  return test;
}

function fakeControllerTest() {
  const test = fakeServiceTest();
  return test;
}

function fakeServiceTest() {
  const test = fakeDataBaseTest();
  return test;
}

function fakeDataBaseTest() {
  return "Works";
}

frontEnd1();
