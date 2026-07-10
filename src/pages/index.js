import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="SIC Wiki"
      description="Space Flight Simulator(航天模拟器)简中社区攻略站">
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1>SIC Wiki</h1>
        <p>Space Flight Simulator 简中社区攻略站</p>
        <p>正在建设中...</p>
      </div>
    </Layout>
  );
}