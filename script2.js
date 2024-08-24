// resume using js

const resumeData = {
    name: "Sharmeen",
    location: "Mumbai",
    contact: 8291318184,
    email: "sharmeengardi@gmail.com",
    workExperience: [
        "Infosys Pragati Path To Future",
        "IBM skillsbuild: AI ML internship",    	        //array for work experience
        "IBM skillsbuild: Generative AI internship",
        "NSS Unit Head"
    ],
    education: [
        {
            degree: "BE Computer Engineering",
            year: "2021-2025",                                     //array of objects for education
            institution: "Lokmanya Tilak College of Engineering",
            location: "Mumbai",
            percentage: 80 
        },
        {
            degree: "HSC",
            year: "2019-2021",
            institution: "Vidyaniketan Jr. College of Science and Commerce",
            location: "Mumbai",
            percentage: 91.00
        },
        {
            degree: "SSC",
            year: "2019",
            institution: "Udayachal High School",
            location: "Mumbai",
            percentage: 84.40
        }
    ],
    personalInfo: {
        dob: "17/10/2002",
        nationality: "Indian",
        gender: "Female"
    }
};

console.log(resumeData.education.degree)
console.log(resumeData.name)
console.log(resumeData.location)
console.log(resumeData.contact)
console.log(resumeData.email)
console.log(resumeData.workExperience)
console.log(resumeData.education)
console.log(resumeData.personalInfo)


console.log(resumeData)