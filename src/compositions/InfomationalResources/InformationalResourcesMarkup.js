import React from 'react'

import './InformationalResources.css'

const infoResourcesMarkup = () => {

  return (
    <React.Fragment>
    <section>
      <h1>Preparing for Disasters</h1>
      <p>
        Get disaster ready <strong>before</strong> an emergency strikes. Here's how to get started:
      </p>
      <ol className="tiles">
        <li>Get a Kit</li>
        <li>Make a Plan</li>
        <li>Be Informed</li>
        <li>Get Involved</li>
      </ol>
    </section>

    <section>
      <h2>Get a Kit</h2>
      <p>The emergency supplies in a basic disaster readiness kit can help you keep alive. Think first about essentials like food, water, shelter, and clean air. Also keep in mind how you will receive information during a disaster.</p>
      <aside>
        Protip: Aim for at least 3 days worth of supplies for your household. Consider 2 kits--one for the house and one portable if you need to leave.
      </aside>
      <h3>Emergency Kit Checklist</h3>
      <ul className="fancy-checklist">
        <li>
          <input type="checkbox" id="kit-water" />
          <label for="kit-water">Water</label>
        </li>
        <li>
          <input type="checkbox" id="kit-food"/>
          <label for="kit-food">Food</label>
        </li>
        <li>
          <input type="checkbox" id="kit-radio"/>
          <label for="kit-radio">Radio</label>
        </li>
        <li>
          <input type="checkbox" id="kit-flashlight"/>
          <label for="kit-flashlight">Flashlight</label>
        </li>
        <li>
          <input type="checkbox" id="kit-batteries"/>
          <label for="kit-batteries">Batteries</label>
        </li>
        <li>
          <input type="checkbox" id="kit-first-aid"/>
          <label for="kit-first-aid">First Aid Kit</label>
        </li>
        <li>
          <input type="checkbox" id="kit-whistle"/>
          <label for="kit-whistle">Whistle</label>
        </li>
        <li>
          <input type="checkbox" id="kit-filter"/>
          <label for="kit-filter">Air Filtering Mask</label>
        </li>
        <li>
          <input type="checkbox" id="kit-wipes"/>
          <label for="kit-wipes">Wet Wipes</label>
        </li>
        <li>
          <input type="checkbox" id="kit-wrench"/>
          <label for="kit-wrench">Wrench or Pliers</label>
        </li>
        <li>
          <input type="checkbox" id="kit-can-opener"/>
          <label for="kit-can-opener">Can Opener</label>
        </li>
        <li>
          <input type="checkbox" id="kit-plastic-sheet"/>
          <label for="kit-plastic-sheet">Plastic Sheeting</label>
        </li>
        <li>
          <input type="checkbox" id="kit-duct-tape"/>
          <label for="kit-duct-tape">Duct Tape</label>
        </li>
        <li>
          <input type="checkbox" id="kit-garbage"/>
          <label for="kit-garbage">Garbage Bags</label>
        </li>
        <li>
          <input type="checkbox" id="kit-other"/>
          <label for="kit-other">Other Needed Items Unique to Your Family</label>
        </li>
      </ul>
      <h3>Resources</h3>
      <ul>
        <li>
          <a href="https://www.ready.gov/build-a-kit" target="_blank">Build a Kit</a>
          <p>Ready.gov's emergency kit building resources gives a good overview of what to include in a disaster supply kit, plus several printable checklists.</p>
        </li>
        <li>
          <a href="http://www.conovernc.gov/vertical/Sites/%7BBAB0D760-E669-4331-9C22-9FB14833B6B9%7D/uploads/Visual-Checklist-Disaster-Supply-Kit.jpg" target="_blank">Visual Checklist for a Disaster Supply Kit</a>
          <p>An easy to use and printable emergency supply kit checklist with pictures for each item. Great for building an emergency kit if you like a more visual approach.</p>
        </li>
        <li>
          <a href="https://www.fema.gov/media-library-data/1389294951288-b25113d9aef2b877323d380720827f3b/R3_trifold_eng.pdf" target="_blank">FEMA Emergency Preparedness Brochure</a>
          <p>Useful essential disaster planning guide in short brochure format by FEMA. Contains all key preparedness information.</p>
        </li>
      </ul>
    </section>

    <section>
      <h2>Make a Plan</h2>
      <p>Know what to do in an emergency situation, especially if you're separated. A good plan can help prevent panic and keep you safe during chaotic situations.</p>
      <aside>
        Protip: Your family may be separated when a disaster strikes so everyone needs to know what to do, how to contact each other, and where to meet.
      </aside>
      <h3>Planning Checklist</h3>
      <ul className="fancy-checklist">
        <li>
          <input type="checkbox" id="plan-comms"/>
          <label for="plan-comms">Communication Plan</label>
        </li>
        <li>
          <input type="checkbox" id="plan-shelter"/>
          <label for="plan-shelter">Shelter Plan</label>
        </li>
        <li>
          <input type="checkbox" id="plan-evac"/>
          <label for="plan-evac">Evacuation Plan</label>
        </li>
        <li>
          <input type="checkbox" id="plan-practice"/>
          <label for="plan-practice">Practice Plan</label>
        </li>
      </ul>
      <h3>
        Resources
      </h3>
      <ul>
        <li>
          <a href="http://www.sanjoseca.gov/index.aspx?NID=1408" target="_blank">
            San Jose - Be Prepared
          </a>
          <p>San Jose Office of Emergency Management's 10 step disaster preparation guide. Includes several planning resources and tools to learn about local hazards.</p>
        </li>
        <li>
          <a href="https://www.ready.gov/make-a-plan" target="_blank">
            Ready.gov - Make a Plan
          </a>
          <p>
          Offical federally maintained Ready.gov guide to emergency planning. Lists steps and provides templates for emergency planning.
          </p>
        </li>
        <li>https://www.fema.gov/media-library/assets/documents/22187
          <a href="https://www.fema.gov/media-library/assets/documents/22187" target="_blank">
            FEMA - Family Emergency Plans
          </a>
          <p>
          Several of FEMA's Family Emergency Plan templates with different versions and languages available to download.
          </p>
        </li>
      </ul>
    </section>

    <section>
      <h2>Be Informed</h2>
      <p>Stay updated with the latest emergency alerts and warnings. Know the type of disasters that can affect your area so you can plan accordingly.</p>
      <h3>
        Resources
      </h3>
      <ul>
        <li>
          <a href="http://www.sanjoseca.gov/index.aspx?NID=5760#" target="_blank">
            San Jose - Be Informed
          </a>
          <p>
          San Jose Office of Emergency Management's guide to staying informed, including key emergency contact information and useful apps.
          </p>
        </li>
        <li>
          <a href="https://www.sccgov.org/sites/alertscc/Pages/home.aspx" target="_blank">
            AlertSCC
          </a>
          <p>
          AlertSCC is a free, easy, and confidential way for anyone who lives or works in Santa Clara County to get emergency warnings sent directly to their cell phone, mobile device, email, or landline.
          </p>
        </li>
        <li>
          <a href="https://www.ready.gov/alerts" target="_blank">
            Emergency Alerts
          </a>
          <p>
          Ready.gov's page describing different warning alerts you can receive and the types of devices that receive the alerts, including radio, broadcast, and wireless alert systems.
          </p>
        </li>
        <li>
          <a href="https://www.google.org/crisismap/weather_and_events" target="_blank">
            Google Crisis Map
          </a>
          <p>
          Google's Crisis Map shows emergencies, weather, hazards, and alerts overlaid on a map of the US. Simple, but easy to use.
          </p>
        </li>
        <li>
          <a href="https://www.data.gov/disasters/apps-tools/" target="_blank">
            Data.gov - Apps & Tools
          </a>
          <p>
          Data.gov's page features numerous apps and tools shared at the White House Innovation for Disaster Response and Recovery Demo Day to help address the challenges that severe weather and other disasters can pose to our communities.
          </p>
        </li>
        <li>
          <a href="https://www.nws.noaa.gov/nwr/" target="_blank">
            NOAA Weather Radio All Hazards
          </a>
          <p>
          NOAA Weather Radio broadcasts official Weather Service warnings, watches, forecasts and other hazard information 24 hours a day, 7 days a week. Lists the frequencies to tune into.
          </p>
        </li>
        <li>
          <a href="https://www.fema.gov/disaster-recovery-centers" target="_blank">
            FEMA - Disaster Recovery Centers
          </a>
          <p>
          During declared disasters, FEMA can open a Disaster Recovery Center, which is a readily accessible facility or mobile office where survivors may go for information about FEMA programs or other disaster assistance programs, and to ask questions. This page provides information and lets you search for a Disaster Recovery Center.
          </p>
        </li>
      </ul>
    </section>

    <section>
      <h2>Get Involved</h2>
      <p>Be proactive in helping your community prepare for disaters. You can help make your community safer and stronger.</p>
      <h3>
        Resources
      </h3>
      <ul>
        <li>
          <a href="http://www.sanjoseca.gov/index.aspx?NID=6001" target="_blank">
            San Jose - Be Involved
          </a>
          <p>
          The City of San Jose's Office of Emergency Management page on getting involved in community emergency preparedness programs. You can volunteer directly with the department, with neighborhood watch programs, take CERT (Community Emergency Response Team) training, and find other volunteer opportunities.
          </p>
        </li>
        <li>
          <a href="http://evc-santaclaracounty.org/other-disaster-volunteer-resources/" target="_blank">
            Santa Clara County Emergency Volunteer Center - Disaster Volunteer Resources
          </a>
          <p>
          EVC is a disaster preparedness and response program designed to increase the capacity of the community to respond to and recover from disasters through the effective coordination of spontaneous volunteer resources. They maintain an excellent resources page listing local volunteer organizations and opportunities.
          </p>
        </li>
        <li>
          <a href="https://www.redcross.org/local/california/northern-california-coastal/volunteer.html" target="_blank">
            American Red Cross Northern CA Coastal Region - Volunteer
          </a>
          <p>
          The Red Cross is likely the most well known nonprofit organization providing disaster response and other humanitarian assistance. They have numerous volunteer training programs and opportunities related to disaster response adn emergency preparedness. The Silicon Valley chapter is located in San Jose.
          </p>
        </li>
        <li>
          <a href="https://www.ready.gov/volunteer" target="_blank">
            Ready.gov - Volunteer
          </a>
          <p>
          The federal Ready.gov volunteer page contains extensive listings of volunteer organizations and opportunities.
          </p>
        </li>
        <li>
          <a href="https://www.redcross.org/local/california/northern-california-coastal/volunteer.html" target="_blank">
            Americorps Pathfinder Search Tool
          </a>
          <p>
          For more involved or longer term commitments, Americorps lists several volunteer opportunities in the field of disaster preparedness and recovery. This page lets you search and filter by state and opportunity type (select California under State and Disaster Preparedness & Recovery under Service Area). Because Americorps is a well supported federal program, accepted volunteers are eligible for monetary assistance, education awards, and other benefits.
          </p>
        </li>
      </ul>
    </section>
    </React.Fragment>
  )

};

export {
  infoResourcesMarkup
};
