const date = new Date('2024-11-13T00:00:00Z')
const timeVersion1 = date.getTime();

console.log(date.toUTCString());
console.log(timeVersion1);
console.log(`https://codember.dev/api/multiverse-channel.json?time=${timeVersion1}`);