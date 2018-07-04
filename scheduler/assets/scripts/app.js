'use strict';

console.log('App.js is running!');

var appRoot = document.getElementById('app');

var app = {
  creditHours: 0,
  tuition: 0,
  courses: '',
  online: ''
};

var it310Selected = false;
var it320Selected = false;
var it340Selected = false;
var it420Selected = false;
var engl362Selected = false;
var math365Selected = false;
var disabled420 = false;

var it310sel = function it310sel() {
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
  disable420();
  renderApp();
};

var removeIT310 = function removeIT310() {
  it310Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 800;
  renderApp();
};

var it320sel = function it320sel() {
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
  disable420();
  renderApp();
};

var removeIT320 = function removeIT320() {
  it320Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 800;
  renderApp();
};

var it340sel = function it340sel() {
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
  disable420();
  renderApp();
};

var removeIT340 = function removeIT340() {
  it340Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 800;
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

var disable420 = function disable420() {
  disabled420 = true;
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
  app.online = 'ENGL 362';
  renderApp();
};

var removeEngl362 = function removeEngl362() {
  engl362Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 800;
  app.online = '';
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
  renderApp();
};

var removeMath365 = function removeMath365() {
  math365Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 800;
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
  renderApp();
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
      null,
      React.createElement(
        'div',
        { className: 'calendar' },
        React.createElement(
          'div',
          { className: 'week' },
          React.createElement(
            'div',
            { className: 'week-day daytime' },
            'Day/Time'
          ),
          React.createElement(
            'div',
            { className: 'hour dthour1' },
            '1600'
          ),
          React.createElement(
            'div',
            { className: 'hour dthour2' },
            '1700'
          ),
          React.createElement(
            'div',
            { className: 'hour dthour3' },
            '1800'
          ),
          React.createElement(
            'div',
            { className: 'hour dthour4' },
            '1900'
          ),
          React.createElement(
            'div',
            { className: 'hour dthour5' },
            '2000'
          ),
          React.createElement(
            'div',
            { className: 'hour dthour6' },
            '2100'
          ),
          React.createElement(
            'div',
            { className: 'hour dthour7' },
            '2200'
          ),
          React.createElement(
            'div',
            { className: 'hour dthour8' },
            '2300'
          ),
          React.createElement(
            'div',
            { className: 'week-day monday' },
            'Monday'
          ),
          React.createElement('div', { className: 'hour mhour1' }),
          React.createElement('div', { className: 'hour mhour2' }),
          React.createElement('div', { className: 'hour mhour3' }),
          React.createElement('div', { className: 'hour mhour4' }),
          React.createElement('div', { className: 'hour mhour5' }),
          React.createElement('div', { className: 'hour mhour6' }),
          React.createElement('div', { className: 'hour mhour7' }),
          React.createElement('div', { className: 'hour mhour8' }),
          React.createElement(
            'div',
            { className: 'week-day tuesday' },
            'Tuesday'
          ),
          React.createElement('div', { className: 'hour tuhour1' }),
          React.createElement('div', { className: 'hour tuhour2' }),
          React.createElement('div', { className: 'hour tuhour3' }),
          React.createElement('div', { className: 'hour tuhour4' }),
          React.createElement('div', { className: 'hour tuhour5' }),
          React.createElement('div', { className: 'hour tuhour6' }),
          React.createElement('div', { className: 'hour tuhour7' }),
          React.createElement('div', { className: 'hour tuhour8' }),
          React.createElement(
            'div',
            { className: 'week-day wednesday' },
            'Wednesday'
          ),
          React.createElement('div', { className: 'hour whour1' }),
          React.createElement('div', { className: 'hour whour2' }),
          React.createElement('div', { className: 'hour whour3' }),
          React.createElement('div', { className: 'hour whour4' }),
          React.createElement('div', { className: 'hour whour5' }),
          React.createElement('div', { className: 'hour whour6' }),
          React.createElement('div', { className: 'hour whour7' }),
          React.createElement('div', { className: 'hour whour8' }),
          React.createElement(
            'div',
            { className: 'week-day thursday' },
            'Thursday'
          ),
          React.createElement('div', { className: 'hour thhour1' }),
          React.createElement('div', { className: 'hour thhour2' }),
          React.createElement('div', { className: 'hour thhour3' }),
          React.createElement('div', { className: 'hour thhour4' }),
          React.createElement('div', { className: 'hour thhour5' }),
          React.createElement('div', { className: 'hour thhour6' }),
          React.createElement('div', { className: 'hour thhour7' }),
          React.createElement('div', { className: 'hour thhour8' })
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
            '>',
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
          React.createElement(
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
              { disabled: disabled420, className: 'cardbtn', onClick: it420sel },
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
          { id: 'review' },
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

renderApp();
