// CLI ana dosya



const { program } = require('commander');
const { add, subtract, multiply, divide } = require('./mathOperations');

// CLI yapılandırması
program
  .name('calculator-cli')
  .description('Hesap makinesi CLI aracı')
  .version('1.0.0');

// Toplama komutu
program
  .command('add <num1> <num2>')
  .description('İki sayıyı toplar')
  .action((num1, num2) => {
    const result = add(parseFloat(num1), parseFloat(num2));
    console.log(`Sonuç: ${result}`);
  });

// Çıkarma komutu
program
  .command('subtract <num1> <num2>')
  .description('İki sayıyı çıkarır')
  .action((num1, num2) => {
    const result = subtract(parseFloat(num1), parseFloat(num2));
    console.log(`Sonuç: ${result}`);
  });

// Çarpma komutu
program
  .command('multiply <num1> <num2>')
  .description('İki sayıyı çarpar')
  .action((num1, num2) => {
    const result = multiply(parseFloat(num1), parseFloat(num2));
    console.log(`Sonuç: ${result}`);
  });

// Bölme komutu
program
  .command('divide <num1> <num2>')
  .description('İki sayıyı böler')
  .action((num1, num2) => {
    if (num2 == 0) {
      console.error('Hata: Sıfıra bölme işlemi yapılamaz!');
      return;
    }
    const result = divide(parseFloat(num1), parseFloat(num2));
    console.log(`Sonuç: ${result}`);
  });

// Argümanları işlemek için programı çalıştır
program.parse(process.argv);
