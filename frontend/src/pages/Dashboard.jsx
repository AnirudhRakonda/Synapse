// Dashboard.jsx
import React from 'react';

function Dashboard() {
    return (
        <div className="flex h-screen">
            <MainContent />
        </div>
    );
}

function MainContent() {
    return (
        <div className="flex-1 p-6">
            <Header />
            <Overview />
            <div className="grid grid-cols-3 gap-6 mt-6">
                <ActivityHours />
                <Performance />
                <Profile />
                <Rewards/>
            </div>
            <UpcomingSubmission />
            <CommunityGroups />
        </div>
    );
}

function Header() {
    return (
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl text-white font-bold">Hello Siddharth ,</h1>
          <p className="text-gray-500">Let's learn something new today!</p>
        </div>
        <div className="flex items-center">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Profile" className="w-12 h-12 rounded-full" />
          <i className="fas fa-bell text-gray-400 ml-4"></i>
        </div>
      </div>
    );
}

function Overview() {
    return (
        <div className="grid grid-cols-4 gap-6">
            <OverviewCard title="Doubts in progress" value="15" color="red" />
            <OverviewCard title="Rewards  Earned" value="90" color="blue" />
            <OverviewCard title="Doubts Completed" value="70" color="green" />
            <OverviewCard title="Community Support" value="320" color="orange" />
        </div>
    );
}

function OverviewCard({ title, value, color }) {
    const colorClasses = {
        red: 'text-red-500',
        blue: 'text-blue-500',
        green: 'text-green-500',
        orange: 'text-orange-500'
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-500">{title}</p>
            <p className={`text-2xl font-bold ${colorClasses[color]}`}>{value}</p>
        </div>
    );
}

function ActivityHours() {
    return (
        <div className="bg-white p-4 rounded-lg shadow col-span-2">
            <h2 className="text-lg font-semibold mb-4">Activity Hours</h2>
            <div className="flex justify-between items-center mb-4">
                <p>Weekly</p>
                <p>Time spent <span className="font-bold">28</span> <span className="text-green-500">143%</span></p>
                <p>Lessons Done <span className="font-bold">50</span> <span className="text-blue-500">84%</span></p>
                <p>Doubts Resolved <span className="font-bold">10</span> <span className="text-green-500">100%</span></p>
            </div>
            <div className="flex justify-between items-end h-32">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="bg-blue-500 w-6" style={{ height: `${(index + 1) * 10}px` }}></div>
                        <p className="mt-2">{day}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Performance() {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Performance</h2>
            <div className="flex justify-between items-center mb-4">
                <p>Point Progress</p>
                <p>Monthly</p>
            </div>
            <div className="flex justify-center items-center mb-4">
                <div className="relative">
                    <div className="w-32 h-32 rounded-full border-8 border-red-200"></div>
                    <div className="absolute inset-0 flex justify-center items-center">
                        <p className="text-2xl font-bold">9.301</p>
                    </div>
                </div>
            </div>
            <p className="text-center">5th in Leaderboard</p>
        </div>
    );
}

function Profile() {
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center mb-4">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Profile" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <p className="font-semibold">Siddhartha</p>
            <p className="text-gray-500">Student</p>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <p className="mb-2">December 2021</p>
          <div className="flex justify-between">
            {['24', '25', '26', '27', '28', '29', '30'].map((day, index) => (
              <div key={index} className={`w-8 h-8 flex justify-center items-center rounded-full ${day === '25' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
function Rewards() {
  return (
    <div className="bg-white p-4 rounded-lg shadow mt-4">
      <h2 className="text-lg font-semibold mb-4">Rewards</h2>
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-500">Total Points</p>
        <p className="text-2xl font-bold text-blue-500">1200</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-500">Redeemed Points</p>
        <p className="text-2xl font-bold text-green-500">800</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-gray-500">Available Points</p>
        <p className="text-2xl font-bold text-orange-500">400</p>
      </div>
    </div>
  );
}

function UpcomingSubmission() {
    return (
        <div className="bg-white p-4 rounded-lg shadow mt-6">
            <h2 className="text-lg font-semibold mb-4">Upcoming Douts</h2>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img src="https://placehold.co/40x40" alt="Task" className="w-10 h-10 mr-4" />
                    <div>
                        <p className="font-semibold">DBMS</p>
                        <p className="text-gray-500">OOPS</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-gray-500">Due Date</p>
                    <p className="text-red-500">Thu 21 April 2022</p>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit Task</button>
            </div>
        </div>
    );
}

function CommunityGroups() {
    return (
        <div className="bg-white p-4 rounded-lg shadow mt-6">
            <h2 className="text-lg font-semibold mb-4">Community Groups</h2>
            <ul>
                <li className="flex items-center mb-4">
                    <img src="https://placehold.co/40x40" alt="Group" className="w-10 h-10 mr-4" />
                    <div>
                        <p className="font-semibold">Design Community USA</p>
                        <p className="text-gray-500">112K Members</p>
                    </div>
                </li>
                <li className="flex items-center mb-4">
                    <img src="https://placehold.co/40x40" alt="Group" className="w-10 h-10 mr-4" />
                    <div>
                        <p className="font-semibold">SEO Helpline 24/7</p>
                        <p className="text-gray-500">78K Members</p>
                    </div>
                </li>
                <li className="flex items-center">
                    <img src="https://placehold.co/40x40" alt="Group" className="w-10 h-10 mr-4" />
                    <div>
                        <p className="font-semibold">UI/UX Worldwide</p>
                        <p className="text-gray-500">498K Members</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Dashboard;
