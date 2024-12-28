import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import RegistrationInformation from './RegistrationInformation';
import RtoInformation from './RtoInformation';
import InsuranceInformation from './InsuranceInformation';
import FinanceInformation from './FinanceInformation';
import LiterInformation from './LiterInformation';
import DriverDetailsInfomation from './DriverDetailsInfomation';

function TruckMasterTab() {
  const [key, setKey] = useState('home'); // "home" corresponds to the first tab (Registration)

  return (
    <Tabs
       defaultActiveKey="Registration"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Registration" title="Registration">
        <RegistrationInformation />
      </Tab>
      <Tab eventKey="rto" title="RTO">
        <RtoInformation />
      </Tab>
      <Tab eventKey="insurance" title="Insurance">
        <InsuranceInformation />
      </Tab>
      <Tab eventKey="finance" title="Finance">
        <FinanceInformation />
      </Tab>
      <Tab eventKey="liter" title="Liter">
        <LiterInformation />
      </Tab>
      <Tab eventKey="driver" title="Driver Detail">
        <DriverDetailsInfomation />
      </Tab>
    </Tabs>
  );
}

export default TruckMasterTab;
