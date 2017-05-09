import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastname="Silva">
        <Member name="madson" />
        <Member name="Rafael" />
        <Member name="Julia" />
    </Family>
, document.getElementById('app'))

