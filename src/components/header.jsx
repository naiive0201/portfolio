import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.prevLocation = 0;
    this.state = {
      isHeaderHide: false,
      isDrawerHide: true,
    };

    this.handleHeaderScroll = this.handleHeaderScroll.bind(this);
    this.handleDrawerButton = this.handleDrawerButton.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleHeaderScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleHeaderScroll);
  }

  handleHeaderScroll(e) {
    var currentY = window.scrollY;
    this.prevLocation = this.prevLocation || 0;

    // hide or display with a scroll direction
    // console.log('current Location: ', currentY);
    // console.log('prevLocation Location: ', prevLocation);

    if (currentY > this.prevLocation && this.prevLocation > 0) {
      this.setState({
        isHeaderHide: true,
      });
    } else {
      this.setState({
        isHeaderHide: false,
      });
    }

    this.prevLocation = currentY;
  }

  handleDrawerButton() {
    this.setState({ isDrawerHide: !this.state.isDrawerHide });
  }

  render() {
    return (
      <>
        <header
          className={`transition-all transform ${
            this.state.isHeaderHide ? '-translate-y-full' : ''
          }  fixed top-0 left-0 flex flex-1 flex-row items-center justify-between w-full h-12 bg-dark `}
        >
          <div className="leftDrawer flex" onClick={this.handleDrawerButton}>
            <span className="material-icons-round text-white p-3">menu</span>
          </div>
          <div className="title flex">
            <h2 className="text-white p-3">Hyeonsoo&apos;s Daily Log</h2>
          </div>
          <div className="rightIcon flex">
            <span className="material-icons-round text-white p-3">search</span>
          </div>
        </header>
        <div
          className={`drawer fixed h-full w-full top-0 left-0 bg-white z-10 transform ${
            this.state.isDrawerHide ? '-translate-x-full' : ''
          } transition-all`}
        ></div>
      </>
    );
  }
}
