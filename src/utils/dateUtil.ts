export const formatSupaDate = (date: string | null) => {
    if (!date) return "";
    const newDate = new Date(date);
    const formatedDate = `${newDate.getFullYear()}/${newDate.getMonth() + 1}/${newDate.getDate()}`;
    return formatedDate;
};