import React, { Component } from 'react'

export default class Table extends Component {
    render() {
        const data = this.props.empdata.map(data => {
            return (
                <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                <tr>
                    <td>{data.id}</td>
                    <td>{data.employee_name}</td>
                </tr>
            </table>

            )
        })
        return (
            <div>
                {data}
            </div>
        )
    }
}
