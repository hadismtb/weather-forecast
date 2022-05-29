import React from 'react';

const Main = () => {
    return (
        <div>
            <header>
                <h1>forecast</h1>
                <div>
                    <span><i className="fas fa-map-marker-alt"></i></span>
                    <div>
                        <p>Current Location</p>
                        <p>Tehran, Iran</p>
                    </div>
                </div>
            </header>
            <div>
                <h2>The Only Weather Forecast You Need</h2>
                <div></div>
                <form>
                    <div>
                        <input type="text"/>
                        <button type="submit"><i className="fas fa-search"></i></button>
                        <span>
                            <i className="fas fa-location-arrow"></i>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Main;