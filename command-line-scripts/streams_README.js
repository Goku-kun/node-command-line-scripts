printHelp();
console.error('This is an error which will be dumped to the /dev/null  if redirected using 2>/dev/null');
process.stdout.write('Hello World!' + ' This is nice');
process.stdout.write('Another character stream to standard output stream\n');


/* ****************************** */

function printHelp() {
    console.log('streams_README.js usage:');
    console.log("");
    console.log("node streams_README.js 1>{FILENAME, /dev/null} 2>{FILENAME, &1, /dev/null} ");
    console.log("");
    console.log("1>{FILENAME, /dev/null}                   redirects the stdout stream to FILENAME or /dev/null")
    console.log("2>{FILENAME, &1, /dev/null}               redirects the stderror stream to FILENAME or wherever stdout is redirected or /dev/null")
}

// README

// Meanwhile in the console, I'm using the command node ex1.js 2>hello.txt to change the standard error stream output to the hello.txt file.
// to append to this file, we can use >> instead.

// > is the redirect symbol that can be used to redirect a specific stream. So, if I say 1>, it will redirect the standard output stream.
// 1> /dev/null redirects the standard output to bit trash can.

// we can also redirect stream 2 to where stream 1 is being redirected by:
// node ex1.js 1> /dev/null 2>&1 and voila all the output is gone.

// console.log is essentially a wrapper for process.stdout.write which coerces all input to string before passing it over to process.stdout.write
// Remember to access the streams if you're trying to understand how streams works as mentioned above