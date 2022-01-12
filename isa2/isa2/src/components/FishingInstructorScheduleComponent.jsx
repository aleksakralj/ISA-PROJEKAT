import React, { Component } from 'react';

import{Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel} from '@syncfusion/ej2-react-schedule';

class FishingInstructorScheduleComponent extends Component{
    constructor() {
        super();
        this.data = [{
                Id: 2,
                Subject: 'Paris',
                EndTime: new Date(2022,0,20),
                StartTime: new Date(2022,0,18)
            }];
    }
    
    render(){
        return <ScheduleComponent currentView='Month' selectedDate={new Date(2022, 0, 18)} eventSettings={{ dataSource: this.data }}>
            <Inject services={[Day,Week,WorkWeek,Month,Agenda]}/>
            </ScheduleComponent>
    }
}
export default FishingInstructorScheduleComponent;