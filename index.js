"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

// Questions after the card
const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:chriswilson313@yahoo.com");
                    console.log("\nDone, see you soon.\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Good Bye!\n");
                }
            }
        ]
    }
];

// Data for the card
const data = {
    name: chalk.bold.green("        Chris Wilson"),
    work: `${chalk.white("Hack Reactor Student")}`,
    github: chalk.gray("https://github.com/") + chalk.green("ChrisWilson477"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("ChrisWilson477"),
    npx: chalk.red("npx") + " " + chalk.white("chriswilson477"),
    // blog: chalk.gray("https://dev.to/") + chalk.whiteBright("cdthomp1"),
    // twitter: chalk.gray("https://twitter.com/") + chalk.cyan("DeveloperCam"),
    // web: chalk.cyan("https://cameronthompson.io"),

    labelWork: chalk.white.bold("       Work:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelCard: chalk.white.bold("       Card:"),
    // labelWeb: chalk.white.bold("        Web:"),
    // labelBlog: chalk.white.bold("     Blog:"),
    // labelTwitter: chalk.white.bold("    Twitter:")
};

// Build the card
const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "I'm curious, enthusiastic and student most of the time."
        )}`,
        `${chalk.italic("The rest of the time I experiment with my code,")}`,
        `${chalk.italic("to bring my ideas to life.")}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

// Print the card
console.log(me);

// Optional tip to help users use the links
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");

// Show the tip
console.log(tip);

// Ask the Inquirer questions.
prompt(questions).then(answer => answer.action());