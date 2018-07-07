'use strict';

console.log('App.js is running!');

var appRoot = document.getElementById('app');

var app = {
  creditHours: 0,
  tuition: 0,
  courses: [],
  online: '',
  mondayCourses: [],
  tuesdayCourses: [],
  wednesdayCourses: [],
  thursdayCourses: []
};

var it310Selected = false;
var it320Selected = false;
var it340Selected = false;
var it420Selected = false;
var engl362Selected = false;
var math365Selected = false;
var visability = true;

var toggle420Visibility = function toggle420Visibility() {
  if (app.courses.length == 0) {
    // array does not exist, is not an array, or is empty
    visability = !visability;
    renderApp();
  } else {
    renderApp();
  }
};

var it310sel = function it310sel() {
  toggle420Visibility();
  if (!it310Selected) {
    addIT310();
  } else {
    removeIT310();
  }
};

var addIT310 = function addIT310() {
  it310Selected = true;
  app.creditHours = app.creditHours + 3;
  app.tuition = app.tuition + 800;
  app.mondayCourses.push('IT310');
  app.courses.push('IT310');
  renderApp();
};

var removeIT310 = function removeIT310() {
  it310Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 800;
  var result = app.mondayCourses.filter(function (course) {
    return course != 'IT310';
  });
  app.mondayCourses = result;
  var cresult = app.courses.filter(function (course) {
    return course != 'IT310';
  });
  app.courses = cresult;
  renderApp();
};

var it320sel = function it320sel() {
  toggle420Visibility();
  if (!it320Selected) {
    addIT320();
  } else {
    removeIT320();
  }
};

var addIT320 = function addIT320() {
  it320Selected = true;
  app.creditHours = app.creditHours + 3;
  app.tuition = app.tuition + 800;
  app.thursdayCourses.push('IT320');
  app.courses.push('IT320');
  renderApp();
};

var removeIT320 = function removeIT320() {
  it320Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 800;
  var result = app.thursdayCourses.filter(function (course) {
    return course != 'IT320';
  });
  app.thursdayCourses = result;
  var cresult = app.courses.filter(function (course) {
    return course != 'IT320';
  });
  app.courses = cresult;
  renderApp();
};

var it340sel = function it340sel() {
  toggle420Visibility();
  if (!it340Selected) {
    addIT340();
  } else {
    removeIT340();
  }
};

var addIT340 = function addIT340() {
  it340Selected = true;
  app.creditHours = app.creditHours + 3;
  app.tuition = app.tuition + 800;
  app.wednesdayCourses.push('IT340');
  app.courses.push('IT340');
  renderApp();
};

var removeIT340 = function removeIT340() {
  it340Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 800;
  var result = app.wednesdayCourses.filter(function (course) {
    return course != 'IT340';
  });
  app.wednesdayCourses = result;
  var cresult = app.courses.filter(function (course) {
    return course != 'IT340';
  });
  app.courses = cresult;
  renderApp();
};

var it420sel = function it420sel() {
  if (!it420Selected) {
    addIT420();
  } else {
    removeIT420();
  }
};

var addIT420 = function addIT420() {
  it420Selected = true;
  app.creditHours = app.creditHours + 3;
  app.tuition = app.tuition + 800;
  renderApp();
};

var removeIT420 = function removeIT420() {
  it420Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 800;
  renderApp();
};

var engl362sel = function engl362sel() {
  if (!engl362Selected) {
    addEngl362();
  } else {
    removeEngl362();
  }
};

var addEngl362 = function addEngl362() {
  engl362Selected = true;
  app.creditHours = app.creditHours + 3;
  app.tuition = app.tuition + 800;
  app.online = 'ENGL362';
  app.courses.push('ENGL362');
  renderApp();
};

var removeEngl362 = function removeEngl362() {
  engl362Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 800;
  app.online = '';
  var cresult = app.courses.filter(function (course) {
    return course != 'ENGL362';
  });
  app.courses = cresult;
  renderApp();
};

var math365sel = function math365sel() {
  if (!math365Selected) {
    addMath365();
  } else {
    removeMath365();
  }
};

var addMath365 = function addMath365() {
  math365Selected = true;
  app.creditHours = app.creditHours + 3;
  app.tuition = app.tuition + 800;
  app.tuesdayCourses.push('MATH365');
  app.courses.push('MATH365');
  renderApp();
};

var removeMath365 = function removeMath365() {
  math365Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 800;
  var result = app.tuesdayCourses.filter(function (course) {
    return course != 'MATH365';
  });
  app.tuesdayCourses = result;
  var cresult = app.courses.filter(function (course) {
    return course != 'MATH365';
  });
  app.courses = cresult;
  renderApp();
};

var clearAll = function clearAll() {
  removeEngl362();
  removeIT310();
  removeIT320();
  removeIT340();
  removeIT420();
  removeMath365();
  app.creditHours = 0;
  app.tuition = 0;
  app.online = '';
  visability = true;
  renderApp();
};

var review = function review() {
  renderReviewApp();
};

var submit = function submit() {
  renderSubmitApp();
};
var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'header',
      null,
      React.createElement(
        'h1',
        null,
        'BSIT Scheduler'
      )
    ),
    React.createElement(
      'main',
      { className: 'main' },
      React.createElement(
        'div',
        { className: 'calendar' },
        React.createElement(
          'div',
          { className: 'week' },
          React.createElement(
            'div',
            { className: 'week-day monday' },
            'Monday'
          ),
          app.mondayCourses.map(function (courses) {
            return React.createElement(
              'div',
              { className: 'sixMoOClockClass', key: courses },
              courses
            );
          }),
          React.createElement(
            'div',
            { className: 'hour mhour1' },
            '1600'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour2' },
            '1700'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour3' },
            '1800'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour4' },
            '1900'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour5' },
            '2000'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour6' },
            '2100'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour7' },
            '2200'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour8' },
            '2300'
          ),
          React.createElement(
            'div',
            { className: 'week-day tuesday' },
            'Tuesday'
          ),
          app.tuesdayCourses.map(function (courses) {
            return React.createElement(
              'div',
              { className: 'sevTuOClockClass', key: courses },
              courses
            );
          }),
          React.createElement(
            'div',
            { className: 'hour tuhour1' },
            '1600'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour2' },
            '1700'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour3' },
            '1800'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour4' },
            '1900'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour5' },
            '2000'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour6' },
            '2100'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour7' },
            '2200'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour8' },
            '2300'
          ),
          React.createElement(
            'div',
            { className: 'week-day wednesday' },
            'Wednesday'
          ),
          app.wednesdayCourses.map(function (courses) {
            return React.createElement(
              'div',
              { className: 'sixWOClockClass', key: courses },
              courses
            );
          }),
          React.createElement(
            'div',
            { className: 'hour whour1' },
            '1600'
          ),
          React.createElement(
            'div',
            { className: 'hour whour2' },
            '1700'
          ),
          React.createElement(
            'div',
            { className: 'hour whour3' },
            '1800'
          ),
          React.createElement(
            'div',
            { className: 'hour whour4' },
            '1900'
          ),
          React.createElement(
            'div',
            { className: 'hour whour5' },
            '2000'
          ),
          React.createElement(
            'div',
            { className: 'hour whour6' },
            '2100'
          ),
          React.createElement(
            'div',
            { className: 'hour whour7' },
            '2200'
          ),
          React.createElement(
            'div',
            { className: 'hour whour8' },
            '2300'
          ),
          React.createElement(
            'div',
            { className: 'week-day thursday' },
            'Thursday'
          ),
          app.thursdayCourses.map(function (courses) {
            return React.createElement(
              'div',
              { className: 'sevThOClockClass', key: courses },
              courses
            );
          }),
          React.createElement(
            'div',
            { className: 'hour thhour1' },
            '1600'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour2' },
            '1700'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour3' },
            '1800'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour4' },
            '1900'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour5' },
            '2000'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour6' },
            '2100'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour7' },
            '2200'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour8' },
            '2300'
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'summary' },
        React.createElement(
          'div',
          { className: 'coursesumm' },
          React.createElement(
            'h2',
            null,
            'Review'
          ),
          React.createElement(
            'p',
            null,
            'ONLINE: ',
            app.online
          ),
          React.createElement(
            'p',
            null,
            'Credit Hours: ',
            app.creditHours
          ),
          React.createElement(
            'p',
            null,
            'Courses:'
          ),
          React.createElement(
            'ul',
            null,
            app.courses.map(function (item) {
              return React.createElement(
                'li',
                { key: item },
                item
              );
            })
          )
        ),
        React.createElement(
          'div',
          { className: 'tutitionsumm' },
          React.createElement(
            'h2',
            null,
            'Tuition'
          ),
          React.createElement(
            'p',
            null,
            'Course Cost: $',
            app.tuition
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'courses' },
        React.createElement(
          'div',
          { className: 'column' },
          React.createElement(
            'div',
            { className: 'card' },
            React.createElement(
              'h4',
              null,
              'IT 310 -- Computer Organization Platforms & Technologies'
            ),
            React.createElement(
              'p',
              null,
              '8/20/2018 - 12/14/2018'
            ),
            React.createElement(
              'a',
              { href: '#' },
              'Course Description'
            ),
            React.createElement(
              'ul',
              null,
              React.createElement(
                'li',
                null,
                'Something about the course'
              ),
              React.createElement(
                'li',
                null,
                'Something else about the course'
              ),
              React.createElement(
                'li',
                null,
                'Third something about the course'
              )
            ),
            React.createElement(
              'button',
              { id: 'it310', className: 'cardbtn', onClick: it310sel },
              'Monday 1810 - 2100',
              React.createElement('br', null),
              'BEST 230'
            )
          ),
          React.createElement(
            'div',
            { className: 'card' },
            React.createElement(
              'h4',
              null,
              'IT 320 -- Systems and Networking Administration'
            ),
            React.createElement(
              'p',
              null,
              '8/20/2018 - 12/14/2018'
            ),
            React.createElement(
              'a',
              { href: '#' },
              'Course Description'
            ),
            React.createElement(
              'ul',
              null,
              React.createElement(
                'li',
                null,
                'Something about the course'
              ),
              React.createElement(
                'li',
                null,
                'Something else about the course'
              ),
              React.createElement(
                'li',
                null,
                'Third something about the course'
              )
            ),
            React.createElement(
              'button',
              { id: 'it320', className: 'cardbtn', onClick: it320sel },
              'Thursday 1910 - 2200',
              React.createElement('br', null),
              'BEST 230'
            )
          ),
          React.createElement(
            'div',
            { className: 'card' },
            React.createElement(
              'h4',
              null,
              'IT 340 -- Computer and Information Security'
            ),
            React.createElement(
              'p',
              null,
              '8/20/2018 - 12/14/2018'
            ),
            React.createElement(
              'a',
              { href: '#' },
              'Course Description'
            ),
            React.createElement(
              'ul',
              null,
              React.createElement(
                'li',
                null,
                'Something about the course'
              ),
              React.createElement(
                'li',
                null,
                'Something else about the course'
              ),
              React.createElement(
                'li',
                null,
                'Third something about the course'
              )
            ),
            React.createElement(
              'button',
              { id: 'it340', className: 'cardbtn', onClick: it340sel },
              'Wednesday 1800 - 2100',
              React.createElement('br', null),
              'BEST 130'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'column' },
          React.createElement(
            'div',
            { className: 'card' },
            React.createElement(
              'h4',
              null,
              'ENGL 362 -- Foundations of Technical Writing'
            ),
            React.createElement(
              'p',
              null,
              '8/20/2018 - 12/14/2018'
            ),
            React.createElement(
              'a',
              { href: '#' },
              'Course Description'
            ),
            React.createElement(
              'ul',
              null,
              React.createElement(
                'li',
                null,
                'Something about the course'
              ),
              React.createElement(
                'li',
                null,
                'Something else about the course'
              ),
              React.createElement(
                'li',
                null,
                'Third something about the course'
              )
            ),
            React.createElement(
              'button',
              { id: 'engl362online', className: 'cardbtn', onClick: engl362sel },
              'ONLINE',
              React.createElement('br', null),
              'ONLINE'
            )
          ),
          React.createElement(
            'div',
            { className: 'card' },
            React.createElement(
              'h4',
              null,
              'MATH 365 -- Elementary Statistics'
            ),
            React.createElement(
              'p',
              null,
              '8/20/2018 - 12/14/2018'
            ),
            React.createElement(
              'a',
              { href: '#' },
              'Course Description'
            ),
            React.createElement(
              'ul',
              null,
              React.createElement(
                'li',
                null,
                'Something about the course'
              ),
              React.createElement(
                'li',
                null,
                'Something else about the course'
              ),
              React.createElement(
                'li',
                null,
                'Third something about the course'
              )
            ),
            React.createElement(
              'button',
              { id: 'math365', className: 'cardbtn', onClick: math365sel },
              'Tuesday 1910 - 2200',
              React.createElement('br', null),
              'REG 265'
            )
          ),
          visability && React.createElement(
            'div',
            { className: 'card' },
            React.createElement(
              'h4',
              null,
              'IT 420 -- Operating Systems'
            ),
            React.createElement(
              'p',
              null,
              '8/20/2018 - 12/14/2018'
            ),
            React.createElement(
              'a',
              { href: '#' },
              'Course Description'
            ),
            React.createElement(
              'ul',
              null,
              React.createElement(
                'li',
                null,
                'Something about the course'
              ),
              React.createElement(
                'li',
                null,
                'Something else about the course'
              ),
              React.createElement(
                'li',
                null,
                'Third something about the course'
              )
            ),
            React.createElement(
              'button',
              { className: 'cardbtn', onClick: it420sel },
              'Thursday 1910 - 2200',
              React.createElement('br', null),
              'BEST 310'
            )
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'review' },
        React.createElement(
          'button',
          { onClick: review, id: 'review' },
          'Review'
        ),
        React.createElement(
          'button',
          { onClick: clearAll },
          'Clear'
        )
      )
    ),
    React.createElement(
      'footer',
      null,
      React.createElement(
        'p',
        null,
        'BSIT Scheduler written by: Jason Savage, Hannah West, Scott Evans, and Kaleb Motilal.'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

var renderReviewApp = function renderReviewApp() {
  var reviewTemplate = React.createElement(
    'div',
    null,
    React.createElement(
      'header',
      null,
      React.createElement(
        'h1',
        null,
        'BSIT Scheduler'
      )
    ),
    React.createElement(
      'main',
      { className: 'reviewName' },
      React.createElement(
        'div',
        { className: 'calendar' },
        React.createElement(
          'div',
          { className: 'week' },
          React.createElement(
            'div',
            { className: 'week-day monday' },
            'Monday'
          ),
          app.mondayCourses.map(function (courses) {
            return React.createElement(
              'div',
              { className: 'sixMoOClockClass', key: courses },
              courses
            );
          }),
          React.createElement(
            'div',
            { className: 'hour mhour1' },
            '1600'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour2' },
            '1700'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour3' },
            '1800'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour4' },
            '1900'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour5' },
            '2000'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour6' },
            '2100'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour7' },
            '2200'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour8' },
            '2300'
          ),
          React.createElement(
            'div',
            { className: 'week-day tuesday' },
            'Tuesday'
          ),
          app.tuesdayCourses.map(function (courses) {
            return React.createElement(
              'div',
              { className: 'sevTuOClockClass', key: courses },
              courses
            );
          }),
          React.createElement(
            'div',
            { className: 'hour tuhour1' },
            '1600'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour2' },
            '1700'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour3' },
            '1800'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour4' },
            '1900'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour5' },
            '2000'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour6' },
            '2100'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour7' },
            '2200'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour8' },
            '2300'
          ),
          React.createElement(
            'div',
            { className: 'week-day wednesday' },
            'Wednesday'
          ),
          app.wednesdayCourses.map(function (courses) {
            return React.createElement(
              'div',
              { className: 'sixWOClockClass', key: courses },
              courses
            );
          }),
          React.createElement(
            'div',
            { className: 'hour whour1' },
            '1600'
          ),
          React.createElement(
            'div',
            { className: 'hour whour2' },
            '1700'
          ),
          React.createElement(
            'div',
            { className: 'hour whour3' },
            '1800'
          ),
          React.createElement(
            'div',
            { className: 'hour whour4' },
            '1900'
          ),
          React.createElement(
            'div',
            { className: 'hour whour5' },
            '2000'
          ),
          React.createElement(
            'div',
            { className: 'hour whour6' },
            '2100'
          ),
          React.createElement(
            'div',
            { className: 'hour whour7' },
            '2200'
          ),
          React.createElement(
            'div',
            { className: 'hour whour8' },
            '2300'
          ),
          React.createElement(
            'div',
            { className: 'week-day thursday' },
            'Thursday'
          ),
          app.thursdayCourses.map(function (courses) {
            return React.createElement(
              'div',
              { className: 'sevThOClockClass', key: courses },
              courses
            );
          }),
          React.createElement(
            'div',
            { className: 'hour thhour1' },
            '1600'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour2' },
            '1700'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour3' },
            '1800'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour4' },
            '1900'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour5' },
            '2000'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour6' },
            '2100'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour7' },
            '2200'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour8' },
            '2300'
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'summary' },
        React.createElement(
          'div',
          { className: 'coursesumm' },
          React.createElement(
            'h2',
            null,
            'Review'
          ),
          React.createElement(
            'p',
            null,
            'ONLINE: ',
            app.online
          ),
          React.createElement(
            'p',
            null,
            'Credit Hours: ',
            app.creditHours
          ),
          React.createElement(
            'p',
            null,
            'Courses:'
          ),
          React.createElement(
            'ul',
            null,
            app.courses.map(function (item) {
              return React.createElement(
                'li',
                { key: item },
                item
              );
            })
          )
        ),
        React.createElement(
          'div',
          { className: 'tutitionsumm' },
          React.createElement(
            'h2',
            null,
            'Tuition'
          ),
          React.createElement(
            'p',
            null,
            'Course Cost: $',
            app.tuition
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'review' },
        React.createElement(
          'button',
          { onClick: submit, id: 'review' },
          'Submit'
        ),
        React.createElement(
          'button',
          { onClick: clearAll },
          'Go Back'
        )
      )
    ),
    React.createElement(
      'footer',
      null,
      React.createElement(
        'p',
        null,
        'BSIT Scheduler written by: Jason Savage, Hannah West, Scott Evans, and Kaleb Motilal.'
      )
    )
  );
  ReactDOM.render(reviewTemplate, appRoot);
};

var renderSubmitApp = function renderSubmitApp() {
  var submitTemplate = React.createElement(
    'div',
    null,
    React.createElement(
      'header',
      null,
      React.createElement(
        'h1',
        null,
        'BSIT Scheduler'
      )
    ),
    React.createElement(
      'main',
      { className: 'submitMain' },
      React.createElement(
        'div',
        { className: 'calendar' },
        React.createElement(
          'div',
          { className: 'week' },
          React.createElement(
            'div',
            { className: 'week-day monday' },
            'Monday'
          ),
          app.mondayCourses.map(function (courses) {
            return React.createElement(
              'div',
              { className: 'sixMoOClockClass', key: courses },
              courses
            );
          }),
          React.createElement(
            'div',
            { className: 'hour mhour1' },
            '1600'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour2' },
            '1700'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour3' },
            '1800'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour4' },
            '1900'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour5' },
            '2000'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour6' },
            '2100'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour7' },
            '2200'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour8' },
            '2300'
          ),
          React.createElement(
            'div',
            { className: 'weekS-day tuesday' },
            'Tuesday'
          ),
          app.tuesdayCourses.map(function (courses) {
            return React.createElement(
              'div',
              { className: 'sevTuOClockClass', key: courses },
              courses
            );
          }),
          React.createElement(
            'div',
            { className: 'hour tuhour1' },
            '1600'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour2' },
            '1700'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour3' },
            '1800'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour4' },
            '1900'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour5' },
            '2000'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour6' },
            '2100'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour7' },
            '2200'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour8' },
            '2300'
          ),
          React.createElement(
            'div',
            { className: 'week-day wednesday' },
            'Wednesday'
          ),
          app.wednesdayCourses.map(function (courses) {
            return React.createElement(
              'div',
              { className: 'sixWOClockClass', key: courses },
              courses
            );
          }),
          React.createElement(
            'div',
            { className: 'hour whour1' },
            '1600'
          ),
          React.createElement(
            'div',
            { className: 'hour whour2' },
            '1700'
          ),
          React.createElement(
            'div',
            { className: 'hour whour3' },
            '1800'
          ),
          React.createElement(
            'div',
            { className: 'hour whour4' },
            '1900'
          ),
          React.createElement(
            'div',
            { className: 'hour whour5' },
            '2000'
          ),
          React.createElement(
            'div',
            { className: 'hour whour6' },
            '2100'
          ),
          React.createElement(
            'div',
            { className: 'hour whour7' },
            '2200'
          ),
          React.createElement(
            'div',
            { className: 'hour whour8' },
            '2300'
          ),
          React.createElement(
            'div',
            { className: 'week-day thursday' },
            'Thursday'
          ),
          app.thursdayCourses.map(function (courses) {
            return React.createElement(
              'div',
              { className: 'sevThOClockClass', key: courses },
              courses
            );
          }),
          React.createElement(
            'div',
            { className: 'hour thhour1' },
            '1600'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour2' },
            '1700'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour3' },
            '1800'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour4' },
            '1900'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour5' },
            '2000'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour6' },
            '2100'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour7' },
            '2200'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour8' },
            '2300'
          )
        )
      )
    ),
    React.createElement(
      'footer',
      null,
      React.createElement(
        'p',
        null,
        'BSIT Scheduler written by: Jason Savage, Hannah West, Scott Evans, and Kaleb Motilal.'
      )
    )
  );
  ReactDOM.render(submitTemplate, appRoot);
};

renderApp();
