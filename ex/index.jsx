import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastname='Silva'>
        <Member name='Madson' />
    </Family>
, document.getElementById('app'))

