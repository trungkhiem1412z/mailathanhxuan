import React, { useState, useEffect } from 'react'

const formatDate = (yourDate: Date) => {
    const today: Date = new Date(),
        hrs = (Math.floor(Math.floor((today.valueOf() - yourDate.valueOf()) / 1000) / 60 / 60)) % 24,
        min = (Math.floor(Math.floor((today.valueOf() - yourDate.valueOf()) / 1000) / 60)) % 60,
        sec = Math.floor((today.valueOf() - yourDate.valueOf()) / 1000) % 60;
    return `${(hrs > 9) ? hrs : "0" + hrs}:${(min > 9) ? min : "0" + min}:${(sec > 9) ? sec : "0" + sec}`;
}

const CountTime = () => {
    const [timeString, setTimeString] = useState('');
    const [dateString, setDayString] = useState('');
    useEffect(() => {
        setInterval(() => {
            const yourDate: Date = new Date("2020-07-31T10:25:00");
            const newDateString: number = Math.floor(Math.floor((new Date().valueOf() - yourDate.valueOf()) / 1000) / 60 / 60 / 24);
            const newTimeString: string = formatDate(yourDate);

            setDayString(`${newDateString}`);
            setTimeString(newTimeString);
        }, 1000)
    }, [])
    return (
        <div>
            <div className='date'>{dateString} Ngày</div>
            <div className='time'>{timeString}</div>
        </div>
    )
}

export default CountTime