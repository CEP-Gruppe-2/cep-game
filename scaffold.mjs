import readline from 'readline';
import fs from 'fs';
import { exit } from "process";

// eslint-disable-next-line no-undef
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

function validateComponent(s) {
    let pattern = /^\w+-\w+$/
    return pattern.test(s)
}

function replace(file, arr) {
    let data = fs.readFileSync(file, 'utf8')

    for (let i = 1; i < arr.length; i += 2) {
        data = data.replaceAll(arr[i - 1], arr[i]);
    }

    fs.writeFileSync(file, data, 'utf8');
}

//let v = false;
let tag = '';
let className = '';
let name = await prompt('Name: ');
if (!validateComponent(name)) {
    name = name.charAt(0).toUpperCase() + name.slice(1)
    className = name;
    tag = await prompt('Tag: ');

    while (!validateComponent(tag)) {
        console.log('Invalid Name, pattern: my-element');
        tag = await prompt('Tag: ');
    }
} else {
    tag = name;
    //v = true;
    const classSplit = name.split("-");
    className = classSplit[0].charAt(0).toUpperCase() + classSplit[0].slice(1) + classSplit[1].charAt(0).toUpperCase() + classSplit[1].slice(1);
}


let c = await prompt('Component or Page? (c/p): ');
while (c != 'p' && c != 'c') {
    console.log('Invalid Input');
    c = await prompt('(c/p): ');
}

let dir = c == 'c' ? 'components' : 'pages';
dir = `src/${dir}/${name.toLowerCase()}`

let l = await prompt('LitElement? (y/n): ');
while (l != 'y' && l != 'n') {
    console.log('Invalid Input');
    l = await prompt('(y/n): ');
}

l = l == 'y' ? 'Lit' : '';

fs.mkdirSync(dir)

fs.copyFileSync('scaffold/index.ts', dir + '/index.ts')
fs.copyFileSync('scaffold/scaffold.scss', dir + `/${name.toLowerCase()}.scss`)
fs.copyFileSync('scaffold/scaffold.story.html', dir + `/${name.toLowerCase()}.story.html`)
fs.copyFileSync(`scaffold/scaffold${l}.ts`, dir + `/${name.toLowerCase()}.ts`)

replace(dir + '/index.ts', ['scaffold', name.toLowerCase(), 'Scaffold', className])
replace(dir + `/${name.toLowerCase()}.story.html`, ['scaffold.ts', name.toLowerCase() + '.ts', 'my-scaffold', tag])
replace(dir + `/${name.toLowerCase()}.ts`, ['Scaffold', className, 'my-scaffold', tag, 'scaffold.scss', name.toLowerCase() + '.scss'])

exit();