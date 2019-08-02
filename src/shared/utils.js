import moment from 'moment';

export const getCalendarTimeFrom = (prevDate, nextDate) => {
    const isSameYear = new Date(prevDate).getFullYear() === new Date(nextDate).getFullYear();
    const diffDays = moment(prevDate).diff(moment(nextDate), 'days', true);

    const retVal = isSameYear ? diffDays < -6 ? moment(prevDate).format("MMMM DD") :
        moment(prevDate).calendar(moment(nextDate)) :
        moment(prevDate).format("MMMM DD, YYYY");

    return retVal;
}