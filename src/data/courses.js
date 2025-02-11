export const courses = [{
  id: 1,
  code: "ENGL 101",
  name: "Introduction to College Writing",
  credits: 3,
  difficulty: 2,
  description: "Develop foundational writing skills for academic success.",
  department: "ENGL",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Writing", "Composition", "Grammar"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025", "Summer 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "5",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Miller",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Wilson",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "20",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "25",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Miller",
          Location: "On-site",
      },
      "Section 006": {
          Semester: "Spring 2025",
          Total_Seats: "25",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Brown",
          Location: "Online",
      },
      "Section 007": {
          Semester: "Summer 2025",
          Total_Seats: "25",
          Remaining_Seats: "20",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Taylor",
          Location: "Online",
      },
  },
},
{
  id: 2,
  code: "ENGL 102",
  name: "Advanced College Writing",
  credits: 3,
  difficulty: 3,
  description: "Refine writing skills and explore advanced composition techniques.",
  department: "ENGL",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Writing", "Rhetoric", "Argumentation"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "12",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:30",
              endTime: "10:45"
          },
          Professor_name: "Dr. Evans",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "8",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Green",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:30",
              endTime: "10:45"
          },
          Professor_name: "Dr. Evans",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "20",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Green",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Spring 2025",
          Total_Seats: "25",
          Remaining_Seats: "22",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:00",
              endTime: "12:15"
          },
          Professor_name: "Dr. White",
          Location: "Online",
      },
  },
},
{
  id: 3,
  code: "ENGL 201",
  name: "World Literature I",
  credits: 3,
  difficulty: 3,
  description: "Explore significant literary works from around the world.",
  department: "ENGL",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Literature", "World Cultures", "Literary Analysis"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "7",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "3",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Spring 2025",
          Total_Seats: "20",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Jones",
          Location: "Online",
      },
  },
},
{
  id: 4,
  code: "ENGL 202",
  name: "World Literature II",
  credits: 3,
  difficulty: 3,
  description: "Continue the exploration of global literary masterpieces.",
  department: "ENGL",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Literature", "Global Literature", "Cultural Studies"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
  },
},
{
  id: 5,
  code: "ENGL 210",
  name: "British Literature Survey",
  credits: 3,
  difficulty: 3,
  description: "Survey of British literature from various periods.",
  department: "ENGL",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["British Literature", "Literary History", "Cultural Studies"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. White",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "22",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. White",
          Location: "On-site",
      },
  },
},
{
  id: 6,
  code: "ENGL 220",
  name: "American Literature Survey",
  credits: 3,
  difficulty: 3,
  description: "Comprehensive overview of American literary works.",
  department: "ENGL",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["American Literature", "Literary History", "Cultural Studies"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Anderson",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "20",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Anderson",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Spring 2025",
          Total_Seats: "25",
          Remaining_Seats: "24",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Clark",
          Location: "Online",
      },
  },
},
{
  id: 7,
  code: "ENGL 225",
  name: "Introduction to Poetry",
  credits: 3,
  difficulty: 3,
  description: "Explore the art of poetry and develop skills in analysis and interpretation.",
  department: "ENGL",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Poetry", "Literary Analysis", "Creative Writing"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "5",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Taylor",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "12",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Taylor",
          Location: "On-site",
      },
  },
},
{
  id: 8,
  code: "ENGL 301",
  name: "Creative Writing: Fiction",
  credits: 3,
  difficulty: 4,
  description: "Develop skills in fiction writing, including character development, plot, and narrative voice.",
  department: "ENGL",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Fiction Writing", "Creative Writing", "Storytelling"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "15",
          Remaining_Seats: "6",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "14:30",
              endTime: "15:45"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "15",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "14:30",
              endTime: "15:45"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
  },
},
{
  id: 9,
  code: "ENGL 302",
  name: "Creative Writing: Poetry",
  credits: 3,
  difficulty: 4,
  description: "Explore poetic techniques and develop your voice as a poet.",
  department: "ENGL",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Poetry Writing", "Creative Writing", "Verse"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "15",
          Remaining_Seats: "8",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Adams",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "15",
          Remaining_Seats: "14",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Adams",
          Location: "On-site",
      },
  },
},
{
  id: 10,
  code: "ENGL 310",
  name: "Shakespeare",
  credits: 3,
  difficulty: 4,
  description: "An in-depth study of the works of William Shakespeare.",
  department: "ENGL",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Shakespeare", "Drama", "Renaissance Literature"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "9",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Carter",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "16",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Carter",
          Location: "On-site",
      },
  },
},
{
  id: 11,
  code: "ENGL 315",
  name: "Modern Drama",
  credits: 3,
  difficulty: 3,
  description: "Study of significant plays from the modern era.",
  department: "ENGL",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Drama", "Modern Literature", "Theatre"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "12",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. Riley",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. Riley",
          Location: "On-site",
      },
  },
},
{
  id: 12,
  code: "ENGL 320",
  name: "Literary Theory",
  credits: 3,
  difficulty: 4,
  description: "Explore major theoretical frameworks for literary analysis.",
  department: "ENGL",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Literary Theory", "Critical Analysis", "Philosophy"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "15",
          Remaining_Seats: "4",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Hayes",
          Location: "On-site",
      },
  },
},
{
  id: 13,
  code: "ENGL 330",
  name: "Professional Writing",
  credits: 3,
  difficulty: 3,
  description: "Develop writing skills for various professional contexts.",
  department: "ENGL",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Professional Writing", "Business Communication", "Technical Writing"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Nelson",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Nelson",
          Location: "On-site",
      },
  },
},
{
  id: 14,
  code: "ENGL 340",
  name: "Technical Writing",
  credits: 3,
  difficulty: 3,
  description: "Focus on writing clear and concise technical documents.",
  department: "ENGL",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Technical Writing", "Documentation", "Communication"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "11",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:00",
              endTime: "10:15"
          },
          Professor_name: "Dr. Clark",
          Location: "On-site",
      },
  },
},
{
  id: 15,
  code: "ENGL 350",
  name: "Contemporary Literature",
  credits: 3,
  difficulty: 3,
  description: "Study of significant literary works of the present day.",
  department: "ENGL",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Contemporary Literature", "Fiction", "Literary Trends"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "14",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Lee",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "19",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Lee",
          Location: "On-site",
      },
  },
},
{
  id: 16,
  code: "ENGL 401",
  name: "Advanced Fiction Workshop",
  credits: 3,
  difficulty: 5,
  description: "Advanced workshop for students with experience in fiction writing.",
  department: "ENGL",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Fiction Writing", "Creative Writing", "Workshop"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "12",
          Remaining_Seats: "3",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:00",
              endTime: "12:15"
          },
          Professor_name: "Dr. Jackson",
          Location: "On-site",
      },
  },
},
{
  id: 17,
  code: "ENGL 410",
  name: "Studies in Medieval Literature",
  credits: 3,
  difficulty: 4,
  description: "In-depth study of literature from the medieval period.",
  department: "ENGL",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Medieval Literature", "Literary History", "Old English"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "15",
          Remaining_Seats: "7",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Miller",
          Location: "On-site",
      },
  },
},
{
  id: 18,
  code: "ENGL 420",
  name: "Studies in Romanticism",
  credits: 3,
  difficulty: 4,
  description: "Exploration of literature from the Romantic period.",
  department: "ENGL",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Romanticism", "Literary History", "Poetry"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "15",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
  },
},
{
  id: 19,
  code: "ENGL 450",
  name: "Digital Writing and Rhetoric",
  credits: 3,
  difficulty: 3,
  description: "Study of writing and rhetoric in digital environments.",
  department: "ENGL",
  days: ["M", "W", "F"],
  type: "Hybrid",
  interests: ["Digital Writing", "Rhetoric", "New Media"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. Smith",
          Location: "Hybrid",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. Smith",
          Location: "Hybrid",
      },
  },
},
{
  id: 20,
  code: "ENGL 490",
  name: "Senior Seminar in Literature",
  credits: 3,
  difficulty: 5,
  description: "Capstone course for English majors, focusing on advanced literary study and research.",
  department: "ENGL",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Literature", "Research", "Seminar"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "10",
          Remaining_Seats: "2",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:30",
              endTime: "10:45"
          },
          Professor_name: "Dr. Anderson",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "10",
          Remaining_Seats: "5",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:30",
              endTime: "10:45"
          },
          Professor_name: "Dr. Anderson",
          Location: "On-site",
      },
  },
},
{
  id: 21,
  code: "MATH 101",
  name: "College Algebra",
  credits: 3,
  difficulty: 2,
  description: "Review and extension of algebraic concepts.",
  department: "MATH",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Algebra", "Mathematics", "Problem Solving"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025", "Summer 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "35",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Jones",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "35",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Fall 2025",
          Total_Seats: "35",
          Remaining_Seats: "25",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "35",
          Remaining_Seats: "20",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Jones",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Winter 2026",
          Total_Seats: "35",
          Remaining_Seats: "30",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
      "Section 006": {
          Semester: "Spring 2025",
          Total_Seats: "35",
          Remaining_Seats: "30",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Miller",
          Location: "Online",
      },
      "Section 007": {
          Semester: "Summer 2025",
          Total_Seats: "35",
          Remaining_Seats: "35",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Davis",
          Location: "Online",
      },
  },
},
{
  id: 22,
  code: "MATH 110",
  name: "Trigonometry",
  credits: 3,
  difficulty: 2,
  description: "Study of trigonometric functions and their applications.",
  department: "MATH",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Trigonometry", "Mathematics", "Geometry"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "25",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
  },
},
{
  id: 23,
  code: "MATH 112",
  name: "Precalculus",
  credits: 4,
  difficulty: 3,
  description: "Preparation for calculus, including algebra, trigonometry, and functions.",
  department: "MATH",
  days: ["M", "W", "F", "S"],
  type: "In-Person",
  interests: ["Precalculus", "Mathematics", "Functions"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "20",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 24,
  code: "MATH 120",
  name: "Finite Mathematics",
  credits: 3,
  difficulty: 2,
  description: "Introduction to mathematical concepts used in business and social sciences.",
  department: "MATH",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Finite Mathematics", "Business", "Statistics"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "12",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "20",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
  },
},
{
  id: 25,
  code: "MATH 201",
  name: "Calculus I",
  credits: 4,
  difficulty: 4,
  description: "Introduction to differential and integral calculus.",
  department: "MATH",
  days: ["M", "W", "F", "S"],
  type: "In-Person",
  interests: ["Calculus", "Mathematics", "Derivatives"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "25",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "30",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "20",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Spring 2025",
          Total_Seats: "40",
          Remaining_Seats: "35",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Brown",
          Location: "Online",
      },
  },
},
{
  id: 26,
  code: "MATH 202",
  name: "Calculus II",
  credits: 4,
  difficulty: 4,
  description: "Continuation of Calculus I, focusing on integration techniques and applications.",
  department: "MATH",
  days: ["M", "W", "F", "S"],
  type: "In-Person",
  interests: ["Calculus", "Mathematics", "Integrals"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Lee",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "28",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Lee",
          Location: "On-site",
      },
  },
},
{
  id: 27,
  code: "MATH 203",
  name: "Calculus III",
  credits: 4,
  difficulty: 4,
  description: "Multivariable calculus and vector analysis.",
  department: "MATH",
  days: ["T", "TH", "S"],
  type: "In-Person",
  interests: ["Calculus", "Mathematics", "Multivariable Calculus"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "14",
          Time_slot: {
              days: ["T", "TH", "S"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Chen",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "23",
          Time_slot: {
              days: ["T", "TH", "S"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Chen",
          Location: "On-site",
      },
  },
},
{
  id: 28,
  code: "MATH 215",
  name: "Discrete Mathematics",
  credits: 3,
  difficulty: 3,
  description: "Introduction to discrete mathematical structures.",
  department: "MATH",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Discrete Mathematics", "Mathematics", "Logic"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "17",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Wang",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "23",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Wang",
          Location: "On-site",
      },
  },
},
{
  id: 29,
  code: "MATH 301",
  name: "Linear Algebra",
  credits: 3,
  difficulty: 4,
  description: "Study of vector spaces, linear transformations, and matrices.",
  department: "MATH",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Linear Algebra", "Mathematics", "Matrices"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "8",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Kim",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Kim",
          Location: "On-site",
      },
  },
},
{
  id: 30,
  code: "MATH 302",
  name: "Abstract Algebra",
  credits: 3,
  difficulty: 4,
  description: "Introduction to abstract algebraic structures, such as groups, rings, and fields.",
  department: "MATH",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Abstract Algebra", "Mathematics", "Groups"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "15",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. Patel",
          Location: "On-site",
      },
  },
},
{
  id: 31,
  code: "MATH 310",
  name: "Differential Equations",
  credits: 3,
  difficulty: 4,
  description: "Methods for solving ordinary differential equations.",
  department: "MATH",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Differential Equations", "Mathematics", "Calculus"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "12",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Nguyen",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Nguyen",
          Location: "On-site",
      },
  },
},
{
  id: 32,
  code: "MATH 315",
  name: "Advanced Calculus",
  credits: 3,
  difficulty: 5,
  description: "Rigorous treatment of calculus concepts.",
  department: "MATH",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Advanced Calculus", "Mathematics", "Analysis"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "15",
          Remaining_Seats: "5",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:00",
              endTime: "10:15"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 33,
  code: "MATH 320",
  name: "Number Theory",
  credits: 3,
  difficulty: 4,
  description: "Study of the properties of integers.",
  department: "MATH",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Number Theory", "Mathematics", "Integers"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "15",
          Remaining_Seats: "8",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
  },
},
{
  id: 34,
  code: "MATH 330",
  name: "Complex Analysis",
  credits: 3,
  difficulty: 5,
  description: "Analysis of complex functions.",
  department: "MATH",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Complex Analysis", "Mathematics", "Complex Numbers"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "15",
          Remaining_Seats: "12",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Wilson",
          Location: "On-site",
      },
  },
},
{
  id: 35,
  code: "MATH 340",
  name: "Numerical Analysis",
  credits: 3,
  difficulty: 4,
  description: "Methods for the numerical solution of mathematical problems.",
  department: "MATH",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Numerical Analysis", "Mathematics", "Computation"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "15",
          Remaining_Seats: "6",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "14:30",
              endTime: "15:45"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
  },
},
{
  id: 36,
  code: "MATH 350",
  name: "Mathematical Modeling",
  credits: 3,
  difficulty: 4,
  description: "Application of mathematics to model real-world phenomena.",
  department: "MATH",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Mathematical Modeling", "Mathematics", "Applications"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "15",
          Remaining_Seats: "9",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Taylor",
          Location: "On-site",
      },
  },
},
{
  id: 37,
  code: "MATH 401",
  name: "Real Analysis",
  credits: 3,
  difficulty: 5,
  description: "Rigorous study of the real number system and its properties.",
  department: "MATH",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Real Analysis", "Mathematics", "Analysis"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "12",
          Remaining_Seats: "4",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:30",
              endTime: "10:45"
          },
          Professor_name: "Dr. Anderson",
          Location: "On-site",
      },
  },
},
{
  id: 38,
  code: "MATH 410",
  name: "Topology",
  credits: 3,
  difficulty: 5,
  description: "Introduction to topological spaces and their properties.",
  department: "MATH",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Topology", "Mathematics", "Geometry"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "12",
          Remaining_Seats: "7",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Baker",
          Location: "On-site",
      },
  },
},
{
  id: 39,
  code: "MATH 420",
  name: "Graph Theory",
  credits: 3,
  difficulty: 4,
  description: "Study of graphs and their applications.",
  department: "MATH",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Graph Theory", "Mathematics", "Networks"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "15",
          Remaining_Seats: "11",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. White",
          Location: "On-site",
      },
  },
},
{
  id: 40,
  code: "MATH 490",
  name: "Senior Mathematics Seminar",
  credits: 3,
  difficulty: 5,
  description: "Capstone seminar for mathematics majors.",
  department: "MATH",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Mathematics", "Research", "Seminar"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "10",
          Remaining_Seats: "3",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Green",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "10",
          Remaining_Seats: "6",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Green",
          Location: "On-site",
      },
  },
},
{
  id: 41,
  code: "BIO 101",
  name: "Introduction to Biology",
  credits: 3,
  difficulty: 2,
  description: "An overview of the principles of biology.",
  department: "BIO",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Biology", "Life Sciences", "Ecology"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025", "Summer 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "20",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "30",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "30",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "35",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 006": {
          Semester: "Spring 2025",
          Total_Seats: "40",
          Remaining_Seats: "30",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Brown",
          Location: "Online",
      },
      "Section 007": {
          Semester: "Summer 2025",
          Total_Seats: "30",
          Remaining_Seats: "25",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Lee",
          Location: "Online",
      },
  },
},
{
  id: 42,
  code: "BIO 102",
  name: "General Biology",
  credits: 4,
  difficulty: 3,
  description: "Further study of the fundamentals of biology.",
  department: "BIO",
  days: ["M", "W", "F", "S"],
  type: "In-Person",
  interests: ["Biology", "Cell Biology", "Genetics"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "5",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Clark",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "25",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Clark",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Spring 2025",
          Total_Seats: "40",
          Remaining_Seats: "38",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. White",
          Location: "Online",
      },
  },
},
{
  id: 43,
  code: "BIO 201",
  name: "Cell Biology",
  credits: 3,
  difficulty: 4,
  description: "Study of the structure, function, and behavior of cells.",
  department: "BIO",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Cell Biology", "Biology", "Molecular Biology"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "20",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 44,
  code: "BIO 202",
  name: "Genetics",
  credits: 3,
  difficulty: 4,
  description: "Principles of heredity and gene expression.",
  department: "BIO",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Genetics", "Biology", "Heredity"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "22",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
  },
},
{
  id: 45,
  code: "BIO 205",
  name: "Human Anatomy",
  credits: 4,
  difficulty: 3,
  description: "Detailed study of the structure of the human body.",
  department: "BIO",
  days: ["M", "W", "F", "S"],
  type: "In-Person",
  interests: ["Anatomy", "Biology", "Human Body"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "35",
          Remaining_Seats: "12",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Lee",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "35",
          Remaining_Seats: "28",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Lee",
          Location: "On-site",
      },
  },
},
{
  id: 46,
  code: "BIO 206",
  name: "Human Physiology",
  credits: 4,
  difficulty: 4,
  description: "Study of the functions of the human body.",
  department: "BIO",
  days: ["T", "TH", "S"],
  type: "In-Person",
  interests: ["Physiology", "Biology", "Human Body"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "35",
          Remaining_Seats: "17",
          Time_slot: {
              days: ["T", "TH", "S"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Chen",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "35",
          Remaining_Seats: "30",
          Time_slot: {
              days: ["T", "TH", "S"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Chen",
          Location: "On-site",
      },
  },
},
{
  id: 47,
  code: "BIO 301",
  name: "Microbiology",
  credits: 4,
  difficulty: 4,
  description: "Study of microorganisms and their roles in health and disease.",
  department: "BIO",
  days: ["M", "W", "F", "S"],
  type: "In-Person",
  interests: ["Microbiology", "Biology", "Pathogens"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "19",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Wang",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "25",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Wang",
          Location: "On-site",
      },
  },
},
{
  id: 48,
  code: "BIO 302",
  name: "Ecology",
  credits: 3,
  difficulty: 3,
  description: "Study of the interactions between organisms and their environment.",
  department: "BIO",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Ecology", "Biology", "Environment"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "14",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Kim",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "21",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Kim",
          Location: "On-site",
      },
  },
},
{
  id: 49,
  code: "BIO 310",
  name: "Evolution",
  credits: 3,
  difficulty: 4,
  description: "Study of the mechanisms of evolution and the history of life.",
  department: "BIO",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Evolution", "Biology", "Natural Selection"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. Patel",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "17",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. Patel",
          Location: "On-site",
      },
  },
},
{
  id: 50,
  code: "BIO 320",
  name: "Molecular Biology",
  credits: 4,
  difficulty: 4,
  description: "Study of the molecular basis of life.",
  department: "BIO",
  days: ["M", "W", "F", "S"],
  type: "In-Person",
  interests: ["Molecular Biology", "Biology", "DNA"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "12",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Nguyen",
          Location: "On-site",
      },
  },
},
{
  id: 51,
  code: "BIO 330",
  name: "Immunology",
  credits: 3,
  difficulty: 4,
  description: "Study of the immune system and its functions.",
  department: "BIO",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Immunology", "Biology", "Immune System"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "8",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Jackson",
          Location: "On-site",
      },
  },
},
{
  id: 52,
  code: "BIO 340",
  name: "Developmental Biology",
  credits: 3,
  difficulty: 4,
  description: "Study of the processes of animal and plant development.",
  department: "BIO",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Developmental Biology", "Biology", "Embryology"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
  },
},
{
  id: 53,
  code: "BIO 350",
  name: "Plant Biology",
  credits: 3,
  difficulty: 3,
  description: "Study of the structure, function, and diversity of plants.",
  department: "BIO",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Plant Biology", "Botany", "Ecology"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "16",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Anderson",
          Location: "On-site",
      },
  },
},
{
  id: 54,
  code: "BIO 360",
  name: "Marine Biology",
  credits: 3,
  difficulty: 3,
  description: "Study of marine organisms and their environments.",
  department: "BIO",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Marine Biology", "Biology", "Oceanography"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "9",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "14:30",
              endTime: "15:45"
          },
          Professor_name: "Dr. Miller",
          Location: "On-site",
      },
  },
},
{
  id: 55,
  code: "BIO 401",
  name: "Biochemistry",
  credits: 4,
  difficulty: 5,
  description: "Study of the chemical processes of life.",
  department: "BIO",
  days: ["M", "W", "F", "S"],
  type: "In-Person",
  interests: ["Biochemistry", "Biology", "Chemistry"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "15",
          Remaining_Seats: "7",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Taylor",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "15",
          Remaining_Seats: "14",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Taylor",
          Location: "On-site",
      },
  },
},
{
  id: 56,
  code: "BIO 410",
  name: "Neurobiology",
  credits: 3,
  difficulty: 5,
  description: "Study of the nervous system and its functions.",
  department: "BIO",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Neurobiology", "Biology", "Neuroscience"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "15",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. White",
          Location: "On-site",
      },
  },
},
{
  id: 57,
  code: "BIO 420",
  name: "Conservation Biology",
  credits: 3,
  difficulty: 4,
  description: "Study of the science of biodiversity conservation.",
  department: "BIO",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Conservation Biology", "Biology", "Ecology"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "15",
          Remaining_Seats: "8",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 58,
  code: "BIO 490",
  name: "Senior Research Seminar",
  credits: 3,
  difficulty: 5,
  description: "Capstone seminar involving original research and presentation.",
  department: "BIO",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Biology", "Research", "Seminar"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "10",
          Remaining_Seats: "2",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:30",
              endTime: "10:45"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "10",
          Remaining_Seats: "5",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:30",
              endTime: "10:45"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
  },
},
{
  id: 59,
  code: "CHEM 101",
  name: "General Chemistry I",
  credits: 4,
  difficulty: 3,
  description: "Fundamental principles of chemistry.",
  department: "CHEM",
  days: ["M", "W", "F", "S"],
  type: "In-Person",
  interests: ["Chemistry", "Science", "Elements"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025", "Summer 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "22",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "12",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "35",
          Time_slot: {
              days: ["T", "TH", "S"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "32",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "38",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 006": {
          Semester: "Spring 2025",
          Total_Seats: "40",
          Remaining_Seats: "30",
          Time_slot: {
              days: ["T", "TH", "S"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Brown",
          Location: "Online",
      },
      "Section 007": {
          Semester: "Summer 2025",
          Total_Seats: "30",
          Remaining_Seats: "28",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Lee",
          Location: "Online",
      },
  },
},
{
  id: 60,
  code: "CHEM 102",
  name: "General Chemistry II",
  credits: 4,
  difficulty: 3,
  description: "Continuation of General Chemistry I.",
  department: "CHEM",
  days: ["M", "W", "F", "S"],
  type: "In-Person",
  interests: ["Chemistry", "Reactions", "Solutions"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "35",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "35",
          Remaining_Seats: "8",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Winter 2026",
          Total_Seats: "35",
          Remaining_Seats: "32",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "35",
          Remaining_Seats: "30",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Spring 2025",
          Total_Seats: "35",
          Remaining_Seats: "30",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Clark",
          Location: "Online",
      },
  },
},
{
  id: 61,
  code: "CHEM 201",
  name: "Organic Chemistry I",
  credits: 4,
  difficulty: 5,
  description: "Introduction to the structure, properties, and reactions of organic compounds.",
  department: "CHEM",
  days: ["M", "W", "F", "S"],
  type: "In-Person",
  interests: ["Organic Chemistry", "Chemistry", "Reactions"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "16",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Lee",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "28",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Lee",
          Location: "On-site",
      },
  },
},
{
  id: 62,
  code: "CHEM 202",
  name: "Organic Chemistry II",
  credits: 4,
  difficulty: 5,
  description: "Continuation of Organic Chemistry I.",
  department: "CHEM",
  days: ["T", "TH", "S"],
  type: "In-Person",
  interests: ["Organic Chemistry", "Chemistry", "Synthesis"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "17",
          Time_slot: {
              days: ["T", "TH", "S"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Chen",
          Location: "On-site",
      },
  },
},
{
  id: 63,
  code: "CHEM 301",
  name: "Analytical Chemistry",
  credits: 4,
  difficulty: 4,
  description: "Principles and applications of analytical techniques.",
  department: "CHEM",
  days: ["T", "TH", "S"],
  type: "In-Person",
  interests: ["Analytical Chemistry", "Chemistry", "Spectroscopy"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "19",
          Time_slot: {
              days: ["T", "TH", "S"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Wang",
          Location: "On-site",
      },
  },
},
{
  id: 64,
  code: "CHEM 302",
  name: "Physical Chemistry I",
  credits: 3,
  difficulty: 5,
  description: "Thermodynamics and kinetics.",
  department: "CHEM",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Physical Chemistry", "Chemistry", "Thermodynamics"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Kim",
          Location: "On-site",
      },
  },
},
{
  id: 65,
  code: "CHEM 303",
  name: "Physical Chemistry II",
  credits: 3,
  difficulty: 5,
  description: "Quantum chemistry and spectroscopy.",
  department: "CHEM",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Physical Chemistry", "Chemistry", "Quantum Mechanics"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "12",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. Patel",
          Location: "On-site",
      },
  },
},
{
  id: 66,
  code: "CHEM 310",
  name: "Inorganic Chemistry",
  credits: 3,
  difficulty: 4,
  description: "Study of the chemistry of the elements and their compounds.",
  department: "CHEM",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Inorganic Chemistry", "Chemistry", "Elements"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "8",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Nguyen",
          Location: "On-site",
      },
  },
},
{
  id: 67,
  code: "CHEM 320",
  name: "Environmental Chemistry",
  credits: 3,
  difficulty: 3,
  description: "Chemical processes in the environment.",
  department: "CHEM",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Environmental Chemistry", "Chemistry", "Environment"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "14",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Jackson",
          Location: "On-site",
      },
  },
},
{
  id: 68,
  code: "CHEM 330",
  name: "Biochemistry",
  credits: 3,
  difficulty: 4,
  description: "Chemical processes in biological systems.",
  department: "CHEM",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Biochemistry", "Chemistry", "Biology"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:00",
              endTime: "12:15"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
  },
},
{
  id: 69,
  code: "CHEM 340",
  name: "Instrumental Analysis",
  credits: 4,
  difficulty: 4,
  description: "Use of instruments in chemical analysis.",
  department: "CHEM",
  days: ["M", "W", "F", "S"],
  type: "In-Person",
  interests: ["Instrumental Analysis", "Chemistry", "Spectroscopy"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "15",
          Remaining_Seats: "7",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Anderson",
          Location: "On-site",
      },
  },
},
{
  id: 70,
  code: "CHEM 401",
  name: "Advanced Organic Chemistry",
  credits: 3,
  difficulty: 5,
  description: "Advanced topics in organic chemistry.",
  department: "CHEM",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Organic Chemistry", "Chemistry", "Synthesis"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "12",
          Remaining_Seats: "3",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:30",
              endTime: "10:45"
          },
          Professor_name: "Dr. Miller",
          Location: "On-site",
      },
  },
},
{
  id: 71,
  code: "CHEM 410",
  name: "Quantum Chemistry",
  credits: 3,
  difficulty: 5,
  description: "Application of quantum mechanics to chemical systems.",
  department: "CHEM",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Quantum Chemistry", "Chemistry", "Physics"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "12",
          Remaining_Seats: "9",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Taylor",
          Location: "On-site",
      },
  },
},
{
  id: 72,
  code: "CHEM 420",
  name: "Polymer Chemistry",
  credits: 3,
  difficulty: 4,
  description: "Study of the synthesis, properties, and applications of polymers.",
  department: "CHEM",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Polymer Chemistry", "Chemistry", "Materials Science"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "15",
          Remaining_Seats: "6",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. White",
          Location: "On-site",
      },
  },
},
{
  id: 73,
  code: "CHEM 490",
  name: "Chemistry Research Seminar",
  credits: 3,
  difficulty: 5,
  description: "Capstone research seminar for chemistry majors.",
  department: "CHEM",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Chemistry", "Research", "Seminar"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "10",
          Remaining_Seats: "4",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:00",
              endTime: "12:15"
          },
          Professor_name: "Dr. Green",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "10",
          Remaining_Seats: "7",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:00",
              endTime: "12:15"
          },
          Professor_name: "Dr. Green",
          Location: "On-site",
      },
  },
},
{
  id: 74,
  code: "CS 101",
  name: "Introduction to Programming",
  credits: 3,
  difficulty: 2,
  description: "This course introduces basic programming concepts using Python and problem–solving techniques.",
  department: "CS",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Programming", "Python", "Problem Solving"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025", "Summer 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "35",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "35",
          Remaining_Seats: "5",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Fall 2025",
          Total_Seats: "35",
          Remaining_Seats: "25",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "35",
          Remaining_Seats: "20",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Winter 2026",
          Total_Seats: "35",
          Remaining_Seats: "30",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 006": {
          Semester: "Spring 2025",
          Total_Seats: "35",
          Remaining_Seats: "28",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Brown",
          Location: "Online",
      },
      "Section 007": {
          Semester: "Summer 2025",
          Total_Seats: "30",
          Remaining_Seats: "27",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Lee",
          Location: "Online",
      },
  },
},
{
  id: 75,
  code: "CS 102",
  name: "Data Structures",
  credits: 3,
  difficulty: 3,
  description: "Explore core data structures and algorithmic techniques essential for efficient programming.",
  department: "CS",
  days: ["T", "TH"],
  type: "Hybrid",
  interests: ["Data Structures", "Algorithms", "Efficiency"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "20",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "14:00",
              endTime: "15:15"
          },
          Professor_name: "Dr. Lee",
          Location: "Hybrid",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "35",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "14:00",
              endTime: "15:15"
          },
          Professor_name: "Dr. Chen",
          Location: "Hybrid",
      },
  },
},
{
  id: 76,
  code: "CS 201",
  name: "Computer Systems",
  credits: 3,
  difficulty: 3,
  description: "An in-depth look at computer organization and architecture.",
  department: "CS",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Computer Architecture", "Operating Systems", "Hardware"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "28",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 77,
  code: "CS 210",
  name: "Database Management",
  credits: 3,
  difficulty: 3,
  description: "Principles of database design, implementation, and management.",
  department: "CS",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Databases", "SQL", "Data Management"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "22",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "28",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
  },
},
{
  id: 78,
  code: "CS 220",
  name: "Web Development",
  credits: 3,
  difficulty: 3,
  description: "Introduction to web technologies, including HTML, CSS, and JavaScript.",
  department: "CS",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Web Development", "HTML", "CSS", "JavaScript"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "35",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "35",
          Remaining_Seats: "30",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Spring 2025",
          Total_Seats: "35",
          Remaining_Seats: "35",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Jones",
          Location: "Online",
      },
  },
},
{
  id: 79,
  code: "CS 301",
  name: "Algorithms",
  credits: 3,
  difficulty: 4,
  description: "Design and analysis of algorithms.",
  department: "CS",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Algorithms", "Computer Science", "Efficiency"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "11",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "14:00",
              endTime: "15:15"
          },
          Professor_name: "Dr. Kim",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "20",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "14:00",
              endTime: "15:15"
          },
          Professor_name: "Dr. Kim",
          Location: "On-site",
      },
  },
},
{
  id: 80,
  code: "CS 310",
  name: "Operating Systems",
  credits: 3,
  difficulty: 4,
  description: "Principles and design of operating systems.",
  department: "CS",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Operating Systems", "Computer Science", "Systems Programming"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "6",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
  },
},
{
  id: 81,
  code: "CS 320",
  name: "Software Engineering",
  credits: 3,
  difficulty: 4,
  description: "Software development methodologies and practices.",
  department: "CS",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Software Engineering", "Software Development", "Project Management"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:30",
              endTime: "10:45"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
  },
},
{
  id: 82,
  code: "CS 330",
  name: "Computer Networks",
  credits: 3,
  difficulty: 4,
  description: "Principles of computer networks and data communication.",
  department: "CS",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Computer Networks", "Networking", "Data Communication"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Miller",
          Location: "On-site",
      },
  },
},
{
  id: 83,
  code: "CS 340",
  name: "Artificial Intelligence",
  credits: 3,
  difficulty: 4,
  description: "Introduction to artificial intelligence concepts and techniques.",
  department: "CS",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Artificial Intelligence", "Machine Learning", "AI"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Taylor",
          Location: "On-site",
      },
  },
},
{
  id: 84,
  code: "CS 350",
  name: "Computer Graphics",
  credits: 3,
  difficulty: 4,
  description: "Principles of computer graphics and visualization.",
  department: "CS",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Computer Graphics", "Visualization", "3D Modeling"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "15",
          Remaining_Seats: "5",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. White",
          Location: "On-site",
      },
  },
},
{
  id: 85,
  code: "CS 401",
  name: "Machine Learning",
  credits: 3,
  difficulty: 5,
  description: "Machine learning algorithms and techniques.",
  department: "CS",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Machine Learning", "AI", "Data Science"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "15",
          Remaining_Seats: "11",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:00",
              endTime: "12:15"
          },
          Professor_name: "Dr. Anderson",
          Location: "On-site",
      },
  },
},
{
  id: 86,
  code: "CS 410",
  name: "Cybersecurity",
  credits: 3,
  difficulty: 4,
  description: "Principles of cybersecurity and network security.",
  department: "CS",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Cybersecurity", "Network Security", "Cryptography"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "15",
          Remaining_Seats: "8",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
  },
},
{
  id: 87,
  code: "CS 420",
  name: "Cloud Computing",
  credits: 3,
  difficulty: 4,
  description: "Introduction to cloud computing concepts and technologies.",
  department: "CS",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Cloud Computing", "Virtualization", "Distributed Systems"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "15",
          Remaining_Seats: "12",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 88,
  code: "CS 490",
  name: "Senior Project",
  credits: 3,
  difficulty: 5,
  description: "Capstone project for computer science majors.",
  department: "CS",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Computer Science", "Project Management", "Capstone"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "10",
          Remaining_Seats: "3",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "10",
          Remaining_Seats: "6",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
  },
},
{
  id: 89,
  code: "PSY 101",
  name: "Introduction to Psychology",
  credits: 3,
  difficulty: 2,
  description: "Overview of the major concepts and perspectives in psychology.",
  department: "PSY",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Psychology", "Behavior", "Cognition"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025", "Summer 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "50",
          Remaining_Seats: "30",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "50",
          Remaining_Seats: "20",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Jones",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Fall 2025",
          Total_Seats: "50",
          Remaining_Seats: "40",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "50",
          Remaining_Seats: "40",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Winter 2026",
          Total_Seats: "50",
          Remaining_Seats: "45",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Jones",
          Location: "On-site",
      },
      "Section 006": {
          Semester: "Spring 2025",
          Total_Seats: "50",
          Remaining_Seats: "40",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Davis",
          Location: "Online",
      },
      "Section 007": {
          Semester: "Summer 2025",
          Total_Seats: "40",
          Remaining_Seats: "35",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Garcia",
          Location: "Online",
      },
  },
},
{
  id: 90,
  code: "PSY 201",
  name: "Developmental Psychology",
  credits: 3,
  difficulty: 3,
  description: "Study of human development across the lifespan.",
  department: "PSY",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Developmental Psychology", "Lifespan", "Child Psychology"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "25",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "35",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
  },
},
{
  id: 91,
  code: "PSY 202",
  name: "Social Psychology",
  credits: 3,
  difficulty: 3,
  description: "Study of how individuals' thoughts, feelings, and behaviors are influenced by others.",
  department: "PSY",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Social Psychology", "Social Behavior", "Groups"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "30",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "38",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
  },
},
{
  id: 92,
  code: "PSY 210",
  name: "Abnormal Psychology",
  credits: 3,
  difficulty: 3,
  description: "Study of psychological disorders and their treatment.",
  department: "PSY",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Abnormal Psychology", "Mental Health", "Psychopathology"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "28",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "35",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Spring 2025",
          Total_Seats: "40",
          Remaining_Seats: "39",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Lee",
          Location: "Online",
      },
  },
},
{
  id: 93,
  code: "PSY 301",
  name: "Cognitive Psychology",
  credits: 3,
  difficulty: 4,
  description: "Study of mental processes, such as memory, perception, and language.",
  department: "PSY",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Cognitive Psychology", "Cognition", "Memory"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "16",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "22",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 94,
  code: "PSY 310",
  name: "Research Methods",
  credits: 3,
  difficulty: 4,
  description: "Principles of research design and data analysis in psychology.",
  department: "PSY",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Research Methods", "Psychology", "Statistics"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "14",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:30",
              endTime: "10:45"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "28",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:30",
              endTime: "10:45"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
  },
},
{
  id: 95,
  code: "PSY 320",
  name: "Personality Theory",
  credits: 3,
  difficulty: 3,
  description: "Study of different theories of personality.",
  department: "PSY",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Personality", "Psychology", "Theories"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "20",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
  },
},
{
  id: 96,
  code: "PSY 330",
  name: "Learning and Memory",
  credits: 3,
  difficulty: 4,
  description: "Study of the principles of learning and memory.",
  department: "PSY",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Learning", "Memory", "Cognition"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "25",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Jones",
          Location: "On-site",
      },
  },
},
{
  id: 97,
  code: "PSY 340",
  name: "Industrial Psychology",
  credits: 3,
  difficulty: 3,
  description: "Application of psychological principles to the workplace.",
  department: "PSY",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Industrial Psychology", "Workplace", "Human Resources"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
  },
},
{
  id: 98,
  code: "PSY 350",
  name: "Clinical Psychology",
  credits: 3,
  difficulty: 4,
  description: "Study of the assessment and treatment of psychological disorders.",
  department: "PSY",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Clinical Psychology", "Therapy", "Psychotherapy"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "17",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 99,
  code: "PSY 360",
  name: "Behavioral Neuroscience",
  credits: 3,
  difficulty: 4,
  description: "Study of the biological bases of behavior.",
  department: "PSY",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Behavioral Neuroscience", "Neuroscience", "Biology"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "9",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
  },
},
{
  id: 100,
  code: "PSY 401",
  name: "Psychological Testing",
  credits: 3,
  difficulty: 4,
  description: "Principles and applications of psychological tests.",
  department: "PSY",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Psychological Testing", "Assessment", "Statistics"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "19",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
  },
},
{
  id: 101,
  code: "PSY 410",
  name: "Counseling Psychology",
  credits: 3,
  difficulty: 4,
  description: "Principles and techniques of counseling.",
  department: "PSY",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Counseling Psychology", "Therapy", "Helping Skills"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "20",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Jones",
          Location: "On-site",
      },
  },
},
{
  id: 102,
  code: "PSY 420",
  name: "Health Psychology",
  credits: 3,
  difficulty: 3,
  description: "Study of the psychological factors related to health and illness.",
  department: "PSY",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Health Psychology", "Wellness", "Stress"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:00",
              endTime: "12:15"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
  },
},
{
  id: 103,
  code: "PSY 490",
  name: "Senior Seminar",
  credits: 3,
  difficulty: 5,
  description: "Capstone seminar for psychology majors.",
  department: "PSY",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Psychology", "Research", "Seminar"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "10",
          Remaining_Seats: "4",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "10",
          Remaining_Seats: "6",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
  },
},
{
  id: 104,
  code: "ECON 101",
  name: "Principles of Microeconomics",
  credits: 3,
  difficulty: 2,
  description: "Introduction to the basic principles of microeconomics.",
  department: "ECON",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Microeconomics", "Economics", "Supply and Demand"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025", "Summer 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "45",
          Remaining_Seats: "25",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "45",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Fall 2025",
          Total_Seats: "45",
          Remaining_Seats: "30",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "45",
          Remaining_Seats: "35",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Winter 2026",
          Total_Seats: "45",
          Remaining_Seats: "40",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 006": {
          Semester: "Spring 2025",
          Total_Seats: "45",
          Remaining_Seats: "40",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Brown",
          Location: "Online",
      },
      "Section 007": {
          Semester: "Summer 2025",
          Total_Seats: "35",
          Remaining_Seats: "30",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Lee",
          Location: "Online",
      },
  },
},
{
  id: 105,
  code: "ECON 102",
  name: "Principles of Macroeconomics",
  credits: 3,
  difficulty: 2,
  description: "Introduction to the basic principles of macroeconomics.",
  department: "ECON",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Macroeconomics", "Economics", "GDP"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025", "Summer 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "45",
          Remaining_Seats: "28",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "45",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Fall 2025",
          Total_Seats: "45",
          Remaining_Seats: "35",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Miller",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "45",
          Remaining_Seats: "40",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Winter 2026",
          Total_Seats: "45",
          Remaining_Seats: "42",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
      "Section 006": {
          Semester: "Spring 2025",
          Total_Seats: "45",
          Remaining_Seats: "40",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Davis",
          Location: "Online",
      },
      "Section 007": {
          Semester: "Summer 2025",
          Total_Seats: "35",
          Remaining_Seats: "32",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Wilson",
          Location: "Online",
      },
  },
},
{
  id: 106,
  code: "ECON 201",
  name: "Intermediate Microeconomics",
  credits: 3,
  difficulty: 3,
  description: "Advanced study of microeconomic principles.",
  department: "ECON",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Microeconomics", "Economics", "Consumer Behavior"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "16",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "14:00",
              endTime: "15:15"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "28",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "14:00",
              endTime: "15:15"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
  },
},
{
  id: 107,
  code: "ECON 202",
  name: "Intermediate Macroeconomics",
  credits: 3,
  difficulty: 3,
  description: "Advanced study of macroeconomic principles.",
  department: "ECON",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Macroeconomics", "Economics", "Economic Growth"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "22",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Green",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "28",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Green",
          Location: "On-site",
      },
  },
},
{
  id: 108,
  code: "ECON 301",
  name: "International Economics",
  credits: 3,
  difficulty: 3,
  description: "Study of international trade, finance, and economic policy.",
  department: "ECON",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["International Economics", "Trade", "Globalization"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Lee",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "20",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Lee",
          Location: "On-site",
      },
  },
},
{
  id: 109,
  code: "ECON 310",
  name: "Money and Banking",
  credits: 3,
  difficulty: 3,
  description: "Study of financial markets and institutions.",
  department: "ECON",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Money and Banking", "Finance", "Monetary Policy"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "12",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:30",
              endTime: "10:45"
          },
          Professor_name: "Dr. Clark",
          Location: "On-site",
      },
  },
},
{
  id: 110,
  code: "ECON 320",
  name: "Economic Development",
  credits: 3,
  difficulty: 3,
  description: "Economic issues related to developing countries.",
  department: "ECON",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Economic Development", "Poverty", "Growth"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "19",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. White",
          Location: "On-site",
      },
  },
},
{
  id: 111,
  code: "ECON 330",
  name: "Labor Economics",
  credits: 3,
  difficulty: 3,
  description: "Economic analysis of the labor market.",
  department: "ECON",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Labor Economics", "Employment", "Wages"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "17",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Anderson",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "23",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Anderson",
          Location: "On-site",
      },
  },
},
{
  id: 112,
  code: "ECON 340",
  name: "Public Finance",
  credits: 3,
  difficulty: 3,
  description: "Economics of government spending, taxation, and debt.",
  department: "ECON",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Public Finance", "Taxation", "Government Spending"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:00",
              endTime: "12:15"
          },
          Professor_name: "Dr. Taylor",
          Location: "On-site",
      },
  },
},
{
  id: 113,
  code: "ECON 350",
  name: "Environmental Economics",
  credits: 3,
  difficulty: 3,
  description: "Application of economics to environmental issues.",
  department: "ECON",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Environmental Economics", "Sustainability", "Pollution"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "14",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Harris",
          Location: "On-site",
      },
  },
},
{
  id: 114,
  code: "ECON 360",
  name: "Industrial Organization",
  credits: 3,
  difficulty: 3,
  description: "Study of market structure and firm behavior.",
  department: "ECON",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Industrial Organization", "Market Structure", "Competition"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "17",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Moore",
          Location: "On-site",
      },
  },
},
{
  id: 115,
  code: "ECON 401",
  name: "Econometrics",
  credits: 3,
  difficulty: 4,
  description: "Application of statistical methods to economic data.",
  department: "ECON",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Econometrics", "Statistics", "Data Analysis"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "9",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. King",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. King",
          Location: "On-site",
      },
  },
},
{
  id: 116,
  code: "ECON 410",
  name: "Game Theory",
  credits: 3,
  difficulty: 4,
  description: "Analysis of strategic decision-making.",
  department: "ECON",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Game Theory", "Decision Making", "Strategy"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "15",
          Remaining_Seats: "8",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:30",
              endTime: "10:45"
          },
          Professor_name: "Dr. Scott",
          Location: "On-site",
      },
  },
},
{
  id: 117,
  code: "ECON 420",
  name: "Urban Economics",
  credits: 3,
  difficulty: 3,
  description: "Application of economic principles to urban areas.",
  department: "ECON",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Urban Economics", "Cities", "Real Estate"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "15",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Young",
          Location: "On-site",
      },
  },
},
{
  id: 118,
  code: "ECON 490",
  name: "Senior Research Seminar",
  credits: 3,
  difficulty: 5,
  description: "Capstone seminar for economics majors.",
  department: "ECON",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Economics", "Research", "Seminar"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "10",
          Remaining_Seats: "3",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:00",
              endTime: "12:15"
          },
          Professor_name: "Dr. Hall",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "10",
          Remaining_Seats: "7",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:00",
              endTime: "12:15"
          },
          Professor_name: "Dr. Hall",
          Location: "On-site",
      },
  },
},
{
  id: 119,
  code: "HIST 101",
  name: "World History I",
  credits: 3,
  difficulty: 2,
  description: "Overview of world history from ancient times to the 16th century.",
  department: "HIST",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["World History", "Ancient History", "Medieval History"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025", "Summer 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "20",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Adams",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Baker",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "35",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Carter",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "30",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Adams",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "38",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Baker",
          Location: "On-site",
      },
      "Section 006": {
          Semester: "Spring 2025",
          Total_Seats: "40",
          Remaining_Seats: "35",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Davis",
          Location: "Online",
      },
      "Section 007": {
          Semester: "Summer 2025",
          Total_Seats: "30",
          Remaining_Seats: "25",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Evans",
          Location: "Online",
      },
  },
},
{
  id: 120,
  code: "HIST 102",
  name: "World History II",
  credits: 3,
  difficulty: 2,
  description: "Overview of world history from the 16th century to the present.",
  department: "HIST",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["World History", "Modern History", "Global History"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "22",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "12",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Evans",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "33",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "39",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Evans",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Spring 2025",
          Total_Seats: "40",
          Remaining_Seats: "38",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Green",
          Location: "Online",
      },
  },
},
{
  id: 121,
  code: "HIST 201",
  name: "U.S. History to 1877",
  credits: 3,
  difficulty: 3,
  description: "Survey of U.S. history from pre-Columbian times to 1877.",
  department: "HIST",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["US History", "American History", "Colonialism"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "35",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:00",
              endTime: "10:15"
          },
          Professor_name: "Dr. Miller",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "35",
          Remaining_Seats: "30",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:00",
              endTime: "10:15"
          },
          Professor_name: "Dr. Miller",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Spring 2025",
          Total_Seats: "35",
          Remaining_Seats: "32",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. White",
          Location: "Online",
      },
  },
},
{
  id: 122,
  code: "HIST 202",
  name: "U.S. History since 1877",
  credits: 3,
  difficulty: 3,
  description: "Survey of U.S. history from 1877 to the present.",
  department: "HIST",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["US History", "Modern US History", "Civil Rights"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "35",
          Remaining_Seats: "25",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "35",
          Remaining_Seats: "32",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Spring 2025",
          Total_Seats: "35",
          Remaining_Seats: "34",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Jones",
          Location: "Online",
      },
  },
},
{
  id: 123,
  code: "HIST 301",
  name: "Ancient History",
  credits: 3,
  difficulty: 3,
  description: "Study of the history of ancient civilizations.",
  department: "HIST",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Ancient History", "Greece", "Rome"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "14",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "20",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 124,
  code: "HIST 310",
  name: "Medieval Europe",
  credits: 3,
  difficulty: 3,
  description: "Study of the history of Europe during the Middle Ages.",
  department: "HIST",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Medieval History", "Europe", "Middle Ages"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "9",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "19",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
  },
},
{
  id: 125,
  code: "HIST 320",
  name: "Renaissance and Reformation",
  credits: 3,
  difficulty: 3,
  description: "Study of the Renaissance and Reformation periods in European history.",
  department: "HIST",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Renaissance", "Reformation", "Europe"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
  },
},
{
  id: 126,
  code: "HIST 330",
  name: "Modern Europe",
  credits: 3,
  difficulty: 3,
  description: "Study of European history since the 18th century.",
  department: "HIST",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Modern Europe", "History", "18th Century"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "16",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Jones",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "24",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Jones",
          Location: "On-site",
      },
  },
},
{
  id: 127,
  code: "HIST 340",
  name: "Asian History",
  credits: 3,
  difficulty: 3,
  description: "Survey of the history of Asia.",
  department: "HIST",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Asian History", "China", "Japan"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "11",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
  },
},
{
  id: 128,
  code: "HIST 350",
  name: "Latin American History",
  credits: 3,
  difficulty: 3,
  description: "Survey of the history of Latin America.",
  department: "HIST",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Latin American History", "South America", "Colonies"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "13",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Taylor",
          Location: "On-site",
      },
  },
},
{
  id: 129,
  code: "HIST 360",
  name: "African History",
  credits: 3,
  difficulty: 3,
  description: "Survey of the history of Africa.",
  department: "HIST",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["African History", "Africa", "Colonialism"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Clark",
          Location: "On-site",
      },
  },
},
{
  id: 130,
  code: "HIST 401",
  name: "Historical Methods",
  credits: 3,
  difficulty: 4,
  description: "Introduction to historical research and writing methods.",
  department: "HIST",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Historical Methods", "Research", "Writing"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "15",
          Remaining_Seats: "8",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "14:30",
              endTime: "15:45"
          },
          Professor_name: "Dr. Harris",
          Location: "On-site",
      },
  },
},
{
  id: 131,
  code: "HIST 410",
  name: "American Revolution",
  credits: 3,
  difficulty: 4,
  description: "In-depth study of the American Revolution.",
  department: "HIST",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["American Revolution", "US History", "Colonial America"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "15",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
  },
},
{
  id: 132,
  code: "HIST 420",
  name: "Civil War Era",
  credits: 3,
  difficulty: 4,
  description: "In-depth study of the Civil War era in American history.",
  department: "HIST",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Civil War", "US History", "Reconstruction"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "15",
          Remaining_Seats: "5",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
  },
},
{
  id: 133,
  code: "HIST 490",
  name: "Senior Research Seminar",
  credits: 3,
  difficulty: 5,
  description: "Capstone seminar for history majors.",
  department: "HIST",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["History", "Research", "Seminar"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "10",
          Remaining_Seats: "2",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. White",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "10",
          Remaining_Seats: "4",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. White",
          Location: "On-site",
      },
  },
},
{
  id: 134,
  code: "ME EN 101",
  name: "Introduction to Engineering",
  credits: 3,
  difficulty: 2,
  description: "Overview of engineering disciplines and problem-solving.",
  department: "ME EN",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Engineering", "Problem Solving", "Design"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025", "Summer 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "28",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "20",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "35",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "36",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "39",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 006": {
          Semester: "Spring 2025",
          Total_Seats: "40",
          Remaining_Seats: "40",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Brown",
          Location: "Online",
      },
      "Section 007": {
          Semester: "Summer 2025",
          Total_Seats: "30",
          Remaining_Seats: "29",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Lee",
          Location: "Online",
      },
  },
},
{
  id: 135,
  code: "ME EN 201",
  name: "Engineering Graphics",
  credits: 3,
  difficulty: 2,
  description: "Introduction to engineering drawing and design.",
  department: "ME EN",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Engineering Graphics", "CAD", "Technical Drawing"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "35",
          Remaining_Seats: "19",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "35",
          Remaining_Seats: "33",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 136,
  code: "ME EN 202",
  name: "Mechanics of Materials",
  credits: 3,
  difficulty: 3,
  description: "Study of stress, strain, and material behavior.",
  department: "ME EN",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Mechanics of Materials", "Stress", "Strain"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "24",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "28",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
  },
},
{
  id: 137,
  code: "ME EN 301",
  name: "Thermodynamics",
  credits: 3,
  difficulty: 4,
  description: "Principles of thermodynamics and their applications.",
  department: "ME EN",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Thermodynamics", "Heat", "Energy"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:00",
              endTime: "12:15"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "23",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:00",
              endTime: "12:15"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
  },
},
{
  id: 138,
  code: "ME EN 302",
  name: "Fluid Mechanics",
  credits: 3,
  difficulty: 4,
  description: "Study of the behavior of fluids.",
  department: "ME EN",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Fluid Mechanics", "Fluids", "Pressure"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "19",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Jones",
          Location: "On-site",
      },
  },
},
{
  id: 139,
  code: "ME EN 310",
  name: "Heat Transfer",
  credits: 3,
  difficulty: 4,
  description: "Study of heat transfer mechanisms.",
  department: "ME EN",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Heat Transfer", "Heat", "Conduction"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "14:00",
              endTime: "15:15"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
  },
},
{
  id: 140,
  code: "ME EN 320",
  name: "Dynamic Systems",
  credits: 3,
  difficulty: 4,
  description: "Modeling and analysis of dynamic systems.",
  department: "ME EN",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Dynamic Systems", "Modeling", "Control"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "16",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Taylor",
          Location: "On-site",
      },
  },
},
{
  id: 141,
  code: "ME EN 330",
  name: "Machine Design",
  credits: 3,
  difficulty: 4,
  description: "Design and analysis of mechanical components and systems.",
  department: "ME EN",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Machine Design", "Mechanical Engineering", "Design"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "12",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:30",
              endTime: "10:45"
          },
          Professor_name: "Dr. White",
          Location: "On-site",
      },
  },
},
{
  id: 142,
  code: "ME EN 340",
  name: "Manufacturing Processes",
  credits: 3,
  difficulty: 3,
  description: "Study of manufacturing processes and techniques.",
  department: "ME EN",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Manufacturing", "Processes", "Production"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "13",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
  },
},
{
  id: 143,
  code: "ME EN 350",
  name: "Control Systems",
  credits: 3,
  difficulty: 4,
  description: "Introduction to control systems theory and applications.",
  department: "ME EN",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Control Systems", "Feedback", "Automation"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "17",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "14:00",
              endTime: "15:15"
          },
          Professor_name: "Dr. Jones",
          Location: "On-site",
      },
  },
},
{
  id: 144,
  code: "ME EN 401",
  name: "Robotics",
  credits: 3,
  difficulty: 4,
  description: "Introduction to the principles of robotics.",
  department: "ME EN",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Robotics", "Automation", "Programming"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "15",
          Remaining_Seats: "7",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
  },
},
{
  id: 145,
  code: "ME EN 410",
  name: "Finite Element Analysis",
  credits: 3,
  difficulty: 5,
  description: "Application of finite element methods to engineering problems.",
  department: "ME EN",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Finite Element Analysis", "Simulation", "Structural Analysis"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "15",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 146,
  code: "ME EN 420",
  name: "Mechanical Vibrations",
  credits: 3,
  difficulty: 4,
  description: "Study of mechanical vibrations and their analysis.",
  department: "ME EN",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Mechanical Vibrations", "Vibration Analysis", "Dynamics"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "15",
          Remaining_Seats: "13",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
  },
},
{
  id: 147,
  code: "ME EN 430",
  name: "HVAC Systems",
  credits: 3,
  difficulty: 4,
  description: "Design and analysis of heating, ventilation, and air conditioning systems.",
  department: "ME EN",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["HVAC", "Mechanical Engineering", "Building Systems"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "15",
          Remaining_Seats: "8",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
  },
},
{
  id: 148,
  code: "ME EN 490",
  name: "Senior Design Project",
  credits: 3,
  difficulty: 5,
  description: "Capstone design project for mechanical engineering majors.",
  department: "ME EN",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Mechanical Engineering", "Design", "Project"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "10",
          Remaining_Seats: "4",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "10",
          Remaining_Seats: "7",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
  },
},
{
  id: 149,
  code: "NURS 101",
  name: "Introduction to Nursing",
  credits: 3,
  difficulty: 2,
  description: "An introduction to the nursing profession.",
  department: "NURS",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Nursing", "Healthcare", "Patient Care"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025", "Summer 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "30",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "25",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "38",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "39",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "40",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 006": {
          Semester: "Spring 2025",
          Total_Seats: "30",
          Remaining_Seats: "28",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Green",
          Location: "Online",
      },
      "Section 007": {
          Semester: "Summer 2025",
          Total_Seats: "30",
          Remaining_Seats: "30",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Taylor",
          Location: "Online",
      },
  },
},
{
  id: 150,
  code: "NURS 201",
  name: "Health Assessment",
  credits: 3,
  difficulty: 3,
  description: "Skills and techniques for health assessment.",
  department: "NURS",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Health Assessment", "Nursing Skills", "Physical Exams"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "20",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "28",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 151,
  code: "NURS 202",
  name: "Fundamentals of Nursing",
  credits: 4,
  difficulty: 3,
  description: "Introduction to basic nursing skills and concepts.",
  department: "NURS",
  days: ["M", "W", "F", "S"],
  type: "In-Person",
  interests: ["Fundamentals of Nursing", "Nursing Skills", "Patient Care"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "35",
          Remaining_Seats: "24",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "35",
          Remaining_Seats: "30",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
  },
},
{
  id: 152,
  code: "NURS 301",
  name: "Adult Health Nursing I",
  credits: 4,
  difficulty: 4,
  description: "Nursing care of adult patients.",
  department: "NURS",
  days: ["M", "W", "F", "S"],
  type: "In-Person",
  interests: ["Adult Health Nursing", "Nursing", "Patient Care"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "21",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "27",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
  },
},
{
  id: 153,
  code: "NURS 302",
  name: "Adult Health Nursing II",
  credits: 4,
  difficulty: 4,
  description: "Advanced nursing care of adult patients.",
  department: "NURS",
  days: ["T", "TH", "S"],
  type: "In-Person",
  interests: ["Adult Health Nursing", "Advanced Nursing", "Critical Care"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["T", "TH", "S"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Jones",
          Location: "On-site",
      },
  },
},
{
  id: 154,
  code: "NURS 310",
  name: "Pediatric Nursing",
  credits: 4,
  difficulty: 4,
  description: "Nursing care of infants, children, and adolescents.",
  department: "NURS",
  days: ["M", "W", "F", "S"],
  type: "In-Person",
  interests: ["Pediatric Nursing", "Children", "Healthcare"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "19",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
  },
},
{
  id: 155,
  code: "NURS 320",
  name: "Maternal Health Nursing",
  credits: 4,
  difficulty: 4,
  description: "Nursing care of women during pregnancy, childbirth, and postpartum.",
  department: "NURS",
  days: ["T", "TH", "S"],
  type: "In-Person",
  interests: ["Maternal Health", "Obstetrics", "Pregnancy"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["T", "TH", "S"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
  },
},
{
  id: 156,
  code: "NURS 330",
  name: "Mental Health Nursing",
  credits: 4,
  difficulty: 4,
  description: "Nursing care of patients with mental health disorders.",
  department: "NURS",
  days: ["M", "W", "F", "S"],
  type: "In-Person",
  interests: ["Mental Health", "Psychiatric Nursing", "Counseling"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "14",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Miller",
          Location: "On-site",
      },
  },
},
{
  id: 157,
  code: "NURS 340",
  name: "Community Health Nursing",
  credits: 3,
  difficulty: 3,
  description: "Nursing care in community settings.",
  department: "NURS",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Community Health", "Public Health", "Nursing"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "17",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:30",
              endTime: "10:45"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 158,
  code: "NURS 350",
  name: "Nursing Research",
  credits: 3,
  difficulty: 4,
  description: "Introduction to nursing research methods.",
  department: "NURS",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Nursing Research", "Research Methods", "Evidence-Based Practice"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "16",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
  },
},
{
  id: 159,
  code: "NURS 401",
  name: "Critical Care Nursing",
  credits: 4,
  difficulty: 5,
  description: "Nursing care of critically ill patients.",
  department: "NURS",
  days: ["M", "W", "F", "S"],
  type: "In-Person",
  interests: ["Critical Care", "Intensive Care", "Advanced Nursing"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "15",
          Remaining_Seats: "9",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. Anderson",
          Location: "On-site",
      },
  },
},
{
  id: 160,
  code: "NURS 410",
  name: "Nursing Leadership",
  credits: 3,
  difficulty: 4,
  description: "Principles of leadership in nursing.",
  department: "NURS",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Nursing Leadership", "Management", "Healthcare"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "15",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:00",
              endTime: "12:15"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
  },
},
{
  id: 161,
  code: "NURS 420",
  name: "Emergency Nursing",
  credits: 4,
  difficulty: 5,
  description: "Nursing care in emergency situations.",
  department: "NURS",
  days: ["M", "W", "F", "S"],
  type: "In-Person",
  interests: ["Emergency Nursing", "Trauma", "Acute Care"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "15",
          Remaining_Seats: "12",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
  },
},
{
  id: 162,
  code: "NURS 430",
  name: "Geriatric Nursing",
  credits: 4,
  difficulty: 4,
  description: "Nursing care of older adults.",
  department: "NURS",
  days: ["T", "TH", "S"],
  type: "In-Person",
  interests: ["Geriatric Nursing", "Elderly Care", "Aging"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "15",
          Remaining_Seats: "5",
          Time_slot: {
              days: ["T", "TH", "S"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
  },
},
{
  id: 163,
  code: "NURS 490",
  name: "Nursing Capstone",
  credits: 3,
  difficulty: 5,
  description: "Capstone project for nursing majors.",
  department: "NURS",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Nursing", "Capstone", "Clinical Practice"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "10",
          Remaining_Seats: "3",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "10",
          Remaining_Seats: "6",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
  },
},
{
  id: 164,
  code: "POLS 101",
  name: "American Government",
  credits: 3,
  difficulty: 2,
  description: "Introduction to the structure and function of the U.S. government.",
  department: "POLS",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["American Government", "Politics", "Civics"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025", "Summer 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "50",
          Remaining_Seats: "35",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "50",
          Remaining_Seats: "25",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Fall 2025",
          Total_Seats: "50",
          Remaining_Seats: "45",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "50",
          Remaining_Seats: "48",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Winter 2026",
          Total_Seats: "50",
          Remaining_Seats: "49",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 006": {
          Semester: "Spring 2025",
          Total_Seats: "50",
          Remaining_Seats: "48",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Brown",
          Location: "Online",
      },
      "Section 007": {
          Semester: "Summer 2025",
          Total_Seats: "40",
          Remaining_Seats: "39",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Lee",
          Location: "Online",
      },
  },
},
{
  id: 165,
  code: "POLS 201",
  name: "International Relations",
  credits: 3,
  difficulty: 3,
  description: "Study of the relationships between states and other actors in the international system.",
  department: "POLS",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["International Relations", "Foreign Policy", "Global Affairs"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "22",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "35",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 166,
  code: "POLS 210",
  name: "Comparative Politics",
  credits: 3,
  difficulty: 3,
  description: "Comparison of political systems across different countries.",
  department: "POLS",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Comparative Politics", "Political Systems", "Democracy"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "30",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "38",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Spring 2025",
          Total_Seats: "40",
          Remaining_Seats: "39",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. White",
          Location: "Online",
      },
  },
},
{
  id: 167,
  code: "POLS 301",
  name: "Political Theory",
  credits: 3,
  difficulty: 4,
  description: "Study of major political thinkers and ideas.",
  department: "POLS",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Political Theory", "Philosophy", "Ideology"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "19",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:30",
              endTime: "10:45"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "25",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:30",
              endTime: "10:45"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
  },
},
{
  id: 168,
  code: "POLS 310",
  name: "Public Policy",
  credits: 3,
  difficulty: 3,
  description: "Analysis of public policy-making processes.",
  department: "POLS",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Public Policy", "Policy Analysis", "Government"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "12",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Jones",
          Location: "On-site",
      },
  },
},
{
  id: 169,
  code: "POLS 320",
  name: "Constitutional Law",
  credits: 3,
  difficulty: 4,
  description: "Study of the U.S. Constitution and Supreme Court decisions.",
  department: "POLS",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Constitutional Law", "Law", "Supreme Court"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "22",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
  },
},
{
  id: 170,
  code: "POLS 330",
  name: "European Politics",
  credits: 3,
  difficulty: 3,
  description: "Study of political systems and processes in Europe.",
  department: "POLS",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["European Politics", "Politics", "EU"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "16",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 171,
  code: "POLS 340",
  name: "Middle East Politics",
  credits: 3,
  difficulty: 3,
  description: "Study of political dynamics in the Middle East.",
  department: "POLS",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Middle East Politics", "Politics", "Conflict"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Miller",
          Location: "On-site",
      },
  },
},
{
  id: 172,
  code: "POLS 350",
  name: "Asian Politics",
  credits: 3,
  difficulty: 3,
  description: "Study of political systems and processes in Asia.",
  department: "POLS",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Asian Politics", "Politics", "China"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "17",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
  },
},
{
  id: 173,
  code: "POLS 401",
  name: "Political Research Methods",
  credits: 3,
  difficulty: 4,
  description: "Introduction to research methods in political science.",
  department: "POLS",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Political Research", "Research Methods", "Data Analysis"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "7",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "14:30",
              endTime: "15:45"
          },
          Professor_name: "Dr. Harris",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "14:30",
              endTime: "15:45"
          },
          Professor_name: "Dr. Harris",
          Location: "On-site",
      },
  },
},
{
  id: 174,
  code: "POLS 410",
  name: "American Foreign Policy",
  credits: 3,
  difficulty: 3,
  description: "Study of U.S. foreign policy decision-making.",
  department: "POLS",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["American Foreign Policy", "Foreign Policy", "Diplomacy"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "11",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. White",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. White",
          Location: "On-site",
      },
  },
},
{
  id: 175,
  code: "POLS 490",
  name: "Senior Seminar",
  credits: 3,
  difficulty: 5,
  description: "Capstone seminar for political science majors.",
  department: "POLS",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Political Science", "Research", "Seminar"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "10",
          Remaining_Seats: "5",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:00",
              endTime: "10:15"
          },
          Professor_name: "Dr. Anderson",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "10",
          Remaining_Seats: "8",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:00",
              endTime: "10:15"
          },
          Professor_name: "Dr. Anderson",
          Location: "On-site",
      },
  },
},
{
  id: 176,
  code: "SOC 101",
  name: "Introduction to Sociology",
  credits: 3,
  difficulty: 2,
  description: "Introduction to the basic concepts and perspectives in sociology.",
  department: "SOC",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Sociology", "Society", "Culture"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025", "Summer 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "50",
          Remaining_Seats: "35",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "50",
          Remaining_Seats: "20",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Fall 2025",
          Total_Seats: "50",
          Remaining_Seats: "40",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "50",
          Remaining_Seats: "42",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Winter 2026",
          Total_Seats: "50",
          Remaining_Seats: "48",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 006": {
          Semester: "Spring 2025",
          Total_Seats: "50",
          Remaining_Seats: "45",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Brown",
          Location: "Online",
      },
      "Section 007": {
          Semester: "Summer 2025",
          Total_Seats: "40",
          Remaining_Seats: "38",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Lee",
          Location: "Online",
      },
  },
},
{
  id: 177,
  code: "SOC 201",
  name: "Social Problems",
  credits: 3,
  difficulty: 2,
  description: "Examination of major social problems and their causes.",
  department: "SOC",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Social Problems", "Sociology", "Inequality"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "28",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "37",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 178,
  code: "SOC 210",
  name: "Marriage and Family",
  credits: 3,
  difficulty: 3,
  description: "Study of marriage and family structures.",
  department: "SOC",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Marriage", "Family", "Relationships"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "35",
          Remaining_Seats: "24",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "35",
          Remaining_Seats: "32",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Spring 2025",
          Total_Seats: "35",
          Remaining_Seats: "35",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Miller",
          Location: "Online",
      },
  },
},
{
  id: 179,
  code: "SOC 301",
  name: "Research Methods",
  credits: 3,
  difficulty: 4,
  description: "Introduction to research methods in sociology.",
  department: "SOC",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Research Methods", "Sociology", "Statistics"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "26",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
  },
},
{
  id: 180,
  code: "SOC 310",
  name: "Race and Ethnicity",
  credits: 3,
  difficulty: 3,
  description: "Study of race, ethnicity, and intergroup relations.",
  department: "SOC",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Race", "Ethnicity", "Sociology"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "21",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
  },
},
{
  id: 181,
  code: "SOC 320",
  name: "Gender Studies",
  credits: 3,
  difficulty: 3,
  description: "Study of gender roles, identities, and inequalities.",
  department: "SOC",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Gender Studies", "Sociology", "Feminism"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "28",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
  },
},
{
  id: 182,
  code: "SOC 330",
  name: "Urban Sociology",
  credits: 3,
  difficulty: 3,
  description: "Study of urban environments and social life.",
  department: "SOC",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Urban Sociology", "Cities", "Urbanization"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
  },
},
{
  id: 183,
  code: "SOC 340",
  name: "Social Movements",
  credits: 3,
  difficulty: 3,
  description: "Study of social movements and collective action.",
  department: "SOC",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Social Movements", "Activism", "Social Change"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "20",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Green",
          Location: "On-site",
      },
  },
},
{
  id: 184,
  code: "SOC 350",
  name: "Criminology",
  credits: 3,
  difficulty: 3,
  description: "Study of crime, criminals, and the criminal justice system.",
  department: "SOC",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Criminology", "Crime", "Criminal Justice"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "25",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Taylor",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "30",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Taylor",
          Location: "On-site",
      },
  },
},
{
  id: 185,
  code: "SOC 401",
  name: "Sociological Theory",
  credits: 3,
  difficulty: 4,
  description: "Study of classical and contemporary sociological theories.",
  department: "SOC",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Sociological Theory", "Theory", "Social Thought"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "13",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "14:30",
              endTime: "15:45"
          },
          Professor_name: "Dr. Anderson",
          Location: "On-site",
      },
  },
},
{
  id: 186,
  code: "SOC 410",
  name: "Global Sociology",
  credits: 3,
  difficulty: 3,
  description: "Study of global social processes and issues.",
  department: "SOC",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Global Sociology", "Globalization", "Development"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "17",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. White",
          Location: "On-site",
      },
  },
},
{
  id: 187,
  code: "SOC 490",
  name: "Senior Seminar",
  credits: 3,
  difficulty: 5,
  description: "Capstone seminar for sociology majors.",
  department: "SOC",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Sociology", "Research", "Seminar"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "10",
          Remaining_Seats: "5",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Green",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "10",
          Remaining_Seats: "8",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Green",
          Location: "On-site",
      },
  },
},
{
  id: 188,
  code: "COMM 101",
  name: "Public Speaking",
  credits: 3,
  difficulty: 2,
  description: "Introduction to the principles and practice of public speaking.",
  department: "COMM",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Public Speaking", "Communication", "Presentation"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025", "Summer 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "24",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "14",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "38",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "32",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "39",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 006": {
          Semester: "Spring 2025",
          Total_Seats: "40",
          Remaining_Seats: "38",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Green",
          Location: "Online",
      },
      "Section 007": {
          Semester: "Summer 2025",
          Total_Seats: "30",
          Remaining_Seats: "29",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Taylor",
          Location: "Online",
      },
  },
},
{
  id: 189,
  code: "COMM 201",
  name: "Mass Communication",
  credits: 3,
  difficulty: 3,
  description: "Overview of the mass communication process.",
  department: "COMM",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Mass Communication", "Media", "Journalism"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "35",
          Remaining_Seats: "20",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "35",
          Remaining_Seats: "30",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
  },
},
{
  id: 190,
  code: "COMM 210",
  name: "Interpersonal Communication",
  credits: 3,
  difficulty: 3,
  description: "Study of communication in interpersonal relationships.",
  department: "COMM",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Interpersonal Communication", "Relationships", "Communication Skills"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "35",
          Remaining_Seats: "28",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Jones",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "35",
          Remaining_Seats: "33",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Jones",
          Location: "On-site",
      },
  },
},
{
  id: 191,
  code: "COMM 301",
  name: "Media Writing",
  credits: 3,
  difficulty: 3,
  description: "Writing for various media platforms.",
  department: "COMM",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Media Writing", "Journalism", "Writing"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "25",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
  },
},
{
  id: 192,
  code: "COMM 310",
  name: "Communication Theory",
  credits: 3,
  difficulty: 4,
  description: "Introduction to communication theories.",
  department: "COMM",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Communication Theory", "Communication", "Psychology"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 193,
  code: "COMM 320",
  name: "Digital Media",
  credits: 3,
  difficulty: 3,
  description: "Study of digital media and its impact on communication.",
  department: "COMM",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Digital Media", "Social Media", "Technology"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "20",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:00",
              endTime: "12:15"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
  },
},
{
  id: 194,
  code: "COMM 330",
  name: "Organizational Communication",
  credits: 3,
  difficulty: 3,
  description: "Communication in organizations.",
  department: "COMM",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Organizational Communication", "Business", "Management"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "19",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
  },
},
{
  id: 195,
  code: "COMM 340",
  name: "Intercultural Communication",
  credits: 3,
  difficulty: 3,
  description: "Communication across cultures.",
  department: "COMM",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Intercultural Communication", "Diversity", "Culture"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "14",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Jones",
          Location: "On-site",
      },
  },
},
{
  id: 196,
  code: "COMM 350",
  name: "Journalism",
  credits: 3,
  difficulty: 3,
  description: "Principles and practices of journalism.",
  department: "COMM",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Journalism", "News", "Media"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:30",
              endTime: "10:45"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
  },
},
{
  id: 197,
  code: "COMM 401",
  name: "Communication Research",
  credits: 3,
  difficulty: 4,
  description: "Introduction to communication research methods.",
  department: "COMM",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Communication Research", "Research Methods", "Statistics"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "16",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 198,
  code: "COMM 410",
  name: "Public Relations",
  credits: 3,
  difficulty: 4,
  description: "Principles and practices of public relations.",
  department: "COMM",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Public Relations", "PR", "Communications"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "13",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:00",
              endTime: "12:15"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
  },
},
{
  id: 199,
  code: "COMM 490",
  name: "Senior Project",
  credits: 3,
  difficulty: 5,
  description: "Capstone project for communication majors.",
  department: "COMM",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Communication", "Research", "Project"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "10",
          Remaining_Seats: "4",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Taylor",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "10",
          Remaining_Seats: "7",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. White",
          Location: "On-site",
      },
  },
},
{
  id: 200,
  code: "PHIL 101",
  name: "Introduction to Philosophy",
  credits: 3,
  difficulty: 2,
  description: "Introduction to fundamental philosophical concepts.",
  department: "PHIL",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Philosophy", "Ethics", "Logic"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025", "Summer 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "29",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "38",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "38",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "39",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 006": {
          Semester: "Spring 2025",
          Total_Seats: "40",
          Remaining_Seats: "37",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Brown",
          Location: "Online",
      },
      "Section 007": {
          Semester: "Summer 2025",
          Total_Seats: "30",
          Remaining_Seats: "28",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Lee",
          Location: "Online",
      },
  },
},
{
  id: 201,
  code: "PHIL 201",
  name: "Ethics",
  credits: 3,
  difficulty: 3,
  description: "Study of moral principles and ethical theories.",
  department: "PHIL",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Ethics", "Morality", "Values"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "23",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "28",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 202,
  code: "PHIL 210",
  name: "Logic",
  credits: 3,
  difficulty: 3,
  description: "Introduction to formal and informal logic.",
  department: "PHIL",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Logic", "Reasoning", "Argumentation"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "27",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "30",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
  },
},
{
  id: 203,
  code: "PHIL 301",
  name: "Ancient Philosophy",
  credits: 3,
  difficulty: 4,
  description: "Study of ancient Greek and Roman philosophy.",
  department: "PHIL",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Ancient Philosophy", "Greek Philosophy", "Plato"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "16",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:30",
              endTime: "10:45"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "24",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:30",
              endTime: "10:45"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
  },
},
{
  id: 204,
  code: "PHIL 310",
  name: "Modern Philosophy",
  credits: 3,
  difficulty: 4,
  description: "Study of philosophy from the Enlightenment to the 20th century.",
  department: "PHIL",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Modern Philosophy", "Enlightenment", "Kant"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "14",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Jones",
          Location: "On-site",
      },
  },
},
{
  id: 205,
  code: "PHIL 320",
  name: "Political Philosophy",
  credits: 3,
  difficulty: 4,
  description: "Study of political concepts and theories.",
  department: "PHIL",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Political Philosophy", "Politics", "Justice"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "19",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
  },
},
{
  id: 206,
  code: "PHIL 330",
  name: "Philosophy of Science",
  credits: 3,
  difficulty: 4,
  description: "Examination of the philosophical foundations of science.",
  department: "PHIL",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Philosophy of Science", "Science", "Epistemology"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:00",
              endTime: "12:15"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 207,
  code: "PHIL 340",
  name: "Philosophy of Mind",
  credits: 3,
  difficulty: 4,
  description: "Study of the nature of mind and consciousness.",
  department: "PHIL",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Philosophy of Mind", "Consciousness", "Mind-Body Problem"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Taylor",
          Location: "On-site",
      },
  },
},
{
  id: 208,
  code: "PHIL 401",
  name: "Contemporary Philosophy",
  credits: 3,
  difficulty: 4,
  description: "Study of philosophical developments in the 20th and 21st centuries.",
  department: "PHIL",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Contemporary Philosophy", "Existentialism", "Postmodernism"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "15",
          Remaining_Seats: "9",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "14:00",
              endTime: "15:15"
          },
          Professor_name: "Dr. White",
          Location: "On-site",
      },
  },
},
{
  id: 209,
  code: "PHIL 490",
  name: "Senior Seminar",
  credits: 3,
  difficulty: 5,
  description: "Capstone seminar for philosophy majors.",
  department: "PHIL",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Philosophy", "Research", "Seminar"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "10",
          Remaining_Seats: "2",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. Anderson",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "10",
          Remaining_Seats: "8",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
  },
},
{
  id: 210,
  code: "STAT 101",
  name: "Elementary Statistics",
  credits: 3,
  difficulty: 2,
  description: "Introduction to statistical methods.",
  department: "STAT",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Statistics", "Data Analysis", "Probability"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025", "Summer 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "45",
          Remaining_Seats: "33",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "45",
          Remaining_Seats: "23",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Fall 2025",
          Total_Seats: "45",
          Remaining_Seats: "40",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "45",
          Remaining_Seats: "42",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Winter 2026",
          Total_Seats: "45",
          Remaining_Seats: "45",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 006": {
          Semester: "Spring 2025",
          Total_Seats: "45",
          Remaining_Seats: "42",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Brown",
          Location: "Online",
      },
      "Section 007": {
          Semester: "Summer 2025",
          Total_Seats: "35",
          Remaining_Seats: "35",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Lee",
          Location: "Online",
      },
  },
},
{
  id: 211,
  code: "STAT 201",
  name: "Statistical Methods",
  credits: 3,
  difficulty: 3,
  description: "Further study of statistical methods.",
  department: "STAT",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Statistical Methods", "Data Analysis", "Regression"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "25",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 212,
  code: "STAT 301",
  name: "Probability Theory",
  credits: 3,
  difficulty: 4,
  description: "Mathematical foundations of probability.",
  department: "STAT",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Probability", "Mathematics", "Random Variables"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "11",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "22",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
  },
},
{
  id: 213,
  code: "STAT 310",
  name: "Regression Analysis",
  credits: 3,
  difficulty: 4,
  description: "Statistical methods for regression analysis.",
  department: "STAT",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Regression Analysis", "Statistics", "Data Modeling"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
  },
},
{
  id: 214,
  code: "STAT 320",
  name: "Time Series Analysis",
  credits: 3,
  difficulty: 4,
  description: "Analysis of time series data.",
  department: "STAT",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Time Series", "Data Analysis", "Forecasting"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Jones",
          Location: "On-site",
      },
  },
},
{
  id: 215,
  code: "STAT 330",
  name: "Experimental Design",
  credits: 3,
  difficulty: 3,
  description: "Design and analysis of experiments.",
  department: "STAT",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Experimental Design", "Statistics", "Research"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
  },
},
{
  id: 216,
  code: "STAT 340",
  name: "Multivariate Analysis",
  credits: 3,
  difficulty: 4,
  description: "Analysis of multiple variables.",
  department: "STAT",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Multivariate Analysis", "Statistics", "Data Analysis"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "12",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 217,
  code: "STAT 401",
  name: "Statistical Computing",
  credits: 3,
  difficulty: 4,
  description: "Use of statistical software for data analysis.",
  department: "STAT",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Statistical Computing", "R", "Python"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "16",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. White",
          Location: "On-site",
      },
  },
},
{
  id: 218,
  code: "STAT 410",
  name: "Bayesian Statistics",
  credits: 3,
  difficulty: 5,
  description: "Introduction to Bayesian statistical methods.",
  department: "STAT",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Bayesian Statistics", "Statistics", "Probability"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "15",
          Remaining_Seats: "8",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:30",
              endTime: "10:45"
          },
          Professor_name: "Dr. Anderson",
          Location: "On-site",
      },
  },
},
{
  id: 219,
  code: "STAT 490",
  name: "Statistics Capstone",
  credits: 3,
  difficulty: 5,
  description: "Capstone project for statistics majors.",
  department: "STAT",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Statistics", "Research", "Capstone"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "10",
          Remaining_Seats: "4",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Green",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "10",
          Remaining_Seats: "6",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Green",
          Location: "On-site",
      },
  },
},
{
  id: 220,
  code: "ART 101",
  name: "Introduction to Art",
  credits: 3,
  difficulty: 2,
  description: "Overview of art history and visual elements.",
  department: "ART",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Art History", "Visual Arts", "Art Appreciation"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025", "Summer 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "25",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "38",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "35",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "39",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 006": {
          Semester: "Spring 2025",
          Total_Seats: "40",
          Remaining_Seats: "38",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Brown",
          Location: "Online",
      },
      "Section 007": {
          Semester: "Summer 2025",
          Total_Seats: "30",
          Remaining_Seats: "28",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Lee",
          Location: "Online",
      },
  },
},
{
  id: 221,
  code: "ART 201",
  name: "Drawing I",
  credits: 3,
  difficulty: 3,
  description: "Introduction to drawing techniques.",
  department: "ART",
  days: ["M", "W", "F", "S"],
  type: "In-Person",
  interests: ["Drawing", "Art", "Sketching"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "17",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "29",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 222,
  code: "ART 210",
  name: "Painting I",
  credits: 3,
  difficulty: 3,
  description: "Introduction to painting techniques.",
  department: "ART",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Painting", "Art", "Color"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "26",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
  },
},
{
  id: 223,
  code: "ART 220",
  name: "Sculpture I",
  credits: 3,
  difficulty: 3,
  description: "Introduction to sculptural techniques.",
  department: "ART",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Sculpture", "Art", "3D"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "14",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "23",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
  },
},
{
  id: 224,
  code: "ART 301",
  name: "Digital Art",
  credits: 3,
  difficulty: 3,
  description: "Introduction to digital art techniques.",
  department: "ART",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Digital Art", "Art", "Technology"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "19",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:30",
              endTime: "10:45"
          },
          Professor_name: "Dr. Jones",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "24",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "09:30",
              endTime: "10:45"
          },
          Professor_name: "Dr. Jones",
          Location: "On-site",
      },
  },
},
{
  id: 225,
  code: "ART 310",
  name: "Photography",
  credits: 3,
  difficulty: 3,
  description: "Introduction to photography.",
  department: "ART",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Photography", "Art", "Images"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "21",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
  },
},
{
  id: 226,
  code: "ART 320",
  name: "Ceramics",
  credits: 3,
  difficulty: 3,
  description: "Introduction to ceramic techniques.",
  department: "ART",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Ceramics", "Art", "Pottery"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "17",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 227,
  code: "ART 330",
  name: "Printmaking",
  credits: 3,
  difficulty: 3,
  description: "Introduction to printmaking techniques.",
  department: "ART",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Printmaking", "Art", "Etching"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "19",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:00",
              endTime: "12:15"
          },
          Professor_name: "Dr. White",
          Location: "On-site",
      },
  },
},
{
  id: 228,
  code: "ART 401",
  name: "Advanced Studio Art",
  credits: 3,
  difficulty: 4,
  description: "Advanced studio art projects.",
  department: "ART",
  days: ["M", "W", "F", "S"],
  type: "In-Person",
  interests: ["Studio Art", "Art", "Painting"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "15",
          Remaining_Seats: "6",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Green",
          Location: "On-site",
      },
  },
},
{
  id: 229,
  code: "ART 490",
  name: "Senior Exhibition",
  credits: 3,
  difficulty: 5,
  description: "Preparation for the senior art exhibition.",
  department: "ART",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Art", "Exhibition", "Capstone"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "10",
          Remaining_Seats: "3",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:00",
              endTime: "12:15"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "10",
          Remaining_Seats: "7",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:00",
              endTime: "12:15"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
  },
},
{
  id: 230,
  code: "MUS 101",
  name: "Music Appreciation",
  credits: 3,
  difficulty: 2,
  description: "Introduction to music history and appreciation.",
  department: "MUS",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Music Appreciation", "Music History", "Classical Music"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025", "Summer 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "28",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "35",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "36",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "40",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 006": {
          Semester: "Spring 2025",
          Total_Seats: "40",
          Remaining_Seats: "38",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Brown",
          Location: "Online",
      },
      "Section 007": {
          Semester: "Summer 2025",
          Total_Seats: "30",
          Remaining_Seats: "29",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Lee",
          Location: "Online",
      },
  },
},
{
  id: 231,
  code: "MUS 201",
  name: "Music Theory I",
  credits: 3,
  difficulty: 3,
  description: "Introduction to music theory.",
  department: "MUS",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Music Theory", "Music", "Harmony"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "19",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Green",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "23",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Green",
          Location: "On-site",
      },
  },
},
{
  id: 232,
  code: "MUS 202",
  name: "Music Theory II",
  credits: 3,
  difficulty: 3,
  description: "Continuation of Music Theory I.",
  department: "MUS",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Music Theory", "Music", "Counterpoint"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:00",
              endTime: "12:15"
          },
          Professor_name: "Dr. Baker",
          Location: "On-site",
      },
  },
},
{
  id: 233,
  code: "MUS 210",
  name: "Music History",
  credits: 3,
  difficulty: 3,
  description: "Survey of music history.",
  department: "MUS",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Music History", "Classical Music", "Baroque"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "13",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Miller",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "19",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Miller",
          Location: "On-site",
      },
  },
},
{
  id: 234,
  code: "MUS 301",
  name: "Composition",
  credits: 3,
  difficulty: 4,
  description: "Introduction to music composition.",
  department: "MUS",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Composition", "Music", "Creative Writing"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "15",
          Remaining_Seats: "8",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "14:30",
              endTime: "15:45"
          },
          Professor_name: "Dr. Taylor",
          Location: "On-site",
      },
  },
},
{
  id: 235,
  code: "MUS 310",
  name: "Conducting",
  credits: 3,
  difficulty: 4,
  description: "Principles and practice of conducting.",
  department: "MUS",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Conducting", "Music", "Performance"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "15",
          Remaining_Seats: "11",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Clark",
          Location: "On-site",
      },
  },
},
{
  id: 236,
  code: "MUS 320",
  name: "World Music",
  credits: 3,
  difficulty: 3,
  description: "Study of music from around the world.",
  department: "MUS",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["World Music", "Music", "Culture"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. White",
          Location: "On-site",
      },
  },
},
{
  id: 237,
  code: "MUS 330",
  name: "Jazz Studies",
  credits: 3,
  difficulty: 3,
  description: "Introduction to jazz history, theory, and improvisation.",
  department: "MUS",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Jazz", "Music", "Improvisation"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "17",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Anderson",
          Location: "On-site",
      },
  },
},
{
  id: 238,
  code: "MUS 401",
  name: "Advanced Performance",
  credits: 3,
  difficulty: 5,
  description: "Advanced performance studies.",
  department: "MUS",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Performance", "Music", "Instrument"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "12",
          Remaining_Seats: "3",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "12",
          Remaining_Seats: "9",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
  },
},
{
  id: 239,
  code: "MUS 490",
  name: "Senior Recital",
  credits: 3,
  difficulty: 5,
  description: "Performance of a senior recital.",
  department: "MUS",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Music", "Recital", "Performance"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "10",
          Remaining_Seats: "5",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "10",
          Remaining_Seats: "9",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
  },
},
{
  id: 240,
  code: "THEA 101",
  name: "Introduction to Theatre",
  credits: 3,
  difficulty: 2,
  description: "Introduction to the art of theatre.",
  department: "THEA",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Theatre", "Drama", "Acting"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025", "Summer 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "22",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "10",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "28",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "27",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "29",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 006": {
          Semester: "Spring 2025",
          Total_Seats: "30",
          Remaining_Seats: "29",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Brown",
          Location: "Online",
      },
      "Section 007": {
          Semester: "Summer 2025",
          Total_Seats: "25",
          Remaining_Seats: "25",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Lee",
          Location: "Online",
      },
  },
},
{
  id: 241,
  code: "THEA 201",
  name: "Acting I",
  credits: 3,
  difficulty: 3,
  description: "Introduction to acting techniques.",
  department: "THEA",
  days: ["M", "W", "F", "S"],
  type: "In-Person",
  interests: ["Acting", "Theatre", "Performance"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "24",
          Time_slot: {
              days: ["M", "W", "F", "S"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 242,
  code: "THEA 210",
  name: "Stagecraft",
  credits: 3,
  difficulty: 3,
  description: "Introduction to the technical aspects of theatre production.",
  department: "THEA",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Stagecraft", "Theatre", "Technical Theater"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "25",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "23",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
  },
},
{
  id: 243,
  code: "THEA 301",
  name: "Directing",
  credits: 3,
  difficulty: 4,
  description: "Introduction to the principles and practice of directing.",
  department: "THEA",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Directing", "Theatre", "Production"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "13",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
  },
},
{
  id: 244,
  code: "THEA 310",
  name: "Theatre History",
  credits: 3,
  difficulty: 3,
  description: "Survey of theatre history.",
  department: "THEA",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Theatre History", "Drama", "Acting"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "11",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Jones",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Jones",
          Location: "On-site",
      },
  },
},
{
  id: 245,
  code: "THEA 320",
  name: "Costume Design",
  credits: 3,
  difficulty: 3,
  description: "Introduction to costume design for the theatre.",
  department: "THEA",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Costume Design", "Theatre", "Design"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "9",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
  },
},
{
  id: 246,
  code: "THEA 401",
  name: "Advanced Acting",
  credits: 3,
  difficulty: 5,
  description: "Advanced acting techniques and performance.",
  department: "THEA",
  days: ["T", "TH", "S"],
  type: "In-Person",
  interests: ["Acting", "Performance", "Theatre"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "15",
          Remaining_Seats: "6",
          Time_slot: {
              days: ["T", "TH", "S"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Miller",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "15",
          Remaining_Seats: "14",
          Time_slot: {
              days: ["T", "TH", "S"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Miller",
          Location: "On-site",
      },
  },
},
{
  id: 247,
  code: "THEA 490",
  name: "Senior Production",
  credits: 3,
  difficulty: 5,
  description: "Involvement in a senior theatre production.",
  department: "THEA",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Theatre Production", "Theatre", "Performance"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "10",
          Remaining_Seats: "3",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "10",
          Remaining_Seats: "7",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 248,
  code: "ANTH 101",
  name: "Introduction to Anthropology",
  credits: 3,
  difficulty: 2,
  description: "An overview of the field of anthropology.",
  department: "ANTH",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Anthropology", "Culture", "Humanity"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025", "Summer 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "33",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "23",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "38",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "39",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "40",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 006": {
          Semester: "Spring 2025",
          Total_Seats: "40",
          Remaining_Seats: "38",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Brown",
          Location: "Online",
      },
      "Section 007": {
          Semester: "Summer 2025",
          Total_Seats: "30",
          Remaining_Seats: "29",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Lee",
          Location: "Online",
      },
  },
},
{
  id: 249,
  code: "ANTH 201",
  name: "Cultural Anthropology",
  credits: 3,
  difficulty: 3,
  description: "Study of human cultures and societies.",
  department: "ANTH",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Cultural Anthropology", "Culture", "Ethnography"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "35",
          Remaining_Seats: "20",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "35",
          Remaining_Seats: "33",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 250,
  code: "ANTH 210",
  name: "Physical Anthropology",
  credits: 3,
  difficulty: 3,
  description: "Study of human evolution and biology.",
  department: "ANTH",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Physical Anthropology", "Evolution", "Biology"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "25",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
  },
},
{
  id: 251,
  code: "ANTH 301",
  name: "Archaeological Methods",
  credits: 3,
  difficulty: 4,
  description: "Introduction to archaeological methods and techniques.",
  department: "ANTH",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Archaeology", "Archaeological Methods", "Excavation"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "12",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
  },
},
{
  id: 252,
  code: "ANTH 310",
  name: "Medical Anthropology",
  credits: 3,
  difficulty: 3,
  description: "Study of health and illness in cross-cultural perspective.",
  department: "ANTH",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Medical Anthropology", "Health", "Culture"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "20",
          Remaining_Seats: "17",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Jones",
          Location: "On-site",
      },
  },
},
{
  id: 253,
  code: "ANTH 401",
  name: "Ethnographic Research",
  credits: 3,
  difficulty: 4,
  description: "Methods and techniques of ethnographic research.",
  department: "ANTH",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Ethnographic Research", "Anthropology", "Fieldwork"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "15",
          Remaining_Seats: "6",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Brown",
          Location: "On-site",
      },
  },
},
{
  id: 254,
  code: "GEOG 101",
  name: "World Geography",
  credits: 3,
  difficulty: 2,
  description: "Introduction to the geography of the world.",
  department: "GEOG",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["World Geography", "Geography", "Mapping"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025", "Summer 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "28",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "38",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "36",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "39",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 006": {
          Semester: "Spring 2025",
          Total_Seats: "40",
          Remaining_Seats: "38",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Brown",
          Location: "Online",
      },
      "Section 007": {
          Semester: "Summer 2025",
          Total_Seats: "30",
          Remaining_Seats: "27",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Lee",
          Location: "Online",
      },
  },
},
{
  id: 255,
  code: "GEOG 201",
  name: "Physical Geography",
  credits: 3,
  difficulty: 3,
  description: "Study of the physical processes shaping the Earth.",
  department: "GEOG",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Physical Geography", "Earth Science", "Environment"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "35",
          Remaining_Seats: "19",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "35",
          Remaining_Seats: "33",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:30",
              endTime: "12:45"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 256,
  code: "GEOG 210",
  name: "Human Geography",
  credits: 3,
  difficulty: 3,
  description: "Study of human activities on Earth.",
  department: "GEOG",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Human Geography", "Culture", "Urban Planning"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "21",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "14:00",
              endTime: "14:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
  },
},
{
  id: 257,
  code: "GEOG 301",
  name: "Geographic Information Systems",
  credits: 3,
  difficulty: 4,
  description: "Introduction to GIS software and applications.",
  department: "GEOG",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["GIS", "Mapping", "Spatial Analysis"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
  },
},
{
  id: 258,
  code: "GEOG 310",
  name: "Environmental Geography",
  credits: 3,
  difficulty: 3,
  description: "Study of human impact on the environment.",
  department: "GEOG",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Environmental Geography", "Sustainability", "Ecology"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "22",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Jones",
          Location: "On-site",
      },
  },
},
{
  id: 259,
  code: "GEOG 401",
  name: "Urban Geography",
  credits: 3,
  difficulty: 3,
  description: "Study of urban areas and processes.",
  department: "GEOG",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Urban Geography", "Cities", "Urban Planning"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
  },
},
{
  id: 260,
  code: "FIN 101",
  name: "Personal Finance",
  credits: 3,
  difficulty: 2,
  description: "Introduction to personal financial management.",
  department: "FIN",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Personal Finance", "Budgeting", "Investing"],
  semesters: ["Fall 2025", "Winter 2026", "Spring 2025", "Summer 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "28",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "18",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 003": {
          Semester: "Fall 2025",
          Total_Seats: "40",
          Remaining_Seats: "35",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Davis",
          Location: "On-site",
      },
      "Section 004": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "32",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "09:00",
              endTime: "09:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
      "Section 005": {
          Semester: "Winter 2026",
          Total_Seats: "40",
          Remaining_Seats: "38",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "11:00",
              endTime: "11:50"
          },
          Professor_name: "Dr. Johnson",
          Location: "On-site",
      },
      "Section 006": {
          Semester: "Spring 2025",
          Total_Seats: "40",
          Remaining_Seats: "37",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "10:00",
              endTime: "11:15"
          },
          Professor_name: "Dr. Brown",
          Location: "Online",
      },
      "Section 007": {
          Semester: "Summer 2025",
          Total_Seats: "30",
          Remaining_Seats: "28",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Lee",
          Location: "Online",
      },
  },
},
{
  id: 261,
  code: "FIN 201",
  name: "Corporate Finance",
  credits: 3,
  difficulty: 3,
  description: "Principles of corporate financial management.",
  department: "FIN",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Corporate Finance", "Finance", "Investments"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "35",
          Remaining_Seats: "20",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "35",
          Remaining_Seats: "30",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "13:00",
              endTime: "14:15"
          },
          Professor_name: "Dr. Garcia",
          Location: "On-site",
      },
  },
},
{
  id: 262,
  code: "FIN 301",
  name: "Investments",
  credits: 3,
  difficulty: 3,
  description: "Study of investment instruments and strategies.",
  department: "FIN",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Investments", "Finance", "Stocks"],
  semesters: ["Fall 2025", "Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "15",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
      "Section 002": {
          Semester: "Winter 2026",
          Total_Seats: "30",
          Remaining_Seats: "26",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "10:00",
              endTime: "10:50"
          },
          Professor_name: "Dr. Rodriguez",
          Location: "On-site",
      },
  },
},
{
  id: 263,
  code: "FIN 310",
  name: "Financial Markets",
  credits: 3,
  difficulty: 3,
  description: "Study of financial markets and institutions.",
  department: "FIN",
  days: ["T", "TH"],
  type: "In-Person",
  interests: ["Financial Markets", "Finance", "Banking"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "30",
          Remaining_Seats: "12",
          Time_slot: {
              days: ["T", "TH"],
              startTime: "11:00",
              endTime: "12:15"
          },
          Professor_name: "Dr. Williams",
          Location: "On-site",
      },
  },
},
{
  id: 264,
  code: "FIN 401",
  name: "International Finance",
  credits: 3,
  difficulty: 4,
  description: "Study of financial aspects of international business.",
  department: "FIN",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["International Finance", "Finance", "Global Markets"],
  semesters: ["Winter 2026"],
  Sections_available: {
      "Section 001": {
          Semester: "Winter 2026",
          Total_Seats: "25",
          Remaining_Seats: "17",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "13:00",
              endTime: "13:50"
          },
          Professor_name: "Dr. Jones",
          Location: "On-site",
      },
  },
},
{
  id: 265,
  code: "FIN 410",
  name: "Risk Management",
  credits: 3,
  difficulty: 4,
  description: "Principles and practices of risk management.",
  department: "FIN",
  days: ["M", "W", "F"],
  type: "In-Person",
  interests: ["Risk Management", "Finance", "Insurance"],
  semesters: ["Fall 2025"],
  Sections_available: {
      "Section 001": {
          Semester: "Fall 2025",
          Total_Seats: "20",
          Remaining_Seats: "9",
          Time_slot: {
              days: ["M", "W", "F"],
              startTime: "15:00",
              endTime: "15:50"
          },
          Professor_name: "Dr. Smith",
          Location: "On-site",
      },
  },
},
];