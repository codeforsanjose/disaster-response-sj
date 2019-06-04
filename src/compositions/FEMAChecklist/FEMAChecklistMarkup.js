import React from 'react'

import './FEMAChecklist.css'

const FEMAChecklistMarkup = () => {

  return (
    <React.Fragment>
    <section>
      <h1>Recovering: What to Do After a Disaster</h1>
      <p>
        Recovering from a major disaster is usually a gradual process. Safety is a primary issue, as are mental and physical well-being. If assistance is available, knowing how to access it makes the process faster and less stressful. Here's general advice on steps to take after disaster strikes in order to begin getting your home, your community, and your life back to normal.
      </p>
    </section>

    <section>
      <h2>Disaster Survivor's Checklist</h2>
      <a name="kit"></a>
      <p>After a disaster, you will need to put your life back together. You may need to evaluate damage, assign responsibilities, contact insurance, and apply for assistance if available.</p>
      <aside>
        Based on the <a href="https://www.fema.gov/media-library-data/1505143234654-0094f4d1a798c1d5175d7e11a114e77a/disaster-survivors-checklist.pdf" target="_blank" rel="noopener noreferrer">FEMA Disaster Survivor's Checklist</a> and other resources.
      </aside>
      <h3>After Emergency Checklist</h3>
      <ul className="fancy-checklist">
        <li>
          <input type="checkbox" id="stay-safe" />
          <label for="stay-safe">
            <h4>Stay Safe</h4>
            <p>You can't rebuild if you get hurt. Make sure you stay safe and avoid danger immediately after the disaster and during the recovery process. If the area is still dangerous, it is unwise to return.</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="kit-water" />
          <label for="kit-water">
            <h4>Check Your Home</h4>
            <p>See what's working and what's not. Check your home against your inventory records and track what needs fixing or replacing.</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="kit-water" />
          <label for="kit-water">
            <h4>Call Insurance</h4>
            <p>At least 1 gallon per person, per day for drinking and sanitation</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="kit-food"/>
          <label for="kit-food">
            <h4>Register with FEMA</h4>
            <p>Non-perishable like canned, dry, or powdered goods</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="kit-radio"/>
          <label for="kit-radio">
            <h4>Schedule an Inspection</h4>
            <p>To get alerts and information when networks are down</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="kit-flashlight"/>
          <label for="kit-flashlight">
            <h4>Read Determination Letter</h4>
            <p>To see in dark places, at night, or as a signaling device</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="kit-batteries"/>
          <label for="kit-batteries">
            <h4>Use FEMA Grant</h4>
            <p>For your radio and flashlight</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="kit-first-aid"/>
          <label for="kit-first-aid">
            <h4>Save Receipts & Maintain Records</h4>
            <p>Emergency services may not be able to help you immediately after a disaster</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="kit-whistle"/>
          <label for="kit-whistle">
            <h4>Stay in Touch</h4>
            <p>To signal for help</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="kit-filter"/>
          <label for="kit-filter">
            <h4>Visit a Disaster Recovery Center</h4>
            <p>Dust and smoke are commonly encountered hazards</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="kit-wipes"/>
          <label for="kit-wipes">
            <h4>Visit a FEMA Hazard Mitigation Display</h4>
            <p>For sanitation and hygiene, especially if there's no running water</p>
          </label>
        </li>
        // <li>
        //   <input type="checkbox" id="kit-wrench"/>
        //   <label for="kit-wrench">
        //     <h4>Wrench or Pliers</h4>
        //     <p>For turning off utilities like gas lines</p>
        //   </label>
        // </li>
        // <li>
        //   <input type="checkbox" id="kit-can-opener"/>
        //   <label for="kit-can-opener">
        //     <h4>Can Opener</h4>
        //     <p>For opening canned foods</p>
        //   </label>
        // </li>
        // <li>
        //   <input type="checkbox" id="kit-plastic-sheet"/>
        //   <label for="kit-plastic-sheet">
        //     <h4>Plastic Sheeting</h4>
        //     <p>Useful for using as emergency shelter</p>
        //   </label>
        // </li>
        // <li>
        //   <input type="checkbox" id="kit-duct-tape"/>
        //   <label for="kit-duct-tape">
        //     <h4>Duct Tape</h4>
        //     <p>For constructing emergency shelter and numerous other uses</p>
        //   </label>
        // </li>
        // <li>
        //   <input type="checkbox" id="kit-garbage"/>
        //   <label for="kit-garbage">
        //     <h4>Garbage Bags</h4>
        //     <p>To maintain sanitation</p>
        //   </label>
        // </li>
        // <li>
        //   <input type="checkbox" id="kit-other"/>
        //   <label for="kit-other">
        //     <h4>Other Items Unique to Your Family</h4>
        //     <p>Examples: prescription medications, baby formula, important documents</p>
        //   </label>
        // </li>
      </ul>
      <h3>Additional Resources</h3>
      <ul>
        <li>
          <a href="http://www.sanjoseca.gov/index.aspx?NID=1409" target="_blank" rel="noopener noreferrer">San Jose - Be Supplied</a>
          <p>Emergency kit building information from the City of San Jose's Office of Emergency Management, including local stores to purchase items and organizations you can purchase ready-made kits from.</p>
        </li>
        <li>
          <a href="https://www.ready.gov/build-a-kit" target="_blank" rel="noopener noreferrer">Ready.gov - Build a Kit</a>
          <p>Official emergency kit building information from the US government with a good overview of what to include in a kit, plus several printable checklists.</p>
        </li>
        <li>
          <a href="http://www.conovernc.gov/vertical/Sites/%7BBAB0D760-E669-4331-9C22-9FB14833B6B9%7D/uploads/Visual-Checklist-Disaster-Supply-Kit.jpg" target="_blank" rel="noopener noreferrer">Visual Checklist for a Disaster Supply Kit</a>
          <p>An easy to use and printable emergency supply kit checklist with pictures for each item. Great for building an emergency kit if you like a more visual approach.</p>
        </li>
        <li>
          <a href="https://www.fema.gov/media-library-data/1389294951288-b25113d9aef2b877323d380720827f3b/R3_trifold_eng.pdf" target="_blank" rel="noopener noreferrer">FEMA Emergency Preparedness Brochure</a>
          <p>Useful essential disaster planning guide in short brochure format by FEMA. Contains all key preparedness information.</p>
        </li>
      </ul>
    </section>

    </React.Fragment>
  )

};

export {
  FEMAChecklistMarkup
};
