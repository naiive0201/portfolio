import React from 'react';

var prevLocation = 0;

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHeaderHide: false,
    };

    this.handleHeaderScroll = this.handleHeaderScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleHeaderScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleHeaderScroll);
  }

  handleHeaderScroll(e) {
    var currentY = window.scrollY;
    prevLocation = prevLocation || 0;

    // hide or display with a scroll direction
    // console.log('current Location: ', currentY);
    // console.log('prevLocation Location: ', prevLocation);

    if (currentY > prevLocation && prevLocation > 0) {
      this.setState({
        isHeaderHide: true,
      });
    } else {
      this.setState({
        isHeaderHide: false,
      });
    }

    prevLocation = currentY;
  }

  render() {
    return (
      <header
        className={`transition-all transform ${
          this.state.isHeaderHide ? '-translate-y-full' : ''
        }  fixed top-0 left-0 flex flex-1 flex-row items-center justify-between w-full h-12 bg-dark `}
      >
        <div className="leftDrawer p-3 flex">
          <span className="material-icons-round text-white">menu</span>
        </div>
        <div className="title p-3 flex">
          <h2 className="text-white">Hyeonsoo&apos;s Daily Log</h2>
        </div>
        <div className="rightIcon p-3 flex">
          <span className="material-icons-round text-white">search</span>
        </div>
      </header>
    );
  }
}
