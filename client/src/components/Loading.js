/*  Loading.js */
import React from 'react';
import './loading.css';

export default function Loading() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="loading-container">
                <img
                    src={require('./loadingimg.jpg')}  // Use require to specify the correct path
                    alt="Loading..."
                    className="loading-spinner"
                />
                <p style={{ marginTop: '20px', fontWeight: 'bold', color: '#333' }}>Loading...</p>
            </div>
        </div>
    ); 
}