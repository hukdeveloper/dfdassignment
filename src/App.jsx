import "./app.css";
import { MdTopic } from "react-icons/md";
import { AiOutlineLine } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import Card from "./components/Card";

function App() {
  return (
    <main>
      <h1 className="main_heading">Assginment - Formal Methods</h1>
      <div className="topic">
        <h2>
          <MdTopic />
          Topic
        </h2>
        <AiOutlineLine style={{ fontSize: "50px" }} />
        <span>Data Flow Diagram on Complaint Management System</span>
      </div>
      <h2 className="main_headings">
        <IoIosPeople />
        Group Members
      </h2>
      <section className="members">
        <Card
          src="../../assets/haris.jpg"
          name="Haris Umar"
          number="2019-KIU-BS1001"
        />
        <Card
          src="../../assets/kashif.jpg"
          name="Kashif Akhter"
          number="2020-KIU-BS2080"
        />
        <Card
          src="../../assets/karim.jpg"
          name="Karim Madad"
          number="2020-KIU-BS2079"
        />
      </section>
      <section className="descriptions">
        <p className="introduction">
          Data Flow Diagram (DFD) provides a visual representation of the flow
          of information (i.e. data) within a system. By drawing a Data Flow
          Diagram, you can tell the information supplied by and delivered to
          someone who take parts in system processes, the information needed in
          order to complete the processes and the information needed to be
          stored and accessed. This article describes and explain Data Flow
          Diagram (DFD) by using a complaint management system as an example.
        </p>
        <h2>The Complaint Management System</h2>
        <h4>Level 0 DFD (Context DFD)</h4>
        <p>
          {" "}
          Level 0 DFD is also called Content Diagram. The figure below shows a
          context Data Flow Diagram that is drawn for a complaint management
          system. It contains a process (shape) that represents the system to
          model, in this case, the "complaint management system". It also shows
          the participants who will interact with the system, called the
          external entities. In this example, User, Admin, IT Section, Finance
          and Departments are the entities who will interact with the system. In
          between the process and the external entities, there are data flow
          (connectors) that indicate the existence of information exchange
          between the entities and the system.
        </p>
        <p>
          Context DFD is the entrance of a data flow model. It contains one and
          only one process and does not show any data store.
        </p>
        <img src="../../assets/level0.jpg" />
        <h4>Level 1 DFD</h4>
        <p>
          Complaint Submission: This process involves the submission of a
          complaint by a user. The user provides details about the complaint,
          such as the category, description, and any supporting documents
        </p>
        <p>Complaint Handling: This process handles the received complaints</p>
        <p>
          Complaint Tracking: This process tracks the progress and status
          of each complaint.
        </p>
        <p>
          Complaint Reporting: This process generates reports based on the
          complaints received and resolved. These reports provide insights and
          statistics to help management make informed decisions
        </p>
        <img src="../../assets/level1.jpg" />
        <h4>Level 2 DFD</h4>
        <p>
          Complaint Details: This sub-process involves collecting relevant
          information about the complaint, such as the complainant's name,
          contact details, nature of the complaint, and any supporting
          documentation.
        </p>
        <p>
          Validate Complaint: In this sub-process, the system verifies the
          completeness and validity of the complaint details. It may check for
          mandatory fields, format requirements, or other validation rules.
        </p>
        <p>
          Assign Complaint Reference Number: Once the complaint is validated, a
          unique reference number is generated to track and identify the
          complaint throughout the process. This sub-process assigns the
          reference number to the complaint.
        </p>
        <p>
          a. Complaint Assignment: Complaints are assigned to the appropriate
          employee or department responsible for resolving them.
        </p>
        <p>
          b. Complaint Investigation: Assigned employees investigate the
          complaint, gather additional information if necessary, and analyze the
          situation. Based on the investigation, the assigned employee takes the
          necessary actions to resolve the complaint. This may involve
          communication with the user or other departments
        </p>
        <p>
          c. Complaint Status Update: The assigned employee updates the status
          of the complaint, indicating its progress and any relevant notes.
        </p>
        <p>
          d. User Notification: The system notifies the user about the progress
          of their complaint, such as changes in status or resolution updates
        </p>
        <img src="../../assets/level2.jpg" />
      </section>
    </main>
  );
}

export default App;
