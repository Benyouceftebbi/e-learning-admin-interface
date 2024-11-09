import { useState } from 'react';
import { DataTable } from '../components/DataTable';
import { StudentDetailsModal } from '../components/StudentDetailsModal';
import { Eye, Trash2 } from 'lucide-react';

interface Subject {
  name: string;
  teacherId: string;
  teacherName: string;
}

interface Student {
  id: string;
  name: string;
  email: string;
  registrationDate: string;
  level: string;
  year: string;
  branch?: string;
  subjects: Subject[];
}

export function Students() {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  // Mock data for students
  const [students, setStudents] = useState<Student[]>([
    {
      id: '1',
      name: 'John Smith',
      email: 'john.smith@example.com',
      registrationDate: '2024-03-19',
      level: 'High School',
      year: 'Year 2',
      branch: 'Scientific',
      subjects: [
        { name: 'Physics', teacherId: '1', teacherName: 'Dr. Robert Brown' },
        { name: 'Chemistry', teacherId: '2', teacherName: 'Dr. Sarah Wilson' },
      ],
    },
    {
      id: '2',
      name: 'Emma Johnson',
      email: 'emma.j@example.com',
      registrationDate: '2024-03-20',
      level: 'Middle School',
      year: 'Year 3',
      subjects: [
        { name: 'Mathematics', teacherId: '3', teacherName: 'Prof. Michael Lee' },
        { name: 'English', teacherId: '4', teacherName: 'Ms. Jennifer Parker' },
      ],
    },
    {
      id: '3',
      name: 'Michael Brown',
      email: 'michael.b@example.com',
      registrationDate: '2024-03-18',
      level: 'Elementary School',
      year: 'Year 5',
      subjects: [
        { name: 'Science', teacherId: '5', teacherName: 'Dr. Emily White' },
        { name: 'Social Studies', teacherId: '6', teacherName: 'Mr. James Wilson' },
      ],
    },
  ]);

  const handleRemoveStudent = (studentId: string) => {
    setStudents(students => students.filter(s => s.id !== studentId));
    setSelectedStudent(null);
  };

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'level', label: 'Level' },
    { key: 'year', label: 'Year' },
    { key: 'branch', label: 'Branch', 
      render: (student: Student) => (
        <span>{student.branch || '-'}</span>
      )
    },
    { key: 'registrationDate', label: 'Registration Date' },
    {
      key: 'actions',
      label: 'Actions',
      render: (student: Student) => (
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setSelectedStudent(student)}
            className="p-1 text-purple-600 hover:text-purple-800 rounded-full hover:bg-purple-100"
            title="View Details"
          >
            <Eye className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleRemoveStudent(student.id)}
            className="p-1 text-red-600 hover:text-red-800 rounded-full hover:bg-red-100"
            title="Remove Student"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Students</h1>
        <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg">
          {students.length} Total Students
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <DataTable<Student>
          columns={columns}
          data={students}
        />
      </div>

      {selectedStudent && (
        <StudentDetailsModal
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
          onApprove={() => {}} // Not used in this context
          onReject={() => {}} // Not used in this context
        />
      )}
    </div>
  );
}