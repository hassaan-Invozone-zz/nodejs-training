// Importing packages
const cron = require("node-cron");
const express = require("express");
const nodemailer = require("nodemailer");

app = express();

// Calling sendEmail() function every 1 minute
cron.schedule("*/1 * * * *", function() {
    sendMail();
});

// Send Mail function using Nodemailer
function sendMail() {
    let mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "hasaan.mughal786@gmail.com",
            pass: "gmail.123"
        }
    });

    // Setting credentials
    let mailDetails = {
        from: "hasaan.mughal786@gmail.com",
        name: "Hassaaaaaaan",
        to: "hassaan.zahid@invozone.com",
        subject: "Test mail using Cron job",
        text: "Node.js cron job email"
    };


    // Sending Email
    mailTransporter.sendMail(mailDetails,
        function(err, data) {
            if (err) {
                console.log("Error Occurs", err);
            } else {
                console.log("Email sent successfully");
            }
        });
}

app.listen(3000);
