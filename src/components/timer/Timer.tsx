import React, { useEffect, useState } from "react"

interface TimerProps {

}
interface SetEndTime {
    year: string,
    month: string,
    day: string,
    hours: string,
    mins: string,
    seg: string
}

const Timer: React.FunctionComponent<TimerProps> = () => {
    const [hours, setHours] = useState<string>("00")
    const [min, setMin] = useState<string>("00")
    const [seg, setSeg] = useState<string>("0")
    const [day, setDay] = useState<string>("00")

    const endDate: SetEndTime = {
        year: '2022',
        month: '8',
        day: '18',
        hours: '20',
        mins: '33',
        seg: '0',
    }
    let months: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    let starTime: NodeJS.Timeout;

    const setEndTime = ({ year, month, day, hours, mins, seg }: SetEndTime): string => {
        day = day.length > 1 ? day : "0" + day
        hours = hours.length > 1 ? hours : "0" + hours
        mins = mins.length > 1 ? mins : "0" + mins
        seg = seg.length > 1 ? seg : "0" + seg

        return `${months[Number(month) - 1]} ${day} ${year} ${hours}:${mins}:${seg} GMT-0300`
    }
    const getTimeRemaining = (endDate: string) => {
        const total = (Date.parse(endDate) - (Date.parse(new Date().toString()) + 1000)) / 1000;
        let seg: string = ("0" + Math.floor(total % 60)).slice(-2)
        let min: string = ("0" + Math.floor(total / 60 % 60)).slice(-2)
        let hs: string = ('0' + Math.floor(total / 3600 % 24)).slice(-2)
        let day: string = Math.floor(total / (3600 * 24)).toString()
        setSeg(seg)
        setMin(min)
        setHours(hs)
        setDay(day)
    }


    const start = () => {
        starTime = setTimeout(() => {
            getTimeRemaining(setEndTime(endDate))
        }, 1000)
    }
    const end = () => {
        console.log()
        if (Number(hours) <= 0 && Number(min) <= 0 && Number(seg) <= 0 && Number(day) <= 0 && Number(seg) == 0) {
            clearTimeout(starTime)
        }
    }

    useEffect(() => {
        start()
        end()
    }, [seg])
    return (
        <div className="timer">
            <h2 className="">{Number(day) == 0 ? "" : day + " :"}  {hours} : {min} : {seg}</h2>
            <div className="containerSubTimer">
                {Number(day) != 0 ?
                    <h4>{day}</h4> : null}
                <h4>{"HS"}</h4>
                <h4>{'min'}</h4>
                <h4>{'seg'}</h4>
            </div>
        </div>
    );
}

export default Timer;