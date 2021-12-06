import React, { Component } from 'react'
 

const searchStyle = {
    position: 'relative',
    top: '160px',
    left: '640px',
    fontSize: '20px'   
}

const dropdownStyle = {
    position: 'relative',
    top: '160px',
    left: '650px'
}

const searchInputStyle = {
    position: 'relative',
    top: '160px',
    left: '660px'
}

const nameStyle = {
    position: 'relative',
    top: '100px',
    left: '260px',
    fontSize: '40px',
    fontWeight: '600'     
}

const tablePosition = {
    position: 'relative',
    top: '120px',
    left: '250px'
}

class AdventuresComponent extends Component {
    render() {
        return (
            <div>
                <div>
                    <text style={searchStyle}> Search by: </text>
                    <select style={dropdownStyle}>
                        <option>Name</option>
                        <option>Adress</option>
                        <option>Instructor</option>
                        <option>Rating</option>
                    </select>
                    <input style={searchInputStyle}></input>
                </div>
                <div>
                    <text style={nameStyle}> ADVENTURES </text>
                    <table style={tablePosition}>
                        <thead>
                            <th> Name </th>
                            <th> Addres </th>
                            <th> Instructor </th>
                            <th> Adventure Rating </th>
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
};

export default AdventuresComponent;