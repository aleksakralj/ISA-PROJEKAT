import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'



const nameStyle = {
    position: 'relative',
    top: '100px',
    left: '260px',
    fontSize: '40px',
    fontWeight: '600'     
}

const searchStyle = {
    position: 'relative',
    top: '160px',
    left: '640px',
    fontSize: '20px'   
}

const tablePosition = {
    position: 'relative',
    top: '120px',
    left: '250px'
}

const dropdownStle = {
    position: 'relative',
    top: '160px',
    left: '650px'
}

const searchInputStyle = {
    position: 'relative',
    top: '160px',
    left: '660px'
}

class ShipsComponent extends Component {

    render() {
        return (
            <div>
                <div>                
                    <text style={searchStyle}> Search by: </text>
                    <select style={dropdownStle}>
                        <option> Name </option>
                        <option> Address </option>
                        <option> Owner </option>
                        <option> Rating </option>
                    </select>
                    <input  style={searchInputStyle}></input>
                </div>
                <div>
                    <text style={nameStyle}> SHIPS </text>
                    <table style={tablePosition}>
                        <thead>
                            <th> Name </th>
                            <th> Addres </th>
                            <th> Owner </th>
                            <th> Ship Rating </th>
                            <th>See more info</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td> Nesto </td>
                                <td> Nesto </td>
                                <td> Nesto </td>
                                <td> Nesto </td>
                                <td>
                                    <button className="seeMoreButton"> Nesto </button>
                                </td>
                            </tr>
                            <tr>
                                <td> Nesto </td>
                                <td> Nesto </td>
                                <td> Nesto </td>
                                <td> Nesto </td>
                                <td>
                                    <button className="seeMoreButton"> Nesto </button>
                                </td>
                            </tr>
                            <tr>
                                <td> Nesto </td>
                                <td> Nesto </td>
                                <td> Nesto </td>
                                <td> Nesto </td>
                                <td>
                                    <button className="seeMoreButton"> Nesto </button>
                                </td>
                            </tr>
                            <tr>
                                <td> Nesto </td>
                                <td> Nesto </td>
                                <td> Nesto </td>
                                <td> Nesto </td>
                                <td>
                                    <button className="seeMoreButton"> Nesto </button>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}


export default ShipsComponent;