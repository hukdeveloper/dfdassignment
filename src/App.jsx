import "./app.css";
import { MdTopic } from "react-icons/md";
import { AiOutlineLine } from "react-icons/ai";
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
        <span>Data Flow Diagram on Securities Trading Platform</span>
      </div>
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
          Diagram (DFD) by using a securities trading platform as an example.
        </p>
        <h2>The Securities Trading Platform</h2>
        <h4>Level 0 DFD (Context DFD)</h4>
        <p>
          {" "}
          Level 0 DFD is also called Content Diagram. The figure below shows a
          context Data Flow Diagram that is drawn for a security trading
          platform. It contains a process (shape) that represents the system to
          model, in this case, the "securities trading platform". It also shows
          the participants who will interact with the system, called the
          external entities. In this example, CS Assistant, Customer and Broker
          are the entities who will interact with the system. In between the
          process and the external entities, there are data flow (connectors)
          that indicate the existence of information exchange between the
          entities and the system.
        </p>
        <p>
          Context DFD is the entrance of a data flow model. It contains one and
          only one process and does not show any data store.
        </p>
        <img src="../../assets/level0.PNG" />
        <h4>Level 1 DFD</h4>
        <p>
          The figure below shows the level 1 DFD, which is the decomposition
          (i.e. break down) of the securities trading platform process shown in
          the context DFD. Read through the diagram, and then we will introduce
          some of the key concepts based on this diagram.
        </p>
        <p>
          The securities trading platform Data Flow Diagram example contains
          five processes, three external entities and three data stores.
          Although there is no design guidelines that governs the positioning of
          shapes in a Data Flow Diagram, we tend to put the processes in the
          middle and data stores and external entities on the sides to make it
          easier to comprehend. Based on the diagram, we know that a Customer
          Service Assistant provides customer details to the Open Account
          process. The result is the Customer details being stored in Customer
          data store and Account details being stored in Account data store.
          Although we said that the attempt to store customer and account
          details happens after the details are being provided by the Customer
          Service Assistant, the Data Flow Diagram implies no such thing. It is
          our common sense that lead us to interpret the diagram in the way that
          we understand it naturally. Strictly speaking, the diagram only tells
          us the Open Account process receives customer details and produce
          customer and account details, with no order specified. Note that Data
          Flow Diagram does not answer in what way and in what order the
          information is being used throughout a system. If this information is
          important and worth mentioning, consider to model it with diagrams
          like BPMN Business Process Diagram or UML Activity Diagram. The
          process Check Transaction receives Transaction details from the
          Transaction data store and pass it on to Customer. A Customer can
          Deposit Cash by providing the Deposit amount and the result is the
          Updated account balance being stored in the Account data store.
          Similarly, a Customer can Withdraw Cash. The result is that he will
          receive the Withdrawn amount and the Updated account balance will be
          stored in the Account data store. Finally, both the Customer and
          Broker can initiate the Place Order process, which results in the
          Transaction details being stored in the Transaction data store. The
          Place Order process also passes the Transaction details to the Stock
          Exchange Center, which is an entity out of the system scope. In the
          next section, we will introduce a way to represent this kind of
          entity.
        </p>
        <img src="../../assets/level1.PNG" />
        <h4>Level 2 DFD</h4>
        <p>
          Just like the process in context DFD, processes in level 1 DFD can
          also be decomposed into a deeper level or even levels of process
          details. The figure below shows the level 2 DFD of the Place Order
          process.
        </p>
        <p>
          The external entities and data stores in this DFD correspond with
          those shown in the upper level (i.e. the diagram above). What makes it
          different is the breakdown of Place Order process into Place Order
          (Online) process and Place Order (Offline) process.
        </p>
        <p>
          Based on this diagram, we know that a Customer can perform Place Order
          (Online) by supplying Order details while a Broker can perform Place
          Order (Phone) also by supplying Order details; in either case causing
          Transaction details to be stored in the Transaction data store and
          passed to the Stock Exchange Center.
        </p>
        <img src="../../assets/level2.PNG" />
      </section>
    </main>
  );
}

export default App;
