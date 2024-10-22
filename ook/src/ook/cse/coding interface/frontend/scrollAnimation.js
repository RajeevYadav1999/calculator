import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollProgress: 0,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.clientHeight;
        const maxScroll = documentHeight - windowHeight;
        const scrollProgress = (scrollY / maxScroll) * 250;

        this.setState({ scrollProgress });
    };

    render() {
        const { scrollProgress } = this.state;
        const lineStyle = {
            height: `${scrollProgress}%`,
        };

        return (
            <>
                <div className="scroll-line" style={lineStyle}></div>
                <div className='scroll-line-dot'></div>
            </>
        );
    }
}

export default App;
