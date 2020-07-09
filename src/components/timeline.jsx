import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Research and Development Intern at Propetro Services <span>2019</span></h2>
                        <p>•	Developed a workflow management web application using JS, React, Angular, HTML, CSS, Node JS, MongoDB, and Azure. This application tracks the company's assets as they flow from one department to the other for maintenance.
•	Developed a VR compatible, interactive web application that contains 3D design assets, intended towards real-time model visualization and simulation. Used JavaScript, NodeJS, REST API, three.js library, Power BI and deployed in Azure Cloud.
•	Built a Machine Learning prediction model on the equipment failure data to predict the life of different parts. It is estimated to save 0.07 million dollars per unit on maintenance.
</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer, Techie Place <span>2017-2018</span></h2>
                        <p>•	Developed various functionalities and maintained the IT infrastructure of an online distance education portal called U Learn.
•	Developed and deployed chat application functionality using JS, Node JS, Socket IO.
•	Troubleshoot malfunctions with systems and programs to pinpoint the root cause of issues and restore them using Change, Service Request, and Incident resolution as per ITIL norms.
•	Developed distributed systems functionalities in Chat Rooms. 
</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Senior Analyst, HCL Technologies / Deutsche Bank  <span>2015-2017</span></h2>
                        <p>•	Created, maintained, and supported the payment processing database infrastructure for the client Deutsche Bank.
•	Used technologies like SQL, Oracle, Python, Unix/Linux, Tableau, Azure Cloud and Service Now.
•	Provided L1 and L2 database support for the US, EMEA and APAC regions with Incident, Service Request and Change resolution for both production and test database.
•	Worked on advanced database concepts like Disaster Recovery, Backup, and Storage.
•	Received the title of CommNet Jewel two times in a row for best performance in any month.
•	Linux server administration and support.
•	Hands-on design and implementation experience in high-volume, high-performance real-time banking systems.
</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
