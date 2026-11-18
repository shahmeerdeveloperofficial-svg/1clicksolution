// Central content file. Edit text, contact details and module status here.
import gDashboard from '../assets/screens/g-dashboard.webp'
import gEnrollment from '../assets/screens/g-enrollment.webp'
import gFees from '../assets/screens/g-fees.webp'
import gAttendance from '../assets/screens/g-attendance.webp'
import gStaff from '../assets/screens/g-staff.webp'
import gReports from '../assets/screens/g-reports.webp'
import gCalendar from '../assets/screens/g-calendar.webp'
import phone from '../assets/screens/phone.webp'
import fFees from '../assets/screens/f-fees.webp'
import mAdmissions from '../assets/screens/m-admissions.webp'
import mStudents from '../assets/screens/m-students.webp'
import mStaff from '../assets/screens/m-staff.webp'
import mAttendance from '../assets/screens/m-attendance.webp'
import mAcademics from '../assets/screens/m-academics.webp'
import mFees from '../assets/screens/m-fees.webp'
import mComm from '../assets/screens/m-comm.webp'
import mReports from '../assets/screens/m-reports.webp'
import mClasses from '../assets/screens/m-classes.webp'
import mComplaints from '../assets/screens/m-complaints.webp'

export const site = {
  name: '1 Click Solution',
  tagline: 'One Platform. Every School Operation.',
  // PLACEHOLDERS: replace with real details before launch.
  contact: {
    email: 'info@your-domain.com',
    phone: '+92 300 0000000',
    address: 'Your office address, City, Country',
  },
}

export const nav = [
  { label: 'Overview', href: '#overview' },
  { label: 'Modules', href: '#solution' },
  { label: 'How It Works', href: '#workflow' },
  { label: 'Mobile Apps', href: '#mobile-apps' },
  { label: 'Screenshots', href: '#screenshots' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

// The phone mockup shows a real crop of the CMS sidebar.
// Replace `phone.webp` with a true mobile screenshot (about 9:19.5) when you have one.
export const heroImages = { laptop: gDashboard, phone, panelFees: fFees, panelAttendance: mAttendance, panelAdmissions: mAdmissions }

/**
 * status: 'available' = visible in the supplied CMS screenshots.
 *         'upcoming'  = not seen in the screenshots; shown with an "Upcoming" badge.
 * Change the status here once you confirm what is implemented.
 */
export const modules = [
  {
    id: 'admissions',
    tone: 'pink',
    icon: 'userPlus',
    title: 'Admission Management',
    short: 'Track admission inquiries from first contact to enrollment.',
    long: 'Record inquiries, follow their progress and move families through admission without re-entering details.',
    points: [
      'Admission inquiry tracking with Active, Won, Passive, Lost and Dead stages',
      'New Admission shortcut available from every screen',
      'Inquiry, registration and admission counts on the dashboard',
    ],
    image: mAdmissions,
    status: 'available',
  },
  {
    id: 'students',
    tone: 'orange',
    icon: 'graduationCap',
    title: 'Student Registration & Records',
    short: 'Keep every student profile and record in one place.',
    long: 'Maintain student registrations and records with a live count of students, boys and girls across the institution.',
    points: [
      'Student totals with boys and girls ratio',
      'Registration and student counts on the main dashboard',
      'One-click access to the full student list',
    ],
    image: mStudents,
    status: 'available',
  },
  {
    id: 'staff',
    tone: 'blue',
    icon: 'users',
    title: 'Staff & Teacher Management',
    short: 'A searchable directory for teachers and staff.',
    long: 'Manage staff profiles by branch and role, and keep staff records organised and easy to find.',
    points: [
      'Filter by branch and role, or search a specific staff member',
      'Add staff one at a time or import them',
      'Copy, Excel, CSV, PDF and print options for staff lists',
      'View and edit profiles from the directory',
    ],
    image: mStaff,
    status: 'available',
  },
  {
    id: 'attendance',
    tone: 'green',
    icon: 'calendarCheck',
    title: 'Attendance Management',
    short: 'Daily attendance for students and staff.',
    long: 'See who is present, late, absent or on leave today, for both students and staff.',
    points: [
      'Student attendance: present, late, absent and half day',
      'Staff attendance: present, late, absent and on leave',
      'Staff attendance page inside the Staff menu',
    ],
    image: mAttendance,
    status: 'available',
  },
  {
    id: 'academics',
    tone: 'purple',
    icon: 'bookOpen',
    title: 'Academic Management',
    short: 'Timetables and academic events in one calendar.',
    long: 'Plan the academic year with a calendar of events, deadlines and meetings, and see the day’s class schedule.',
    points: [
      'Calendar with month, week, day and timetable views',
      'Academic events, fee deadlines, meetings and exams in one view',
      'Today’s schedule on the dashboard',
    ],
    image: mAcademics,
    status: 'available',
  },
  {
    id: 'fees',
    tone: 'amber',
    icon: 'wallet',
    title: 'Fee & Accounts Management',
    short: 'Billed, collected and pending fees at a glance.',
    long: 'Follow fee collection and school accounts from one finance area, with clear monthly figures.',
    points: [
      'Total fees, collection, waive off and balance',
      'Monthly collection trajectory chart',
      'Income, expenses and payroll overview',
      'Fee Collect and Add Expense quick actions',
    ],
    image: mFees,
    status: 'available',
  },
  {
    id: 'communication',
    tone: 'teal',
    icon: 'bell',
    title: 'Communication & Notifications',
    short: 'Notices and announcements for parents and staff.',
    long: 'Publish school announcements and keep internal and external communication in one place.',
    points: [
      'Notice board with audience labels',
      'Create Notice quick action',
      'Internal and external communication menu',
    ],
    image: mComm,
    status: 'available',
  },
  {
    id: 'reports',
    tone: 'purple',
    icon: 'barChart',
    title: 'Reports & Analytics',
    short: 'Charts and reports that show how the school is doing.',
    long: 'Review enrollment, finance and attendance trends without exporting data into separate tools.',
    points: [
      'Yearly expenses and category-wise spending',
      'Enrollment and capacity by class and campus',
      'Dedicated Reports area in the main navigation',
    ],
    image: mReports,
    status: 'available',
  },
  {
    id: 'withdrawal',
    tone: 'slate',
    icon: 'userMinus',
    title: 'Student Withdrawal Management',
    short: 'A clear process for students leaving the school.',
    long: 'Handle student withdrawals through a dedicated process so records stay accurate.',
    points: ['Dedicated Withdrawal Process section in the admin menu'],
    status: 'available',
  },
  {
    id: 'classes',
    tone: 'blue',
    icon: 'layers',
    title: 'Class & Section Management',
    short: 'Capacity, enrollment and seats for every class.',
    long: 'See capacity, enrolled students, available seats and reserved percentage for each class and campus.',
    points: [
      'Class-wise capacity, enrolled and available seats',
      'Level filters such as Pre-Primary, Primary and Secondary',
      'Enrollment across connected campuses',
    ],
    image: mClasses,
    status: 'available',
  },
  {
    id: 'complaints',
    tone: 'pink',
    icon: 'messageAlert',
    title: 'Complaints & Visitor Management',
    short: 'Follow every complaint and visitor record.',
    long: 'Keep a queue of complaints with their status and track visitors from the dashboard.',
    points: [
      'Complaint ticket queue with Resolved, In Progress and Pending status',
      'Visitor count on the dashboard',
    ],
    image: mComplaints,
    status: 'available',
  },
  {
    id: 'exams',
    tone: 'orange',
    icon: 'fileText',
    title: 'Examination & Results',
    short: 'Exams, marks and result reporting.',
    long: 'Planned module for managing examinations and publishing results.',
    points: [],
    status: 'upcoming',
  },
  {
    id: 'transport',
    tone: 'teal',
    icon: 'bus',
    title: 'Transport Management',
    short: 'Routes, vehicles and transport records.',
    long: 'Planned module for managing school transport.',
    points: [],
    status: 'upcoming',
  },
  {
    id: 'roles',
    tone: 'slate',
    icon: 'shield',
    title: 'User Roles & Permissions',
    short: 'Control who can see and change what.',
    long: 'Planned module for fine-grained access control across roles.',
    points: [],
    status: 'upcoming',
  },
]

// How many modules are visible before "View all modules".
export const modulesPreview = 8

export const flow = [
  { icon: 'userPlus', label: 'Admission inquiry', tone: 'pink' },
  { icon: 'graduationCap', label: 'Student record', tone: 'orange' },
  { icon: 'calendarCheck', label: 'Attendance', tone: 'green' },
  { icon: 'wallet', label: 'Fees', tone: 'amber' },
  { icon: 'barChart', label: 'Reports', tone: 'purple' },
]

export const gallery = [
  { id: 'dashboard', title: 'Main dashboard', text: 'Admissions, students, staff, fees and attendance at a glance.', src: gDashboard },
  { id: 'enrollment', title: 'Enrollment & capacity', text: 'Class-wise capacity, enrolled students and available seats across campuses.', src: gEnrollment },
  { id: 'fees', title: 'Fee management', text: 'Billed, collected, waived-off and balance amounts with a monthly trajectory.', src: gFees },
  { id: 'attendance', title: 'Attendance & notices', text: 'Daily student and staff attendance, admission inquiry progress and the notice board.', src: gAttendance },
  { id: 'staff', title: 'Staff directory', text: 'Filter by branch and role, search staff, import or add members, and export lists.', src: gStaff },
  { id: 'reports', title: 'Finance reports', text: 'Yearly expenses, category-wise spending and payroll disbursements.', src: gReports },
  { id: 'calendar', title: 'Academic calendar', text: 'Month, week, day and timetable views of events, fee deadlines and meetings.', src: gCalendar },
]

export const benefits = [
  { icon: 'link', title: 'One connected platform', tone: 'blue', text: 'Admissions, students, staff, fees and attendance share the same records, so nothing lives in a separate sheet.' },
  { icon: 'repeat', title: 'Less repetitive work', tone: 'purple', text: 'Enter information once and use it across modules instead of retyping it in every department.' },
  { icon: 'building', title: 'Built for multiple campuses', tone: 'teal', text: 'Switch between branches and compare enrollment and capacity across connected campuses.' },
  { icon: 'layout', title: 'A clear daily overview', tone: 'orange', text: 'The dashboard brings enrollment, fees, attendance and notices onto a single screen.' },
  { icon: 'search', title: 'Find records quickly', tone: 'pink', text: 'Search students, staff, admissions, bills and reports from one search bar.' },
  { icon: 'download', title: 'Export and print lists', tone: 'green', text: 'Copy, Excel, CSV, PDF and print options are available on list screens.' },
]

/**
 * 4 Dedicated Mobile Applications
 * Order: Parent App | Chairman App | Student App | Teacher App
 * Note: Screenshots should be placed in src/assets/screens/ when final builds are ready.
 */
export const mobileApps = [
  {
    id: 'parent',
    name: 'Parent App',
    shortName: 'Parent',
    target: 'For Parents & Guardians',
    badge: 'Connected Families',
    tone: 'purple',
    icon: 'heart',
    purpose: "Help parents stay connected with their children's school.",
    description: 'Keep parents actively informed with instant daily attendance, fee voucher tracking, homework updates, and official school circulars.',
    benefits: [
      'Instant daily attendance alerts (present, absent, late, or leave)',
      'Fee invoices, payment status, and digital receipts',
      'Daily homework assignments and teacher remarks',
      'School announcements, calendar, and urgent event notices',
    ],
    verifiedCapabilities: [
      'Daily student attendance overview with status breakdown',
      'Billed, paid, and outstanding fee balance tracking',
      'Homework tracker with subject details and submission dates',
      'School-wide notice board for circulars and meeting schedules',
      'Multi-child profile switching for parents with several enrolled students',
    ],
    availability: 'Available on iOS & Android for institutions subscribed to 1 Click Solution.',
    image: null, // Will use high-fidelity UI preview until dedicated production screenshot is dropped in
  },
  {
    id: 'chairman',
    name: 'Chairman App',
    shortName: 'Chairman',
    target: 'For Owners, Chairmen & Trustees',
    badge: 'Executive Oversight',
    tone: 'amber',
    icon: 'crown',
    purpose: 'Help school leadership monitor institutional operations.',
    description: 'Provide executive leadership with real-time institutional dashboards, multi-campus KPIs, and financial summaries on the go.',
    benefits: [
      'Executive KPI dashboard across single or multiple campuses',
      'Real-time fee collection, outstanding balance, and expense tracking',
      'Institutional student and staff attendance headcount at a glance',
      'Enrolment trends, capacity analysis, and decision-making reports',
    ],
    verifiedCapabilities: [
      'Consolidated management dashboard with live operational totals',
      'Multi-branch performance comparison and enrollment metrics',
      'Fee collection trajectory vs. monthly operational targets',
      'Staff presence, leave count, and teacher allocation ratios',
      'Strategic reporting on institutional growth and capacity',
    ],
    availability: 'Available on iOS & Android for institutional leadership.',
    image: null,
  },
  {
    id: 'student',
    name: 'Student App',
    shortName: 'Student',
    target: 'For Enrolled Students',
    badge: 'Academic Hub',
    tone: 'blue',
    icon: 'graduationCap',
    purpose: 'Provide students with convenient access to their academic information.',
    description: 'Give students a convenient, focused academic portal to view daily class timetables, homework assignments, attendance, and school news.',
    benefits: [
      'Daily class timetables, room assignments, and period schedules',
      'Subject-wise homework tasks with clear submission deadlines',
      'Personal daily attendance logs and academic attendance rate',
      'School circulars, event updates, and holiday calendar',
    ],
    verifiedCapabilities: [
      'Interactive day and week timetable with current period indicator',
      'Organised homework queue by subject with pending status',
      'Personal attendance record (present, late, absent history)',
      'School-wide and section-specific circulars and notices',
      'Academic calendar for events, deadlines, and scheduled exams',
    ],
    availability: 'Available on iOS & Android for enrolled students.',
    image: null,
  },
  {
    id: 'teacher',
    name: 'Teacher App',
    shortName: 'Teacher',
    target: 'For Academic Faculty & Staff',
    badge: 'Classroom Assistant',
    tone: 'green',
    icon: 'bookOpen',
    purpose: 'Support teachers in managing academic activities.',
    description: 'Empower teaching staff to mark rapid class attendance, dispatch homework assignments, and access class rosters directly from their phones.',
    benefits: [
      'Fast 1-tap student attendance marking for assigned sections',
      'Digital homework assignment creation and instruction broadcast',
      'Immediate access to assigned classes, subjects, and student rosters',
      'Direct communication channel with administrative leadership',
    ],
    verifiedCapabilities: [
      'Class-wise student attendance entry (Present, Absent, Late, Leave)',
      'Homework publishing with subject selection and instructions',
      'Teacher schedule and timetable view for the academic day',
      'Student profile reference and contact access for class teachers',
      'Internal staff circulars and administrative alerts',
    ],
    availability: 'Available on iOS & Android for authorized teaching faculty.',
    image: null,
  },
]

/**
 * Pricing Plans (Provisional)
 * Note: Actual pricing is prepared custom per institution.
 * We present a transparent, quote-based model without inventing fictional numbers.
 */
export const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    badge: 'Provisional Plan',
    audience: 'Single-campus schools & growing academies',
    description: 'Essential digital foundation to organize admissions, student records, daily attendance, and fee tracking on a single campus.',
    priceLabel: 'Custom Quote',
    priceSubtext: 'Tailored to your student body and setup requirements',
    highlighted: false,
    ctaText: 'Request a Quote',
    features: [
      { text: 'Admission inquiry & registration management', included: true },
      { text: 'Student profiles & record keeping', included: true },
      { text: 'Daily attendance tracking (students & staff)', included: true },
      { text: 'Fee voucher generation & collection records', included: true },
      { text: 'Academic calendar, events & meeting scheduling', included: true },
      { text: 'Standard Web CMS portal for administration', included: true },
      { text: 'Export student & staff lists (Excel / CSV)', included: true },
      { text: 'Multi-campus branch switching', included: false, note: 'Available in Professional' },
      { text: 'Dedicated 4-App Mobile Suite', included: false, note: 'Available in Professional' },
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    badge: 'Provisional Plan',
    tag: 'Full Platform Suite',
    audience: 'Established schools & multi-branch institutions',
    description: 'Complete operational control with multi-campus management, comprehensive financial reporting, and the complete 4-app mobile suite.',
    priceLabel: 'Custom Quote',
    priceSubtext: 'Structured according to campus count and mobile user access',
    highlighted: true,
    ctaText: 'Request a Quote',
    features: [
      { text: 'All capabilities included in Starter', included: true },
      { text: 'Multi-campus & branch management', included: true },
      { text: 'Class & section capacity with reserved seats', included: true },
      { text: 'Finance reports, yearly expenses & collection trends', included: true },
      { text: 'Notice board & internal communications', included: true },
      { text: 'Complaints queue & visitor tracking', included: true },
      { text: 'Complete 4-App Mobile Suite (Parent, Chairman, Student, Teacher)', included: true },
      { text: 'Full export options (Excel, CSV, PDF & Print)', included: true },
      { text: 'Guided institutional onboarding & setup assistance', included: true },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    badge: 'Provisional Plan',
    tag: 'Custom Deployment',
    audience: 'Large school networks, trusts & colleges',
    description: 'Tailored institutional deployment with priority SLA, custom role permissions, consolidated group reporting, and migration services.',
    priceLabel: 'Custom Quote',
    priceSubtext: 'Bespoke institutional agreement with priority deployment',
    highlighted: false,
    ctaText: 'Request a Quote',
    features: [
      { text: 'All capabilities included in Professional', included: true },
      { text: 'Unlimited connected campuses & academic branches', included: true },
      { text: 'Consolidated executive reporting for trustees & leadership', included: true },
      { text: 'Custom user roles, access control & permission policies', included: true },
      { text: 'Legacy data migration & database onboarding assistance', included: true },
      { text: 'Dedicated account representative & priority support SLA', included: true },
      { text: 'Tailored institutional workflow configurations', included: true },
    ],
  },
]

export const pricingComparison = [
  {
    category: 'Core Administration',
    items: [
      { name: 'Admission & Inquiry Tracking', starter: true, professional: true, enterprise: true },
      { name: 'Student Records & Demographics', starter: true, professional: true, enterprise: true },
      { name: 'Staff & Teacher Directory', starter: true, professional: true, enterprise: true },
      { name: 'Daily Student & Staff Attendance', starter: true, professional: true, enterprise: true },
      { name: 'Student Withdrawal Process', starter: true, professional: true, enterprise: true },
    ],
  },
  {
    category: 'Academics & Operations',
    items: [
      { name: 'Academic Calendar & Schedule', starter: true, professional: true, enterprise: true },
      { name: 'Class & Section Capacity Management', starter: false, professional: true, enterprise: true },
      { name: 'Complaints & Visitor Management', starter: false, professional: true, enterprise: true },
      { name: 'Notice Board Broadcasts', starter: 'Basic', professional: true, enterprise: true },
    ],
  },
  {
    category: 'Finance & Analytics',
    items: [
      { name: 'Fee Vouchers & Collection Tracking', starter: true, professional: true, enterprise: true },
      { name: 'Expense Tracking & Finance Reports', starter: false, professional: true, enterprise: true },
      { name: 'Cross-Campus Executive Analytics', starter: false, professional: true, enterprise: true },
      { name: 'Data Export (Excel, CSV, PDF, Print)', starter: 'Excel/CSV', professional: 'Full Suite', enterprise: 'Full Suite' },
    ],
  },
  {
    category: 'Mobile Applications Suite',
    items: [
      { name: 'Parent Mobile App', starter: false, professional: true, enterprise: true },
      { name: 'Chairman Executive Mobile App', starter: false, professional: true, enterprise: true },
      { name: 'Student Mobile App', starter: false, professional: true, enterprise: true },
      { name: 'Teacher Classroom Mobile App', starter: false, professional: true, enterprise: true },
    ],
  },
  {
    category: 'Deployment & Support',
    items: [
      { name: 'Multi-Campus Architecture', starter: 'Single Campus', professional: 'Multi-Campus', enterprise: 'Unlimited' },
      { name: 'User Roles & Access Permissions', starter: 'Standard', professional: 'Standard', enterprise: 'Custom Roles' },
      { name: 'Data Migration Assistance', starter: 'Self-serve', professional: 'Guided', enterprise: 'Dedicated Team' },
      { name: 'Institutional Support', starter: 'Standard', professional: 'Priority', enterprise: 'Dedicated SLA' },
    ],
  },
]
