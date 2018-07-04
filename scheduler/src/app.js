console.log('App.js is running!');

const appRoot = document.getElementById('app');

const app = {
  creditHours: 0,
  tuition: 0,
  courses: '',
  online: ''
};

let it310Selected = false;
let it320Selected = false;
let it340Selected = false;
let it420Selected = false;
let engl362Selected = false;
let math365Selected = false;
let disabled420 = false;

const it310sel = () => {
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
  disable420();
  renderApp();
}

const removeIT310 = () => {
  it310Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 800;
  renderApp();
}

const it320sel = () => {
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
  disable420();
  renderApp();
}

const removeIT320 = () => {
  it320Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 800;
  renderApp();
}

const it340sel = () => {
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
  disable420();
  renderApp();
}

const removeIT340 = () => {
  it340Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 800;
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

const disable420 = () => {
  disabled420 = true;
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
  app.online = 'ENGL 362';
  renderApp();
}

const removeEngl362 = () => {
  engl362Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 800;
  app.online = '';
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
  renderApp();
}

const removeMath365 = () => {
  math365Selected = false;
  app.creditHours = app.creditHours - 3;
  app.tuition = app.tuition - 800;
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
  renderApp();
}

const renderApp = () => {
  const template = (
    <div>
    <header>
      <h1>BSIT Scheduler</h1>
    </header>
    <main>
      <div className="calendar">
        <div className="week">
          <div className="week-day daytime">Day/Time</div>
            <div className="hour dthour1">1600</div>
            <div className="hour dthour2">1700</div>
            <div className="hour dthour3">1800</div>
            <div className="hour dthour4">1900</div>
            <div className="hour dthour5">2000</div>
            <div className="hour dthour6">2100</div>
            <div className="hour dthour7">2200</div>
            <div className="hour dthour8">2300</div>
          <div className="week-day monday">Monday</div>
            <div className="hour mhour1"></div>
            <div className="hour mhour2"></div>
            <div className="hour mhour3"></div>
            <div className="hour mhour4"></div>
            <div className="hour mhour5"></div>
            <div className="hour mhour6"></div>
            <div className="hour mhour7"></div>
            <div className="hour mhour8"></div>
          <div className="week-day tuesday">Tuesday</div>
            <div className="hour tuhour1"></div>
            <div className="hour tuhour2"></div>
            <div className="hour tuhour3"></div>
            <div className="hour tuhour4"></div>
            <div className="hour tuhour5"></div>
            <div className="hour tuhour6"></div>
            <div className="hour tuhour7"></div>
            <div className="hour tuhour8"></div>
          <div className="week-day wednesday">Wednesday</div>
            <div className="hour whour1"></div>
            <div className="hour whour2"></div>
            <div className="hour whour3"></div>
            <div className="hour whour4"></div>
            <div className="hour whour5"></div>
            <div className="hour whour6"></div>
            <div className="hour whour7"></div>
            <div className="hour whour8"></div>
          <div className="week-day thursday">Thursday</div>
            <div className="hour thhour1"></div>
            <div className="hour thhour2"></div>
            <div className="hour thhour3"></div>
            <div className="hour thhour4"></div>
            <div className="hour thhour5"></div>
            <div className="hour thhour6"></div>
            <div className="hour thhour7"></div>
            <div className="hour thhour8"></div>
        </div>
      </div>
      <div className="summary">
        <div className="coursesumm">
          <h2>Review</h2>
          <p>ONLINE: {app.online}</p>
          <p>Credit Hours: {app.creditHours}</p>
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
            <a href="#">Course Description</a>>
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
          <div className="card">
            <h4>IT 420 -- Operating Systems</h4>
            <p>8/20/2018 - 12/14/2018</p>
            <a href="#">Course Description</a>
            <ul>
              <li>Something about the course</li>
              <li>Something else about the course</li>
              <li>Third something about the course</li>
            </ul>
            <button disabled={disabled420} className="cardbtn" onClick={it420sel}>Thursday 1910 - 2200<br />BEST 310</button>
          </div>
        </div>
      </div>
      <div className="review">
        <button id="review">Review</button><button onClick={clearAll}>Clear</button>
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

renderApp();
