import React, { useState, useEffect, useMemo } from 'react';
import dayjs from 'dayjs';

import { Container, Wrapper, Unit } from './WebinarTime.styled';

interface IWebinarTime {
    className?: string;
    time: string;
}

const WebinarTime: React.FC<IWebinarTime> = ({ className, children, time }) => {
    const [date, setDate] = useState(new Date());

    const webinarTime = dayjs(time);

    const timeToWebinar = useMemo(() => {
        return {
            days: webinarTime.diff(date, 'days'),
            hours: webinarTime.diff(date, 'hours') % 24,
            minutes: webinarTime.diff(date, 'minutes') % 60,
            seconds: webinarTime.diff(date, 'seconds') % 60,
        };
    }, [date, webinarTime]);

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const getUnitByCount = (value: number, unitsMap: Map<number[], string>) => {
        return Array.from(unitsMap.entries()).find(([keys]) =>
            keys.includes(value)
        )?.[1];
    };

    const daysMap = new Map<number[], string>([
        [[1], 'день'],
        [[2, 3, 4], 'дня'],
        [
            [0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            'дней',
        ],
    ]);

    const hoursMap = new Map<number[], string>([
        [[1], 'час'],
        [[2, 3, 4], 'часа'],
        [
            [0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            'часов',
        ],
    ]);

    const minutesMap = new Map<number[], string>([
        [[1], 'минута'],
        [[2, 3, 4], 'минуты'],
        [
            [0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            'минут',
        ],
    ]);

    const secondsMap = new Map<number[], string>([
        [[1], 'секунда'],
        [[2, 3, 4], 'секунды'],
        [
            [0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            'секунд',
        ],
    ]);

    const daysText = getUnitByCount(
        timeToWebinar.days > 20
            ? timeToWebinar.days % 10
            : timeToWebinar.days % 20,
        daysMap
    );

    const hoursText = getUnitByCount(
        timeToWebinar.hours > 20
            ? timeToWebinar.hours % 10
            : timeToWebinar.hours % 20,
        hoursMap
    );

    const minutesText = getUnitByCount(
        timeToWebinar.minutes > 20
            ? timeToWebinar.minutes % 10
            : timeToWebinar.minutes % 20,
        minutesMap
    );

    const secondsText = getUnitByCount(
        timeToWebinar.seconds > 20
            ? timeToWebinar.seconds % 10
            : timeToWebinar.seconds % 20,
        secondsMap
    );

    return (
        <Container className={className}>
            <Wrapper>
                {timeToWebinar.days > 0 && (
                    <Unit>
                        {timeToWebinar.days} {daysText}
                    </Unit>
                )}

                <Unit>
                    {timeToWebinar.hours} {hoursText}
                </Unit>

                <Unit>
                    {timeToWebinar.minutes} {minutesText}
                </Unit>

                <Unit>
                    {timeToWebinar.seconds} {secondsText}
                </Unit>
            </Wrapper>

            {children}
        </Container>
    );
};

export default WebinarTime;
