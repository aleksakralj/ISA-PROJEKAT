import React, { Component } from 'react';
import background from './try/pexels-ron-lach-10412889.jpg';


class HomePageCommponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>

                <div style={{position:'absolute',top:'150px', left:'670px'}}>
                    <h1 align="center"> WELCOME </h1>
                    <h3 align="center"> Look at our </h3>
                </div>

                <div style={{  display:'flex', height:'18rem', flexDirection: "row", gap:"40px", alignItems:'baseline',justifyContent:'space-evenly', position:'relative', top:'200px' }}>
                    <div class="card text-center" style={{ width: "18rem", height: "18rem", backgroundColor: 'transparent', border: '3px solid #111111',borderRadius:'5%' }}>
                        <img class="card-img-top" style={{ height: "11rem" }} src="https://canary.contestimg.wish.com/api/webimage/5b15352ca309e469b826391d-large.jpg?cache_buster=36f19fa8a1cf6d50c7186334519ccc60" />
                        <div class="card-body">
                            <h5 align='center' class="card-title">Adventures</h5>
                            <a href="/adventures" class="btn btn-primary">See adventures</a>
                        </div>
                    </div>

                    <div class="card text-center" style={{ width: "18rem", height: "18rem", backgroundColor: 'transparent', border: '3px solid #111111',borderRadius:'5%' }}>
                        <img class="card-img-top" style={{ height: "11rem" }} src="https://cdn-icons-png.flaticon.com/512/20/20176.png" />
                        <div class="card-body">
                            <h5 align='center' class="card-title">Cottages</h5>
                            <a href="/cottages"  class="btn btn-primary">See cottages</a>
                        </div>
                    </div>

                    <div class="card text-center" style={{ width: "18rem", height: "18rem", backgroundColor: 'transparent', border: '3px solid #111111', borderRadius:'5%' }}>
                        <img class="card-img-top" style={{ height: "11rem" }} src="https://d1bd5u3q1t3nu7.cloudfront.net/icons/50/cargo-ship-icon.png" />
                        <div class="card-body">
                            <h5 align='center' class="card-title">Ships</h5>
                            <a href="/ships" class="btn btn-primary">See ships</a>
                        </div>
                    </div>

                </div>



            </div>
        );
    }
}

export default HomePageCommponent