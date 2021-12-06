import React, { Component } from 'react';


const mainDataStyle = {    
    position: 'relative',
    top : '115px',
    left: '150px',
    border: '3px solid #73AD21',              
    width: '280px'
};

const pictureStyle = {
    position: 'relative',
    top: '70px',
    left: '150px',
    border: '3px solid #333333',
    width: '350px',
    height: '300'
}

const otherDataStyle = {
    position: 'relative',
    border: '3px solid #111111',
    top: '-300px',
    left: '800px',
    width: '350px'
}

const buttonStyle = {
    position: 'relative',
    border:'3px solid #DDDDDDD',
    width:'200px',
    height: '50px',
    top: '-260px',
    left: '800px'
}

class ClientProfileComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>

                <div style={pictureStyle}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC" alt="" width="347" height="250"></img> 
                </div> 

                <div style={mainDataStyle}>
                    <label> Email: </label>
                    <input  name="email" value={this.state.email} onChange={this.changeEmailHandler} />
                    <br /><br />
                    <label> Password: </label>
                    <input name="password" value={this.state.password} onChange={this.changePasswordHandler} />
                    <br /><br />
                </div>

                <div style={otherDataStyle}>                 
                    <label> First name: </label>
                    <input name="firstname" value={this.state.firstname} onChange={this.changeFirstNameHandler} />
                    <br /><br />
                    <label> Last name: </label>
                    <input name="lastname" value={this.state.lastname} onChange={this.changeLastNameHandler} />
                    <br /><br />
                    <label> Adress: </label>
                    <input name="adress" value={this.state.adress} onChange={this.changeAdressHandler} />
                    <br /><br />
                    <label> City: </label>
                    <input name="city" value={this.state.city} onChange={this.changeCityHandler} />
                    <br /><br />
                    <label> Country: </label>
                    <input name="country" value={this.state.country} onChange={this.changeCountryHandler} />
                    <br /><br />
                    <label> Phone number: </label>
                    <input name="phonenumber" value={this.state.phonenumber} onChange={this.changePhoneNumberHandler} />
                </div>
                    <button style={buttonStyle}> Update
                    </button>
                <div>
                    
                </div>

            </div>
        )
    }
}


export default ClientProfileComponent;