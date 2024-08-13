"use client"
import { useState } from "react"


interface User {
  id: number;
  name: string;
}

interface Users {
  users: User[];
}

const UsersList = ({ users }: Users) => {
  return <div>
    {users.map((item, index) => (
      <div key={item.id}> {item.id}. {item.name}</div>
    ))}
  </div>
}

interface FormInputProps {
  onSubmit: (input: string) => void;
}

const FormInput = ({ onSubmit }: FormInputProps) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    onSubmit(input);
    setInput('');
  }

  return (
    <>
      <input type="text" className="border border-red-700" onChange={(e) => { setInput(e.target.value) }} value={input} />
      <button className="border border-red-700 px-4" onClick={() => { handleSubmit() }}>add</button>
    </>
  )
}

const HomePage = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "nonpawiz", }
  ]);

  const InsertUser = (input: string) => {
    setUsers([...users, { id: users.length + 1, name: input }]);
  }

  return (
    <>
      <div className="p-4">
        <FormInput onSubmit={InsertUser} />
        <UsersList users={users} />
      </div>
    </>
  )
}

export default HomePage;