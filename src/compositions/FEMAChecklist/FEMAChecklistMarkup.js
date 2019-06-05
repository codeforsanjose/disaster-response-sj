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
      <h2>Recovering from Disaster</h2>
      <p>After a disaster, you will need to put your life back together. You may need to evaluate damage, assign responsibilities, contact insurance, and apply for assistance if available. If FEMA has declared a disaster in your area, federal aid may be available</p>

      <h3>General Recovery Checklist</h3>
      <ul className="fancy-checklist">
        <li>
          <input type="checkbox" id="stay-safe" />
          <label for="stay-safe">
            <h4>Maintain Safety</h4>
            <p>If you had to leave home, return only when local authorities advise that it is safe to do so. Make sure you stay safe and avoid danger during the recovery process. Check with officials that your home is safe to enter.</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="mental-health" />
          <label for="mental-health">
            <h4>Ensure Mental Health</h4>
            <p>Mental health and emotional recovery are as important as physical recovery and rebuilding your home. If your and your family's state of mind isn't good, managing the recovery process can be difficult. Stay connected with family and utilize support resources.</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="call-insurance" />
          <label for="call-insurance">
            <h4>Call Insurance Immediately</h4>
            <p>Contact your insurance company as soon as possible to report your loss. Make sure you follow and understand their instructions for completing your claim. Check your property, flood, fire, and other applicable coverage.</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="doc-damage" />
          <label for="doc-damage">
            <h4>Document Damage & Important Details</h4>
            <p>Check your home inventory records if you have them and track what needs fixing or replacing. Take photos to document damage. Take notes on who you talk with, when, and about what. Recovery will likely involve a lot of phone calls and conversations. You may need the help of a professionals. Don't fix or throw away anything before discussing it with your adjuster first.</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="prevent-loss" />
          <label for="prevent-loss">
            <h4>Prevent Further Damage to Home</h4>
            <p>Act prudently to prevent further loss to your property--insurance may not cover subsequent damage due to reasonable measures not being taken. Confirm with your insurance company any necessary actions.</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="check-aid" />
          <label for="check-aid">
            <h4>Check if Disaster Assistance is Available</h4>
            <p>A range of public agencies, private organizations, and companies may be offering aid to those affected by a certain disaster. Research what's available, but be wary of scammers and disreputable people. If FEMA is offering assistance, scroll down for a FEMA specific checklist.</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="replace-docs" />
          <label for="replace-docs">
            <h4>Check & Replace Vital Documents</h4>
            <p>You may need to replace vital documents that are lost due to property damage. Licenses, IDs, passports, certificates, credit cards, tax records, and other important files may need replacement. Catalog your documents and contact the appropriate authorities.</p>
          </label>
        </li>

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

    <section>
      <h2>Eligible for FEMA Disaster Assistance?</h2>
      <p>If you are eligible for disaster assistance from FEMA, you can use this checklist for the aid application process.</p>
      <aside>
        Based on the <a href="https://www.fema.gov/media-library-data/1505143234654-0094f4d1a798c1d5175d7e11a114e77a/disaster-survivors-checklist.pdf" target="_blank" rel="noopener noreferrer">FEMA Disaster Survivor's Checklist</a> and other resources.
      </aside>
      <h3>FEMA Disaster Survivor Checklist</h3>
      <ul className="fancy-checklist">
        <li>
          <input type="checkbox" id="reg-fema"/>
          <label for="reg-fema">
            <h4>Register with FEMA</h4>
            <p>FEMA offers disaster survivors multiple options to apply for aid if it is available: via web, mobile app, phone, and by visiting a local Disaster Recovery Center. People with disabilities should make any reasonable accommodation request at this step. </p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="fema-inspect"/>
          <label for="fema-inspect">
            <h4>Schedule a FEMA Inspection</h4>
            <p>FEMA inspectors typically schedule onsite inspections with the applicant within two weeks after the applicant has registered for disaster assistance. Due to the extent of damage, your on-site inspection may take longer.</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="fema-letter"/>
          <label for="fema-letter">
            <h4>Read FEMA Determination Letter Carefully</h4>
            <p>The letter should explain FEMA’s decision and any problems to correct. If a mistake has been made, contact FEMA right away by calling the toll-free numbers below or visiting a Disaster Recovery Center.</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="fema-grant"/>
          <label for="fema-grant">
            <h4>Use FEMA Grant for Disaster Recovery</h4>
            <p>The notification letter from FEMA explains how to use the funds appropriately.</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="save-receipts"/>
          <label for="save-receipts">
            <h4>Save Receipts & Maintain Records</h4>
            <p>Document how the funds were used and retain records for all repairs, cleanup and disaster-related costs for at least three years in case of a FEMA audit.</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="fema-contact"/>
          <label for="fema-contact">
            <h4>Stay in Touch with FEMA</h4>
            <p>Go to www.DisasterAssistance.gov or call the toll-free numbers below.</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="visit-drc"/>
          <label for="visit-drc">
            <h4>Visit a Disaster Recovery Center</h4>
            <p>Go to www.DisasterAssistance.gov to find the nearest Disaster Recovery Center or call the toll-free
numbers.</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="fema-display"/>
          <label for="fema-display">
            <h4>Visit a FEMA Hazard Mitigation Display</h4>
            <p>Available at participating home improvement stores; look for public announcements.</p>
          </label>
        </li>
      </ul>
    </section>

    </React.Fragment>
  )

};

export {
  FEMAChecklistMarkup
};
