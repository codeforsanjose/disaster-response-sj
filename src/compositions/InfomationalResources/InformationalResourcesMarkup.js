import React from 'react'

import './InformationalResources.css'

const infoResourcesMarkup = () => {

  return (
    <section>
      <h1>Preparing for Emergencies</h1>
      <p>
        Get disaster ready <strong>before</strong> an emergency strikes. Here's how to get started:
      </p>
      <ol>
        <li><h2>Get a Kit</h2></li>
        <li><h2>Make a Plan</h2></li>
        <li><h2>Be Informed</h2></li>
        <li><h2>Get Involved</h2></li>
      </ol>
    </section>

    <section>
      <h2>Get a Kit</h2>
      <p>The emergency supplies in a basic disaster readiness kit can help you keep alive. Think first about essentials like food, water, shelter, and clean air.</p>
      <aside>
        Protip: Aim for at least 3 days worth of supplies for your household. Consider 2 kits--one for the house and one portable if you need to leave.
      </aside>
      <h3>Emergency Kit Checklist</h3>
      <ul>
        <li>
          <input type="checkbox" id="kit-water">
          <label for="kit-water">Water</label>
        </li>
        <li>
          <input type="checkbox" id="kit-food">
          <label for="kit-food">Food</label>
        </li>
        <li>
          <input type="checkbox" id="kit-radio">
          <label for="kit-radio">Radio</label>
        </li>
        <li>
          <input type="checkbox" id="kit-flashlight">
          <label for="kit-flashlight">Flashlight</label>
        </li>
        <li>
          <input type="checkbox" id="kit-batteries">
          <label for="kit-batteries">Batteries</label>
        </li>
        <li>
          <input type="checkbox" id="kit-first-aid">
          <label for="kit-first-aid">First Aid Kit</label>
        </li>
        <li>
          <input type="checkbox" id="kit-whistle">
          <label for="kit-whistle">Whistle</label>
        </li>
        <li>
          <input type="checkbox" id="kit-filter">
          <label for="kit-filter">Air Filtering Mask</label>
        </li>
        <li>
          <input type="checkbox" id="kit-wipes">
          <label for="kit-wipes">Wet Wipes</label>
        </li>
        <li>
          <input type="checkbox" id="kit-wrench">
          <label for="kit-wrench">Wrench or Pliers</label>
        </li>
        <li>
          <input type="checkbox" id="kit-can-opener">
          <label for="kit-can-opener">Can Opener</label>
        </li>
        <li>
          <input type="checkbox" id="kit-plastic-sheet">
          <label for="kit-plastic-sheet">Plastic Sheeting</label>
        </li>
        <li>
          <input type="checkbox" id="kit-duct-tape">
          <label for="kit-duct-tape">Duct Tape</label>
        </li>
        <li>
          <input type="checkbox" id="kit-garbage">
          <label for="kit-garbage">Garbage Bags</label>
        </li>
        <li>
          <input type="checkbox" id="kit-other">
          <label for="kit-other">Other Needed Items Unique to Your Family</label>
        </li>
      </ul>
      <h3>Resources</h3>
      <ul>
        <li>
          <a href="https://www.ready.gov/build-a-kit" target="_blank">Build a Kit</a> - Ready.gov's emergency kit building resources
        </li>
        <li>
          <a href="http://www.conovernc.gov/vertical/Sites/%7BBAB0D760-E669-4331-9C22-9FB14833B6B9%7D/uploads/Visual-Checklist-Disaster-Supply-Kit.jpg" target="_blank">Visual Checklist for a Disaster Supply Kit</a> - Emergency supply kit checklist with pictures for each item
        </li>
        <li>
          <a href="https://www.fema.gov/media-library-data/1389294951288-b25113d9aef2b877323d380720827f3b/R3_trifold_eng.pdf" target="_blank">FEMA Emergency Preparedness Brochure</a> - Useful essential disaster planning guide in short brochure format by FEMA
        </li>
      </ul>
    </section>

    <section>
      <h2>Make a Plan</h2>
      <p>Know what to do in an emergency situation, especially if you're separated. A good plan can help prevent panic and keep you safe during chaotic situations.</p>
      <aside>
        Protip: Your family may be separated when a disaster strikes so everyone needs to know what to do, how to contact each other, and where to meet.
      </aside>
      <h3>Plans to Make</h3>
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
        <li>http://www.sanjoseca.gov/index.aspx?NID=5760#</li>
        <li>https://www.sccgov.org/sites/alertscc/Pages/home.aspx</li>
        <li>https://www.ready.gov/alerts</li>
        <li>https://www.google.org/crisismap/weather_and_events</li>
        <li>https://www.data.gov/disasters/apps-tools/</li>
        <li>https://www.nws.noaa.gov/nwr/</li>
        <li>https://www.fema.gov/disaster-recovery-centers</li>
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
  )

};

export {
  infoResourcesMarkup
};
