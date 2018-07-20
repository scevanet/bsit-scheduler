'use strict';

console.log('App.js is running!');

var appRoot = document.getElementById('app');

var app = {
  creditHours: 0,
  tuition: 0.00,
  courses: [],
  online: '',
  mondayCourses: [],
  tuesdayCourses: [],
  wednesdayCourses: [],
  thursdayCourses: [],
  it310btnText: 'Add',
  it320btnText: 'Add',
  it340btnText: 'Add',
  it4200btnText: 'Add',
  engl362btnText: 'Add',
  math365btnText: 'Add'
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
  app.tuition = app.tuition + 498.50 * 3;
  app.mondayCourses.push('IT310');
  app.courses.push('IT310');
  app.it310btnText = 'Remove';
  renderApp();
};

var removeIT310 = function removeIT310() {
  it310Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 498.50 * 3;
  var result = app.mondayCourses.filter(function (course) {
    return course != 'IT310';
  });
  app.mondayCourses = result;
  var cresult = app.courses.filter(function (course) {
    return course != 'IT310';
  });
  app.courses = cresult;
  if (app.courses.length == 0) {
    visability = true;
  }
  app.it310btnText = 'Add';
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
  app.tuition = app.tuition + 498.50 * 3;
  app.thursdayCourses.push('IT320');
  app.courses.push('IT320');
  app.it320btnText = 'Remove';
  renderApp();
};

var removeIT320 = function removeIT320() {
  it320Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 498.50 * 3;
  var result = app.thursdayCourses.filter(function (course) {
    return course != 'IT320';
  });
  app.thursdayCourses = result;
  var cresult = app.courses.filter(function (course) {
    return course != 'IT320';
  });
  app.courses = cresult;
  if (app.courses.length == 0) {
    visability = true;
  }
  app.it320btnText = 'Add';
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
  app.tuition = app.tuition + 498.50 * 3;
  app.wednesdayCourses.push('IT340');
  app.courses.push('IT340');
  app.it340btnText = 'Remove';
  renderApp();
};

var removeIT340 = function removeIT340() {
  it340Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 498.50 * 3;
  var result = app.wednesdayCourses.filter(function (course) {
    return course != 'IT340';
  });
  app.wednesdayCourses = result;
  var cresult = app.courses.filter(function (course) {
    return course != 'IT340';
  });
  app.courses = cresult;
  if (app.courses.length == 0) {
    visability = true;
  }
  app.it340btnText = 'Add';
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
  app.tuition = app.tuition + 498.50 * 3;
  app.it420btnText = 'Remove';
  renderApp();
};

var removeIT420 = function removeIT420() {
  it420Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 498.50 * 3;
  app.it420btnText = 'Add';
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
  app.tuition = app.tuition + 498.50 * 3;
  app.online = 'ENGL362';
  app.courses.push('ENGL362');
  app.engl362btnText = 'Remove';
  renderApp();
};

var removeEngl362 = function removeEngl362() {
  engl362Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 498.50 * 3;
  app.online = '';
  var cresult = app.courses.filter(function (course) {
    return course != 'ENGL362';
  });
  app.courses = cresult;
  app.engl362btnText = 'Add';
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
  app.tuition = app.tuition + 498.50 * 3;
  app.tuesdayCourses.push('MATH365');
  app.courses.push('MATH365');
  app.math365btnText = 'Remove';
  renderApp();
};

var removeMath365 = function removeMath365() {
  math365Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 498.50 * 3;
  var result = app.tuesdayCourses.filter(function (course) {
    return course != 'MATH365';
  });
  app.tuesdayCourses = result;
  var cresult = app.courses.filter(function (course) {
    return course != 'MATH365';
  });
  app.courses = cresult;
  app.math365btnText = 'Add';
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
  app.tuition = 0.00;
  app.online = '';
  visability = true;
  renderApp();
};

var goBack = function goBack() {
  app.creditHours = app.creditHours;

  renderApp();
};

var review = function review() {
  renderReviewApp();
};

var submit = function submit() {
  renderSubmitApp();
  alert('You have successfully enrolled.');
};

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'header',
      null,
      React.createElement('img', { src: 'assets/images/header.jpg' }),
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
            '4:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour2' },
            '5:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour3' },
            '6:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour4' },
            '7:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour5' },
            '8:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour6' },
            '9:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour7' },
            '10:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour8' },
            '11:00p'
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
            '4:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour2' },
            '5:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour3' },
            '6:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour4' },
            '7:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour5' },
            '8:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour6' },
            '9:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour7' },
            '10:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour8' },
            '11:00p'
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
            '4:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour whour2' },
            '5:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour whour3' },
            '6:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour whour4' },
            '7:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour whour5' },
            '8:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour whour6' },
            '9:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour whour7' },
            '10:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour whour8' },
            '11:00p'
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
            '4:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour2' },
            '5:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour3' },
            '6:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour4' },
            '7:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour5' },
            '8:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour6' },
            '9:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour7' },
            '10:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour8' },
            '11:00p'
          )
        ),
        React.createElement(
          'p',
          { id: 'online' },
          'ONLINE: ',
          app.online
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
            'Summary'
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
            app.tuition.toFixed(2)
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
              '8/20/2018 - 12/14/2018 || Monday 6:00p - 9:00p || BEST 230'
            ),
            React.createElement(
              'a',
              { href: 'https://it.eecs.ku.edu/it310', target: '_blank',
                title: 'IT 310' },
              'Course Description'
            ),
            React.createElement(
              'ul',
              null,
              React.createElement(
                'li',
                null,
                'Machine-level representation of data, digital logic and digital systems, computer architecture and organization, computing infrastructure, introduction to multiprocessing systems, firmware, hardware and software integration , introduction to intersystems communications, enterprise deployment management introduction to virtual machine emulation, platform technologies.'
              ),
              React.createElement(
                'li',
                null,
                'Prerequisite: Upper-level IT eligibility.'
              )
            ),
            React.createElement(
              'button',
              { id: 'it310', onClick: it310sel },
              app.it310btnText
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
              '8/20/2018 - 12/14/2018 || Thursday 7:10p - 10:00p || BEST 230'
            ),
            React.createElement(
              'a',
              { href: 'https://it.eecs.ku.edu/it320', target: '_blank',
                title: 'IT 320' },
              'Course Description'
            ),
            React.createElement(
              'ul',
              null,
              React.createElement(
                'li',
                null,
                'This course introduces operating systems and network administration and presents topics related to selection, installation, configuration, and maintenance of operating systems and computer networks. Topics to be covered include: Unix and Windows operating systems installation, configuration, and maintenance, server administration and management, client and server services, user and group management and support, software systems installation and configuration, content management and deployment, security management, network administration, backup management and disaster recovery, resource management, automation management, operating systems and Web domain management, operating systems and application version control management. A laboratory component will provide hands-on experience with system and network administration.'
              ),
              React.createElement(
                'li',
                null,
                'Prerequisite: Upper-level IT eligibility. Corequisite: IT 310.'
              )
            ),
            React.createElement(
              'button',
              { id: 'it320', onClick: it320sel },
              app.it320btnText
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
              '8/20/2018 - 12/14/2018 || Wednesday 6:00p - 9:00p || BEST 130'
            ),
            React.createElement(
              'a',
              { href: 'https://it.eecs.ku.edu/it340', target: '_blank',
                title: 'IT 340' },
              'Course Description'
            ),
            React.createElement(
              'ul',
              null,
              React.createElement(
                'li',
                null,
                'Fundamentals of computer security, security mechanisms, information states, security attacks, threat analysis models, vulnerability analysis models, introduction to cryptography, authentication, intrusion detection, intrusion prevention (firewalls), operating systems security, database security, software security, host hardening, incident and disaster response.'
              ),
              React.createElement(
                'li',
                null,
                'Upper-level IT eligibility'
              )
            ),
            React.createElement(
              'button',
              { id: 'it340', onClick: it340sel },
              app.it340btnText
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
              '8/20/2018 - 12/14/2018 || ONLINE '
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
              { id: 'engl362online', onClick: engl362sel },
              app.engl362btnText
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
              '8/20/2018 - 12/14/2018 || Tuesday 7:10p - 10:00p || REG 265'
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
                'Introduces students to the principles of technical communication. Students learn to organize, develop, write, and revise various technical documents (e.g., letters, manuals, presentations, proposals, reports, resumes, websites) often needed in business, engineering and scientific settings. Includes an introduction to technical-writing software. This course fulfills the prerequisite for English 562 and English 564. Prerequisite: Prior completion of the KU Core Written Communication requirement.'
              )
            ),
            React.createElement(
              'button',
              { id: 'math365', onClick: math365sel },
              app.math365btnText
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
              '8/20/2018 - 12/14/2018 || Thursday 7:10p - 10:00p || BEST 310'
            ),
            React.createElement(
              'a',
              { href: 'https://it.eecs.ku.edu/it420', target: '_blank',
                title: 'IT 420' },
              'Course Description'
            ),
            React.createElement(
              'ul',
              null,
              React.createElement(
                'li',
                null,
                'This course introduces operating systems principles and associated key concepts. Topics to be discussed include: processes and threads, concurrency, scheduling and dispatch, memory management, processor management, device management, security and protection, file system, disk scheduling, real-time and embedded systems, fault tolerance, scripting, and an introduction to virtualization.'
              ),
              React.createElement(
                'li',
                null,
                'Prerequisite: MATH 365, IT 320, and IT 342'
              )
            ),
            React.createElement(
              'button',
              { onClick: it420sel },
              'Add'
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
        React.createElement(
          'a',
          { href: 'https://ku.edu', target: '_blank' },
          React.createElement('img', { src: 'assets/images/jayhawk.jpg' })
        )
      ),
      React.createElement(
        'h3',
        null,
        'Helpful Links'
      ),
      React.createElement(
        'p',
        null,
        React.createElement(
          'a',
          { href: 'https://kuisc.com/', target: '_blank' },
          'Jayhackers'
        ),
        React.createElement(
          'a',
          { href: 'https://edwardscampus.ku.edu/overview-bachelors-information-technology', target: '_blank' },
          'BSIT'
        ),
        React.createElement(
          'a',
          { href: 'http://employment.ku.edu/', target: '_blank' },
          'Jobs'
        )
      ),
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
            '4:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour2' },
            '5:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour3' },
            '6:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour4' },
            '7:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour5' },
            '8:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour6' },
            '9:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour7' },
            '10:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour8' },
            '11:00p'
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
            '4:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour2' },
            '5:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour3' },
            '6:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour4' },
            '7:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour5' },
            '8:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour6' },
            '9:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour7' },
            '10:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour8' },
            '11:00p'
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
            '4:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour whour2' },
            '5:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour whour3' },
            '6:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour whour4' },
            '7:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour whour5' },
            '8:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour whour6' },
            '9:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour whour7' },
            '10:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour whour8' },
            '11:00p'
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
            '4:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour2' },
            '5:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour3' },
            '6:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour4' },
            '7:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour5' },
            '8:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour6' },
            '9:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour7' },
            '10:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour8' },
            '11:00p'
          )
        ),
        React.createElement(
          'p',
          { id: 'online' },
          'ONLINE: ',
          app.online
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
            'Summary'
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
            app.tuition.toFixed(2)
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'review' },
        React.createElement(
          'button',
          { onClick: submit, id: 'review' },
          'Enroll'
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
            '4:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour2' },
            '5:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour3' },
            '6:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour4' },
            '7:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour5' },
            '8:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour6' },
            '9:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour7' },
            '10:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour mhour8' },
            '11:00p'
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
            '4:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour2' },
            '5:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour3' },
            '6:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour4' },
            '7:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour5' },
            '8:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour6' },
            '9:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour7' },
            '10:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour tuhour8' },
            '11:00p'
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
            '4:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour whour2' },
            '5:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour whour3' },
            '6:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour whour4' },
            '7:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour whour5' },
            '8:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour whour6' },
            '9:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour whour7' },
            '10:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour whour8' },
            '11:00p'
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
            '4:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour2' },
            '5:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour3' },
            '6:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour4' },
            '7:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour5' },
            '8:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour6' },
            '9:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour7' },
            '10:00p'
          ),
          React.createElement(
            'div',
            { className: 'hour thhour8' },
            '11:00p'
          )
        ),
        React.createElement(
          'p',
          { id: 'online' },
          'ONLINE: ',
          app.online
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
            'Summary'
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
            app.tuition.toFixed(2)
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
