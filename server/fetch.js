"use strict";
const fs = require("fs");
const { join } = require("path");

const archiveFile = join(__dirname, "./archive.json");
var archive = JSON.parse(fs.readFileSync(archiveFile, {encoding: "utf8"}))

const date = new Date();

console.log("Loading archive, fetching data for " + date.toISOString());

fetch("https://elitebgs.app/api/ebgs/v5/factions?name=Landstrider Legion")
.then(res => {return res.json()})
.then(json => {
    console.log("Processing...")
    const epoch = date.getTime();

    archive.unshift({
        timestamp: epoch,
        data: json.docs[0].faction_presence
    })

    fs.writeFileSync(archiveFile, Buffer.from(JSON.stringify(archive), "utf8"), {encoding: "utf8"});
    console.log("Done! Process exiting.")
})