const ResumeModels = require("../models/resume.model.js");
const Resume = ResumeModels.Resume;
const PersonalInfo = ResumeModels.PersonalInfo;
const EducationalInfo = ResumeModels.EducationalInfo;
const InternshipInfo = ResumeModels.InternshipInfo;
const CodingProfilesInfo = ResumeModels.CodingProfiles;

exports.create  = (req,res) => {

    //extracting all socials
    //socialsArray = [[social1,social1url]...]
    socialsArray = []
    var socialsCount = 1;
    while(req.body["Social"+socialsCount])
    {
        var socials = [req.body["Social"+socialsCount],req.body["SocialURL"+socialsCount]];
        socialsArray.push(socials);
        socialsCount++;
    }

    //extracting all internships names
    internshipNamesArray = [];
    internshipCompanyNamesArray = [];
    internshipCertificatesArray = [];
    internshipDescArray = [];
    internshipStartDatesArray = [];
    internshipEndDatesArray = [];
    var internshipCount = 1;
    while(req.body["IntershipName"+internshipCount])
    {
        internshipNamesArray.push(req.body["IntershipName"+internshipCount]);
        internshipCompanyNamesArray.push(req.body["CompanyName"+internshipCount]);
        internshipCertificatesArray.push(req.body["CetificateURL"+internshipCount]);
        internshipDescArray.push(req.body["InternDesc"+internshipCount])
        internshipStartDatesArray.push(req.body["InternDateofStart"+internshipCount]);
        internshipEndDatesArray.push(req.body["InternDateofEnd"+internshipCount]);
        internshipCount++;
    }
    
    //extracting all achievements
    var achievementsArray = [];
    var achievementsCount = 1;
    while(req.body["Achievement"+achievementsCount])
    {
        var achievement = [req.body["Achievement"+achievementsCount],req.body["AchievementDate"+achievementsCount]];
        achievementsArray.push(achievement);
        achievementsCount++;
    }

    //extracting all personalSkills
    var personalSkillsArray = [];
    var personalSkillsCount = 1;
    while(req.body["Peskillname"+personalSkillsCount])
    {
        var personalSkill = [req.body["Peskillname"+personalSkillsCount],req.body["pes"+personalSkillsCount]];
        personalSkillsArray.push(personalSkill);
        personalSkillsCount++;
    }

    //extracting all professionalSkills
    var professionalSkillsArray = [];
    var professionalSkillsCount = 1;
    while(req.body["Prskillname"+professionalSkillsCount])
    {
        var professionalSkill = [req.body["Prskillname"+professionalSkillsCount],req.body["prs"+professionalSkillsCount]];
        professionalSkillsArray.push(professionalSkill);
        professionalSkillsCount++;
    }

    //extracting all projects
    var projectsArray = [];
    var projectsCount = 1;
    while(req.body["ProjectName"+projectsCount])
    {
        var project = [req.body["ProjectName"+projectsCount],req.body["ProjectURL"+projectsCount],req.body["ProjectDesc"+projectsCount]];
        projectsArray.push(project);
        projectsCount++;
    }

    //extracting all extracurricular
    var extraCurricularArray = [];
    var extraCurricularCount = 1;
    while(req.body["EActivity"+extraCurricularCount])
    {
        extraCurricularArray.push(req.body["EActivity"+extraCurricularCount]);
        extraCurricularCount++;
    }


    var personalInfo = new PersonalInfo({
        firstName : req.body.Fname,
        lastName : req.body.Lname,
        city : req.body.City,
        country : req.body.Country,
        pinCode : req.body.PinCode,
        phoneNumber : req.body.Phone,
        emailId : req.body.Email,
        socials : socialsArray,
    })

    var educationalInfo = new EducationalInfo({
        schoolName : req.body.SchoolName,
        schoolLocation : req.body.SchoolLocation,
        schoolStartDate : req.body.ScDateofStart,
        schoolPassingDate: req.body.ScDateofPass,
        schoolScore : req.body.ScFinalScore,
        schoolScoreType : req.body.ScMarksType,
        schoolDesc : req.body.ScCourseDesc,
        interName : req.body.IntCollegeName,
        interLocation : req.body.IntColllegeLocation,
        interStartDate: req.body.IntDateofStart,
        interPassingDate: req.body.IntDateofPass,
        interScore : req.body.IntFinalScore,
        interScoreType : req.body.IntMarksType,
        interDesc : req.body.IntCourseDesc,
        collegeName : req.body.GraCollegeName,
        collegeLocation : req.body.GraColllegeLocation,
        collegeStartDate : req.body.GraDateofStart,
        collegePassingDate: req.body.GraDateofPass,
        collegeScore : req.body.GraFinalScore,
        collegeScoreType : req.body.GraMarksType,
        collegeDesc: req.body.ColCourseDesc
    })

    var internshipInfo = new InternshipInfo({
        internshipName: internshipNamesArray,
        internshipCompanyName: internshipCompanyNamesArray,
        internshipCertificate : internshipCertificatesArray,
        internshipDesc : internshipDescArray,
        internshipStartDate : internshipStartDatesArray,
        internshipEndDate : internshipEndDatesArray,
    })

    var codingProfilesInfo = new CodingProfilesInfo({
        codeChefUsername: req.body.CodeChef,
        codeChefURL : req.body.CodeChefURL,
        codeChefRating : req.body.CodeChefRating,
        hackerRankUsername : req.body.Hackerrank,
        hackerRankURL : req.body.HackerrankURL,
        hackerRankBadges : req.body.HackerrankBadges,
        codeForcesUsername : req.body.Codeforces,
        codeForcesURL : req.body.CodeforcesURL,
        codeForcesRating : req.body.CodeforcesRating,
        geeksForGeeksUsername : req.body.GeeksforGeeks,
        geeksForGeeksURL : req.body.GeeksforGeeksURL,
        geeksForGeeksScore : req.body.GeeksforGeeksScore,
        interViewBitUsername : req.body.InterviewBit,
        interViewBitURL : req.body.InterviewBitURL,
        interViewBitScore : req.body.InterviewBitScore,
        leetCodeUsername : req.body.LeetCode,
        leetCodeURL : req.body.LeetCodeURL,
        leetCodeProblems : req.body.LeetCodeProblems,
        spojUsername : req.body.Spoj,
        spojURL : req.body.SpojURL,
        spojProblems : req.body.SpojProblems,
    })


    Resume
    //findOneAndUpdate creates a new Doc if query is not found or updates the existing if found
    .findOneAndUpdate(
        { resumeId: req.body.username },
        {
            $set: {
                resumeId: req.body.username,
                themeId: req.body.themeId,
                personalSkills : personalSkillsArray,
                professionalSkills : professionalSkillsArray,
                projects : projectsArray,
                achievements : achievementsArray,
                extraCurricular : extraCurricularArray,
                brief: req.body.Brief,
                personalInfo : personalInfo,
                educationalInfo : educationalInfo,
                internshipInfo : internshipInfo,
                codingProfilesInfo : codingProfilesInfo,
            },
        },
        { upsert: true }
    )
    .then((resume) => {
        res.status(200).send(resume);
    })
    .catch((err) => {
        return res.status(500).send({
            success: false,
            message: "Error Occured with  " + req.params.resumeId,
        });
    });
};

exports.findAll = (req, res) => {
    Resume.find()
    .then((resumes) => {
        res.send(resumes);
    })
    .catch((err) => {
        res.status(500).send({
            success: false,
            message: err.message || "Some error occurred while retrieving Resumes.",
        });
    });
};

exports.findOne = (req,res)=>{
    Resume.findOne({resumeId:req.params.username})
    .then((resume)=>{
        res.send(resume);
    })
    .catch((err)=>{
        res.status(500).send({
            success: false,
            message: err.message || "You have no Resumes",
        })
    })
}