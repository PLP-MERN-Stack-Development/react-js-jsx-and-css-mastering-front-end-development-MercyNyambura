import React from "react";
import Card from "../components/Card";
import TaskManager from "../features/TaskManager/TaskManager";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to Task Manager App</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Manage your daily tasks efficiently and stay organized. Add, track, and complete tasks easily — all in one place.
        </p>
      </section>

      <section className="px-4 md:px-10">
        <Card title="Your Tasks">
          <TaskManager />
        </Card>
      </section>
    </div>
  );
};
export default Home;
