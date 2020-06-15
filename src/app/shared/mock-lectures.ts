import { Lecture } from "./lecture";

export const LECTURES: Lecture[] = [
    {
        id: 1,
        name: 'Webtechnologien',
        room: '075',
        day: 'Monday',
        time: { hours: 10, minutes: 15 },
        building: 'WE5',
        floor: '02',
        department: 'Lehrstuhl für Medieninformatik'
    },
    {
        id: 2,
        name: 'Medieninformatik',
        room: '070',
        day: 'Tuesday',
        time: { hours: 13, minutes: 15 },
        building: 'WE5',
        floor: '01',
        department: 'Lehrstuhl für Medieninformatik'
    },
    {
        id: 3,
        name: 'Algorithmen und Datenstrukturen',
        room: '065',
        day: 'Wednesday',
        time: { hours: 16, minutes: 15 },
        building: 'WE5',
        floor: '052',
        department: 'Lehrstuhl für Medieninformatik'
    },
    {
        id: 4,
        name: 'Computergrafik',
        room: '030',
        day: 'Thursday',
        time: { hours: 19, minutes: 15 },
        building: 'WE5',
        floor: '01',
        department: 'Lehrstuhl für Medieninformatik'
    },
    {
        id: 5,
        name: 'Datenbanken',
        room: '080',
        day: 'Friday',
        time: { hours: 15, minutes: 15 },
        building: 'WE5',
        floor: '00',
        department: 'Lehrstuhl für Wirtschaftsinformatik'
    }

]
