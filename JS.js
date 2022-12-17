function past (h, m, s) {
    const ConvertHours = h * 60 * 60 * 1000;
    const ConvertMinutes = m * 60 * 1000;
    const ConvertSeconds = s * 1000;
    return ConvertHours + ConvertMinutes + ConvertSeconds;
}