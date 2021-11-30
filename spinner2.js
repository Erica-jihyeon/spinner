//process.stdout.write('hello from spinner1.js... \rheyyy\n');
let t = 0;
while (t <= 4000) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, t += 300);
  
  setTimeout(() => {
    process.stdout.write('\r/   ');
  } , t += 300);
  
  setTimeout(() => {
    process.stdout.write('\r~   ');
  }, t += 300);
  
  setTimeout(() => {
    process.stdout.write('\r\\   ');
  }, t += 300);
}

setTimeout(() => {
  process.stdout.write('\n');
}, t += 300)