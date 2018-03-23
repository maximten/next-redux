import React, { Component } from 'react'
import Layout from './Layout.jsx'

export default ({ children, title }) => (
  <Layout title={title}>
    {children}
  </Layout>
)
