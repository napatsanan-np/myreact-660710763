import React from 'react';
import UserCard from './UserCard';
import TodoList from './TodoList';

function ComponentExamples() {
    return (
        <div style={{
            backgroundColor: '#6E85B7',
            minHeight: '100vh',
            padding: '20px'
        }}>

                <UserCard />
                <TodoList />
        </div>
    );
}

export default ComponentExamples;