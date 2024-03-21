import { useState } from "react";


const Date_Picker = () => {

    const [selectedDate, setSelectedDate] = useState(null);

    return(
      <div>
        <Date_Picker selected={selectedDate} onChange={date => setSelectedDate(date)}/>
      </div>
    );
};

export default Date_Picker;