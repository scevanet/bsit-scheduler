console.log('App.js is running!');

const appRoot = document.getElementById('app');

const app = {
  creditHours: 0,
  tuition: 0,
  courses: [],
  online: '',
  mondayCourses: [],
  tuesdayCourses: [],
  wednesdayCourses: [],
  thursdayCourses: []
};

let it310Selected = false;
let it320Selected = false;
let it340Selected = false;
let it420Selected = false;
let engl362Selected = false;
let math365Selected = false;
let visability = true;

const toggle420Visibility = () => {
  if (app.courses.length == 0) {
  // array does not exist, is not an array, or is empty
    visability = !visability;
    renderApp();
  }
  else {
    renderApp();
  }
}

const it310sel = () => {
  toggle420Visibility();
  if (!it310Selected) {
    addIT310();
  }
  else {
    removeIT310();
  }

}

const addIT310 = () => {
  it310Selected = true;
  app.creditHours = app.creditHours + 3;
  app.tuition = app.tuition + 800;
  app.mondayCourses.push('IT310');
  app.courses.push('IT310');
  renderApp();
}

const removeIT310 = () => {
  it310Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 800;
  const result = app.mondayCourses.filter(course => course != 'IT310');
  app.mondayCourses = result;
  const cresult = app.courses.filter(course => course != 'IT310');
  app.courses = cresult;
  renderApp();
}

const it320sel = () => {
  toggle420Visibility();
  if (!it320Selected) {
    addIT320();
  }
  else {
    removeIT320();
  }
}

const addIT320 = () => {
  it320Selected = true;
  app.creditHours = app.creditHours + 3;
  app.tuition = app.tuition + 800;
  app.thursdayCourses.push('IT320');
  app.courses.push('IT320');
  renderApp();
}

const removeIT320 = () => {
  it320Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 800;
  const result = app.thursdayCourses.filter(course => course != 'IT320');
  app.thursdayCourses = result;
  const cresult = app.courses.filter(course => course != 'IT320');
  app.courses = cresult;
  renderApp();
}

const it340sel = () => {
  toggle420Visibility();
  if (!it340Selected) {
    addIT340();
  }
  else {
    removeIT340();
  }
}

const addIT340 = () => {
  it340Selected = true;
  app.creditHours = app.creditHours + 3;
  app.tuition = app.tuition + 800;
  app.wednesdayCourses.push('IT340');
  app.courses.push('IT340');
  renderApp();
}

const removeIT340 = () => {
  it340Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 800;
  const result = app.wednesdayCourses.filter(course => course != 'IT340');
  app.wednesdayCourses = result;
  const cresult = app.courses.filter(course => course != 'IT340');
  app.courses = cresult;
  renderApp();
}

const it420sel = () => {
  if (!it420Selected) {
    addIT420();
  }
  else {
    removeIT420();
  }
}

const addIT420 = () => {
  it420Selected = true;
  app.creditHours = app.creditHours + 3;
  app.tuition = app.tuition + 800;
  renderApp();
}

const removeIT420 = () => {
  it420Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 800;
  renderApp();
}

const engl362sel = () => {
  if (!engl362Selected) {
    addEngl362();
  }
  else {
    removeEngl362();
  }
}

const addEngl362 = () => {
  engl362Selected = true;
  app.creditHours = app.creditHours + 3;
  app.tuition = app.tuition + 800;
  app.online = 'ENGL362';
  app.courses.push('ENGL362');
  renderApp();
}

const removeEngl362 = () => {
  engl362Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 800;
  app.online = '';
  const cresult = app.courses.filter(course => course != 'ENGL362');
  app.courses = cresult;
  renderApp();
}

const math365sel = () => {
  if (!math365Selected) {
    addMath365();
  }
  else {
    removeMath365();
  }
}

const addMath365 = () => {
  math365Selected = true;
  app.creditHours = app.creditHours + 3;
  app.tuition = app.tuition + 800;
  app.tuesdayCourses.push('MATH365');
  app.courses.push('MATH365');
  renderApp();
}

const removeMath365 = () => {
  math365Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 800;
  const result = app.tuesdayCourses.filter(course => course != 'MATH365');
  app.tuesdayCourses = result;
  const cresult = app.courses.filter(course => course != 'MATH365');
  app.courses = cresult;
  renderApp();
}

const clearAll = () => {
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
}

const review = () => {
  renderReviewApp();
}

const submit = () => {
  renderSubmitApp();
}
const renderApp = () => {
  const template = (
    <div>
    <header>
      <h1>BSIT Scheduler</h1>
    </header>
    <main className="main">
      <div className="calendar">
        <div className="week">
          <div className="week-day monday">Monday</div>
            {app.mondayCourses.map((courses) => <div className="sixMoOClockClass" key={courses}>{courses}</div>)}
            <div className="hour mhour1">1600</div>
            <div className="hour mhour2">1700</div>
            <div className="hour mhour3">1800</div>
            <div className="hour mhour4">1900</div>
            <div className="hour mhour5">2000</div>
            <div className="hour mhour6">2100</div>
            <div className="hour mhour7">2200</div>
            <div className="hour mhour8">2300</div>
          <div className="week-day tuesday">Tuesday</div>
            {app.tuesdayCourses.map((courses) => <div className="sevTuOClockClass" key={courses}>{courses}</div>)}
            <div className="hour tuhour1">1600</div>
            <div className="hour tuhour2">1700</div>
            <div className="hour tuhour3">1800</div>
            <div className="hour tuhour4">1900</div>
            <div className="hour tuhour5">2000</div>
            <div className="hour tuhour6">2100</div>
            <div className="hour tuhour7">2200</div>
            <div className="hour tuhour8">2300</div>
          <div className="week-day wednesday">Wednesday</div>
            {app.wednesdayCourses.map((courses) => <div className="sixWOClockClass" key={courses}>{courses}</div>)}
            <div className="hour whour1">1600</div>
            <div className="hour whour2">1700</div>
            <div className="hour whour3">1800</div>
            <div className="hour whour4">1900</div>
            <div className="hour whour5">2000</div>
            <div className="hour whour6">2100</div>
            <div className="hour whour7">2200</div>
            <div className="hour whour8">2300</div>
          <div className="week-day thursday">Thursday</div>
            {app.thursdayCourses.map((courses) => <div className="sevThOClockClass" key={courses}>{courses}</div>)}
            <div className="hour thhour1">1600</div>
            <div className="hour thhour2">1700</div>
            <div className="hour thhour3">1800</div>
            <div className="hour thhour4">1900</div>
            <div className="hour thhour5">2000</div>
            <div className="hour thhour6">2100</div>
            <div className="hour thhour7">2200</div>
            <div className="hour thhour8">2300</div>
        </div>
      </div>
      <div className="summary">
        <div className="coursesumm">
          <h2>Review</h2>
          <p>ONLINE: {app.online}</p>
          <p>Credit Hours: {app.creditHours}</p>
          <p>Courses:</p>
          <ul>
          {
            app.courses.map((item) => <li key={item}>{item}</li>)
          }
          </ul>
        </div>
        <div className="tutitionsumm">
          <h2>Tuition</h2>
          <p>Course Cost: ${app.tuition}</p>
        </div>
      </div>
      <div className="courses">
        <div className="column">
          <div className="card">
            <h4>IT 310 -- Computer Organization Platforms & Technologies</h4>
            <p>8/20/2018 - 12/14/2018</p>
            <a href="#">Course Description</a>
            <ul>
              <li>Something about the course</li>
              <li>Something else about the course</li>
              <li>Third something about the course</li>
            </ul>
            <button id="it310" className="cardbtn" onClick={it310sel}>Monday 1810 - 2100<br />BEST 230</button>
          </div>
          <div className="card">
            <h4>IT 320 -- Systems and Networking Administration</h4>
            <p>8/20/2018 - 12/14/2018</p>
            <a href="#">Course Description</a>
            <ul>
              <li>Something about the course</li>
              <li>Something else about the course</li>
              <li>Third something about the course</li>
            </ul>
            <button id="it320" className="cardbtn" onClick={it320sel}>Thursday 1910 - 2200<br />BEST 230</button>
          </div>
          <div className="card">
            <h4>IT 340 -- Computer and Information Security</h4>
            <p>8/20/2018 - 12/14/2018</p>
            <a href="#">Course Description</a>
            <ul>
              <li>Something about the course</li>
              <li>Something else about the course</li>
              <li>Third something about the course</li>
            </ul>
            <button id="it340" className="cardbtn" onClick={it340sel}>Wednesday 1800 - 2100<br />BEST 130</button>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <h4>ENGL 362 -- Foundations of Technical Writing</h4>
            <p>8/20/2018 - 12/14/2018</p>
            <a href="#">Course Description</a>
            <ul>
              <li>Something about the course</li>
              <li>Something else about the course</li>
              <li>Third something about the course</li>
            </ul>
            <button id="engl362online" className="cardbtn" onClick={engl362sel}>ONLINE<br />ONLINE</button>
          </div>
          <div className="card">
            <h4>MATH 365 -- Elementary Statistics</h4>
            <p>8/20/2018 - 12/14/2018</p>
            <a href="#">Course Description</a>
            <ul>
              <li>Something about the course</li>
              <li>Something else about the course</li>
              <li>Third something about the course</li>
            </ul>
            <button id="math365" className="cardbtn" onClick={math365sel}>Tuesday 1910 - 2200<br />REG 265</button>
          </div>
          {visability && (
          <div className="card">
            <h4>IT 420 -- Operating Systems</h4>
            <p>8/20/2018 - 12/14/2018</p>
            <a href="#">Course Description</a>
            <ul>
              <li>Something about the course</li>
              <li>Something else about the course</li>
              <li>Third something about the course</li>
            </ul>
            <button className="cardbtn" onClick={it420sel}>Thursday 1910 - 2200<br />BEST 310</button>
          </div>
        )}
        </div>
      </div>
      <div className="review">
        <button onClick={review} id="review">Review</button><button onClick={clearAll}>Clear</button>
      </div>
    </main>
    <footer>
      <p>BSIT Scheduler written by: Jason Savage, Hannah West, Scott Evans, and
      Kaleb Motilal.</p>
    </footer>
  </div>
);
  ReactDOM.render(template, appRoot);
}

const renderReviewApp = () => {
  const reviewTemplate = (
    <div>
    <header>
      <h1>BSIT Scheduler</h1>
    </header>
    <main className="reviewName">
      <div className="calendar">
        <div className="week">
          <div className="week-day monday">Monday</div>
            {app.mondayCourses.map((courses) => <div className="sixMoOClockClass" key={courses}>{courses}</div>)}
            <div className="hour mhour1">1600</div>
            <div className="hour mhour2">1700</div>
            <div className="hour mhour3">1800</div>
            <div className="hour mhour4">1900</div>
            <div className="hour mhour5">2000</div>
            <div className="hour mhour6">2100</div>
            <div className="hour mhour7">2200</div>
            <div className="hour mhour8">2300</div>
          <div className="week-day tuesday">Tuesday</div>
            {app.tuesdayCourses.map((courses) => <div className="sevTuOClockClass" key={courses}>{courses}</div>)}
            <div className="hour tuhour1">1600</div>
            <div className="hour tuhour2">1700</div>
            <div className="hour tuhour3">1800</div>
            <div className="hour tuhour4">1900</div>
            <div className="hour tuhour5">2000</div>
            <div className="hour tuhour6">2100</div>
            <div className="hour tuhour7">2200</div>
            <div className="hour tuhour8">2300</div>
          <div className="week-day wednesday">Wednesday</div>
            {app.wednesdayCourses.map((courses) => <div className="sixWOClockClass" key={courses}>{courses}</div>)}
            <div className="hour whour1">1600</div>
            <div className="hour whour2">1700</div>
            <div className="hour whour3">1800</div>
            <div className="hour whour4">1900</div>
            <div className="hour whour5">2000</div>
            <div className="hour whour6">2100</div>
            <div className="hour whour7">2200</div>
            <div className="hour whour8">2300</div>
          <div className="week-day thursday">Thursday</div>
            {app.thursdayCourses.map((courses) => <div className="sevThOClockClass" key={courses}>{courses}</div>)}
            <div className="hour thhour1">1600</div>
            <div className="hour thhour2">1700</div>
            <div className="hour thhour3">1800</div>
            <div className="hour thhour4">1900</div>
            <div className="hour thhour5">2000</div>
            <div className="hour thhour6">2100</div>
            <div className="hour thhour7">2200</div>
            <div className="hour thhour8">2300</div>
        </div>
      </div>
      <div className="summary">
        <div className="coursesumm">
          <h2>Review</h2>
          <p>ONLINE: {app.online}</p>
          <p>Credit Hours: {app.creditHours}</p>
          <p>Courses:</p>
          <ul>
          {
            app.courses.map((item) => <li key={item}>{item}</li>)
          }
          </ul>
        </div>
        <div className="tutitionsumm">
          <h2>Tuition</h2>
          <p>Course Cost: ${app.tuition}</p>
        </div>
      </div>
      <div className="review">
        <button onClick={submit} id="review">Submit</button><button onClick={clearAll}>Go Back</button>
      </div>
    </main>
    <footer>
      <p>BSIT Scheduler written by: Jason Savage, Hannah West, Scott Evans, and
      Kaleb Motilal.</p>
    </footer>
  </div>
);
  ReactDOM.render(reviewTemplate, appRoot);
}

const renderSubmitApp = () => {
  const submitTemplate = (
    <div>
    <header>
      <h1>BSIT Scheduler</h1>
    </header>
    <main className="submitMain">
      <div className="calendar">
        <div className="week">
          <div className="week-day monday">Monday</div>
            {app.mondayCourses.map((courses) => <div className="sixMoOClockClass" key={courses}>{courses}</div>)}
            <div className="hour mhour1">1600</div>
            <div className="hour mhour2">1700</div>
            <div className="hour mhour3">1800</div>
            <div className="hour mhour4">1900</div>
            <div className="hour mhour5">2000</div>
            <div className="hour mhour6">2100</div>
            <div className="hour mhour7">2200</div>
            <div className="hour mhour8">2300</div>
          <div className="weekS-day tuesday">Tuesday</div>
            {app.tuesdayCourses.map((courses) => <div className="sevTuOClockClass" key={courses}>{courses}</div>)}
            <div className="hour tuhour1">1600</div>
            <div className="hour tuhour2">1700</div>
            <div className="hour tuhour3">1800</div>
            <div className="hour tuhour4">1900</div>
            <div className="hour tuhour5">2000</div>
            <div className="hour tuhour6">2100</div>
            <div className="hour tuhour7">2200</div>
            <div className="hour tuhour8">2300</div>
          <div className="week-day wednesday">Wednesday</div>
            {app.wednesdayCourses.map((courses) => <div className="sixWOClockClass" key={courses}>{courses}</div>)}
            <div className="hour whour1">1600</div>
            <div className="hour whour2">1700</div>
            <div className="hour whour3">1800</div>
            <div className="hour whour4">1900</div>
            <div className="hour whour5">2000</div>
            <div className="hour whour6">2100</div>
            <div className="hour whour7">2200</div>
            <div className="hour whour8">2300</div>
          <div className="week-day thursday">Thursday</div>
            {app.thursdayCourses.map((courses) => <div className="sevThOClockClass" key={courses}>{courses}</div>)}
            <div className="hour thhour1">1600</div>
            <div className="hour thhour2">1700</div>
            <div className="hour thhour3">1800</div>
            <div className="hour thhour4">1900</div>
            <div className="hour thhour5">2000</div>
            <div className="hour thhour6">2100</div>
            <div className="hour thhour7">2200</div>
            <div className="hour thhour8">2300</div>
        </div>
      </div>
    </main>
    <footer>
      <p>BSIT Scheduler written by: Jason Savage, Hannah West, Scott Evans, and
      Kaleb Motilal.</p>
    </footer>
  </div>
);
  ReactDOM.render(submitTemplate, appRoot);
}

renderApp();
