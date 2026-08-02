// ====================================
// REAN CODE - MAIN JAVASCRIPT
// ====================================
const LANGUAGE_STORAGE_KEY = 'reancode-language';
const THEME_STORAGE_KEY = 'theme';

const TRANSLATIONS = {
    en: {
        languageLabel: 'EN',
        brand: { tagline: 'LEARN. BUILD. GROW.' },
        nav: {
            home: 'Home',
            video: 'Videos',
            books: 'Course',
            ai: 'AI Chatbot',
            score: 'Score',
            quiz: 'Quiz',
            community: 'Community',
            dashboard: 'Dashboard',
            settings: 'Settings',
            about: 'About',
            services: 'Services'
        },
        dropdown: {
            user: 'Student Profile',
            profile: 'Profile',
            settings: 'Settings',
            language: 'Language',
            signout: 'Sign Out'
        },
        auth: {
            loginTitle: 'Welcome back to Rean Code',
            registerTitle: 'Welcome to Rean Code',
            email: 'Email',
            password: 'Password',
            username: 'Username',
            dob: 'Date of Birth',
            remember: 'Remember me',
            forgot: 'I forgot password?',
            loginButton: 'Login',
            signupButton: 'Sign Up',
            toSignup: "I don't have Account",
            toLogin: 'I have Account'
        },
        home: {
            titlePrefix: 'Welcome to',
            subtitle: 'Your journey to mastering programming starts here',
            ctaPrimary: 'Get Started',
            ctaSecondary: 'Explore Courses',
            why: 'Why Choose Rean Code?',
            stats: {
                learners: 'Active Learners',
                courses: 'Courses',
                certificates: 'Certificates'
            },
            features: {
                ai: {
                    title: 'AI-Powered Learning',
                    desc: 'Get instant help from our intelligent AI assistant'
                },
                progress: {
                    title: 'Track Progress',
                    desc: 'Monitor your learning journey with detailed analytics'
                },
                community: {
                    title: 'Community Support',
                    desc: 'Connect with fellow learners and experts'
                },
                achievements: {
                    title: 'Achievements',
                    desc: 'Earn badges and certificates as you progress'
                }
            }
        },
        video: {
            eyebrow: 'Video Library',
            title: 'Learn with guided coding videos',
            subtitle: 'Start with practical playlists built for Khmer learners and beginners.',
            card1: {
                tag: 'Beginner',
                title: 'HTML and CSS Foundations',
                desc: 'Build your first landing page and understand structure, layout, and responsive design.'
            },
            card2: {
                tag: 'Popular',
                title: 'JavaScript Project Sprint',
                desc: 'Practice DOM events, arrays, and small projects that feel like real work.'
            },
            card3: {
                tag: 'Career',
                title: 'Frontend Developer Roadmap',
                desc: 'Understand the skills, tools, and portfolio plan needed for junior developer jobs.'
            }
        },
        common: {
            watchNow: 'Watch Now',
            shareSuccess: 'Your update is now visible to the community.',
            newsletterThanks: 'Thank you for subscribing!'
        },
        books: {
            eyebrow: 'Course Tracks',
            title: 'Choose a learning path',
            subtitle: 'Structured lessons, practice tasks, and milestones for each technology.',
            start: 'Start',
            free: 'Free',
            learn: 'Start Learning',
            html: {
                title: 'HTML for Beginners',
                desc: 'HTML tags, semantic markup, forms, tables, and SEO basics.'
            },
            css: {
                title: 'CSS for Layout and Design',
                desc: 'Flexbox, Grid, animation, responsive design, and reusable components.'
            },
            js: {
                title: 'JavaScript Essentials',
                desc: 'Variables, functions, events, APIs, and project-based problem solving.'
            },
            node: {
                title: 'Node.js Backend Basics',
                desc: 'Routing, REST APIs, file systems, and simple backend architecture.'
            },
            php: {
                title: 'PHP for Web Projects',
                desc: 'Forms, sessions, MySQL basics, and traditional dynamic websites.'
            }
        },
        score: {
            eyebrow: 'Leaderboard',
            title: 'Track your progress against the community',
            subtitle: 'Points increase when you finish lessons, quizzes, and streak goals.',
            topLearners: 'Top Learners This Week',
            goals: 'Current Goals',
            goal1: 'Finish 3 lessons',
            goal2: 'Pass JavaScript quiz',
            goal3: 'Keep 7 day streak'
        },
        quiz: {
            eyebrow: 'Practice Zone',
            title: 'Sharpen your skills with quick quizzes',
            subtitle: 'Choose a topic and test your understanding before moving to the next course.',
            html: '15 questions on tags, forms, and semantic layout.',
            css: '12 questions on selectors, box model, and responsive design.',
            js: '20 questions on DOM events, functions, arrays, and APIs.',
            start: 'Start Quiz',
            statusTitle: 'Quiz status',
            statusDefault: 'Choose a quiz to begin. Your best score will appear here.',
            statusSelected: 'Selected quiz: {quiz}. You are ready to start.'
        },
        community: {
            eyebrow: 'Community',
            title: 'Learn with other builders',
            subtitle: 'Join discussions, ask for code reviews, and share your progress.',
            rooms: 'Popular Rooms',
            room1: 'Daily practice and portfolio feedback.',
            room2: 'Friendly help for first-time coders.',
            room3: 'Weekly mini projects and pair sessions.',
            postTitle: 'Post an update',
            postButton: 'Share Update',
            statusDefault: 'No update posted yet. Introduce yourself to the community.',
            statusPosted: '{name} shared: "{message}"',
            namePlaceholder: 'Your name',
            postPlaceholder: 'Share what you are building...'
        },
        dashboard: {
            title: 'Dashboard',
            subtitle: 'Track your learning progress and achievements',
            coursesCompleted: 'Courses Completed',
            learningHours: 'Learning Hours',
            achievements: 'Achievements',
            streak: 'Day Streak',
            progress: 'Learning Progress',
            recentAchievements: 'Recent Achievements',
            achievement1Title: 'First Course',
            achievement1Desc: 'Completed your first course',
            achievement2Title: 'Week Warrior',
            achievement2Desc: '7-day learning streak',
            achievement3Title: 'Code Master',
            achievement3Desc: 'Completed 100 coding challenges',
            activeCourses: 'Active Courses',
            module1: 'Module 5 of 8',
            module2: 'Module 3 of 10',
            module3: 'Module 7 of 12',
            thisWeek: 'This Week',
            mon: 'Mon',
            tue: 'Tue',
            wed: 'Wed',
            thu: 'Thu',
            fri: 'Fri',
            sat: 'Sat',
            sun: 'Sun',
            weekSummary1: '<strong>6 days</strong> of learning this week!',
            weekSummary2: 'Keep up the great work.'
        },
        settings: {
            eyebrow: 'Settings',
            title: 'Personalize your learning workspace',
            subtitle: 'Choose a language, manage your profile flow, and control your study experience.',
            languageTitle: 'Language',
            languageDesc: 'Switch the whole interface between Khmer, English, and Chinese.',
            accountTitle: 'Account actions',
            openLogin: 'Open Login',
            openSignup: 'Open Sign Up',
            openDashboard: 'Go to Dashboard',
            studyTitle: 'Study reminders',
            studyDesc: 'Daily reminders are ready for your next lessons and quizzes.',
            aiTitle: 'AI assistant',
            aiDesc: 'The chat assistant will use your Gemini key stored in this browser only.'
        },
        about: {
            eyebrow: 'About Rean Code',
            title: 'A learning platform built for practical developers',
            subtitle: 'Rean Code helps students in Cambodia and beyond build real programming skills with guided practice.',
            missionTitle: 'Mission',
            missionDesc: 'Make software education more accessible, more practical, and easier to follow in local languages.',
            focusTitle: 'Focus',
            focusDesc: 'Frontend, backend, AI support, quizzes, and community-first learning paths for beginners.'
        },
        services: {
            eyebrow: 'Services',
            title: 'Tools to help you learn, build, and launch',
            subtitle: 'Use the platform for guided lessons, mentoring, and project feedback.',
            card1Title: 'Project Coaching',
            card1Desc: 'Build portfolio-ready apps with practical guidance and weekly milestones.',
            card2Title: 'Mentor Support',
            card2Desc: 'Ask questions in Khmer or English and get direct study advice.',
            card3Title: 'Career Prep',
            card3Desc: 'Prepare a resume, GitHub profile, and project showcase for job applications.'
        },
        ai: {
            title: 'Rean Code Assistant',
            clear: 'Clear Chat',
            welcome: 'Hello! I am the Rean Code AI assistant. How can I help you today?',
            typing: 'AI is typing...',
            placeholder: 'Ask your coding question here...'
        },
        footer: {
            description: 'Empowering the next generation of developers through innovative learning experiences and practical coding workflows.',
            learn: 'Learn',
            resources: 'Resources',
            company: 'Company',
            newsletter: 'Newsletter',
            newsletterDesc: 'Subscribe to get the latest updates and courses',
            emailPlaceholder: 'Your email address',
            bottom: '© 2026 Rean Code. All rights reserved. Made in Cambodia.',
            privacy: 'Privacy',
            terms: 'Terms',
            cookies: 'Cookies'
        },
        alerts: {
            signOut: 'You have been signed out.',
            login: 'Login successful. Welcome back to Rean Code.',
            signup: 'Account created successfully. Welcome to Rean Code.',
            courseStart: 'Opening the {course} learning path.',
            communityEmpty: 'Please enter your name and update before posting.'
        }
    },
    kh: {
        languageLabel: 'ខ្មែរ',
        brand: { tagline: 'រៀន។ បង្កើត។ រីកចម្រើន។' },
        nav: {
            home: 'ទំព័រដើម',
            video: 'វីដេអូ',
            books: 'វគ្គសិក្សា',
            ai: 'ជំនួយការ AI',
            score: 'ពិន្ទុ',
            quiz: 'កម្រងសំណួរ',
            community: 'សហគមន៍',
            dashboard: 'ផ្ទាំងគ្រប់គ្រង',
            settings: 'ការកំណត់',
            about: 'អំពី',
            services: 'សេវាកម្ម'
        },
        dropdown: {
            user: 'ប្រវត្តិសិស្ស',
            profile: 'ប្រវត្តិ',
            settings: 'ការកំណត់',
            language: 'ភាសា',
            signout: 'ចាកចេញ'
        },
        auth: {
            loginTitle: 'ស្វាគមន៍មកវិញមកកាន់ Rean Code',
            registerTitle: 'ស្វាគមន៍មកកាន់ Rean Code',
            email: 'អ៊ីមែល',
            password: 'ពាក្យសម្ងាត់',
            username: 'ឈ្មោះអ្នកប្រើ',
            dob: 'ថ្ងៃខែឆ្នាំកំណើត',
            remember: 'ចងចាំខ្ញុំ',
            forgot: 'ភ្លេចពាក្យសម្ងាត់?',
            loginButton: 'ចូលគណនី',
            signupButton: 'បង្កើតគណនី',
            toSignup: 'ខ្ញុំមិនទាន់មានគណនីទេ',
            toLogin: 'ខ្ញុំមានគណនីរួចហើយ'
        },
        home: {
            titlePrefix: 'ស្វាគមន៍មកកាន់',
            subtitle: 'ដំណើររបស់អ្នកក្នុងការស្ទាត់ជំនាញសរសេរកូដចាប់ផ្តើមពីទីនេះ',
            ctaPrimary: 'ចាប់ផ្តើម',
            ctaSecondary: 'មើលវគ្គសិក្សា',
            why: 'ហេតុអ្វីជ្រើសរើស Rean Code?',
            stats: {
                learners: 'អ្នកសិក្សាសកម្ម',
                courses: 'វគ្គសិក្សា',
                certificates: 'វិញ្ញាបនបត្រ'
            },
            features: {
                ai: {
                    title: 'ការសិក្សាដោយ AI',
                    desc: 'ទទួលបានជំនួយភ្លាមៗពីជំនួយការ AI របស់យើង'
                },
                progress: {
                    title: 'តាមដានវឌ្ឍនភាព',
                    desc: 'មើលដំណើរសិក្សារបស់អ្នកដោយទិន្នន័យច្បាស់លាស់'
                },
                community: {
                    title: 'គាំទ្រពីសហគមន៍',
                    desc: 'ភ្ជាប់ជាមួយអ្នកសិក្សាផ្សេង និងអ្នកជំនាញ'
                },
                achievements: {
                    title: 'សមិទ្ធផល',
                    desc: 'ទទួលបានផ្លាកសញ្ញា និងវិញ្ញាបនបត្រតាមការរីកចម្រើន'
                }
            }
        },
        video: {
            eyebrow: 'បណ្ណាល័យវីដេអូ',
            title: 'រៀនតាមវីដេអូណែនាំ',
            subtitle: 'ចាប់ផ្តើមជាមួយបញ្ជីវីដេអូអនុវត្តសម្រាប់អ្នកចាប់ផ្តើម និងអ្នកសិក្សាខ្មែរ។',
            card1: {
                tag: 'មូលដ្ឋាន',
                title: 'មូលដ្ឋាន HTML និង CSS',
                desc: 'បង្កើត landing page ដំបូង និងយល់ពីរចនាសម្ព័ន្ធ layout និង responsive design។'
            },
            card2: {
                tag: 'ពេញនិយម',
                title: 'JavaScript Project Sprint',
                desc: 'អនុវត្ត DOM events, arrays និងគម្រោងតូចៗដែលដូចការងារពិត។'
            },
            card3: {
                tag: 'អាជីព',
                title: 'ផែនទី Frontend Developer',
                desc: 'យល់ពីជំនាញ ឧបករណ៍ និងផែនការផលិត portfolio សម្រាប់ការងារថ្មី។'
            }
        },
        common: {
            watchNow: 'មើលឥឡូវនេះ',
            shareSuccess: 'ការអាប់ដេតរបស់អ្នកត្រូវបានបង្ហាញក្នុងសហគមន៍រួចហើយ។',
            newsletterThanks: 'អរគុណសម្រាប់ការជាវ។'
        },
        books: {
            eyebrow: 'ផ្លូវសិក្សា',
            title: 'ជ្រើសផ្លូវសិក្សារបស់អ្នក',
            subtitle: 'មេរៀនរៀបចំជា​ជំហានៗ ការអនុវត្ត និងគោលដៅសម្រាប់បច្ចេកវិទ្យានីមួយៗ។',
            start: 'ចាប់ផ្តើម',
            free: 'ឥតគិតថ្លៃ',
            learn: 'ចាប់ផ្តើមរៀន',
            html: {
                title: 'HTML សម្រាប់អ្នកចាប់ផ្តើម',
                desc: 'HTML tags, semantic markup, forms, tables និងមូលដ្ឋាន SEO។'
            },
            css: {
                title: 'CSS សម្រាប់ Layout និង Design',
                desc: 'Flexbox, Grid, animation, responsive design និង components អាចប្រើឡើងវិញ។'
            },
            js: {
                title: 'មូលដ្ឋាន JavaScript',
                desc: 'Variables, functions, events, APIs និងការដោះស្រាយបញ្ហាតាមគម្រោង។'
            },
            node: {
                title: 'មូលដ្ឋាន Backend ជាមួយ Node.js',
                desc: 'Routing, REST APIs, file systems និងរចនាសម្ព័ន្ធ backend សាមញ្ញ។'
            },
            php: {
                title: 'PHP សម្រាប់ Web Projects',
                desc: 'Forms, sessions, MySQL basics និងគេហទំព័រដែលមាន data dynamic។'
            }
        },
        score: {
            eyebrow: 'តារាងពិន្ទុ',
            title: 'តាមដានវឌ្ឍនភាពរបស់អ្នកជាមួយសហគមន៍',
            subtitle: 'ពិន្ទុនឹងកើនឡើងពេលអ្នកបញ្ចប់មេរៀន កម្រងសំណួរ និងគោលដៅស្ទ្រីក។',
            topLearners: 'អ្នកសិក្សាឆ្នើមប្រចាំសប្តាហ៍',
            goals: 'គោលដៅបច្ចុប្បន្ន',
            goal1: 'បញ្ចប់មេរៀន 3',
            goal2: 'ឆ្លងកាត់ Quiz JavaScript',
            goal3: 'រក្សា streak 7 ថ្ងៃ'
        },
        quiz: {
            eyebrow: 'តំបន់អនុវត្ត',
            title: 'ពង្រឹងជំនាញជាមួយកម្រងសំណួរខ្លី',
            subtitle: 'ជ្រើសប្រធានបទ ហើយសាកល្បងចំណេះដឹងរបស់អ្នកមុនទៅវគ្គបន្ទាប់។',
            html: '15 សំណួរអំពី tags, forms និង semantic layout។',
            css: '12 សំណួរអំពី selectors, box model និង responsive design។',
            js: '20 សំណួរអំពី DOM events, functions, arrays និង APIs។',
            start: 'ចាប់ផ្តើម Quiz',
            statusTitle: 'ស្ថានភាព Quiz',
            statusDefault: 'ជ្រើស quiz មួយដើម្បីចាប់ផ្តើម។ ពិន្ទុល្អបំផុតរបស់អ្នកនឹងបង្ហាញនៅទីនេះ។',
            statusSelected: 'Quiz ដែលបានជ្រើស៖ {quiz}។ អ្នករួចរាល់សម្រាប់ចាប់ផ្តើម។'
        },
        community: {
            eyebrow: 'សហគមន៍',
            title: 'រៀនជាមួយអ្នកបង្កើតផ្សេងទៀត',
            subtitle: 'ចូលរួមពិភាក្សា សួរឱ្យពិនិត្យកូដ និងចែករំលែកវឌ្ឍនភាពរបស់អ្នក។',
            rooms: 'បន្ទប់ពេញនិយម',
            room1: 'អនុវត្តរៀងរាល់ថ្ងៃ និងមតិយោបល់លើ portfolio។',
            room2: 'ជំនួយរួសរាយរាក់ទាក់សម្រាប់អ្នកចាប់ផ្តើមសរសេរកូដ។',
            room3: 'គម្រោងតូចប្រចាំសប្តាហ៍ និង pair sessions។',
            postTitle: 'បង្ហោះការអាប់ដេត',
            postButton: 'ចែករំលែក',
            statusDefault: 'មិនទាន់មានការអាប់ដេតទេ។ សូមណែនាំខ្លួនអ្នកក្នុងសហគមន៍។',
            statusPosted: '{name} បានចែករំលែក៖ "{message}"',
            namePlaceholder: 'ឈ្មោះរបស់អ្នក',
            postPlaceholder: 'ចែករំលែកអ្វីដែលអ្នកកំពុងសាងសង់...'
        },
        dashboard: {
            title: 'ផ្ទាំងគ្រប់គ្រង',
            subtitle: 'តាមដានវឌ្ឍនភាព និងសមិទ្ធផលរបស់អ្នក',
            coursesCompleted: 'វគ្គដែលបានបញ្ចប់',
            learningHours: 'ម៉ោងសិក្សា',
            achievements: 'សមិទ្ធផល',
            streak: 'Streak ថ្ងៃ',
            progress: 'វឌ្ឍនភាពសិក្សា',
            recentAchievements: 'សមិទ្ធផលថ្មីៗ',
            achievement1Title: 'វគ្គដំបូង',
            achievement1Desc: 'បានបញ្ចប់វគ្គដំបូងរបស់អ្នក',
            achievement2Title: 'Week Warrior',
            achievement2Desc: 'Streak រៀន 7 ថ្ងៃ',
            achievement3Title: 'Code Master',
            achievement3Desc: 'បានបញ្ចប់ coding challenges 100',
            activeCourses: 'វគ្គកំពុងរៀន',
            module1: 'Module 5 នៃ 8',
            module2: 'Module 3 នៃ 10',
            module3: 'Module 7 នៃ 12',
            thisWeek: 'សប្តាហ៍នេះ',
            mon: 'ច',
            tue: 'អ',
            wed: 'ព',
            thu: 'ព្រ',
            fri: 'សុ',
            sat: 'ស',
            sun: 'អា',
            weekSummary1: '<strong>6 ថ្ងៃ</strong> នៃការសិក្សាក្នុងសប្តាហ៍នេះ!',
            weekSummary2: 'បន្តឱ្យល្អបែបនេះ។'
        },
        settings: {
            eyebrow: 'ការកំណត់',
            title: 'កំណត់ផ្ទាល់ខ្លួនសម្រាប់កន្លែងសិក្សារបស់អ្នក',
            subtitle: 'ជ្រើសភាសា គ្រប់គ្រងការចូលគណនី និងតំឡើងបទពិសោធន៍សិក្សា។',
            languageTitle: 'ភាសា',
            languageDesc: 'ប្ដូរទំព័រទាំងមូលរវាងខ្មែរ អង់គ្លេស និងចិន។',
            accountTitle: 'សកម្មភាពគណនី',
            openLogin: 'បើកផ្ទាំងចូល',
            openSignup: 'បើកផ្ទាំងចុះឈ្មោះ',
            openDashboard: 'ទៅផ្ទាំងគ្រប់គ្រង',
            studyTitle: 'ការរំលឹកសិក្សា',
            studyDesc: 'ការរំលឹកប្រចាំថ្ងៃរួចរាល់សម្រាប់មេរៀន និង quiz បន្ទាប់របស់អ្នក។',
            aiTitle: 'ជំនួយការ AI',
            aiDesc: 'ជំនួយការជជែកនឹងប្រើ Gemini key ដែលរក្សាទុកតែក្នុង browser នេះប៉ុណ្ណោះ។'
        },
        about: {
            eyebrow: 'អំពី Rean Code',
            title: 'វេទិកាសិក្សាសម្រាប់អ្នកអភិវឌ្ឍន៍ជាក់ស្តែង',
            subtitle: 'Rean Code ជួយសិស្សនៅកម្ពុជា និងក្រៅប្រទេសបង្កើតជំនាញ coding ពិតប្រាកដតាមការអនុវត្ត។',
            missionTitle: 'បេសកកម្ម',
            missionDesc: 'ធ្វើឱ្យការអប់រំ software ងាយស្រួលប្រើ ជាក់ស្តែង និងងាយយល់ជាភាសាតំបន់។',
            focusTitle: 'ការផ្តោតសំខាន់',
            focusDesc: 'Frontend, backend, AI support, quizzes និងផ្លូវសិក្សាដែលផ្អែកលើសហគមន៍សម្រាប់អ្នកចាប់ផ្តើម។'
        },
        services: {
            eyebrow: 'សេវាកម្ម',
            title: 'ឧបករណ៍សម្រាប់រៀន បង្កើត និងចាប់ផ្តើម',
            subtitle: 'ប្រើវេទិកាសម្រាប់មេរៀនណែនាំ ការប្រឹក្សា និងមតិយោបល់លើគម្រោង។',
            card1Title: 'ជំនួយគម្រោង',
            card1Desc: 'សាងសង់ app សម្រាប់ portfolio ជាមួយការណែនាំជាក់ស្តែង និង milestones ប្រចាំសប្តាហ៍។',
            card2Title: 'គាំទ្រពី Mentor',
            card2Desc: 'សួរសំណួរជាខ្មែរ ឬអង់គ្លេស ហើយទទួលបានការណែនាំផ្ទាល់។',
            card3Title: 'ត្រៀមអាជីព',
            card3Desc: 'រៀបចំ resume, GitHub profile និង project showcase សម្រាប់ដាក់ពាក្យការងារ។'
        },
        ai: {
            title: 'ជំនួយការ Rean Code',
            clear: 'សម្អាតការជជែក',
            welcome: 'សួស្តី! ខ្ញុំជាជំនួយការ AI របស់ Rean Code។ តើខ្ញុំអាចជួយអ្វីបានខ្លះ?',
            typing: 'AI កំពុងវាយ...',
            placeholder: 'សួរសំណួរកូដរបស់អ្នកនៅទីនេះ...'
        },
        footer: {
            description: 'ជួយអ្នកអភិវឌ្ឍន៍ជំនាន់ថ្មីតាមបទពិសោធន៍សិក្សាទំនើប និងការអនុវត្តកូដជាក់ស្តែង។',
            learn: 'រៀន',
            resources: 'ធនធាន',
            company: 'ក្រុមហ៊ុន',
            newsletter: 'ព័ត៌មានថ្មី',
            newsletterDesc: 'ជាវដើម្បីទទួលបានព័ត៌មានថ្មី និងវគ្គសិក្សា',
            emailPlaceholder: 'អាសយដ្ឋានអ៊ីមែលរបស់អ្នក',
            bottom: '© 2026 Rean Code។ រក្សាសិទ្ធិគ្រប់យ៉ាង។ បង្កើតនៅកម្ពុជា។',
            privacy: 'ឯកជនភាព',
            terms: 'លក្ខខណ្ឌ',
            cookies: 'Cookies'
        },
        alerts: {
            signOut: 'អ្នកបានចាកចេញពីគណនីរួចហើយ។',
            login: 'ចូលគណនីបានជោគជ័យ។ សូមស្វាគមន៍មកវិញ។',
            signup: 'បង្កើតគណនីបានជោគជ័យ។ សូមស្វាគមន៍មកកាន់ Rean Code។',
            courseStart: 'កំពុងបើកផ្លូវសិក្សា {course}។',
            communityEmpty: 'សូមបញ្ចូលឈ្មោះ និងការអាប់ដេតមុនបង្ហោះ។'
        }
    },
    zh: {
        languageLabel: '中文',
        brand: { tagline: '学习。构建。成长。' },
        nav: {
            home: '首页',
            video: '课程',
            books: '课程',
            ai: 'AI 助手',
            score: '积分',
            quiz: '测验',
            community: '社区',
            dashboard: '仪表盘',
            settings: '设置',
            about: '关于',
            services: '服务'
        },
        dropdown: {
            user: '学生资料',
            profile: '资料',
            settings: '设置',
            language: '语言',
            signout: '退出登录'
        },
        auth: {
            loginTitle: '欢迎回到 Rean Code',
            registerTitle: '欢迎来到 Rean Code',
            email: '邮箱',
            password: '密码',
            username: '用户名',
            dob: '出生日期',
            remember: '记住我',
            forgot: '忘记密码？',
            loginButton: '登录',
            signupButton: '注册',
            toSignup: '我还没有账号',
            toLogin: '我已经有账号'
        },
        home: {
            titlePrefix: '欢迎来到',
            subtitle: '你的编程成长之旅从这里开始',
            ctaPrimary: '开始学习',
            ctaSecondary: '浏览课程',
            why: '为什么选择 Rean Code？',
            stats: {
                learners: '活跃学习者',
                courses: '课程',
                certificates: '证书'
            },
            features: {
                ai: {
                    title: 'AI 学习助手',
                    desc: '通过智能 AI 助手获得即时帮助'
                },
                progress: {
                    title: '进度追踪',
                    desc: '用清晰的数据查看你的学习进展'
                },
                community: {
                    title: '社区支持',
                    desc: '与其他学习者和导师建立联系'
                },
                achievements: {
                    title: '成就系统',
                    desc: '在成长过程中获得徽章和证书'
                }
            }
        },
        video: {
            eyebrow: '视频库',
            title: '通过指导视频学习编程',
            subtitle: '从适合初学者和高棉学习者的实战播放列表开始。',
            card1: {
                tag: '入门',
                title: 'HTML 与 CSS 基础',
                desc: '构建你的第一个着陆页，并理解结构、布局和响应式设计。'
            },
            card2: {
                tag: '热门',
                title: 'JavaScript 项目冲刺',
                desc: '练习 DOM 事件、数组和更接近真实工作的小游戏项目。'
            },
            card3: {
                tag: '职业',
                title: '前端开发路线图',
                desc: '了解初级前端岗位需要的技能、工具和作品集计划。'
            }
        },
        common: {
            watchNow: '立即观看',
            shareSuccess: '你的更新已发布到社区。',
            newsletterThanks: '感谢订阅！'
        },
        books: {
            eyebrow: '学习路径',
            title: '选择你的学习路线',
            subtitle: '每种技术都包含结构化课程、练习任务和阶段目标。',
            start: '开始',
            free: '免费',
            learn: '开始学习',
            html: {
                title: 'HTML 初学者课程',
                desc: 'HTML 标签、语义化标记、表单、表格和 SEO 基础。'
            },
            css: {
                title: 'CSS 布局与设计',
                desc: 'Flexbox、Grid、动画、响应式设计和可复用组件。'
            },
            js: {
                title: 'JavaScript 核心基础',
                desc: '变量、函数、事件、API 和项目式问题解决。'
            },
            node: {
                title: 'Node.js 后端基础',
                desc: '路由、REST API、文件系统和简单的后端结构。'
            },
            php: {
                title: 'PHP Web 项目课程',
                desc: '表单、会话、MySQL 基础和传统动态网站开发。'
            }
        },
        score: {
            eyebrow: '排行榜',
            title: '和社区一起追踪你的进步',
            subtitle: '完成课程、测验和连续学习目标后即可获得积分。',
            topLearners: '本周优秀学习者',
            goals: '当前目标',
            goal1: '完成 3 节课程',
            goal2: '通过 JavaScript 测验',
            goal3: '保持 7 天连续学习'
        },
        quiz: {
            eyebrow: '练习区',
            title: '用快速测验提升你的技能',
            subtitle: '选择主题，在进入下一阶段前先检验你的理解程度。',
            html: '15 道关于标签、表单和语义布局的问题。',
            css: '12 道关于选择器、盒模型和响应式设计的问题。',
            js: '20 道关于 DOM 事件、函数、数组和 API 的问题。',
            start: '开始测验',
            statusTitle: '测验状态',
            statusDefault: '选择一个测验开始，你的最佳成绩会显示在这里。',
            statusSelected: '已选择测验：{quiz}。你现在可以开始了。'
        },
        community: {
            eyebrow: '社区',
            title: '与其他开发者一起学习',
            subtitle: '加入讨论、请求代码审查，并分享你的进展。',
            rooms: '热门房间',
            room1: '每日练习和作品集反馈。',
            room2: '为初学者提供友好的帮助。',
            room3: '每周小项目和结对学习活动。',
            postTitle: '发布更新',
            postButton: '分享更新',
            statusDefault: '还没有发布更新。先向社区介绍你自己吧。',
            statusPosted: '{name} 分享了：“{message}”',
            namePlaceholder: '你的名字',
            postPlaceholder: '分享你正在构建的内容...'
        },
        dashboard: {
            title: '仪表盘',
            subtitle: '追踪你的学习进度和成就',
            coursesCompleted: '已完成课程',
            learningHours: '学习时长',
            achievements: '成就',
            streak: '连续学习天数',
            progress: '学习进度',
            recentAchievements: '最近成就',
            achievement1Title: '第一门课程',
            achievement1Desc: '完成了你的第一门课程',
            achievement2Title: '每周战士',
            achievement2Desc: '连续学习 7 天',
            achievement3Title: '代码高手',
            achievement3Desc: '完成了 100 个编程挑战',
            activeCourses: '正在学习的课程',
            module1: '第 5 / 8 模块',
            module2: '第 3 / 10 模块',
            module3: '第 7 / 12 模块',
            thisWeek: '本周',
            mon: '周一',
            tue: '周二',
            wed: '周三',
            thu: '周四',
            fri: '周五',
            sat: '周六',
            sun: '周日',
            weekSummary1: '<strong>本周学习了 6 天</strong>！',
            weekSummary2: '继续保持。'
        },
        settings: {
            eyebrow: '设置',
            title: '个性化你的学习空间',
            subtitle: '选择语言、管理账号流程，并控制学习体验。',
            languageTitle: '语言',
            languageDesc: '将整个界面切换为高棉语、英语或中文。',
            accountTitle: '账号操作',
            openLogin: '打开登录',
            openSignup: '打开注册',
            openDashboard: '前往仪表盘',
            studyTitle: '学习提醒',
            studyDesc: '每日提醒已为你的下一节课程和测验准备好。',
            aiTitle: 'AI 助手',
            aiDesc: '聊天助手只会使用存储在当前浏览器中的 Gemini key。'
        },
        about: {
            eyebrow: '关于 Rean Code',
            title: '为实战开发者打造的学习平台',
            subtitle: 'Rean Code 帮助柬埔寨及更多地区的学生通过实践建立真实的编程能力。',
            missionTitle: '使命',
            missionDesc: '让软件教育更易获取、更实用，并更适合本地语言学习。',
            focusTitle: '重点方向',
            focusDesc: '面向初学者的前端、后端、AI 支持、测验和社区驱动学习路径。'
        },
        services: {
            eyebrow: '服务',
            title: '帮助你学习、构建和起步的工具',
            subtitle: '使用平台进行指导课程、导师支持和项目反馈。',
            card1Title: '项目辅导',
            card1Desc: '在实际指导和每周里程碑支持下构建可放入作品集的项目。',
            card2Title: '导师支持',
            card2Desc: '用高棉语或英语提问，获得直接的学习建议。',
            card3Title: '职业准备',
            card3Desc: '准备简历、GitHub 主页和项目展示，用于求职申请。'
        },
        ai: {
            title: 'Rean Code 助手',
            clear: '清空聊天',
            welcome: '你好！我是 Rean Code AI 助手。今天我可以如何帮助你？',
            typing: 'AI 正在输入...',
            placeholder: '在这里输入你的编程问题...'
        },
        footer: {
            description: '通过创新的学习体验和实用的编程流程，帮助新一代开发者成长。',
            learn: '学习',
            resources: '资源',
            company: '公司',
            newsletter: '订阅',
            newsletterDesc: '订阅以获取最新更新和课程',
            emailPlaceholder: '你的邮箱地址',
            bottom: '© 2026 Rean Code。保留所有权利。制作于柬埔寨。',
            privacy: '隐私',
            terms: '条款',
            cookies: 'Cookies'
        },
        alerts: {
            signOut: '你已退出登录。',
            login: '登录成功。欢迎回来。',
            signup: '账号创建成功。欢迎来到 Rean Code。',
            courseStart: '正在打开 {course} 学习路径。',
            communityEmpty: '请先输入名字和内容再发布。'
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    setupThemeToggle();
    setupSidebarMenu();
    setupUserDropdown();
    setupAuthForms();
    setupNavigation();
    setupAIChat();
    setupProfileUpload();
    setupNewsletterForm();
    setupLanguageSystem();
    setupActionButtons();
    setupCommunityForm();
    initializeAnimations();
    navigateToSection(window.location.hash ? window.location.hash.substring(1) : 'home');
}

function setupAIChat() {
    const chatWindow = document.getElementById('chatWindow');
    const typingIndicator = document.getElementById('typing');

    if (chatWindow) chatWindow.scrollTop = chatWindow.scrollHeight;
    if (typingIndicator) typingIndicator.style.display = 'none';
}

function setupThemeToggle() {
    const themeToggle = document.querySelector('.theme-mode');
    if (!themeToggle) return;

    const themeIcon = themeToggle.querySelector('i');
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(themeIcon, savedTheme);

    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
        updateThemeIcon(themeIcon, newTheme);

        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = '';
        }, 300);
    };

    themeToggle.addEventListener('click', toggleTheme);
    themeToggle.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleTheme();
        }
    });
}

function updateThemeIcon(icon, theme) {
    if (icon) icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

function setupSidebarMenu() {
    const menuBar = document.getElementById('overlay');
    const sideMenu = document.getElementById('sideMenu');
    const bgOverlay = document.getElementById('bgOverlay');
    const menuLinks = document.querySelectorAll('.menu-link .link-item');

    if (menuBar && sideMenu && bgOverlay) {
        menuBar.addEventListener('click', () => {
            sideMenu.classList.toggle('active');
            bgOverlay.classList.toggle('show');
        });

        bgOverlay.addEventListener('click', () => {
            sideMenu.classList.remove('active');
            bgOverlay.classList.remove('show');
        });
    }

    menuLinks.forEach((link) => {
        link.addEventListener('click', () => {
            menuLinks.forEach((item) => item.classList.remove('active'));
            link.classList.add('active');
            if (window.innerWidth <= 768 && sideMenu) {
                sideMenu.classList.remove('active');
                bgOverlay.classList.remove('show');
            }
        });
    });
}

function setupPasswordToggle() {
    const passwordInput = document.getElementById('login-pass');
    const eyeIconWrapper = document.getElementById('togglePassword');
    const eyeIcon = eyeIconWrapper?.querySelector('i');

    if (!passwordInput || !eyeIconWrapper || !eyeIcon) return;

    eyeIconWrapper.addEventListener('click', () => {
        const showPassword = passwordInput.type === 'password';
        passwordInput.type = showPassword ? 'text' : 'password';
        eyeIcon.classList.toggle('fa-eye', !showPassword);
        eyeIcon.classList.toggle('fa-eye-slash', showPassword);
    });
}

function setupUserDropdown() {
    const userBtn = document.getElementById('userBtn');
    const userDropdown = document.getElementById('userDropdown');
    if (!userBtn || !userDropdown) return;

    userBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        userDropdown.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!userDropdown.contains(event.target) && event.target !== userBtn) {
            userDropdown.classList.remove('active');
        }
    });
}

function setupAuthForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const toSignup = document.getElementById('toSignup');
    const toLogin = document.getElementById('toLogin');

    if (toSignup) {
        toSignup.addEventListener('click', () => {
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
        });
    }

    if (toLogin) {
        toLogin.addEventListener('click', () => {
            registerForm.style.display = 'none';
            loginForm.style.display = 'block';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert(t('alerts.login'));
            navigateToSection('dashboard');
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert(t('alerts.signup'));
            navigateToSection('dashboard');
        });
    }

    setupPasswordToggle();
}

function navigateToSection(sectionId) {
    const authContainer = document.getElementById('authContainer');
    const allSections = document.querySelectorAll('.main-content');
    const targetSection = document.getElementById(sectionId);

    if (!targetSection) return;

    if (authContainer) authContainer.style.display = 'none';
    allSections.forEach((section) => {
        section.style.display = 'none';
    });

    targetSection.style.display = 'block';
    window.location.hash = sectionId;
    updateActiveMenu(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showAuthContainer(mode = 'login') {
    const authContainer = document.getElementById('authContainer');
    const allSections = document.querySelectorAll('.main-content');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (authContainer) authContainer.style.display = 'flex';
    allSections.forEach((section) => {
        section.style.display = 'none';
    });

    if (loginForm && registerForm) {
        loginForm.style.display = mode === 'login' ? 'block' : 'none';
        registerForm.style.display = mode === 'signup' ? 'block' : 'none';
    }

    updateActiveMenu('');
}

function updateActiveMenu(sectionId) {
    document.querySelectorAll('.menu-link .link-item').forEach((item) => {
        item.classList.toggle('active', item.dataset.section === sectionId);
    });
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');
            if (!href || href === '#') return;

            event.preventDefault();
            const sectionId = href.substring(1);
            if (sectionId) navigateToSection(sectionId);
        });
    });
}

function setupProfileUpload() {
    const profileUpload = document.getElementById('profileUpload');
    const userPro = document.querySelector('.user-pro');
    if (!profileUpload || !userPro) return;

    profileUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (loadEvent) => {
            userPro.innerHTML = `<img src="${loadEvent.target.result}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">`;
        };
        reader.readAsDataURL(file);
    });
}

function setupNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert(t('common.newsletterThanks'));
        form.reset();
    });
}

function setupLanguageSystem() {
    const preferredLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || 'en';

    document.querySelectorAll('.lang-option').forEach((button) => {
        button.addEventListener('click', () => setLanguage(button.dataset.lang));
    });

    const headerLanguageButton = document.getElementById('headerLanguageButton');
    if (headerLanguageButton) {
        headerLanguageButton.addEventListener('click', () => navigateToSection('settings'));
    }

    setLanguage(preferredLanguage);
}

function setLanguage(language) {
    const normalized = TRANSLATIONS[language] ? language : 'en';
    localStorage.setItem(LANGUAGE_STORAGE_KEY, normalized);
    document.documentElement.lang = normalized === 'kh' ? 'km' : normalized;
    window.REAN_CODE_TRANSLATIONS = TRANSLATIONS;
    window.REAN_CODE_LANG = normalized;
    applyTranslations(normalized);
    updateLanguageButtons(normalized);
    document.dispatchEvent(new CustomEvent('reancode:languagechange', { detail: { language: normalized } }));
}

function applyTranslations(language) {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const value = t(element.dataset.i18n, {}, language);
        if (value !== undefined) {
            if (element.dataset.i18n.includes('weekSummary1')) {
                element.innerHTML = value;
            } else {
                element.textContent = value;
            }
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
        const value = t(element.dataset.i18nPlaceholder, {}, language);
        if (value !== undefined) element.placeholder = value;
    });

    const currentLanguageLabel = document.getElementById('currentLanguageLabel');
    if (currentLanguageLabel) currentLanguageLabel.textContent = t('languageLabel', {}, language);

    const communityName = document.getElementById('communityName');
    const communityPost = document.getElementById('communityPost');
    if (communityName) communityName.placeholder = t('community.namePlaceholder', {}, language);
    if (communityPost) communityPost.placeholder = t('community.postPlaceholder', {}, language);

    const quizStatusText = document.getElementById('quizStatusText');
    if (quizStatusText && !quizStatusText.dataset.selectedQuiz) {
        quizStatusText.textContent = t('quiz.statusDefault', {}, language);
    }
}

function updateLanguageButtons(language) {
    document.querySelectorAll('.lang-option').forEach((button) => {
        button.classList.toggle('active', button.dataset.lang === language);
    });
}

function t(path, params = {}, language = window.REAN_CODE_LANG || 'en') {
    const source = TRANSLATIONS[language] || TRANSLATIONS.en;
    const fallback = TRANSLATIONS.en;
    let value = path.split('.').reduce((accumulator, key) => accumulator?.[key], source);

    if (value === undefined) {
        value = path.split('.').reduce((accumulator, key) => accumulator?.[key], fallback);
    }

    if (typeof value !== 'string') return value;

    return value.replace(/\{(\w+)\}/g, (_, key) => params[key] ?? `{${key}}`);
}

function setupActionButtons() {
    document.querySelectorAll('[data-nav-target]').forEach((button) => {
        button.addEventListener('click', () => navigateToSection(button.dataset.navTarget));
    });

    document.querySelectorAll('[data-course]').forEach((button) => {
        button.addEventListener('click', () => {
            alert(t('alerts.courseStart', { course: button.dataset.course }));
            navigateToSection('dashboard');
        });
    });

    document.querySelectorAll('.quiz-start').forEach((button) => {
        button.addEventListener('click', () => {
            const quizName = button.dataset.quiz;
            const quizStatusText = document.getElementById('quizStatusText');
            if (quizStatusText) {
                quizStatusText.dataset.selectedQuiz = quizName;
                quizStatusText.textContent = t('quiz.statusSelected', { quiz: quizName });
            }
        });
    });

    document.getElementById('openLoginBtn')?.addEventListener('click', () => showAuthContainer('login'));
    document.getElementById('openSignupBtn')?.addEventListener('click', () => showAuthContainer('signup'));
    document.getElementById('openDashboardBtn')?.addEventListener('click', () => navigateToSection('dashboard'));
    document.getElementById('signOutBtn')?.addEventListener('click', (event) => {
        event.preventDefault();
        alert(t('alerts.signOut'));
        showAuthContainer('login');
    });
}

function setupCommunityForm() {
    const form = document.getElementById('communityForm');
    const status = document.getElementById('communityStatus');
    if (!form || !status) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('communityName').value.trim();
        const message = document.getElementById('communityPost').value.trim();

        if (!name || !message) {
            status.textContent = t('alerts.communityEmpty');
            return;
        }

        status.textContent = t('community.statusPosted', { name, message });
        form.reset();
    });
}

function initializeAnimations() {
    const animatedElements = document.querySelectorAll('.feature-card, .stat-card, .glass-card, .dashboard-card');
    if (!animatedElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    animatedElements.forEach((element) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });
}

console.log('%cRean Code updated and ready.', 'color: #38bdf8; font-weight: bold; font-size: 16px;');
