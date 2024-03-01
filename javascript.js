function generateRandomBluetoothAddress() {
    let address = '';
    for (let i = 0; i < 6; i++) {
        const hexPair = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
        address += hexPair.toUpperCase();
        if (i < 5) {
            address += ':';
        }
    }
    return address;
}

const randomBluetoothAddress = generateRandomBluetoothAddress();
console.log("Random Bluetooth address:", randomBluetoothAddress);
