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
  { label: 'Modules', href: '#modules' },
  { label: 'Screenshots', href: '#screenshots' },
  { label: 'Why 1 Click', href: '#why' },
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
