import React, { useState } from 'react';
import { Input } from "@chakra-ui/react"
import { Button, HStack } from "@chakra-ui/react"

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  width: 500, margin: '0 auto', padding: 50, border: '1px solid #ccc', borderRadius: 10 }}>
      <h2 style={{marginBottom: 30}}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <Input placeholder="Email" width={400} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <Input placeholder="Password" />
        </div>
        <Button size="sm">Login</Button>
      </form>
    </div>
  );
};

export default Login;