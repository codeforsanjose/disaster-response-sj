import React, { Component } from 'react'

import './FEMAChecklist.css'

class FEMAChecklist extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {

        }
    }

    render() {

        return (
            <div className='FEMAChecklist'>
                <h1>Preparing for Emergencies</h1>
                <p>
                  Get disaster ready starts <strong>before</strong> an emergency strikes. Here's some helpful steps to get started.
                </p>
                <ol>
                  <li>Get a Kit</li>
                  <li>Make a Plan</li>
                  <li>Be Informed</li>
                  <li>Get Involved</li>
                </ol>

                <section>
                  <h2>Get a Kit</h2>
                  <p>The emergency supplies in a basic disaster readiness kit can help you keep alive. Think first about essentials like food, water, shelter, and clean air.</p>
                  <aside>
                    Protip: Aim for at least 3 days worth of supplies for your household. Consider 2 kits--one for the house and one portable if you need to leave.
                  </aside>
                  <ul>
                    <li>Water</li>
                    <li>Food</li>
                    <li>Radio</li>
                    <li>Flashlight</li>
                    <li>Batteries</li>
                    <li>First Aid Kit</li>
                    <li>Whistle</li>
                    <li>Filter Mask</li>
                    <li>Wet Wipes</li>
                    <li>Wrench or Pliers</li>
                    <li>Can Opener</li>
                    <li>Plastic Sheeting</li>
                    <li>Duct Tape</li>
                    <li>Garbage Bags</li>
                    <li>Unique Family Needs</li>
                  </ul>
                  <h3>Resources</h3>
                  <ul>
                    <li>https://www.ready.gov/build-a-kit</li>
                    <li>http://www.conovernc.gov/vertical/Sites/%7BBAB0D760-E669-4331-9C22-9FB14833B6B9%7D/uploads/Visual-Checklist-Disaster-Supply-Kit.jpg</li>
                    <li>https://www.fema.gov/media-library-data/1389294951288-b25113d9aef2b877323d380720827f3b/R3_trifold_eng.pdf</li>
                  </ul>
                </section>

                <section>
                  <h2>Make a Plan</h2>
                  <p>Know what to do in an emergency situation, especially if you're separated. A good plan can help prevent panic and keep you safe during chaotic situations. </p>
                  <aside>
                    Protip: Your family may be separated when a disaster strikes so everyone needs to know what to do, how to contact each other, and where to meet.
                  </aside>
                  <ul>
                    <li>Communication Plan</li>
                    <li>Shelter Plan</li>
                    <li>Evacuation Plan</li>
                    <li>Practice Your Plans</li>
                  </ul>
                  <h3>
                    Resources
                  </h3>
                  <ul>
                    <li>https://www.ready.gov/make-a-plan</li>
                    <li>https://www.fema.gov/media-library/assets/documents/22187</li>
                  </ul>
                </section>

                <section>
                  <h2>Be Informed</h2>
                  <p>Stay updated with the latest emergency alerts and warnings. Know the type of disasters that can affect your area so you can plan accordingly.</p>
                  <h3>
                    Resources
                  </h3>
                  <ul>
                    <li>https://www.ready.gov/alerts</li>
                    <li>https://www.sccgov.org/sites/alertscc/Pages/home.aspx</li>
                    <li>https://www.nws.noaa.gov/nwr/</li>
                  </ul>
                </section>

                <section>
                  <h2>Get Involved</h2>
                  <p>Be proactive in helping your community prepare for disaters. You can help make your community safer and stronger.</p>
                  <h3>
                    Resources
                  </h3>
                  <ul>
                    <li>http://www.sanjoseca.gov/index.aspx?NID=1405</li>
                    <li>https://www.ready.gov/volunteer</li>
                    <li>https://www.redcross.org/local/california/northern-california-coastal/volunteer.html</li>
                  </ul>
                </section>

            </div>
        )
    }
}

export default FEMAChecklist
