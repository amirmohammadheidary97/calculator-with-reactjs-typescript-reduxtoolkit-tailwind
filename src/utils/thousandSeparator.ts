export const thousandSeparator = (input: string): string => {
    const num = Number(input)
    if (num === 0) {
        return "0";
    }
    if (!num) {
        return "";
    }
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

}
