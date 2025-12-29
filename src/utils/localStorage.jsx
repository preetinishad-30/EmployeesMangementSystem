
const employees = [
  {
    id: 1,
    firstname: "Amit",
    email: "employee@email.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare monthly report",
        description: "Compile sales and performance data for the monthly review.",
        date: "2025-01-10",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client follow-up",
        description: "Email clients about pending project deadlines.",
        date: "2025-01-05",
        category: "Communication"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Update website content",
        description: "Revise outdated text on the homepage.",
        date: "2024-12-28",
        category: "Web"
      }
    ]
  },

  {
    id: 2,
    firstname: "Priya",
    email: "employee2@email.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Organize team meeting",
        description: "Set up agenda and meeting notes for the weekly sync.",
        date: "2025-01-12",
        category: "Management"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Prepare documentation",
        description: "Write technical documentation for the new dashboard.",
        date: "2025-01-03",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix UI Bugs",
        description: "Resolve issues on the login and signup pages.",
        date: "2024-12-29",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Review pull requests",
        description: "Check pending PRs and provide feedback.",
        date: "2025-01-11",
        category: "Code Review"
      }
    ]
  },

  {
    id: 3,
    firstname: "Rahul",
    email: "employee3@email.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Data cleanup",
        description: "Remove invalid records from the database.",
        date: "2025-01-09",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Optimize queries",
        description: "Improve efficiency of slow SQL queries.",
        date: "2025-01-04",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Create API endpoint",
        description: "Develop the notifications endpoint.",
        date: "2024-12-30",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Server health monitoring",
        description: "Check logs and system performance.",
        date: "2025-01-11",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Backup audit",
        description: "Ensure backups are stored correctly.",
        date: "2025-01-02",
        category: "Security"
      }
    ]
  },

  {
    id: 4,
    firstname: "Neha",
    email: "employee4@email.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design poster",
        description: "Create marketing poster for product launch.",
        date: "2025-01-13",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Create UI mockups",
        description: "Design mockups for the new mobile app.",
        date: "2025-01-06",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Logo revision",
        description: "Update logo design as per feedback.",
        date: "2024-12-27",
        category: "Branding"
      }
    ]
  },

  {
    id: 5,
    firstname: "Vikram",
    email: "employee5@email.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Social media posts",
        description: "Write and schedule social media updates.",
        date: "2025-01-10",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Market research",
        description: "Analyze competitor products and pricing.",
        date: "2025-01-03",
        category: "Research"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Campaign planning",
        description: "Plan Q1 promotional campaigns.",
        date: "2025-01-12",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Email newsletter",
        description: "Draft monthly newsletter content.",
        date: "2024-12-29",
        category: "Content"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    // firstname:"Suresh",
    email: "admin@email.com",
    password: "123"
  }
];


export const setLocalStorage =()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage =()=>{
    const employees =JSON.parse(localStorage.getItem('employees'))
    const admin =JSON.parse(localStorage.getItem('admin'))

return {employees,admin}
}