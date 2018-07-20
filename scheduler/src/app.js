console.log('App.js is running!');

const appRoot = document.getElementById('app');

const app = {
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

let it310Selected = false;
let it320Selected = false;
let it340Selected = false;
let it420Selected = false;
let engl362Selected = false;
let math365Selected = false;
let visability = true;

const toggle420Visibility = () => {
  if (app.courses.length == 0) {
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
  app.tuition = app.tuition + (498.50 * 3);
  app.mondayCourses.push('IT310');
  app.courses.push('IT310');
  app.it310btnText = 'Remove';
  renderApp();
}

const removeIT310 = () => {
  it310Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - (498.50 * 3);
  const result = app.mondayCourses.filter(course => course != 'IT310');
  app.mondayCourses = result;
  const cresult = app.courses.filter(course => course != 'IT310');
  app.courses = cresult;
  if (app.courses.length == 0) {
    visability = true;
  }
  app.it310btnText = 'Add';
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
  app.tuition = app.tuition + (498.50 * 3);
  app.thursdayCourses.push('IT320');
  app.courses.push('IT320');
  app.it320btnText = 'Remove';
  renderApp();
}

const removeIT320 = () => {
  it320Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - (498.50 * 3);
  const result = app.thursdayCourses.filter(course => course != 'IT320');
  app.thursdayCourses = result;
  const cresult = app.courses.filter(course => course != 'IT320');
  app.courses = cresult;
  if (app.courses.length == 0) {
    visability = true;
  }
  app.it320btnText = 'Add';
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
  app.tuition = app.tuition + (498.50 * 3);
  app.wednesdayCourses.push('IT340');
  app.courses.push('IT340');
  app.it340btnText = 'Remove';
  renderApp();
}

const removeIT340 = () => {
  it340Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - (498.50 * 3);
  const result = app.wednesdayCourses.filter(course => course != 'IT340');
  app.wednesdayCourses = result;
  const cresult = app.courses.filter(course => course != 'IT340');
  app.courses = cresult;
  if (app.courses.length == 0) {
    visability = true;
  }
  app.it340btnText = 'Add';
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
  app.tuition = app.tuition + (498.50 * 3);
  app.it420btnText = 'Remove';
  renderApp();
}

const removeIT420 = () => {
  it420Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - (498.50 * 3);
  app.it420btnText = 'Add';
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
  app.tuition = app.tuition + (498.50 * 3);
  app.online = 'ENGL362';
  app.courses.push('ENGL362');
  app.engl362btnText = 'Remove';
  renderApp();
}

const removeEngl362 = () => {
  engl362Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - (498.50 * 3);
  app.online = '';
  const cresult = app.courses.filter(course => course != 'ENGL362');
  app.courses = cresult;
  app.engl362btnText = 'Add';
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
  app.tuition = app.tuition + (498.50 * 3);
  app.tuesdayCourses.push('MATH365');
  app.courses.push('MATH365');
  app.math365btnText = 'Remove';
  renderApp();
}

const removeMath365 = () => {
  math365Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - (498.50 * 3);
  const result = app.tuesdayCourses.filter(course => course != 'MATH365');
  app.tuesdayCourses = result;
  const cresult = app.courses.filter(course => course != 'MATH365');
  app.courses = cresult;
  app.math365btnText = 'Add';
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
  app.tuition = 0.00;
  app.online = '';
  visability = true;
  renderApp();
}

const goBack = () => {
  app.creditHours = app.creditHours;

  renderApp();
}

const review = () => {
  renderReviewApp();
}

const submit = () => {
  renderSubmitApp();
  alert('You have successfully enrolled.');
}

const renderApp = () => {
  const template = (
    <div>
    <header>
        <img src="assets/images/header.jpg" />
      <h1>BSIT Scheduler</h1>
    </header>
    <main className="main">
      <div className="calendar">
        <div className="week">
          <div className="week-day monday">Monday</div>
            {app.mondayCourses.map((courses) => <div className="sixMoOClockClass" key={courses}>{courses}</div>)}
            <div className="hour mhour1">4:00p</div>
            <div className="hour mhour2">5:00p</div>
            <div className="hour mhour3">6:00p</div>
            <div className="hour mhour4">7:00p</div>
            <div className="hour mhour5">8:00p</div>
            <div className="hour mhour6">9:00p</div>
            <div className="hour mhour7">10:00p</div>
            <div className="hour mhour8">11:00p</div>
          <div className="week-day tuesday">Tuesday</div>
            {app.tuesdayCourses.map((courses) => <div className="sevTuOClockClass" key={courses}>{courses}</div>)}
            <div className="hour tuhour1">4:00p</div>
            <div className="hour tuhour2">5:00p</div>
            <div className="hour tuhour3">6:00p</div>
            <div className="hour tuhour4">7:00p</div>
            <div className="hour tuhour5">8:00p</div>
            <div className="hour tuhour6">9:00p</div>
            <div className="hour tuhour7">10:00p</div>
            <div className="hour tuhour8">11:00p</div>
          <div className="week-day wednesday">Wednesday</div>
            {app.wednesdayCourses.map((courses) => <div className="sixWOClockClass" key={courses}>{courses}</div>)}
            <div className="hour whour1">4:00p</div>
            <div className="hour whour2">5:00p</div>
            <div className="hour whour3">6:00p</div>
            <div className="hour whour4">7:00p</div>
            <div className="hour whour5">8:00p</div>
            <div className="hour whour6">9:00p</div>
            <div className="hour whour7">10:00p</div>
            <div className="hour whour8">11:00p</div>
          <div className="week-day thursday">Thursday</div>
            {app.thursdayCourses.map((courses) => <div className="sevThOClockClass" key={courses}>{courses}</div>)}
            <div className="hour thhour1">4:00p</div>
            <div className="hour thhour2">5:00p</div>
            <div className="hour thhour3">6:00p</div>
            <div className="hour thhour4">7:00p</div>
            <div className="hour thhour5">8:00p</div>
            <div className="hour thhour6">9:00p</div>
            <div className="hour thhour7">10:00p</div>
            <div className="hour thhour8">11:00p</div>
        </div>
        <p id="online">ONLINE: {app.online}</p>
      </div>
      <div className="summary">
        <div className="coursesumm">
          <h2>Summary</h2>
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
          <p>Course Cost: ${app.tuition.toFixed(2)}</p>
        </div>
      </div>
      <div className="courses">
        <div className="column">
          <div className="card">
            <h4>IT 310 -- Computer Organization Platforms & Technologies</h4>
            <p>8/20/2018 - 12/14/2018 || Monday 6:00p - 9:00p || BEST 230</p>
            <a href="https://it.eecs.ku.edu/it310" target = "_blank"
            title="IT 310">Course Description</a>
            <ul>
              <li>Machine-level representation of data, digital logic and digital
              systems, computer architecture and organization, computing
              infrastructure, introduction to multiprocessing systems, firmware,
              hardware and software integration , introduction to intersystems
              communications, enterprise deployment management introduction to
              virtual machine emulation, platform technologies.</li>
              <li>Prerequisite: Upper-level IT eligibility.</li>
            </ul>
            <button id="it310" onClick={it310sel}>{app.it310btnText}</button>
          </div>
          <div className="card">
            <h4>IT 320 -- Systems and Networking Administration</h4>
            <p>8/20/2018 - 12/14/2018 || Thursday 7:10p - 10:00p || BEST 230</p>
            <a href="https://it.eecs.ku.edu/it320" target = "_blank"
            title="IT 320">Course Description</a>
            <ul>
              <li>This course introduces operating systems and network
                administration and presents topics related to selection,
                installation, configuration, and maintenance of operating
                systems and computer networks. Topics to be covered include:
                Unix and Windows operating systems installation, configuration,
                and maintenance, server administration and management, client
                and server services, user and group management and support,
                software systems installation and configuration,
                content management and deployment, security management,
                network administration, backup management and disaster
                recovery, resource management, automation management,
                operating systems and Web domain management,
                operating systems and application version control management.
                A laboratory component will provide hands-on experience with
                system and network administration.</li>
              <li>Prerequisite: Upper-level IT eligibility. Corequisite: IT 310.
              </li>
            </ul>
            <button id="it320"  onClick={it320sel}>{app.it320btnText}</button>
          </div>
          <div className="card">
            <h4>IT 340 -- Computer and Information Security</h4>
            <p>8/20/2018 - 12/14/2018 || Wednesday 6:00p - 9:00p || BEST 130</p>
            <a href="https://it.eecs.ku.edu/it340" target = "_blank"
            title="IT 340">Course Description</a>
            <ul>
              <li>Fundamentals of computer security, security mechanisms,
                information states, security attacks, threat analysis models,
                vulnerability analysis models, introduction to cryptography,
                authentication, intrusion detection, intrusion prevention
                (firewalls), operating systems security, database security,
                software security, host hardening, incident and disaster
                response.</li>
              <li>Upper-level IT eligibility</li>
            </ul>
            <button id="it340"  onClick={it340sel}>{app.it340btnText}</button>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <h4>ENGL 362 -- Foundations of Technical Writing</h4>
            <p>8/20/2018 - 12/14/2018 || ONLINE </p>
            <a href="#">Course Description</a>
            <ul>
              <li>Something about the course</li>
              <li>Something else about the course</li>
              <li>Third something about the course</li>
            </ul>
            <button id="engl362online"  onClick={engl362sel}>{app.engl362btnText}</button>
          </div>
          <div className="card">
            <h4>MATH 365 -- Elementary Statistics</h4>
            <p>8/20/2018 - 12/14/2018 || Tuesday 7:10p - 10:00p || REG 265</p>
            <a href="#">Course Description</a>
            <ul>
              <li>Introduces students to the principles of technical
                communication. Students learn to organize, develop, write,
                and revise various technical documents (e.g., letters, manuals,
                  presentations, proposals, reports, resumes, websites) often
                  needed in business, engineering and scientific settings.
                  Includes an introduction to technical-writing software.
                  This course fulfills the prerequisite for English 562 and
                  English 564. Prerequisite: Prior completion of the KU Core
                  Written Communication requirement.</li>
            </ul>
            <button id="math365"  onClick={math365sel}>{app.math365btnText}</button>
          </div>
          {visability && (
          <div className="card">
            <h4>IT 420 -- Operating Systems</h4>
            <p>8/20/2018 - 12/14/2018 || Thursday 7:10p - 10:00p || BEST 310</p>
            <a href="https://it.eecs.ku.edu/it420" target = "_blank"
            title="IT 420">Course Description</a>
            <ul>
              <li>This course introduces operating systems principles and
                associated key concepts. Topics to be discussed include:
                processes and threads, concurrency, scheduling and dispatch,
                memory management, processor management, device management,
                security and protection, file system, disk scheduling,
                real-time and embedded systems, fault tolerance, scripting,
                and an introduction to virtualization.</li>
                <li>Prerequisite: MATH 365, IT 320, and IT 342</li>
            </ul>
            <button  onClick={it420sel}>Add</button>
          </div>
        )}
        </div>
      </div>
      <div className="review">
        <button onClick={review} id="review">Review</button><button onClick={clearAll}>Clear</button>
      </div>
    </main>
    <footer>
      <p>
        <a href="https://ku.edu" target="_blank">
          <img src="assets/images/jayhawk.jpg" />
        </a>
      </p>
      <h3>Helpful Links</h3>
      <p>
        <a href="https://kuisc.com/" target="_blank">Jayhackers</a>
        <a href="https://edwardscampus.ku.edu/overview-bachelors-information-technology" target="_blank">BSIT</a>
        <a href="http://employment.ku.edu/" target="_blank">Jobs</a>
      </p>
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
            <div className="hour mhour1">4:00p</div>
            <div className="hour mhour2">5:00p</div>
            <div className="hour mhour3">6:00p</div>
            <div className="hour mhour4">7:00p</div>
            <div className="hour mhour5">8:00p</div>
            <div className="hour mhour6">9:00p</div>
            <div className="hour mhour7">10:00p</div>
            <div className="hour mhour8">11:00p</div>
          <div className="week-day tuesday">Tuesday</div>
            {app.tuesdayCourses.map((courses) => <div className="sevTuOClockClass" key={courses}>{courses}</div>)}
            <div className="hour tuhour1">4:00p</div>
            <div className="hour tuhour2">5:00p</div>
            <div className="hour tuhour3">6:00p</div>
            <div className="hour tuhour4">7:00p</div>
            <div className="hour tuhour5">8:00p</div>
            <div className="hour tuhour6">9:00p</div>
            <div className="hour tuhour7">10:00p</div>
            <div className="hour tuhour8">11:00p</div>
          <div className="week-day wednesday">Wednesday</div>
            {app.wednesdayCourses.map((courses) => <div className="sixWOClockClass" key={courses}>{courses}</div>)}
            <div className="hour whour1">4:00p</div>
            <div className="hour whour2">5:00p</div>
            <div className="hour whour3">6:00p</div>
            <div className="hour whour4">7:00p</div>
            <div className="hour whour5">8:00p</div>
            <div className="hour whour6">9:00p</div>
            <div className="hour whour7">10:00p</div>
            <div className="hour whour8">11:00p</div>
          <div className="week-day thursday">Thursday</div>
            {app.thursdayCourses.map((courses) => <div className="sevThOClockClass" key={courses}>{courses}</div>)}
            <div className="hour thhour1">4:00p</div>
            <div className="hour thhour2">5:00p</div>
            <div className="hour thhour3">6:00p</div>
            <div className="hour thhour4">7:00p</div>
            <div className="hour thhour5">8:00p</div>
            <div className="hour thhour6">9:00p</div>
            <div className="hour thhour7">10:00p</div>
            <div className="hour thhour8">11:00p</div>
        </div>
        <p id="online">ONLINE: {app.online}</p>
      </div>
      <div className="summary">
        <div className="coursesumm">
          <h2>Summary</h2>
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
          <p>Course Cost: ${app.tuition.toFixed(2)}</p>
        </div>
      </div>
      <div className="review">
        <button onClick={submit} id="review">Enroll</button><button onClick={clearAll}>Go Back</button>
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
            <div className="hour mhour1">4:00p</div>
            <div className="hour mhour2">5:00p</div>
            <div className="hour mhour3">6:00p</div>
            <div className="hour mhour4">7:00p</div>
            <div className="hour mhour5">8:00p</div>
            <div className="hour mhour6">9:00p</div>
            <div className="hour mhour7">10:00p</div>
            <div className="hour mhour8">11:00p</div>
          <div className="week-day tuesday">Tuesday</div>
            {app.tuesdayCourses.map((courses) => <div className="sevTuOClockClass" key={courses}>{courses}</div>)}
            <div className="hour tuhour1">4:00p</div>
            <div className="hour tuhour2">5:00p</div>
            <div className="hour tuhour3">6:00p</div>
            <div className="hour tuhour4">7:00p</div>
            <div className="hour tuhour5">8:00p</div>
            <div className="hour tuhour6">9:00p</div>
            <div className="hour tuhour7">10:00p</div>
            <div className="hour tuhour8">11:00p</div>
          <div className="week-day wednesday">Wednesday</div>
            {app.wednesdayCourses.map((courses) => <div className="sixWOClockClass" key={courses}>{courses}</div>)}
            <div className="hour whour1">4:00p</div>
            <div className="hour whour2">5:00p</div>
            <div className="hour whour3">6:00p</div>
            <div className="hour whour4">7:00p</div>
            <div className="hour whour5">8:00p</div>
            <div className="hour whour6">9:00p</div>
            <div className="hour whour7">10:00p</div>
            <div className="hour whour8">11:00p</div>
          <div className="week-day thursday">Thursday</div>
            {app.thursdayCourses.map((courses) => <div className="sevThOClockClass" key={courses}>{courses}</div>)}
            <div className="hour thhour1">4:00p</div>
            <div className="hour thhour2">5:00p</div>
            <div className="hour thhour3">6:00p</div>
            <div className="hour thhour4">7:00p</div>
            <div className="hour thhour5">8:00p</div>
            <div className="hour thhour6">9:00p</div>
            <div className="hour thhour7">10:00p</div>
            <div className="hour thhour8">11:00p</div>
        </div>
        <p id="online">ONLINE: {app.online}</p>
      </div>
      <div className="summary">
        <div className="coursesumm">
          <h2>Summary</h2>
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
          <p>Course Cost: ${app.tuition.toFixed(2)}</p>
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
