import React from 'react'
import  './Award.scss'
export default function Awards() {
    return (
        <div className="all" id="award">
            <div className="content">
            <div className="award">
                <h1>Awards</h1>
                <h2>Where I shine</h2>
                <p>The First place in Olympic English Competition of Bac Giang province in 2011-2012</p>
                <p>Bronze Medal in National Olympic English Competition in 2015-2016</p>
                <p>The Second place in English Competition for Provincial excellent student in 2018-2019 </p>
            </div>
            <div className="interests">
                <h1>Interests</h1>
                <h2>Out of Office</h2>
                <div className="col">
                <div className="col1">
                    <p>Coding</p>
                    <p>Playing/Watching football</p>
                    <p>Playing games</p>
                    <p>Music</p>
                </div>
                <div className="col2">
                <p>Reading</p>
                <p>Learning languages</p>
                <p>Algorithm</p>
                <p>Film</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
