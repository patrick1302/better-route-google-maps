export const saveDeliveryLocation = (startPoint, endPoint) => {
    return { type: 'SAVE_LOCATION', startPoint, endPoint }
}
