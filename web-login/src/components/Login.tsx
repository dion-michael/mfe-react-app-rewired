import React, { useState } from 'react';
import '../App.css';
import { Button, Paper, TextField } from '@material-ui/core';

interface LoginFormValue {
    [key: string]: string;
};

function Login({ history }: { history?: any }) {
    const [formValue, setFormValue] = useState<LoginFormValue>({
        username: '',
        password: '',
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        })
    };

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formValue);
    }

    return (
        <div className="App">
            <Paper style={{ padding: 24 }}>
                <form onSubmit={handleOnSubmit}>
                    <TextField fullWidth={true} style={{ marginBottom: 24 }} label="username" name="username" value={formValue.username} onChange={handleOnChange} />
                    <TextField type="password" fullWidth={true} style={{ marginBottom: 24 }} label="password" name="password" value={formValue.password} onChange={handleOnChange} />
                    <Button type="submit" fullWidth={true} variant="contained" color="secondary">SUBMIT</Button>
                </form>
            </Paper>
        </div>
    );
}

export default Login;
