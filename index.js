var fs = require('fs');
var resumeSchema = require('resume-schema');
var resumeObject = JSON.parse(fs.readFileSync('resume.json', 'utf8'));
resumeSchema.validate(resumeObject, (report, err) => {
    if (err) {
        console.log("Error occured: "+err.message)
        return;
    }
    if (report.valid)
        console.log("Report is valid")
    else
        console.log("Report is not valid")
});