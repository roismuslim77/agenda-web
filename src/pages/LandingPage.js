import * as React from 'react';
import {
    ScheduleComponent, Month, Inject, Agenda,
    ViewsDirective, ViewDirective
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from '../components/data';
import { extend } from '@syncfusion/ej2-base';
import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../../node_modules/@syncfusion/ej2-calendars/styles/material.css";
import "../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../../node_modules/@syncfusion/ej2-react-schedule/styles/material.css";

export default class App extends React.Component<{}, {}>{
    render() {
    return <ScheduleComponent height='550px'>
            <ViewsDirective>
                <ViewDirective option='Month' />
                <ViewDirective option='Agenda' />
            </ViewsDirective>
            <Inject services={[Month, Agenda]} />
        </ScheduleComponent>
}
};